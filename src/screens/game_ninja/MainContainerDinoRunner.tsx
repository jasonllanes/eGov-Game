import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './DinoRunner.css';

// Import logos and assets
import eGovLogo from '../../assets/eGovPHLogoB.png';
import eLGULogo from '../../assets/eLGULogo.png';
import birdImage from '../../assets/bird.png'; // Flappy bird character as dino

// Import game logos as obstacles
import eBPLS from '../../assets/eBPLS.png';
import eCommerce from '../../assets/eCommerce.png';
import eGovChain from '../../assets/eGovChain.png';
import eGovPay from '../../assets/eGovPay.png';
import eHealth from '../../assets/eHealth.png';
import eInvest from '../../assets/eInvest.png';
import eKYC from '../../assets/eKYC.png';
import eMessages from '../../assets/eMessages.png';
import eTourism from '../../assets/eTourism.png';
import eTravel from '../../assets/eTravel.png';

// Interface for obstacles (logos as cacti)
interface Obstacle {
    id: number;
    imageUrl: string;
    x: number;
    width: number;
    height: number;
}

// Interface for player character (flappy bird as dino)
interface Player {
    y: number;
    x: number; // Add x position for horizontal movement
    width: number;
    height: number;
    isJumping: boolean;
    velocityY: number;
}

const MainContainerDinoRunner = () => {
    const navigate = useNavigate();
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number | null>(null);
    const lastObstacleTimeRef = useRef<number>(0);
    const groundY = 400; // Y position of the ground
    const isJumpingRef = useRef<boolean>(false); // Reference to track jumping state outside of render cycle

    // Game state
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [obstacles, setObstacles] = useState<Obstacle[]>([]);
    const [player, setPlayer] = useState<Player>({
        x: 100, // Initial x position
        y: groundY - 60, // Initial y position (just above ground)
        width: 55,  // Slightly smaller character hitbox
        height: 55, // Slightly smaller character hitbox
        isJumping: false,
        velocityY: 0
    });
    const [gameSpeed, setGameSpeed] = useState(2.8); // Initial game speed

    // Collection of game images
    const gameImages = [
        eBPLS, eCommerce, eGovChain, eGovPay, eHealth,
        eInvest, eKYC, eMessages, eTourism, eTravel
    ];

    // Initialize the game
    useEffect(() => {
        // Try to get high score from local storage
        const savedHighScore = localStorage.getItem('dinorunnerHighScore');
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore));
        }

        // Handle keyboard events for the whole window
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if (!gameStarted || gameOver) return;

            // Jump when spacebar, up arrow or any key is pressed
            if ((e.code === 'Space' || e.key === 'ArrowUp' || e.key === ' ') && !e.repeat) {
                jump();
            }
        };

        // Listen for keyboard input
        window.addEventListener('keydown', handleGlobalKeyDown);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            window.removeEventListener('keydown', handleGlobalKeyDown);
        };
    }, [gameStarted, gameOver]);

    // Handle keyboard input for player jumping
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!gameStarted || gameOver) return;

        // Jump when spacebar, up arrow or any key is pressed (prevent repeat)
        if ((e.code === 'Space' || e.key === 'ArrowUp' || e.key === ' ') && !e.repeat) {
            // Use the same debounce as click handling
            const currentTime = Date.now();
            if (currentTime - lastClickTimeRef.current > 300) {
                lastClickTimeRef.current = currentTime;
                jump();
            }
        }
    };

    // Track last click time to debounce multiple clicks
    const lastClickTimeRef = useRef<number>(0);

    // Handle touch/mouse input for player jumping with debounce
    const handlePointerDown = () => {
        if (!gameStarted || gameOver) return;

        // Debounce clicks - only register clicks that are at least 300ms apart
        const currentTime = Date.now();
        if (currentTime - lastClickTimeRef.current > 300) {
            lastClickTimeRef.current = currentTime;
            jump();
        }
    };

    // Jump function
    const jump = () => {
        // Only allow jumping if the player is on the ground and not already jumping
        // Use both the ref and the state to ensure we don't allow multiple jumps
        if (!player.isJumping && !isJumpingRef.current) {
            isJumpingRef.current = true; // Set the ref immediately
            setPlayer(prev => ({
                ...prev,
                isJumping: true,
                velocityY: -12 // Reduced initial velocity for a more controlled jump height
            }));
        }
    };

    // Reference to track the last obstacle's position
    const lastObstaclePosRef = useRef<number>(-1);

    // Game animation loop
    useEffect(() => {
        if (gameStarted && !gameOver) {
            const animate = (time: number) => {
                // Update player position (apply gravity)
                updatePlayer();

                // Get game area width for obstacle spawn calculations
                const gameAreaWidth = gameAreaRef.current?.clientWidth || 800;

                // Generate obstacles with minimum distance apart
                const minDistanceBetweenObstacles = 300; // Minimum distance in pixels
                const canSpawnNewObstacle =
                    // Either no obstacles exist yet
                    (obstacles.length === 0) ||
                    // Or the last obstacle has moved far enough to the left
                    (lastObstaclePosRef.current > 0 &&
                        gameAreaWidth - lastObstaclePosRef.current > minDistanceBetweenObstacles);

                // Add a time-based constraint to avoid spawning too many obstacles
                const timeThreshold = 1800 + Math.random() * 1200; // Between 1.8-3.0 seconds - more time between obstacles

                if (canSpawnNewObstacle && time - lastObstacleTimeRef.current > timeThreshold) {
                    generateObstacle();
                    lastObstacleTimeRef.current = time;
                }

                // Move obstacles and check collisions
                updateObstacles();

                // Increment score
                setScore(prev => prev + 1);

                // Increase game speed even more gradually
                if (score % 500 === 0 && score > 0) {
                    setGameSpeed(prev => Math.min(prev + 0.4, 10));
                }

                // Continue animation loop
                requestRef.current = requestAnimationFrame(animate);
            };

            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [gameStarted, gameOver, score]);

    // Update player position with gravity
    const updatePlayer = () => {
        const gravity = 0.40; // Reduced gravity for slower, more floaty jumps

        setPlayer(prev => {
            // Apply gravity to velocity
            let newVelocityY = prev.velocityY + gravity;
            let newY = prev.y + newVelocityY;

            // Calculate horizontal movement based on jump phase
            let newX = prev.x;
            if (prev.isJumping) {
                // Forward movement during ascending phase of jump
                if (prev.velocityY < 0) {
                    // Moving forward during upward part of jump - more gradual forward movement
                    newX = Math.min(newX + 0.9, 160); // More controlled horizontal movement
                } else if (prev.velocityY > 0) {
                    // Moving back during downward part of jump - even slower return for longer air time
                    newX = Math.max(newX - 0.3, 100);
                }
            } else {
                // When not jumping, reset to original position
                if (newX > 100) {
                    newX = Math.max(newX - 0.2, 100); // Slower reset to original position
                }
            }

            // Check if player has landed on the ground
            if (newY >= groundY - prev.height) {
                newY = groundY - prev.height;
                newVelocityY = 0;
                isJumpingRef.current = false; // Reset the jump ref when landing
                return {
                    ...prev,
                    x: newX,
                    y: newY,
                    velocityY: newVelocityY,
                    isJumping: false
                };
            }

            // Still in the air
            return {
                ...prev,
                x: newX,
                y: newY,
                velocityY: newVelocityY
            };
        });
    };

    // Generate a new obstacle
    const generateObstacle = () => {
        if (!gameAreaRef.current) return;

        const gameAreaWidth = gameAreaRef.current.clientWidth;

        // Select a random image from our collection for the obstacle
        const randomImage = gameImages[Math.floor(Math.random() * gameImages.length)];

        // Create obstacle size with some variation - slightly smaller
        const baseHeight = 55 + Math.random() * 25; // Height between 55-80px
        const baseWidth = 45 + Math.random() * 15;  // Width between 45-60px

        // Add a small random position offset to vary the distance between obstacles
        // This makes them appear at slightly different intervals
        const positionVariance = Math.floor(Math.random() * 100); // 0-100px variance

        const newObstacle: Obstacle = {
            id: Date.now(),
            imageUrl: randomImage,
            x: gameAreaWidth + positionVariance, // Start at the right edge plus some random distance
            width: baseWidth,
            height: baseHeight
        };

        // Store the position of this obstacle for distance calculations
        lastObstaclePosRef.current = newObstacle.x;

        setObstacles(prev => [...prev, newObstacle]);
    };

    // Update positions of obstacles and check for collisions
    const updateObstacles = () => {
        if (!gameAreaRef.current) return;

        setObstacles(prev => {
            // Move obstacles from right to left
            const updatedObstacles = prev
                .map(obstacle => ({
                    ...obstacle,
                    x: obstacle.x - gameSpeed // Move based on game speed
                }))
                .filter(obstacle => {
                    // Keep only obstacles still on screen
                    if (obstacle.x + obstacle.width < 0) {
                        // If this was the last tracked obstacle, reset the tracker
                        if (lastObstaclePosRef.current === obstacle.x + gameSpeed) {
                            lastObstaclePosRef.current = -1;
                        }
                        return false;
                    }

                    // Check for collision with player
                    // Use dynamic horizontal position
                    const playerLeft = player.x;
                    const playerRight = playerLeft + player.width;
                    const playerTop = player.y;
                    const playerBottom = player.y + player.height;

                    const obstacleLeft = obstacle.x;
                    const obstacleRight = obstacle.x + obstacle.width;
                    const obstacleTop = groundY - obstacle.height;
                    const obstacleBottom = groundY;

                    // Check for collision with a slightly more forgiving hitbox
                    const hitboxReduction = 8; // Reduce hitbox size by this many pixels
                    if (playerRight - hitboxReduction > obstacleLeft + hitboxReduction &&
                        playerLeft + hitboxReduction < obstacleRight - hitboxReduction &&
                        playerBottom - hitboxReduction > obstacleTop + hitboxReduction &&
                        playerTop + hitboxReduction < obstacleBottom - hitboxReduction) {
                        // Collision detected - end the game
                        setTimeout(() => endGame(), 10);
                    }

                    return true;
                });

            return updatedObstacles;
        });
    };

    // Start the game
    const startGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setScore(0);
        setGameSpeed(2.5); // Even lower initial game speed for better control
        setObstacles([]);
        isJumpingRef.current = false; // Reset jump state when game starts
        lastObstaclePosRef.current = -1; // Reset obstacle position tracker

        // Initialize player position
        setPlayer({
            x: 100, // Initial x position
            y: groundY - 60, // Initial y position (just above ground)
            width: 55,  // Slightly smaller character hitbox
            height: 55, // Slightly smaller character hitbox
            isJumping: false,
            velocityY: 0
        });

        // Reset obstacle generation time
        lastObstacleTimeRef.current = 0;
    };

    // End the game
    const endGame = () => {
        setGameOver(true);

        // Update high score if needed
        if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('dinorunnerHighScore', score.toString());
        }

        // Clear all obstacles
        setObstacles([]);
    };

    // Go back to home
    const goToHome = () => {
        navigate('/eGov-Game/main-page');
    };

    return (
        <div className="dino-container">
            <button className="home-button" onClick={goToHome}>
                Home
            </button>

            <h1 className="dino-title">
                <div className="logos-header">
                    <div className="logo-wrapper">
                        <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                    </div>
                    <div className="logo-wrapper">
                        <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
                    </div>
                </div>
            </h1>

            <div className="game-info">
                <div className="score-display">Score: {score}</div>
                <div className="high-score-display">Best: {highScore}</div>
                <div className="speed-display">Speed: {gameSpeed.toFixed(1)}</div>
            </div>

            {/* Game area */}
            <div
                ref={gameAreaRef}
                className="dino-game-area"
                onClick={handlePointerDown}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {/* Ground */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '5px',
                        backgroundColor: 'rgba(40, 200, 120, 0.8)',
                        zIndex: 5
                    }}
                />

                {/* Obstacles */}
                {obstacles.map(obstacle => (
                    <div
                        key={obstacle.id}
                        className="obstacle"
                        style={{
                            position: 'absolute',
                            left: `${obstacle.x}px`,
                            bottom: '5px', // Position at the ground
                            width: `${obstacle.width}px`,
                            height: `${obstacle.height}px`,
                            backgroundColor: 'rgba(40, 200, 120, 0.3)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 8
                        }}
                    >
                        <img
                            src={obstacle.imageUrl}
                            alt="Obstacle"
                            className="obstacle-image"
                            style={{
                                width: '85%',
                                height: '85%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                ))}

                {/* Player character (flappy bird as dino) */}
                {gameStarted && !gameOver && (
                    <div
                        style={{
                            position: 'absolute',
                            left: `${player.x}px`, // Dynamic horizontal position
                            top: `${player.y}px`, // Vertical position changes with jumping
                            width: `${player.width}px`,
                            height: `${player.height}px`,
                            backgroundImage: `url(${birdImage})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            zIndex: 10,
                            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))',
                            transform: player.velocityY < 0 ? 'rotate(-20deg) scale(1.2)' : 'rotate(10deg) scale(1.2)' // Rotate based on jumping direction
                        }}
                    />
                )}
            </div>

            {/* Start screen */}
            {!gameStarted && !gameOver && (
                <div className="start-screen">
                    <h2>eGov Runner</h2>
                    <p>Jump over obstacles and survive!</p>
                    <p>Press Space, Up Arrow or tap/click to jump</p>
                    <p><em>(One jump only until you land!)</em></p>
                    <button onClick={startGame}>Start Game</button>
                </div>
            )}

            {/* Game over screen */}
            {gameOver && (
                <div className="game-over-screen">
                    <h2>Game Over!</h2>
                    <p>Your Score: {score}</p>
                    <p>High Score: {highScore}</p>
                    <button onClick={startGame}>Play Again</button>
                </div>
            )}
        </div>
    );
};

export default MainContainerDinoRunner;
