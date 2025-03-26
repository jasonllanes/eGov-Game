import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import birdImage from "../../assets/Bird_2.png";
import pipeTopImage from "../../assets/pipe-top.png";
import pipeBottomImage from "../../assets/pipe-bottom.png";
import footerImage from "../../assets/Background.png";
import backgroundImage from "../../assets/bg.png";
import './FlappyBird.css';

// Game constants
const gravity = 5;
const jump = -22;
const pipeWidth = 180;
const pipeGap = 250;
const birdSize = 70;
const pipeSpacing = 450;
const pipeSpeed = 15;
const backgroundSpeed = 2;
const footerHeight = 170;
const footerPosition = 830;
const gameUpdateInterval = 40;
const birdPositionX = 200;
const HIGH_SCORE_KEY = 'flappyBirdHighScore';

// Confetti settings
const CONFETTI_COUNT = 100;
const SCORE_CONFETTI_COUNT = 30;
const CONFETTI_COLORS = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
const CONFETTI_SIZE_MIN = 5;
const CONFETTI_SIZE_MAX = 15;
const CONFETTI_DURATION = 3000;
const SCORE_CONFETTI_DURATION = 1500;

interface Pipe {
    x: number;
    height: number;
}

interface Confetti {
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
}

const MainPageFlappyBird: React.FC = () => {
    const navigate = useNavigate(); // Add navigation hook

    // State for game dimensions
    const [gameWidth, setGameWidth] = useState<number>(800);
    const [gameHeight, setGameHeight] = useState<number>(600);
    const [scale, setScale] = useState<number>(1);

    // Game state
    const [birdY, setBirdY] = useState<number>(gameHeight / 2);
    const [velocity, setVelocity] = useState<number>(0);
    const [pipes, setPipes] = useState<Pipe[]>([{ x: gameWidth, height: Math.floor(Math.random() * 400) + 100 }]);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [highScore, setHighScore] = useState<number>(0);
    const [bgPosition, setBgPosition] = useState<number>(0);
    const [newHighScore, setNewHighScore] = useState<boolean>(false);

    // Confetti states
    const [confetti, setConfetti] = useState<Confetti[]>([]);
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const [scoreConfetti, setScoreConfetti] = useState<Confetti[]>([]);
    const [showScoreConfetti, setShowScoreConfetti] = useState<boolean>(false);

    // Container ref for responsive sizing
    const containerRef = useRef<HTMLDivElement>(null);

    // Canvas and images refs
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const birdImgRef = useRef<HTMLImageElement | null>(null);
    const pipeTopImgRef = useRef<HTMLImageElement | null>(null);
    const pipeBottomImgRef = useRef<HTMLImageElement | null>(null);
    const footerImgRef = useRef<HTMLImageElement | null>(null);
    const backgroundImgRef = useRef<HTMLImageElement | null>(null);

    // Function to navigate to home page
    const goToHome = () => {
        navigate('/eGov-Game/main-page');
    };


    // Load high score from localStorage on component mount
    useEffect(() => {
        const savedHighScore = localStorage.getItem(HIGH_SCORE_KEY);
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore));
        }
    }, []);

    // Handle window resize
    useEffect(() => {
        const resizeGame = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = window.innerHeight * 0.8; // Use 80% of viewport height

                // Base game size to maintain aspect ratio
                const baseWidth = 1000;
                const baseHeight = 1000;
                const aspectRatio = baseWidth / baseHeight;

                let newWidth = containerWidth;
                let newHeight = containerWidth / aspectRatio;

                // If height is too tall, constrain by height instead
                if (newHeight > containerHeight) {
                    newHeight = containerHeight;
                    newWidth = containerHeight * aspectRatio;
                }

                // Update game dimensions
                setGameWidth(baseWidth);
                setGameHeight(baseHeight);
                setScale(newWidth / baseWidth);
            }
        };

        resizeGame();
        window.addEventListener("resize", resizeGame);
        return () => window.removeEventListener("resize", resizeGame);
    }, []);

    // Create high score confetti when a new high score is achieved
    useEffect(() => {
        if (newHighScore) {
            createHighScoreConfetti();
        }
    }, [newHighScore]);

    // Create score confetti when score increases
    const createScoreConfetti = () => {
        const newConfetti: Confetti[] = [];

        // Create score confetti at the pipe position
        for (let i = 0; i < SCORE_CONFETTI_COUNT; i++) {
            newConfetti.push({
                x: birdPositionX + 60 + Math.random() * 30, // Just past the bird
                y: birdY - 20 + Math.random() * 40, // Around the bird's height
                size: CONFETTI_SIZE_MIN + Math.random() * (CONFETTI_SIZE_MAX - CONFETTI_SIZE_MIN),
                color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                speedX: 2 + Math.random() * 3, // More horizontal speed
                speedY: -2 + Math.random() * 4, // Less vertical variance
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: -0.1 + Math.random() * 0.2
            });
        }

        setScoreConfetti(newConfetti);
        setShowScoreConfetti(true);
    };

    // Animate high score confetti
    useEffect(() => {
        if (!showConfetti || confetti.length === 0) return;

        const animateConfetti = () => {
            setConfetti(prevConfetti =>
                prevConfetti.map(particle => ({
                    ...particle,
                    x: particle.x + particle.speedX,
                    y: particle.y + particle.speedY,
                    speedY: particle.speedY + 0.1, // Add gravity
                    rotation: particle.rotation + particle.rotationSpeed
                }))
            );
        };

        const confettiInterval = setInterval(animateConfetti, 16); // ~60 FPS

        // Stop confetti after set duration
        const confettiTimeout = setTimeout(() => {
            setShowConfetti(false);
            setConfetti([]);
        }, CONFETTI_DURATION);

        return () => {
            clearInterval(confettiInterval);
            clearTimeout(confettiTimeout);
        };
    }, [showConfetti, confetti]);

    // Animate score confetti
    useEffect(() => {
        if (!showScoreConfetti || scoreConfetti.length === 0) return;

        const animateScoreConfetti = () => {
            setScoreConfetti(prevConfetti =>
                prevConfetti.map(particle => ({
                    ...particle,
                    x: particle.x + particle.speedX,
                    y: particle.y + particle.speedY,
                    speedY: particle.speedY + 0.1, // Add gravity
                    rotation: particle.rotation + particle.rotationSpeed
                }))
            );
        };

        const confettiInterval = setInterval(animateScoreConfetti, 16); // ~60 FPS

        // Stop confetti after set duration
        const confettiTimeout = setTimeout(() => {
            setShowScoreConfetti(false);
            setScoreConfetti([]);
        }, SCORE_CONFETTI_DURATION);

        return () => {
            clearInterval(confettiInterval);
            clearTimeout(confettiTimeout);
        };
    }, [showScoreConfetti, scoreConfetti]);

    // Create high score confetti particles
    const createHighScoreConfetti = () => {
        const newConfetti: Confetti[] = [];

        // Create left side confetti
        for (let i = 0; i < CONFETTI_COUNT / 2; i++) {
            newConfetti.push({
                x: Math.random() * 50, // Left side
                y: Math.random() * gameHeight / 2,
                size: CONFETTI_SIZE_MIN + Math.random() * (CONFETTI_SIZE_MAX - CONFETTI_SIZE_MIN),
                color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                speedX: 1 + Math.random() * 3,
                speedY: -3 + Math.random() * 6,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: -0.1 + Math.random() * 0.2
            });
        }

        // Create right side confetti
        for (let i = 0; i < CONFETTI_COUNT / 2; i++) {
            newConfetti.push({
                x: gameWidth - Math.random() * 50, // Right side
                y: Math.random() * gameHeight / 2,
                size: CONFETTI_SIZE_MIN + Math.random() * (CONFETTI_SIZE_MAX - CONFETTI_SIZE_MIN),
                color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
                speedX: -1 - Math.random() * 3,
                speedY: -3 + Math.random() * 6,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: -0.1 + Math.random() * 0.2
            });
        }

        setConfetti(newConfetti);
        setShowConfetti(true);
    };

    // Reset game when dimensions change
    useEffect(() => {
        setBirdY(gameHeight / 2);
        setPipes([{ x: gameWidth, height: Math.floor(Math.random() * 400) + 100 }]);
    }, [gameWidth, gameHeight]);

    // Load images
    useEffect(() => {
        // Load bird image
        const birdImg = new Image();
        birdImg.src = birdImage;
        birdImg.onload = () => {
            birdImgRef.current = birdImg;
        };

        // Load pipe top image
        const pipeTopImg = new Image();
        pipeTopImg.src = pipeTopImage;
        pipeTopImg.onload = () => {
            pipeTopImgRef.current = pipeTopImg;
        };

        // Load pipe bottom image
        const pipeBottomImg = new Image();
        pipeBottomImg.src = pipeBottomImage;
        pipeBottomImg.onload = () => {
            pipeBottomImgRef.current = pipeBottomImg;
        };

        // Load footer image
        const footerImg = new Image();
        footerImg.src = footerImage;
        footerImg.onload = () => {
            footerImgRef.current = footerImg;
        };

        // Load background image
        const bgImg = new Image();
        bgImg.src = backgroundImage;
        bgImg.onload = () => {
            backgroundImgRef.current = bgImg;
        };
    }, []);

    // Game loop
    useEffect(() => {
        if (isGameOver) return;

        const interval = setInterval(() => {
            setBirdY((prev) => prev + velocity);
            setVelocity((prev) => prev + gravity);

            // Scroll the background
            setBgPosition((prev) => (prev - backgroundSpeed) % gameWidth);

            setPipes((prevPipes) => {
                // Move pipes to the left
                const movedPipes = prevPipes.map(pipe => ({ ...pipe, x: pipe.x - pipeSpeed }));

                // Filter out pipes that have gone offscreen
                const filteredPipes = movedPipes.filter(pipe => pipe.x + pipeWidth > 0);

                // Generate a new pipe when the rightmost pipe has moved enough
                const rightmostPipe = movedPipes.reduce((max, pipe) => pipe.x > max ? pipe.x : max, 0);
                if (rightmostPipe < gameWidth - pipeSpacing) {
                    return [...filteredPipes, {
                        x: gameWidth,
                        height: Math.floor(Math.random() * 400) + 100
                    }];
                }

                return filteredPipes;
            });

            // Increment score when passing a pipe
            pipes.forEach(pipe => {
                if (pipe.x + pipeWidth < birdPositionX && pipe.x + pipeWidth > birdPositionX - pipeSpeed) {
                    setScore(prev => {
                        const newScore = prev + 1;
                        // Create score confetti
                        createScoreConfetti();

                        // Check for high score whenever score increases
                        if (newScore > highScore) {
                            setHighScore(newScore);
                            localStorage.setItem(HIGH_SCORE_KEY, newScore.toString());
                            setNewHighScore(true);
                        }
                        return newScore;
                    });
                }
            });

            // Collision detection
            pipes.forEach((pipe) => {
                if (
                    (birdY < pipe.height || birdY + birdSize > pipe.height + pipeGap) &&
                    pipe.x < birdPositionX + birdSize / 2 &&
                    pipe.x + pipeWidth > birdPositionX - birdSize / 2
                ) {
                    setIsGameOver(true);
                }
            });

            if (birdY + birdSize > gameHeight || birdY < 0) {
                setIsGameOver(true);
            }

        }, gameUpdateInterval);

        return () => clearInterval(interval);
    }, [velocity, isGameOver, pipes, birdY, gameWidth, gameHeight, highScore]);

    // Handle jump
    useEffect(() => {
        const handleJump = (e: KeyboardEvent) => {
            if (e.code === "Space" && !isGameOver) {
                setVelocity(jump);
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handleJump);
        return () => window.removeEventListener("keydown", handleJump);
    }, [isGameOver]);

    // Canvas rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions
        canvas.width = gameWidth;
        canvas.height = gameHeight;

        // Clear canvas
        ctx.clearRect(0, 0, gameWidth, gameHeight);

        // Draw background image (instead of solid color)
        if (backgroundImgRef.current) {
            // Draw repeated background for seamless scrolling
            ctx.drawImage(
                backgroundImgRef.current,
                bgPosition,
                0,
                gameWidth,
                gameHeight
            );
            ctx.drawImage(
                backgroundImgRef.current,
                bgPosition + gameWidth,
                0,
                gameWidth,
                gameHeight
            );
        } else {
            // Fallback to solid color if image isn't loaded
            ctx.fillStyle = "skyblue";
            ctx.fillRect(0, 0, gameWidth, gameHeight);
        }

        // Draw footer - now drawn before pipes and bird to act as background
        if (footerImgRef.current) {
            // Draw repeated footer for seamless scrolling
            ctx.drawImage(
                footerImgRef.current,
                bgPosition,
                footerPosition,
                gameWidth,
                footerHeight
            );
            ctx.drawImage(
                footerImgRef.current,
                bgPosition + gameWidth,
                footerPosition,
                gameWidth,
                footerHeight
            );
        }

        // Draw pipes
        pipes.forEach(pipe => {
            // Draw top pipe
            if (pipeTopImgRef.current) {
                ctx.drawImage(
                    pipeTopImgRef.current,
                    pipe.x,
                    0,
                    pipeWidth,
                    pipe.height
                );
            }

            // Draw bottom pipe - now extends all the way to the bottom of the game
            if (pipeBottomImgRef.current) {
                ctx.drawImage(
                    pipeBottomImgRef.current,
                    pipe.x,
                    pipe.height + pipeGap,
                    pipeWidth,
                    gameHeight - (pipe.height + pipeGap) // Extend all the way to bottom
                );
            }
        });

        // Draw bird
        if (birdImgRef.current) {
            // Save context state
            ctx.save();

            // Move to bird center for rotation
            ctx.translate(birdPositionX + birdSize / 2, birdY + birdSize / 2);

            // Rotate based on velocity
            const rotationAngle = velocity > 0 ? Math.min(velocity * 0.04, Math.PI / 4) : Math.max(velocity * 0.04, -Math.PI / 9);
            ctx.rotate(rotationAngle);

            // Draw bird image centered
            ctx.drawImage(
                birdImgRef.current,
                -birdSize / 2,
                -birdSize / 2,
                birdSize,
                birdSize
            );

            // Restore context state
            ctx.restore();
        }

        // Draw high score confetti
        if (showConfetti && confetti.length > 0) {
            confetti.forEach(particle => {
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.rotation);

                ctx.fillStyle = particle.color;
                ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);

                ctx.restore();
            });
        }

        // Draw score confetti
        if (showScoreConfetti && scoreConfetti.length > 0) {
            scoreConfetti.forEach(particle => {
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.rotation);

                ctx.fillStyle = particle.color;
                ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);

                ctx.restore();
            });
        }

        // Draw score
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.textAlign = "left";
        ctx.strokeText(`Score: ${score}`, 30, 70);
        ctx.fillText(`Score: ${score}`, 30, 70);

        // Draw high score
        ctx.textAlign = "right";
        ctx.strokeText(`High Score: ${highScore}`, gameWidth - 30, 70);
        ctx.fillText(`High Score: ${highScore}`, gameWidth - 30, 70);

        // Draw game over screen if game is over
        if (isGameOver) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fillRect(gameWidth / 2 - 200, gameHeight / 2 - 200, 400, 380);

            ctx.font = "bold 48px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over", gameWidth / 2, gameHeight / 2 - 130);

            ctx.font = "bold 36px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(`Score: ${score}`, gameWidth / 2, gameHeight / 2 - 70);

            ctx.font = "bold 36px Arial";
            ctx.fillStyle = newHighScore ? "green" : "black";
            ctx.fillText(`High Score: ${highScore}`, gameWidth / 2, gameHeight / 2 - 20);

            if (newHighScore) {
                ctx.font = "bold 36px Arial";
                ctx.fillStyle = "green";
                ctx.fillText("NEW HIGH SCORE!", gameWidth / 2, gameHeight / 2 + 30);
            }
        }

    }, [birdY, pipes, bgPosition, score, highScore, isGameOver, newHighScore, gameWidth, gameHeight, showConfetti, confetti, showScoreConfetti, scoreConfetti]);

    const restartGame = () => {
        setBirdY(gameHeight / 2);
        setVelocity(0);
        setPipes([{ x: gameWidth, height: Math.floor(Math.random() * 400) + 100 }]);
        setIsGameOver(false);
        setScore(0);
        setNewHighScore(false); // Reset new high score flag
        setShowConfetti(false); // Stop high score confetti
        setShowScoreConfetti(false); // Stop score confetti
    };

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px 0",
                position: "relative" // Added for absolute positioning of home button
            }}
        >
            {/* Add Home Button */}
            <button
                onClick={goToHome}
                className="home-button"
                style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    padding: "10px 20px",
                    backgroundColor: "#ffcc00",
                    color: "#333",
                    border: "2px solid #ff3333",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    zIndex: "100",
                    transition: "all 0.3s ease"
                }}
            >
                Home
            </button>

            <div style={{
                position: "relative",
                transform: `scale(${scale})`,
                transformOrigin: "top center"
            }}>
                <canvas
                    ref={canvasRef}
                    width={gameWidth}
                    height={gameHeight}
                    onClick={() => !isGameOver && setVelocity(jump)}
                    style={{
                        cursor: "pointer",
                        display: "block"
                    }}
                />

                {isGameOver && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, 90px)",
                            zIndex: 100,
                        }}
                    >
                        <button
                            onClick={restartGame}
                            style={{
                                padding: "16px 32px",
                                backgroundColor: "#4CAF50",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "24px",
                            }}
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPageFlappyBird;