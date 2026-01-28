import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/button/button";
import "./eGovMaze.css";

type CellType = "wall" | "path" | "start" | "end";

interface Position {
  row: number;
  col: number;
}

const ROWS = 21; // odd to ensure maze walls/paths structure
const COLS = 31; // odd to ensure maze walls/paths structure

function createEmptyGrid(): CellType[][] {
  const grid: CellType[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: CellType[] = [];
    for (let c = 0; c < COLS; c++) {
      row.push("wall");
    }
    grid.push(row);
  }
  return grid;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Depth-first search maze generator (complex single level)
function generateMaze(): { grid: CellType[][]; start: Position; end: Position } {
  const grid = createEmptyGrid();

  const inBounds = (r: number, c: number) =>
    r > 0 && r < ROWS - 1 && c > 0 && c < COLS - 1;

  const carve = (r: number, c: number) => {
    grid[r][c] = "path";
    const directions: Position[] = shuffle([
      { row: -2, col: 0 },
      { row: 2, col: 0 },
      { row: 0, col: -2 },
      { row: 0, col: 2 },
    ]);

    for (const d of directions) {
      const nr = r + d.row;
      const nc = c + d.col;
      if (inBounds(nr, nc) && grid[nr][nc] === "wall") {
        grid[r + d.row / 2][c + d.col / 2] = "path";
        carve(nr, nc);
      }
    }
  };

  // start near top-left
  const start: Position = { row: 1, col: 1 };
  carve(start.row, start.col);

  // choose farthest path cell as end to keep level 1 but complex
  let end: Position = start;
  let maxDist = -1;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "path") {
        const dist = Math.abs(r - start.row) + Math.abs(c - start.col);
        if (dist > maxDist) {
          maxDist = dist;
          end = { row: r, col: c };
        }
      }
    }
  }

  grid[start.row][start.col] = "start";
  grid[end.row][end.col] = "end";

  return { grid, start, end };
}

type GameStatus = "playing" | "won" | "lost";

const EGovMaze: React.FC = () => {
  const navigate = useNavigate();
  const [{ grid, start, end }, setMaze] = useState(() => generateMaze());
  const [cellSize, setCellSize] = useState(18);
  const [zoom, setZoom] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [status, setStatus] = useState<GameStatus>("playing");
  const [hasStarted, setHasStarted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const lastCellRef = useRef<{ r: number; c: number } | null>(null);

  const effectiveCellSize = cellSize * zoom;

  useEffect(() => {
    const updateCellSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCellSize(14);
      } else if (width < 768) {
        setCellSize(16);
      } else if (width < 1024) {
        setCellSize(20);
      } else {
        setCellSize(22);
      }
    };

    updateCellSize();
    window.addEventListener("resize", updateCellSize);
    return () => window.removeEventListener("resize", updateCellSize);
  }, []);

  useEffect(() => {
    // resize canvas when size/zoom changes
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = COLS * effectiveCellSize;
      canvas.height = ROWS * effectiveCellSize;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    lastPointRef.current = null;
  }, [cellSize, zoom, grid]);

  const handleBack = () => {
    navigate("/eGov-Game/main-page");
  };

  const handleRestart = () => {
    const newMaze = generateMaze();
    setMaze(newMaze);
    setIsDrawing(false);
    setStatus("playing");
    setHasStarted(false);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    lastPointRef.current = null;
    lastCellRef.current = null;
  };

  const beginDrawFrom = (r: number, c: number, x: number, y: number) => {
    if (status !== "playing") return;

    // First time must start on START cell.
    if (!hasStarted) {
      if (r !== start.row || c !== start.col) return;
      setHasStarted(true);

      // Fresh run: clear the previous line.
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    } else {
      // Resume run: only allow resuming near last point (prevents "teleporting" the pencil)
      const lastPoint = lastPointRef.current;
      if (!lastPoint) return;
      const dx = x - lastPoint.x;
      const dy = y - lastPoint.y;
      const dist = Math.hypot(dx, dy);
      if (dist > effectiveCellSize * 0.85) return;
    }

    lastPointRef.current = { x, y };
    lastCellRef.current = { r, c };

    setIsDrawing(true);
  };

  const extendPathTo = (r: number, c: number, x: number, y: number) => {
    if (!isDrawing || status !== "playing") return;

    const type = grid[r][c];
    const canvas = canvasRef.current;

    // avoid redundant work if still in same cell
    const lastCell = lastCellRef.current;
    if (lastCell && lastCell.r === r && lastCell.c === c) {
      return;
    }
    lastCellRef.current = { r, c };

    const lastPoint = lastPointRef.current;

    if (canvas && lastPoint) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.strokeStyle = "#22c55e";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        lastPointRef.current = { x, y };
      }
    } else if (canvas && !lastPoint) {
      lastPointRef.current = { x, y };
    }

    if (type === "wall") {
      setIsDrawing(false);
      setStatus("lost");
      return;
    }

    if (r === end.row && c === end.col) {
      setIsDrawing(false);
      setStatus("won");
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    // Keep lastPointRef/lastCellRef so user can resume drawing from last placement.
  };

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (status !== "playing") return;
    e.preventDefault();

    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const c = Math.floor(x / effectiveCellSize);
    const r = Math.floor(y / effectiveCellSize);

    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;

    // capture pointer so we keep receiving move events while dragging
    try {
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore (some browsers can throw)
    }

    beginDrawFrom(r, c, x, y);
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!isDrawing || status !== "playing") return;
    e.preventDefault();

    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const c = Math.floor(x / effectiveCellSize);
    const r = Math.floor(y / effectiveCellSize);

    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;

    extendPathTo(r, c, x, y);
  };

  const handlePointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    stopDrawing();
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const renderedGrid = useMemo(
    () =>
      grid.map((row, r) => (
        <div className="maze-row" key={r}>
          {row.map((cell, c) => {
            let className = "maze-cell";
            if (cell === "wall") className += " maze-cell-wall";
            if (cell === "path") className += " maze-cell-path";
            if (cell === "start") className += " maze-cell-start";
            if (cell === "end") className += " maze-cell-end";
            return (
              <div
                key={c}
                className={className}
                style={{ width: effectiveCellSize, height: effectiveCellSize }}
              />
            );
          })}
        </div>
      )),
    [grid, cellSize]
  );

  return (
    <div className="maze-page">
      <div className="maze-header">
        <h1 className="maze-title">Game 5: eGov Maze</h1>
        <p className="maze-subtitle">
          Level 1: Hold and draw a path from START to END without touching the walls. Works with mouse or touch.
        </p>
      </div>

      <div className="maze-controls">
        <Button text="Back to Game Select" onClick={handleBack} />
        <Button text="New Random Maze" onClick={handleRestart} />
        <div className="maze-zoom-controls">
          <button
            type="button"
            className="maze-zoom-btn"
            onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)))}
          >
            −
          </button>
          <span className="maze-zoom-label">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            className="maze-zoom-btn"
            onClick={() => setZoom((z) => Math.min(2, +(z + 0.25).toFixed(2)))}
          >
            +
          </button>
        </div>
      </div>

      <div className="maze-viewport">
        <div
          className="maze-container"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            width: COLS * effectiveCellSize,
            height: ROWS * effectiveCellSize,
          }}
        >
          {renderedGrid}
          <canvas ref={canvasRef} className="maze-canvas" />
        </div>
      </div>

      {status === "won" && (
        <div className="maze-overlay">
          <div className="maze-overlay-card">
            <h2>Congratulations!</h2>
            <p>You conquered the eGov Maze Level 1.</p>
            <div className="maze-overlay-actions">
              <Button text="Play Again (New Maze)" onClick={handleRestart} />
              <Button text="Back to Game Select" onClick={handleBack} />
            </div>
          </div>
        </div>
      )}

      {status === "lost" && (
        <div className="maze-overlay">
          <div className="maze-overlay-card">
            <h2>Game Over</h2>
            <p>You hit a wall while drawing the path.</p>
            <div className="maze-overlay-actions">
              <Button text="Try Again (New Maze)" onClick={handleRestart} />
              <Button text="Back to Game Select" onClick={handleBack} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EGovMaze;

