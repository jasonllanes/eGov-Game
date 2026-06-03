import { useState, useRef, useCallback, useEffect, DragEvent } from 'react';
import './CollageMaker.css';

// ─── Types ────────────────────────────────────────────────────────────────────
interface CollageImage {
    id: string;
    url: string;
    el: HTMLImageElement;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const PRESET_COLORS = [
    '#ffffff', '#000000', '#1a1a1a', '#f5f5f0',
    '#1e293b', '#fef3c7', '#fce7f3', '#dcfce7',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function uid() {
    return Math.random().toString(36).slice(2, 10);
}

function autoCols(n: number): number {
    if (n <= 1) return 1;
    if (n <= 4) return 2;
    if (n <= 9) return 3;
    if (n <= 16) return 4;
    return 5;
}

// Landscape auto-cols: target ~16:9 aspect ratio (more cols than rows)
function autoColsLandscape(n: number): number {
    if (n <= 1) return 1;
    return Math.max(2, Math.ceil(Math.sqrt(n * 16 / 9)));
}

interface Cell { x: number; y: number; w: number; h: number }

// Square-cell grid: cell height === cell width, canvas height auto-computed
function computeSquareCells(
    count: number, cols: number,
    W: number, gap: number,
): { cells: Cell[]; totalH: number } {
    if (!count) return { cells: [], totalH: 0 };
    const cellSize = (W - gap * (cols + 1)) / cols;
    const rows = Math.ceil(count / cols);
    const cells: Cell[] = [];
    for (let i = 0; i < count; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        cells.push({
            x: gap + col * (cellSize + gap),
            y: gap + row * (cellSize + gap),
            w: cellSize,
            h: cellSize,
        });
    }
    const totalH = gap + rows * (cellSize + gap);
    return { cells, totalH };
}

function roundedRectPath(
    ctx: CanvasRenderingContext2D,
    x: number, y: number, w: number, h: number, r: number,
) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// Contain-fit: whole photo visible, no cropping; bg color fills leftover space
function drawContained(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    dx: number, dy: number, dw: number, dh: number,
    radius: number,
) {
    ctx.save();
    roundedRectPath(ctx, dx, dy, dw, dh, radius);
    ctx.clip();

    const ia = img.naturalWidth / img.naturalHeight;
    const da = dw / dh;
    let renderW: number, renderH: number;
    if (ia > da) {
        // wider than cell → fit by width, letterbox top/bottom
        renderW = dw;
        renderH = dw / ia;
    } else {
        // taller than cell → fit by height, letterbox left/right
        renderH = dh;
        renderW = dh * ia;
    }
    const offsetX = dx + (dw - renderW) / 2;
    const offsetY = dy + (dh - renderH) / 2;
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();
}

function renderToCanvas(
    canvas: HTMLCanvasElement,
    images: CollageImage[],
    colsConfig: number,
    W: number,
    gap: number,
    bgColor: string,
    borderRadius: number,
    orientation: 'portrait' | 'landscape' = 'portrait',
) {
    if (!images.length) {
        canvas.width = Math.max(1, W);
        canvas.height = Math.max(1, W);
        const ctx = canvas.getContext('2d');
        if (ctx) { ctx.fillStyle = bgColor; ctx.fillRect(0, 0, W, W); }
        return;
    }

    const cols = colsConfig > 0
        ? Math.min(colsConfig, images.length)
        : (orientation === 'landscape' ? autoColsLandscape(images.length) : autoCols(images.length));
    const { cells, totalH } = computeSquareCells(images.length, cols, W, gap);

    canvas.width = Math.max(1, W);
    canvas.height = Math.max(1, totalH);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, W, totalH);

    cells.forEach((cell, i) => {
        if (images[i]) {
            drawContained(ctx, images[i].el, cell.x, cell.y, cell.w, cell.h, borderRadius);
        }
    });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CollageMaker() {
    const [images, setImages] = useState<CollageImage[]>([]);
    const [draggingOver, setDraggingOver] = useState(false);
    const [colsConfig, setColsConfig] = useState(0);           // 0 = auto
    const [gap, setGap] = useState(8);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [borderRadius, setBorderRadius] = useState(0);
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
    const [dragVisIdx, setDragVisIdx] = useState<number | null>(null);

    const dragSrcIdxRef = useRef<number | null>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // ── Preview rendering ──────────────────────────────────────────────────────
    const renderPreview = useCallback(() => {
        const canvas = previewCanvasRef.current;
        const wrapper = wrapperRef.current;
        if (!canvas || !wrapper) return;

        const W = wrapper.clientWidth;
        // Scale gap & radius proportionally (base reference: 1200px wide)
        const scale = W / 1200;
        renderToCanvas(canvas, images, colsConfig, W, gap * scale, bgColor, borderRadius * scale, orientation);
    }, [images, colsConfig, gap, bgColor, borderRadius, orientation]);

    useEffect(() => {
        const id = requestAnimationFrame(renderPreview);
        return () => cancelAnimationFrame(id);
    }, [renderPreview]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const ro = new ResizeObserver(() => requestAnimationFrame(renderPreview));
        ro.observe(wrapper);
        return () => ro.disconnect();
    }, [renderPreview]);

    // ── Image loading ──────────────────────────────────────────────────────────
    const loadFiles = useCallback((files: File[]) => {
        const imgFiles = files.filter(f => f.type.startsWith('image/'));
        if (!imgFiles.length) return;

        Promise.all(
            imgFiles.map(f => new Promise<CollageImage>(resolve => {
                const url = URL.createObjectURL(f);
                const el = new Image();
                el.onload = () => resolve({ id: uid(), url, el });
                el.onerror = () => resolve({ id: uid(), url, el });
                el.src = url;
            }))
        ).then(imgs => setImages(prev => [...prev, ...imgs]));
    }, []);

    // ── Drag/drop zone ─────────────────────────────────────────────────────────
    const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDraggingOver(false);
        loadFiles(Array.from(e.dataTransfer.files));
    }, [loadFiles]);

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setDraggingOver(true); };
    const handleDragLeave = () => setDraggingOver(false);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) loadFiles(Array.from(e.target.files));
        e.target.value = '';
    };

    // ── Remove image ──────────────────────────────────────────────────────────
    const removeImage = (id: string) => {
        setImages(prev => {
            const found = prev.find(i => i.id === id);
            if (found) URL.revokeObjectURL(found.url);
            return prev.filter(i => i.id !== id);
        });
    };

    // ── Thumbnail reorder (drag) ───────────────────────────────────────────────
    const onThumbDragStart = (_e: DragEvent<HTMLDivElement>, idx: number) => {
        dragSrcIdxRef.current = idx;
        setDragVisIdx(idx);
    };

    const onThumbDragOver = (e: DragEvent<HTMLDivElement>, idx: number) => {
        e.preventDefault();
        const src = dragSrcIdxRef.current;
        if (src === null || src === idx) return;
        setImages(prev => {
            const arr = [...prev];
            const [item] = arr.splice(src, 1);
            arr.splice(idx, 0, item);
            return arr;
        });
        dragSrcIdxRef.current = idx;
        setDragVisIdx(idx);
    };

    const onThumbDragEnd = () => {
        dragSrcIdxRef.current = null;
        setDragVisIdx(null);
    };

    // ── Download (2× resolution) ───────────────────────────────────────────────
    const downloadCollage = () => {
        if (!images.length) return;
        const W = 2400;
        const scale = W / 1200;
        const offscreen = document.createElement('canvas');
        renderToCanvas(offscreen, images, colsConfig, W, gap * scale, bgColor, borderRadius * scale, orientation);
        const a = document.createElement('a');
        a.download = `collage-${Date.now()}.png`;
        a.href = offscreen.toDataURL('image/png');
        a.click();
    };

    const clearAll = () => {
        images.forEach(i => URL.revokeObjectURL(i.url));
        setImages([]);
    };

    // ─────────────────────────────────────────────────────────────────────────
    return (
        <div className="cm-root">

            {/* ── Header ── */}
            <header className="cm-header">
                <button className="cm-back-btn" onClick={() => window.history.back()}>← Back</button>
                <h1 className="cm-title">Collage Maker</h1>
                <div className="cm-header-actions">
                    {images.length > 0 && (
                        <>
                            <span className="cm-photo-count">{images.length} photo{images.length !== 1 ? 's' : ''}</span>
                            <button className="cm-btn cm-btn--ghost" onClick={clearAll}>Clear All</button>
                            <button className="cm-btn cm-btn--primary" onClick={downloadCollage}>↓ Download PNG</button>
                        </>
                    )}
                </div>
            </header>

            <div className="cm-body">

                {/* ── Sidebar ── */}
                <aside className="cm-sidebar">

                    <div className="cm-section">
                        <span className="cm-label">Orientation</span>
                        <div className="cm-pill-row">
                            <button
                                className={`cm-pill${orientation === 'portrait' ? ' active' : ''}`}
                                onClick={() => setOrientation('portrait')}
                            >↕ Portrait</button>
                            <button
                                className={`cm-pill${orientation === 'landscape' ? ' active' : ''}`}
                                onClick={() => setOrientation('landscape')}
                            >↔ Landscape</button>
                        </div>
                    </div>

                    <div className="cm-section">
                        <span className="cm-label">Columns</span>
                        <div className="cm-pill-row">
                            {[0, 1, 2, 3, 4, 5].map(c => (
                                <button
                                    key={c}
                                    className={`cm-pill${colsConfig === c ? ' active' : ''}`}
                                    onClick={() => setColsConfig(c)}
                                >
                                    {c === 0 ? 'Auto' : c}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="cm-section">
                        <span className="cm-label">Gap — {gap}px</span>
                        <input
                            type="range" min={0} max={40} value={gap}
                            onChange={e => setGap(Number(e.target.value))}
                            className="cm-slider"
                        />
                    </div>

                    <div className="cm-section">
                        <span className="cm-label">Corner Radius — {borderRadius}px</span>
                        <input
                            type="range" min={0} max={120} value={borderRadius}
                            onChange={e => setBorderRadius(Number(e.target.value))}
                            className="cm-slider"
                        />
                    </div>

                    <div className="cm-section">
                        <span className="cm-label">Background Color</span>
                        <div className="cm-color-row">
                            {PRESET_COLORS.map(c => (
                                <button
                                    key={c}
                                    className={`cm-swatch${bgColor === c ? ' active' : ''}`}
                                    style={{
                                        background: c,
                                        border: c === '#ffffff' ? '1px solid #444' : undefined,
                                    }}
                                    onClick={() => setBgColor(c)}
                                    title={c}
                                />
                            ))}
                            <input
                                type="color"
                                value={bgColor}
                                onChange={e => setBgColor(e.target.value)}
                                className="cm-color-input"
                                title="Custom color"
                            />
                        </div>
                    </div>

                    <button
                        className="cm-btn cm-btn--add"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        + Add Photos
                    </button>

                </aside>

                {/* ── Main ── */}
                <main className="cm-main">

                    {/* Canvas / drop zone */}
                    <div
                        ref={wrapperRef}
                        className={[
                            'cm-canvas-wrapper',
                            draggingOver ? 'dragover' : '',
                            images.length === 0 ? 'cm-canvas-wrapper--empty' : '',
                        ].join(' ')}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onClick={() => images.length === 0 && fileInputRef.current?.click()}
                    >
                        {/* Always keep canvas in DOM so the ref is always set */}
                        <canvas
                            ref={previewCanvasRef}
                            className="cm-canvas"
                            style={{ display: images.length === 0 ? 'none' : 'block' }}
                        />

                        {images.length === 0 && (
                            <div className="cm-empty">
                                <div className="cm-empty-icon">🖼️</div>
                                <p className="cm-empty-title">Drop your photos here</p>
                                <p className="cm-empty-sub">PNG · JPG · WEBP · GIF — drag in as many as you like</p>
                                <button
                                    className="cm-btn cm-btn--primary cm-empty-cta"
                                    onClick={e => { e.stopPropagation(); fileInputRef.current?.click(); }}
                                >
                                    Browse Files
                                </button>
                            </div>
                        )}

                        {draggingOver && images.length > 0 && (
                            <div className="cm-dragover-overlay">Drop to add more photos</div>
                        )}
                    </div>

                    {/* Thumbnail strip */}
                    {images.length > 0 && (
                        <div className="cm-thumb-strip">
                            {images.map((img, idx) => (
                                <div
                                    key={img.id}
                                    className={`cm-thumb${dragVisIdx === idx ? ' dragging' : ''}`}
                                    draggable
                                    onDragStart={e => onThumbDragStart(e, idx)}
                                    onDragOver={e => onThumbDragOver(e, idx)}
                                    onDragEnd={onThumbDragEnd}
                                >
                                    <img src={img.url} alt="" className="cm-thumb-img" draggable={false} />
                                    <button
                                        className="cm-thumb-del"
                                        onClick={() => removeImage(img.id)}
                                        aria-label="Remove photo"
                                    >✕</button>
                                    <span className="cm-thumb-num">{idx + 1}</span>
                                </div>
                            ))}
                            <button
                                className="cm-thumb-add-btn"
                                onClick={() => fileInputRef.current?.click()}
                                title="Add more photos"
                            >+</button>
                        </div>
                    )}

                </main>
            </div>

            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileInput}
            />
        </div>
    );
}
