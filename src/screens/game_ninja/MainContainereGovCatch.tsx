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
    x: number; // Added horizontal position
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

    // Game state
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [obstacles, setObstacles] = useState<Obstacle[]>([]);
    const [player, setPlayer] = useState<Player>({
        x: 100, // Fixed horizontal position
        y: groundY - 60, // Position higher off the ground
        width: 10, // Smaller character
        height: 10, // Smaller character
        isJumping: false,
        velocityY: 0
    });
    const [gameSpeed, setGameSpeed] = useState(2.5); // Even slower initial game speed

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
            if (e.code === 'Space' || e.key === 'ArrowUp' || e.key === ' ') {
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

    // No longer needed - removed

    // Handle keyboard input for player jumping
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!gameStarted || gameOver) return;

        // Jump when spacebar, up arrow or any key is pressed
        if (e.code === 'Space' || e.key === 'ArrowUp' || e.key === ' ') {
            jump();
        }
    };

    // Handle touch/mouse input for player jumping
    const handlePointerDown = () => {
        if (!gameStarted || gameOver) return;
        jump();
    };

    // Jump function
    const jump = () => {
        // Only allow jumping if the player is on the ground
        if (!player.isJumping) {
            setPlayer(prev => ({
                ...prev,
                isJumping: true,
                velocityY: -22 // Much stronger initial jump velocity for even higher jumps
            }));
        }
    };

    // Game animation loop
    useEffect(() => {
        if (gameStarted && !gameOver) {
            const animate = (time: number) => {
                // Update player position (apply gravity)
                updatePlayer();

                // Generate obstacles periodically (much less frequently for easier gameplay)
                if (time - lastObstacleTimeRef.current > 4000) { // Even longer time between obstacles
                    generateObstacle();
                    lastObstacleTimeRef.current = time;
                }

                // Move obstacles and check collisions
                updateObstacles();

                // Increment score more slowly
                if (score % 3 === 0) { // Only increment every 3 frames for slower score
                    setScore(prev => prev + 1);
                }

                // Increase game speed very gradually to keep it manageable
                if (score % 1000 === 0 && score > 0) {
                    setGameSpeed(prev => Math.min(prev + 0.2, 4)); // Even lower max speed
                }                // Continue animation loop
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
        const gravity = 0.05; // Ultra-low gravity for extremely high, very long jumps

        setPlayer(prev => {
            // Apply gravity to velocity
            let newVelocityY = prev.velocityY + gravity;
            let newY = prev.y + newVelocityY;

            // Calculate horizontal movement based on jump phase
            let newX = prev.x;
            if (prev.isJumping) {
                // Forward movement during ascending phase of jump
                if (prev.velocityY < 0) {
                    // Moving forward during upward part of jump
                    newX = Math.min(newX + 1.2, 150); // Increase forward movement and maximum distance
                } else if (prev.velocityY > 0) {
                    // Moving back during downward part of jump
                    newX = Math.max(newX - 0.6, 100);
                }
            } else {
                // When not jumping, reset to original position
                if (newX > 100) {
                    newX = Math.max(newX - 0.4, 100);
                }
            }

            // Check if player has landed on the ground
            if (newY >= groundY - prev.height) {
                newY = groundY - prev.height;

                // Add a subtle bounce effect when landing
                if (prev.velocityY > 1.5) {
                    // Only bounce if coming down with some speed
                    newVelocityY = -prev.velocityY * 0.1; // Tiny bounce (10% of landing velocity)
                    return {
                        ...prev,
                        x: newX,
                        y: newY,
                        velocityY: newVelocityY,
                        isJumping: true // Still jumping during bounce
                    };
                } else {
                    // No bounce for gentle landings
                    newVelocityY = 0;
                    return {
                        ...prev,
                        x: newX,
                        y: newY,
                        velocityY: newVelocityY,
                        isJumping: false
                    };
                }
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

        // Create even smaller obstacle size with some variation
        const baseHeight = 30 + Math.random() * 20; // Height between 30-50px
        const baseWidth = 25 + Math.random() * 10;  // Width between 25-35px

        const newObstacle: Obstacle = {
            id: Date.now(),
            imageUrl: randomImage,
            x: gameAreaWidth, // Start at the right edge of the screen
            width: baseWidth,
            height: baseHeight
        };

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

                    // Check for collision with a smaller hitbox (more forgiving)
                    const hitboxShrink = 10; // Shrink the hitbox by this many pixels for more forgiving collisions
                    if (playerRight - hitboxShrink > obstacleLeft + hitboxShrink &&
                        playerLeft + hitboxShrink < obstacleRight - hitboxShrink &&
                        playerBottom - hitboxShrink > obstacleTop + hitboxShrink &&
                        playerTop + hitboxShrink < obstacleBottom - hitboxShrink) {
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
        setGameSpeed(1.5); // Start with very slow game speed
        setObstacles([]);

        // Initialize player position
        setPlayer({
            x: 100, // Fixed horizontal position
            y: groundY - 60, // Position higher off the ground
            width: 40, // Smaller character
            height: 40, // Smaller character
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

                {/* Jump path guide (only shown before game starts) */}
                {!gameStarted && !gameOver && (
                    <div style={{
                        position: 'absolute',
                        left: '80px',
                        bottom: '60px',
                        width: '200px', // Wider arc to reflect longer jumps
                        height: '180px', // Higher arc to reflect higher jumps
                        borderTop: '2px dashed rgba(40, 200, 120, 0.5)',
                        borderRight: '2px dashed rgba(40, 200, 120, 0.5)',
                        borderRadius: '140px 0 0 0',
                        zIndex: 2
                    }} />
                )}

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
                            transform: `rotate(${Math.min(Math.max(player.velocityY * 1.5, -10), 5)}deg) scale(1)` // Smoother rotation based on velocity
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
                    <p className="game-hint">(This is a slow-paced version with super-high, arc-shaped jumps!)</p>
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
