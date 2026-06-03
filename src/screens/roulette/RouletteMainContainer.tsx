import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './RouletteMainContainer.css';
import eGovLogo from '../../assets/eGovPHLogoB.png';
import eLGULogo from '../../assets/eLGULogo.png';

const LS_KEY = 'egov-roulette-items';

interface RouletteItem {
    id: string;
    name: string;
    quantity: number;
    color: string;
}

const PALETTE = [
    '#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6',
    '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#06b6d4',
    '#a3e635', '#fb923c', '#a78bfa', '#34d399', '#60a5fa',
];

function uid() {
    return Math.random().toString(36).slice(2, 9);
}

const DEFAULT_ITEMS: RouletteItem[] = [
    { id: uid(), name: 'Umbrella', quantity: 1, color: PALETTE[0] },
    { id: uid(), name: 'Ballpen', quantity: 1, color: PALETTE[1] },
    { id: uid(), name: 'Notebook', quantity: 1, color: PALETTE[2] },
    { id: uid(), name: 'Pouch', quantity: 1, color: PALETTE[3] },
];

function loadItems(): RouletteItem[] {
    try {
        const saved = localStorage.getItem(LS_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
    } catch { /* ignore */ }
    return DEFAULT_ITEMS;
}

/**
 * Spreads item slots evenly across the wheel using Bresenham-style placement.
 * High-frequency items are placed first at evenly-spaced target positions;
 * remaining items fill the nearest open gap. Result: no two adjacent slots
 * are the same item (when counts allow), regardless of how many there are.
 */
function buildEvenSegments(items: RouletteItem[]): RouletteItem[] {
    const total = items.reduce((s, it) => s + it.quantity, 0);
    if (total === 0) return [];

    const result: (RouletteItem | null)[] = new Array(total).fill(null);

    // Place most-frequent items first so they claim evenly-spaced slots first
    const sorted = [...items].sort((a, b) => b.quantity - a.quantity);

    for (const item of sorted) {
        const step = total / item.quantity;
        for (let k = 0; k < item.quantity; k++) {
            // Ideal position for the k-th slot of this item
            let targetIdx = Math.round(k * step + step * 0.5) % total;
            // Walk forward until we find a free slot
            for (let offset = 0; offset < total; offset++) {
                const idx = (targetIdx + offset) % total;
                if (result[idx] === null) {
                    result[idx] = item;
                    break;
                }
            }
        }
    }

    return result.filter(Boolean) as RouletteItem[];
}

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function fireConfetti() {
    const colors = ['#0040e7', '#ffcc00', '#ef4444', '#22c55e', '#f97316', '#8b5cf6'];
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 }, colors });
    setTimeout(() => confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 }, colors }), 200);
    setTimeout(() => confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 }, colors }), 400);
}

export default function RouletteMainContainer() {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rotRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const [items, setItems] = useState<RouletteItem[]>(loadItems);
    // segments is independent state: management ops rebuild it; randomize shuffles it;
    // a spin removes exactly one slot without touching the rest of the order.
    const [segments, setSegments] = useState<RouletteItem[]>(() => buildEvenSegments(loadItems()));

    const [newName, setNewName] = useState('');
    const [newQty, setNewQty] = useState(1);
    const [spinning, setSpinning] = useState(false);
    const [winner, setWinner] = useState<RouletteItem | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState('');
    const [editColor, setEditColor] = useState('');
    const [showManageModal, setShowManageModal] = useState(false);

    const totalSegments = segments.length;

    // Persist items (source of truth for management panel) to localStorage
    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(items));
    }, [items]);

    const drawWheel = useCallback(
        (rot: number, segs: RouletteItem[]) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const W = canvas.width;
            const H = canvas.height;
            const cx = W / 2;
            const cy = H / 2;
            const r = Math.min(cx, cy) - 8;

            ctx.clearRect(0, 0, W, H);

            if (segs.length === 0) {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, 2 * Math.PI);
                ctx.fillStyle = '#e8edff';
                ctx.fill();
                ctx.fillStyle = '#0040e7';
                ctx.font = 'bold 14px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Add items to start', cx, cy + 5);
                return;
            }

            const arc = (2 * Math.PI) / segs.length;

            segs.forEach((item, i) => {
                const start = rot + i * arc;
                const end = start + arc;

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, r, start, end);
                ctx.closePath();
                ctx.fillStyle = item.color;
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.3)';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                if (arc > 0.08) {
                    ctx.save();
                    ctx.translate(cx, cy);
                    ctx.rotate(start + arc / 2);
                    ctx.textAlign = 'right';
                    ctx.fillStyle = '#fff';
                    const fontSize = Math.max(8, Math.min(14, (r * 0.55) / Math.max(segs.length * 0.4, 3)));
                    ctx.font = `bold ${fontSize}px sans-serif`;
                    ctx.shadowColor = 'rgba(0,0,0,0.6)';
                    ctx.shadowBlur = 4;
                    const maxChars = Math.floor((r - 30) / (fontSize * 0.6));
                    const label = item.name.length > maxChars ? item.name.slice(0, maxChars - 1) + '…' : item.name;
                    ctx.fillText(label, r - 12, fontSize * 0.35);
                    ctx.restore();
                }
            });

            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 3;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(cx, cy, 18, 0, 2 * Math.PI);
            ctx.fillStyle = '#0040e7';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
        },
        []
    );

    // Redraw whenever the segment arrangement changes
    useEffect(() => {
        drawWheel(rotRef.current, segments);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [segments]);

    const spin = () => {
        if (spinning || segments.length < 2) return;
        setSpinning(true);
        setWinner(null);

        const extra = Math.random() * 6 * Math.PI * 2 + 6 * Math.PI * 2;
        const duration = 4000 + Math.random() * 1500;
        const startRot = rotRef.current;
        const startTime = performance.now();
        const segs = segments.slice(); // snapshot current layout

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

        const step = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const currentRot = startRot + extra * easeOut(t);
            rotRef.current = currentRot;
            drawWheel(currentRot, segs);

            if (t < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                const arc = (2 * Math.PI) / segs.length;
                const norm = ((currentRot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
                const pointerInWheel = ((3 * Math.PI / 2 - norm) + 2 * Math.PI * 100) % (2 * Math.PI);
                const winIdx = Math.floor(pointerInWheel / arc) % segs.length;
                const winItem = segs[winIdx];

                setWinner(winItem);
                fireConfetti();

                // Remove exactly one slot of the winner from the current arrangement,
                // preserving the rest of the order (including any randomization).
                setSegments(prev => {
                    const idx = prev.findIndex(s => s.id === winItem.id);
                    if (idx === -1) return prev;
                    return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
                });

                // Sync item quantity (and remove if exhausted)
                setItems(prev =>
                    prev
                        .map(it => it.id === winItem.id ? { ...it, quantity: it.quantity - 1 } : it)
                        .filter(it => it.quantity > 0)
                );

                setSpinning(false);
            }
        };

        rafRef.current = requestAnimationFrame(step);
    };

    // Shuffle individual slots — not item groups
    const randomize = () => {
        setSegments(prev => shuffle(prev));
    };

    // --- Management helpers (each one rebuilds segments with even distribution) ---

    const addItem = () => {
        const name = newName.trim();
        if (!name) return;
        const qty = Math.max(1, Math.min(100, newQty));
        const color = PALETTE[items.length % PALETTE.length];
        const newItem: RouletteItem = { id: uid(), name, quantity: qty, color };
        const newItems = [...items, newItem];
        setItems(newItems);
        setSegments(buildEvenSegments(newItems));
        setNewName('');
        setNewQty(1);
    };

    const removeItem = (id: string) => {
        const newItems = items.filter(it => it.id !== id);
        setItems(newItems);
        setSegments(buildEvenSegments(newItems));
    };

    const changeQty = (id: string, delta: number) => {
        const newItems = items.map(it =>
            it.id === id ? { ...it, quantity: Math.max(1, Math.min(100, it.quantity + delta)) } : it
        );
        setItems(newItems);
        setSegments(buildEvenSegments(newItems));
    };

    const startEdit = (item: RouletteItem) => {
        setEditingId(item.id);
        setEditName(item.name);
        setEditColor(item.color);
    };

    const commitEdit = (id: string) => {
        const name = editName.trim();
        if (!name) return;
        // Update items list
        setItems(prev => prev.map(it => it.id === id ? { ...it, name, color: editColor } : it));
        // Update the name/color of existing slots in-place (preserve arrangement)
        setSegments(prev => prev.map(seg => seg.id === id ? { ...seg, name, color: editColor } : seg));
        setEditingId(null);
    };

    const cancelEdit = () => setEditingId(null);

    return (
        <div className="roulette-page">
            <button className="roulette-home-btn" onClick={() => navigate('/eGov-Game')}>← Back</button>

            <div className="roulette-logos">
                <div className="roulette-logo-box">
                    <img src={eGovLogo} alt="eGov Logo" className="roulette-logo-img" />
                </div>
                <div className="roulette-logo-box">
                    <img src={eLGULogo} alt="eLGU Logo" className="roulette-logo-img" />
                </div>
            </div>

            <h1 className="roulette-title">Spin the Wheel</h1>

            <div className="wheel-section">
                <div className="wheel-wrapper">
                    <div className="wheel-pointer">▼</div>
                    <canvas ref={canvasRef} width={420} height={420} className="wheel-canvas" />
                </div>

                <button
                    className="spin-button"
                    onClick={spin}
                    disabled={spinning || segments.length < 2}
                >
                    {spinning ? 'Spinning…' : 'SPIN!'}
                </button>

                <div className="wheel-action-row">
                    <button
                        className="action-btn action-btn--randomize"
                        onClick={randomize}
                        disabled={spinning || segments.length < 2}
                        title="Shuffle individual slots evenly around the wheel"
                    >
                        🔀 Randomize
                    </button>
                    <button
                        className="action-btn action-btn--manage"
                        onClick={() => setShowManageModal(true)}
                        disabled={spinning}
                        title="Add or manage wheel items"
                    >
                        📋 Manage Items
                        {totalSegments > 0 && (
                            <span className="action-btn-badge">{totalSegments}</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Manage Items Modal */}
            {showManageModal && (
                <div className="modal-backdrop" onClick={() => { setShowManageModal(false); setEditingId(null); }}>
                    <div className="manage-modal-box" onClick={e => e.stopPropagation()}>
                        <div className="manage-modal-header">
                            <div>
                                <h3 className="modal-title">Manage Items</h3>
                                <p className="manage-modal-subtitle">
                                    {items.length} type{items.length !== 1 ? 's' : ''} · {totalSegments} slot{totalSegments !== 1 ? 's' : ''} on the wheel
                                </p>
                            </div>
                            <button className="manage-modal-close-btn" onClick={() => { setShowManageModal(false); setEditingId(null); }}>✕</button>
                        </div>

                        {/* Inline Add Form */}
                        <div className="inline-add-form">
                            <input
                                type="text"
                                placeholder="Item name (e.g. Notebook)"
                                value={newName}
                                maxLength={40}
                                onChange={e => setNewName(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addItem()}
                                className="item-input inline-add-name"
                            />
                            <div className="inline-add-qty-row">
                                <label className="modal-label">Qty</label>
                                <input
                                    type="number"
                                    min={1}
                                    max={100}
                                    value={newQty}
                                    onChange={e => setNewQty(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                                    className="qty-input inline-add-qty"
                                />
                                <button
                                    className="modal-add-btn inline-add-submit"
                                    onClick={addItem}
                                    disabled={!newName.trim()}
                                >
                                    + Add
                                </button>
                            </div>
                        </div>

                        {/* Items List */}
                        <div className="items-list manage-items-list">
                            {items.length === 0 && (
                                <p className="empty-wheel-hint">No items yet — add one above!</p>
                            )}
                            {items.map(item => (
                                <div key={item.id} className={`item-row${editingId === item.id ? ' item-row--editing' : ''}`}>
                                    {editingId === item.id ? (
                                        <div className="item-edit-row">
                                            <input
                                                type="color"
                                                value={editColor}
                                                onChange={e => setEditColor(e.target.value)}
                                                className="item-color-picker"
                                                title="Pick color"
                                            />
                                            <input
                                                type="text"
                                                value={editName}
                                                maxLength={40}
                                                autoFocus
                                                onChange={e => setEditName(e.target.value)}
                                                onKeyDown={e => {
                                                    if (e.key === 'Enter') commitEdit(item.id);
                                                    if (e.key === 'Escape') cancelEdit();
                                                }}
                                                className="item-edit-input"
                                            />
                                            <button className="edit-save-btn" onClick={() => commitEdit(item.id)} title="Save">✓</button>
                                            <button className="edit-cancel-btn" onClick={cancelEdit} title="Cancel">✕</button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="item-row-top">
                                                <div className="item-color-dot" style={{ background: item.color }} />
                                                <span className="item-name" title={item.name}>{item.name}</span>
                                            </div>
                                            <div className="item-row-bottom">
                                                <div className="item-qty-controls">
                                                    <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                                                    <span className="item-qty">{item.quantity}×</span>
                                                    <button className="qty-btn" onClick={() => changeQty(item.id, +1)}>+</button>
                                                </div>
                                                <div className="item-row-actions">
                                                    <button className="edit-btn" onClick={() => startEdit(item)} title="Edit">✎</button>
                                                    <button className="remove-btn" onClick={() => removeItem(item.id)} title="Remove">✕</button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="manage-modal-footer">
                            <button className="modal-cancel-btn" onClick={() => { setShowManageModal(false); setEditingId(null); }}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Winner Result Dialog */}
            {winner && (
                <div className="modal-backdrop" onClick={() => setWinner(null)}>
                    <div className="result-dialog" onClick={e => e.stopPropagation()}>
                        <div className="result-dialog-icon" style={{ background: winner.color }}>
                            🎉
                        </div>
                        <p className="result-dialog-label">Winner!</p>
                        <p className="result-dialog-name" style={{ color: winner.color }}>{winner.name}</p>
                        <button className="result-dialog-close" onClick={() => setWinner(null)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
