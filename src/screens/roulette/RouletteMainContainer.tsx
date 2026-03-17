import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './RouletteMainContainer.css';
import eGovLogo from '../../assets/eGovPHLogoB.png';
import eLGULogo from '../../assets/eLGULogo.png';

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

export default function RouletteMainContainer() {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rotRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const [items, setItems] = useState<RouletteItem[]>([
        { id: uid(), name: 'Umbrella', quantity: 1, color: PALETTE[0] },
        { id: uid(), name: 'Ballpen', quantity: 1, color: PALETTE[1] },
        { id: uid(), name: 'Notebook', quantity: 1, color: PALETTE[2] },
        { id: uid(), name: 'Pouch', quantity: 1, color: PALETTE[3] },
    ]);
    const [newName, setNewName] = useState('');
    const [newQty, setNewQty] = useState(1);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState('');
    const [editColor, setEditColor] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);

    // One segment per unique item — quantity is how many times it can still be won
    const segments = items;

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

                // Segment fill
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, r, start, end);
                ctx.closePath();
                ctx.fillStyle = item.color;
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.25)';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Label
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(start + arc / 2);
                ctx.textAlign = 'right';
                ctx.fillStyle = '#fff';
                const fontSize = Math.max(10, Math.min(14, (r * 0.55) / Math.max(segs.length * 0.4, 3)));
                ctx.font = `bold ${fontSize}px sans-serif`;
                ctx.shadowColor = 'rgba(0,0,0,0.6)';
                ctx.shadowBlur = 4;
                const maxChars = Math.floor((r - 30) / (fontSize * 0.6));
                const label = item.name.length > maxChars ? item.name.slice(0, maxChars - 1) + '…' : item.name;
                ctx.fillText(label, r - 12, fontSize * 0.35);
                ctx.restore();
            });

            // Outer ring
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, 2 * Math.PI);
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Center cap
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

    // Redraw whenever items change
    useEffect(() => {
        drawWheel(rotRef.current, segments);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    const spin = () => {
        if (spinning || segments.length < 2) return;
        setSpinning(true);
        setResult(null);

        const extra = Math.random() * 6 * Math.PI * 2 + 6 * Math.PI * 2; // 6–12 full rotations
        const duration = 4000 + Math.random() * 1500;
        const startRot = rotRef.current;
        const startTime = performance.now();

        // take a snapshot of segments at spin time
        const segs = segments.slice();

        const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

        const step = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            const currentRot = startRot + extra * easeOut(t);
            rotRef.current = currentRot;
            drawWheel(currentRot, segs);

            if (t < 1) {
                rafRef.current = requestAnimationFrame(step);
            } else {
                // Pointer is at the top (angle = 3π/2 in canvas coords)
                const arc = (2 * Math.PI) / segs.length;
                const norm = ((currentRot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
                const pointerInWheel = ((3 * Math.PI / 2 - norm) + 2 * Math.PI * 100) % (2 * Math.PI);
                const winIdx = Math.floor(pointerInWheel / arc) % segs.length;
                const winner = segs[winIdx];
                setResult(winner.name);
                // Decrement quantity of the winner; remove if it reaches 0
                setItems(prev =>
                    prev
                        .map(it => it.id === winner.id ? { ...it, quantity: it.quantity - 1 } : it)
                        .filter(it => it.quantity > 0)
                );
                setSpinning(false);
            }
        };

        rafRef.current = requestAnimationFrame(step);
    };

    const addItem = () => {
        const name = newName.trim();
        if (!name) return;
        const qty = Math.max(1, Math.min(20, newQty));
        const color = PALETTE[items.length % PALETTE.length];
        setItems(prev => [...prev, { id: uid(), name, quantity: qty, color }]);
        setNewName('');
        setNewQty(1);
        setShowAddModal(false);
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(it => it.id !== id));
    };

    const changeQty = (id: string, delta: number) => {
        setItems(prev =>
            prev.map(it =>
                it.id === id ? { ...it, quantity: Math.max(1, Math.min(20, it.quantity + delta)) } : it
            )
        );
    };

    const startEdit = (item: RouletteItem) => {
        setEditingId(item.id);
        setEditName(item.name);
        setEditColor(item.color);
    };

    const commitEdit = (id: string) => {
        const name = editName.trim();
        if (!name) return;
        setItems(prev =>
            prev.map(it => it.id === id ? { ...it, name, color: editColor } : it)
        );
        setEditingId(null);
    };

    const cancelEdit = () => setEditingId(null);

    return (
        <div className="roulette-page">
            {/* Back Button */}
            <button className="roulette-home-btn" onClick={() => navigate('/eGov-Game')}>← Back</button>

            {/* Logos */}
            <div className="roulette-logos">
                <div className="roulette-logo-box">
                    <img src={eGovLogo} alt="eGov Logo" className="roulette-logo-img" />
                </div>
                <div className="roulette-logo-box">
                    <img src={eLGULogo} alt="eLGU Logo" className="roulette-logo-img" />
                </div>
            </div>

            <h1 className="roulette-title">Spin the Wheel</h1>

            <div className="roulette-layout">
                {/* ---- Wheel ---- */}
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

                    {result && (
                        <div className="result-box">
                            <span className="result-label">Winner</span>
                            <span className="result-value">{result}</span>
                        </div>
                    )}
                </div>

                {/* ---- Controls ---- */}
                <div className="controls-section">
                    <div className="controls-header">
                        <h2 className="controls-title">Items ({segments.length} items)</h2>
                        <button className="open-add-btn" onClick={() => setShowAddModal(true)}>+ Add</button>
                    </div>

                    {/* List */}
                    <div className="items-list">
                        {items.length === 0 && (
                            <p className="empty-wheel-hint">No items yet — add some above!</p>
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
                </div>
            </div>

            {/* ---- Add Item Modal ---- */}
            {showAddModal && (
                <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
                    <div className="modal-box" onClick={e => e.stopPropagation()}>
                        <h3 className="modal-title">Add New Item</h3>
                        <div className="modal-body">
                            <label className="modal-label">Item name</label>
                            <input
                                type="text"
                                placeholder="e.g. Gift Card"
                                value={newName}
                                maxLength={40}
                                autoFocus
                                onChange={e => setNewName(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addItem()}
                                className="item-input"
                            />
                            <label className="modal-label">Quantity</label>
                            <input
                                type="number"
                                min={1}
                                max={20}
                                value={newQty}
                                onChange={e => setNewQty(Math.max(1, parseInt(e.target.value) || 1))}
                                className="qty-input modal-qty"
                            />
                        </div>
                        <div className="modal-footer">
                            <button className="modal-cancel-btn" onClick={() => setShowAddModal(false)}>Cancel</button>
                            <button className="modal-add-btn" onClick={addItem}>Add to Wheel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
