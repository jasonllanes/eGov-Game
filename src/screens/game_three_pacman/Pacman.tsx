import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pacman.css';
import eGovLogo from '../../assets/eGovLogo.png';
import eLGULogo from '../../assets/eLGULogo.png';

// Game constants - ADJUSTED SPEEDS
const CELL_SIZE = 30;
const PACMAN_SIZE = 22;
const GHOST_SIZE = 22;
const DOT_SIZE = 8;
const POWER_DOT_SIZE = 15;
const PACMAN_SPEED = 2.0; // Slightly reduced for better stability
const GHOST_SPEED = 1.5; // Slightly reduced for better stability
const GHOST_SLOWDOWN_FACTOR = 0.7; // Added for ghost turn delay
const DIRECTIONS = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
    NONE: { x: 0, y: 0 },
};

// Add this constant at the top with other constants
const FRAME_RATE = 60; // Target 60 FPS
const TIME_PER_FRAME = 1000 / FRAME_RATE; // Time in ms per frame
const MOVEMENT_SMOOTHING = 0.8; // Value between 0 and 1, higher = smoother

// Game map: 0 = empty, 1 = wall, 2 = dot, 3 = power dot, 4 = ghost spawn
const INITIAL_MAP = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 3, 1, 0, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 0, 1, 3, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 3, 2, 2, 1, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 2, 2, 3, 1],
    [1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1],
    [1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function Pacman() {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [gameMap, setGameMap] = useState<number[][]>([...INITIAL_MAP]);
    const lastTimeRef = useRef<number>(0);

    // Game objects
    const [pacman, setPacman] = useState({
        x: 10 * CELL_SIZE,
        y: 20 * CELL_SIZE,
        direction: DIRECTIONS.NONE, // Start with no movement
        nextDirection: DIRECTIONS.NONE, // Start with no movement
        mouthAngle: 0.5, // Default mouth angle
        mouthOpen: true,
        powerMode: false,
        powerModeTimer: 0
    });

    const [ghosts, setGhosts] = useState([
        { x: 9 * CELL_SIZE, y: 9 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#FF0000', mode: 'scatter' },
        { x: 10 * CELL_SIZE, y: 9 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#00FFFF', mode: 'scatter' },
        { x: 9 * CELL_SIZE, y: 10 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#FFB8FF', mode: 'scatter' },
        { x: 10 * CELL_SIZE, y: 10 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#FFB852', mode: 'scatter' }
    ]);

    // Game animation frame reference
    const animationFrameRef = useRef<number | null>(null);

    // Movement controls
    const handleDirectionChange = (direction: { x: number, y: number }) => {
        if (!isStarted && direction !== DIRECTIONS.NONE) {
            setIsStarted(true);
        }
        setPacman(prev => ({ ...prev, nextDirection: direction }));
    };

    const goToHome = () => {
        navigate('/main-page');
    };

    const startGame = () => {
        setIsStarted(true);
        setIsPaused(false);
        // Set initial directions to NONE to prevent automatic movement
        setGhosts(ghosts.map(ghost => ({ ...ghost, direction: DIRECTIONS.NONE })));
        setPacman(prev => ({ ...prev, direction: DIRECTIONS.NONE, nextDirection: DIRECTIONS.NONE }));
    };

    const restartGame = () => {
        setGameMap([...INITIAL_MAP]);
        setPacman({
            x: 10 * CELL_SIZE,
            y: 20 * CELL_SIZE,
            direction: DIRECTIONS.NONE,
            nextDirection: DIRECTIONS.NONE,
            mouthAngle: 0.5,
            mouthOpen: true,
            powerMode: false,
            powerModeTimer: 0
        });
        setGhosts([
            { x: 9 * CELL_SIZE, y: 9 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#FF0000', mode: 'scatter' },
            { x: 10 * CELL_SIZE, y: 9 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#00FFFF', mode: 'scatter' },
            { x: 9 * CELL_SIZE, y: 10 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#FFB8FF', mode: 'scatter' },
            { x: 10 * CELL_SIZE, y: 10 * CELL_SIZE, direction: DIRECTIONS.NONE, color: '#FFB852', mode: 'scatter' }
        ]);
        setScore(0);
        setLives(3);
        setGameOver(false);
        setGameWon(false);
        setIsPaused(false);
        setIsStarted(false);
    };

    // Initialize the game
    useEffect(() => {
        // Load high score from localStorage
        const savedHighScore = localStorage.getItem('pacmanHighScore');
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore));
        }

        // Set up keyboard controls
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isStarted) {
                setIsStarted(true);
            }

            switch (e.key) {
                case 'ArrowUp':
                    handleDirectionChange(DIRECTIONS.UP);
                    break;
                case 'ArrowDown':
                    handleDirectionChange(DIRECTIONS.DOWN);
                    break;
                case 'ArrowLeft':
                    handleDirectionChange(DIRECTIONS.LEFT);
                    break;
                case 'ArrowRight':
                    handleDirectionChange(DIRECTIONS.RIGHT);
                    break;
                case 'p':
                    setIsPaused(prev => !prev);
                    break;
                case ' ': // Spacebar
                    if (!isStarted) {
                        setIsStarted(true);
                    } else {
                        setIsPaused(prev => !prev);
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isStarted]);

    // Game logic
    useEffect(() => {
        if (!canvasRef.current || gameOver || gameWon || isPaused || !isStarted) {
            // Make sure to stop any existing animation when component is not active
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Make sure canvas dimensions are correctly set
        const gameWidth = CELL_SIZE * INITIAL_MAP[0].length;
        const gameHeight = CELL_SIZE * INITIAL_MAP.length;
        canvas.width = gameWidth;
        canvas.height = gameHeight;
        
        // Reset lastTimeRef to ensure smooth start
        lastTimeRef.current = Date.now();
        
        // Your existing game logic...
        // ...
        
        // Initialize the game loop
        animationFrameRef.current = requestAnimationFrame(updateGame);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, [gameMap, pacman, ghosts, gameOver, gameWon, isPaused, isStarted, score, highScore, lives]);

    // Initial render of the canvas when not started
    useEffect(() => {
        if (!canvasRef.current || isStarted) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const gameWidth = CELL_SIZE * INITIAL_MAP[0].length;
        const gameHeight = CELL_SIZE * INITIAL_MAP.length;

        // Set canvas dimensions
        canvas.width = gameWidth;
        canvas.height = gameHeight;

        // Draw initial state
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw map
        for (let y = 0; y < gameMap.length; y++) {
            for (let x = 0; x < gameMap[y].length; x++) {
                const cell = gameMap[y][x];
                const cellX = x * CELL_SIZE;
                const cellY = y * CELL_SIZE;

                if (cell === 1) { // Wall
                    ctx.fillStyle = '#3333ff';
                    ctx.fillRect(cellX, cellY, CELL_SIZE, CELL_SIZE);
                } else if (cell === 2) { // Dot
                    ctx.fillStyle = '#FFB8FF';
                    ctx.beginPath();
                    ctx.arc(
                        cellX + CELL_SIZE / 2,
                        cellY + CELL_SIZE / 2,
                        DOT_SIZE / 2,
                        0,
                        Math.PI * 2
                    );
                    ctx.fill();
                } else if (cell === 3) { // Power dot
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.arc(
                        cellX + CELL_SIZE / 2,
                        cellY + CELL_SIZE / 2,
                        POWER_DOT_SIZE / 2,
                        0,
                        Math.PI * 2
                    );
                    ctx.fill();
                }
            }
        }

        // Draw pacman (as a full circle when not moving)
        ctx.fillStyle = '#FFFF00';
        ctx.beginPath();
        ctx.arc(
            pacman.x + CELL_SIZE / 2,
            pacman.y + CELL_SIZE / 2,
            PACMAN_SIZE,
            0,
            Math.PI * 2
        );
        ctx.fill();

        // Draw ghosts
        ghosts.forEach(ghost => {
            // Draw ghost body
            ctx.fillStyle = ghost.color;
            ctx.beginPath();

            // Ghost body (semi-circle + rectangle)
            ctx.arc(
                ghost.x + CELL_SIZE / 2,
                ghost.y + CELL_SIZE / 2 - 2,
                GHOST_SIZE,
                Math.PI,
                0
            );
            ctx.lineTo(
                ghost.x + CELL_SIZE / 2 + GHOST_SIZE,
                ghost.y + CELL_SIZE / 2 + GHOST_SIZE - 2
            );

            // Wavy bottom
            const waveHeight = 4;
            for (let i = 0; i < 3; i++) {
                ctx.lineTo(
                    ghost.x + CELL_SIZE / 2 + GHOST_SIZE - (i * GHOST_SIZE / 1.5),
                    ghost.y + CELL_SIZE / 2 + GHOST_SIZE - 2 - (i % 2 === 0 ? waveHeight : 0)
                );
            }

            ctx.lineTo(
                ghost.x + CELL_SIZE / 2 - GHOST_SIZE,
                ghost.y + CELL_SIZE / 2 + GHOST_SIZE - 2
            );
            ctx.closePath();
            ctx.fill();

            // Ghost eyes
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(
                ghost.x + CELL_SIZE / 2 - 3,
                ghost.y + CELL_SIZE / 2 - 3,
                4,
                0,
                Math.PI * 2
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
                ghost.x + CELL_SIZE / 2 + 3,
                ghost.y + CELL_SIZE / 2 - 3,
                4,
                0,
                Math.PI * 2
            );
            ctx.fill();

            // Ghost pupils
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(
                ghost.x + CELL_SIZE / 2 - 3,
                ghost.y + CELL_SIZE / 2 - 3,
                2,
                0,
                Math.PI * 2
            );
            ctx.fill();
            ctx.beginPath();
            ctx.arc(
                ghost.x + CELL_SIZE / 2 + 3,
                ghost.y + CELL_SIZE / 2 - 3,
                2,
                0,
                Math.PI * 2
            );
            ctx.fill();
        });

    }, [canvasRef.current, isStarted]);

    return (
        <div className="pacman-container">
            <button className="home-button" onClick={goToHome}>
                Home
            </button>

            {/* Header with logos */}
            <div className="header-logos">
                <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
            </div>

            <h1 className="game-title">eGov Pacman</h1>

            <div className="score-panel">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
                <p>Lives: {Array(lives).fill('❤️').join(' ')}</p>
            </div>

            <div className="game-canvas-container">
                <canvas ref={canvasRef}></canvas>

                {!isStarted && !gameOver && !gameWon && (
                    <div className="start-overlay">
                        <div className="message">
                            <h2>eGov Pacman</h2>
                            <p>Use arrow buttons or keyboard to move Pacman</p>
                            <p>Eat all dots while avoiding ghosts!</p>
                            <button onClick={startGame}>Start Game</button>
                        </div>
                    </div>
                )}

                {(gameOver || gameWon) && (
                    <div className="game-over-overlay">
                        <div className="message">
                            <h2>{gameWon ? 'You Win!' : 'Game Over'}</h2>
                            <p>Score: {score}</p>
                            <button onClick={restartGame}>Play Again</button>
                        </div>
                    </div>
                )}

                {isPaused && isStarted && (
                    <div className="pause-overlay">
                        <div className="message">
                            <h2>Game Paused</h2>
                            <button onClick={() => setIsPaused(false)}>Resume</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Improved on-screen controls */}
            <div className="controls">
                <button
                    className="control-button up"
                    onTouchStart={() => handleDirectionChange(DIRECTIONS.UP)}
                    onClick={() => handleDirectionChange(DIRECTIONS.UP)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M12 4l-8 8h6v8h4v-8h6z" />
                    </svg>
                </button>
                <div className="horizontal-controls">
                    <button
                        className="control-button left"
                        onTouchStart={() => handleDirectionChange(DIRECTIONS.LEFT)}
                        onClick={() => handleDirectionChange(DIRECTIONS.LEFT)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M4 12l8-8v6h8v4h-8v6z" />
                        </svg>
                    </button>
                    <button
                        className="control-button right"
                        onTouchStart={() => handleDirectionChange(DIRECTIONS.RIGHT)}
                        onClick={() => handleDirectionChange(DIRECTIONS.RIGHT)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M20 12l-8-8v6H4v4h8v6z" />
                        </svg>
                    </button>
                </div>
                <button
                    className="control-button down"
                    onTouchStart={() => handleDirectionChange(DIRECTIONS.DOWN)}
                    onClick={() => handleDirectionChange(DIRECTIONS.DOWN)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="currentColor" d="M12 20l8-8h-6V4h-4v8H4z" />
                    </svg>
                </button>
                <button
                    className="control-button pause"
                    onClick={() => setIsPaused(prev => !prev)}
                >
                    {isPaused ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M8 5v14l11-7z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Pacman;