import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MemoryFlip.css';
import eLGULogo from '../../assets/eLGULogo.png';
import eGovLogo from '../../assets/eGovPHLogoB.png';
// Import all the specified images
import eBPLS from '../../assets/eBPLS.png';
import eCommerce from '../../assets/eCommerce.png';
import eGOV from '../../assets/eGOV.png';
import eGovAI from '../../assets/eGovAI.png';
import eGovChain from '../../assets/eGovChain.png';
import eGovDocs from '../../assets/eGovDocs.png';
import eGovPay from '../../assets/eGovPay.png';
import eHealth from '../../assets/eHealth.png';
import eInvest from '../../assets/eInvest.png';
import eKYC from '../../assets/eKYC.png';
import eLGU from '../../assets/eLGU.png';
import eMessages from '../../assets/eMessages.png';
import eNationalID from '../../assets/eNationalID.png';
import eNationalIDVerify from '../../assets/eNationalIDVerify.png';
import eNews from '../../assets/eNews.png';
import eNGA from '../../assets/eNGA.png';
import eReceipt from '../../assets/eReceipt.png';
import eReport from '../../assets/eReport.png';
import eResume from '../../assets/eResume.png';
import eStartUp from '../../assets/eStartUp.png';
import eTourism from '../../assets/eTourism.png';
import eTravel from '../../assets/eTravel.png';
import eVisa from '../../assets/eVisa.png';

// Using similar interface to the mine game
interface MemoryCard {
    id: number;
    pairId: number; // To track matching pairs
    imageUrl: string;
    isFlipped: boolean;
    isMatched: boolean;
}

const MemoryFlip = () => {
    const navigate = useNavigate();

    // Game grid size - 4x5 grid (20 cards for 10 pairs)
    const gridSize = { rows: 4, cols: 5 };
    const totalCards = gridSize.rows * gridSize.cols;
    const pairsToWin = totalCards / 2; // 10 pairs

    // Game state
    const [grid, setGrid] = useState<MemoryCard[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const [timeLeft, setTimeLeft] = useState(40); // 60 seconds (1 minute)
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    // Array of all the available images
    const cardImages = [
        eBPLS, eCommerce, eGOV, eGovAI, eGovChain, eGovDocs, eGovPay,
        eHealth, eInvest, eKYC, eLGU, eMessages, eNationalID,
        eNationalIDVerify, eNews, eNGA, eReceipt, eReport,
        eResume, eStartUp, eTourism, eTravel, eVisa
    ];

    // Initialize the grid on component mount
    useEffect(() => {
        initializeGrid();
    }, []);

    // Timer functionality
    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if (gameStarted && !gameOver && !winner && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        // Time's up - game over
                        setGameOver(true);
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [gameStarted, gameOver, winner, timeLeft]);

    // Check for win condition
    useEffect(() => {
        if (matchedPairs >= pairsToWin && matchedPairs > 0) {
            setWinner(true);
            setShowConfetti(true);
        }
    }, [matchedPairs, pairsToWin]);

    // Reveal all cards if game over
    useEffect(() => {
        if (gameOver) {
            setGrid(prevGrid => prevGrid.map(card => ({ ...card, isFlipped: true })));
        }
    }, [gameOver]);

    // Format time as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Initialize the grid with cards
    const initializeGrid = () => {
        // Reset game state
        setFlippedCards([]);
        setMatchedPairs(0);
        setTimeLeft(40); // Reset timer to 60 seconds
        setGameOver(false);
        setWinner(false);
        setGameStarted(true); // Start the game immediately
        setShowConfetti(false);

        // Select random images for pairs
        const shuffledImages = [...cardImages].sort(() => Math.random() - 0.5);
        const selectedImages = shuffledImages.slice(0, pairsToWin);

        // Create pairs of cards - each pair with same image and pairId
        const cardPairs: MemoryCard[] = [];

        selectedImages.forEach((imageUrl, idx) => {
            // Create two cards with the same image and pairId
            for (let i = 0; i < 2; i++) {
                cardPairs.push({
                    id: cardPairs.length,
                    pairId: idx,
                    imageUrl,
                    isFlipped: false,
                    isMatched: false
                });
            }
        });

        // Shuffle the cards
        const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);

        // Set the grid
        setGrid(shuffledCards);
    };

    // Handle card click
    const handleCardClick = (id: number) => {
        // Don't allow clicks if:
        // 1. Game is over
        // 2. Winner has been declared
        // 3. Card is already flipped
        // 4. Card is already matched
        // 5. Two cards are already flipped (waiting for check)
        // 6. Time is up
        if (
            gameOver ||
            winner ||
            grid[id].isFlipped ||
            grid[id].isMatched ||
            flippedCards.length >= 2 ||
            timeLeft <= 0
        ) {
            return;
        }

        // Flip the card
        const newGrid = [...grid];
        newGrid[id].isFlipped = true;
        setGrid(newGrid);

        // Add to flipped cards
        const newFlippedCards = [...flippedCards, id];
        setFlippedCards(newFlippedCards);

        // Check if we've flipped 2 cards
        if (newFlippedCards.length === 2) {
            const [firstId, secondId] = newFlippedCards;

            // Check if cards match - using identical pairId
            if (grid[firstId].pairId === grid[secondId].pairId) {
                // Cards match!
                setTimeout(() => {
                    // Update cards to matched
                    const updatedGrid = [...grid];
                    updatedGrid[firstId].isMatched = true;
                    updatedGrid[secondId].isMatched = true;
                    setGrid(updatedGrid);

                    // Increment matched pairs
                    setMatchedPairs(prevMatches => prevMatches + 1);

                    // Reset flipped cards
                    setFlippedCards([]);

                    // Show confetti briefly for match
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 1000);
                }, 500);
            } else {
                // Cards don't match - just flip back after a delay
                setTimeout(() => {
                    // Flip cards back
                    const updatedGrid = [...grid];
                    updatedGrid[firstId].isFlipped = false;
                    updatedGrid[secondId].isFlipped = false;
                    setGrid(updatedGrid);

                    // Reset flipped cards
                    setFlippedCards([]);
                }, 800);
            }
        }
    };

    // Reset the game
    const resetGame = () => {
        initializeGrid();
    };

    // Go back to home
    const goToHome = () => {
        navigate('/eGov-Game/main-page');
    };

    // Render the component
    return (
        <div className="memory-container">
            <button className="home-button" onClick={goToHome}>
                Home
            </button>
            <button className="restart-button" onClick={resetGame} style={{ marginLeft: '10px', position: 'absolute', top: '15px', right: '15px' }}>
                Restart
            </button>

            <h1 className='text-white'>
                <div className='flex justify-center space-x-9'>
                    <div className="logos-container w-44 flex space-x-5 bg-[#ffffff] p-2 rounded-lg">
                        <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                    </div>
                    <div className="logos-container w-44 flex space-x-5 bg-[#ffffff] p-2 rounded-lg">
                        <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
                    </div>
                </div>
            </h1>

            <div className="score-panel">
                <p>Pairs: {matchedPairs}/{pairsToWin}</p>
                <p>Time: {formatTime(timeLeft)}</p>
                <p>Goal: Match all pairs</p>
            </div>

            {/* Game controls for after game over but modal is closed */}
            {gameOver && !winner && (
                <div style={{
                    width: '100%',
                    textAlign: 'center',
                    margin: '15px 0',
                    padding: '10px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                }}>
                    <h3 style={{ color: 'white', marginBottom: '10px' }}>Game Over - View All Cards</h3>
                    <button
                        onClick={resetGame}
                        style={{
                            backgroundColor: '#4caf50',
                            padding: '10px 20px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                        }}
                    >
                        Start New Game
                    </button>
                </div>
            )}

            {/* Memory Card Grid */}
            <div className="memory-grid">
                {grid.map((card, index) => (
                    <div
                        key={card.id}
                        className={`memory-card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="card-inner">
                            <div className="card-back">
                                <div className="card-logo">?</div>
                            </div>
                            <div className="card-front">
                                <img
                                    src={card.imageUrl}
                                    alt="eGov Service"
                                    className="card-image"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show matched pairs below the grid */}
            <div className="matched-pairs-container" style={{ marginTop: '20px' }}>
                {matchedPairs > 0 && (
                    <div className="matched-logos-panel" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        {grid
                            .filter(card => card.isMatched)
                            // Only show one card from each matched pair (avoid duplicates)
                            .filter((card, idx, array) =>
                                array.findIndex(c => c.pairId === card.pairId) === idx
                            )
                            .map((card, idx) => (
                                <img
                                    key={idx}
                                    src={card.imageUrl}
                                    alt={`Matched Logo ${idx + 1}`}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                        background: '#fff',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                    }}
                                />
                            ))}
                    </div>
                )}
            </div>

            {/* Confetti effect for correct matches */}
            {showConfetti && (
                <>
                    <div className="confetti left"></div>
                    <div className="confetti right"></div>
                    <div className="confetti" style={{ left: '20%' }}></div>
                    <div className="confetti" style={{ right: '20%' }}></div>
                </>
            )}

            {/* No Lives modal anymore */}

            {/* Game Over modal */}
            {gameOver && timeLeft === 0 && !winner && (
                <div className="modal game-over">
                    <div className="modal-content">
                        <h2>Time's Up!</h2>
                        <p>You matched {matchedPairs} out of {pairsToWin} pairs!</p>
                        <button onClick={() => setGameOver(false)}>View Cards</button>
                    </div>
                </div>
            )}

            {/* Winner modal */}
            {winner && (
                <div className="modal winner">
                    <div className="modal-content" style={{ position: 'relative' }}>
                        <h2>You Win!</h2>
                        <p>Congratulations! You matched all {pairsToWin} pairs!</p>
                        <p>Time remaining: {formatTime(timeLeft)}</p>
                        <button onClick={resetGame}>Play Again</button>
                        {/* Confetti in the winner modal */}
                        <div className="confetti left"></div>
                        <div className="confetti right"></div>
                        <div className="confetti" style={{ left: '20%' }}></div>
                        <div className="confetti" style={{ right: '20%' }}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemoryFlip;
