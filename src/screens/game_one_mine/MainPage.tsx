import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

// Import all the specified images
import eGovLogo from '../../assets/eGovLogo.png';
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

interface Tile {
    hasBomb: boolean;
    isClicked: boolean;
    imageIndex?: number; // Store which image to show for correct tiles
}

const MainPage = () => {
    const navigate = useNavigate();
    const gridSize = 5; // 5x5 grid
    const bombCount = 5; // 5 bombs as requested
    const winStarCount = 10; // Win condition: find more than half of the safe tiles

    const [grid, setGrid] = useState<Tile[][]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);
    const [starCount, setStarCount] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [usedImageIndices, setUsedImageIndices] = useState<number[]>([]);

    // Array of all the tile images
    const tileImages = [
        eBPLS,
        eCommerce,
        eGOV,
        eGovAI,
        eGovChain,
        eGovDocs,
        eGovPay,
        eHealth,
        eInvest,
        eKYC,
        eLGU,
        eMessages,
        eNationalID,
        eNationalIDVerify,
        eNews,
        eNGA,
        eReceipt,
        eReport,
        eResume,
        eStartUp,
        eTourism,
        eTravel,
        eVisa,
    ];

    // Initialize the grid
    useEffect(() => {
        initializeGrid();
        const savedScore = localStorage.getItem('minesweeperHighScore');
        if (savedScore) {
            setHighScore(parseInt(savedScore));
        }
    }, []);

    const initializeGrid = () => {
        // Create empty grid
        const newGrid: Tile[][] = Array(gridSize).fill(null).map(() =>
            Array(gridSize).fill(null).map(() => ({ hasBomb: false, isClicked: false }))
        );

        // Place bombs randomly
        let bombsPlaced = 0;
        while (bombsPlaced < bombCount) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);

            if (!newGrid[row][col].hasBomb) {
                newGrid[row][col].hasBomb = true;
                bombsPlaced++;
            }
        }

        setGrid(newGrid);
        setGameOver(false);
        setWinner(false);
        setStarCount(0);
        setUsedImageIndices([]); // Reset used images when game initializes
    };

    const getRandomUnusedImageIndex = () => {
        // Filter out indices that have already been used
        const availableIndices = Array.from(
            { length: tileImages.length },
            (_, i) => i
        ).filter(index => !usedImageIndices.includes(index));

        // If all images have been used, reset and use all again
        if (availableIndices.length === 0) {
            return Math.floor(Math.random() * tileImages.length);
        }

        // Select random index from available indices
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        return availableIndices[randomIndex];
    };

    const handleTileClick = (rowIndex: number, colIndex: number) => {
        if (gameOver || winner || grid[rowIndex][colIndex].isClicked) {
            return;
        }

        const newGrid = [...grid];

        // Get a random unused image index
        const randomImageIndex = getRandomUnusedImageIndex();

        newGrid[rowIndex][colIndex] = {
            ...newGrid[rowIndex][colIndex],
            isClicked: true,
            imageIndex: randomImageIndex
        };

        if (newGrid[rowIndex][colIndex].hasBomb) {
            setGameOver(true);
        } else {
            // Add this image index to used indices
            setUsedImageIndices([...usedImageIndices, randomImageIndex]);

            // Show confetti for correct tile
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 1500);

            const newStarCount = starCount + 1;
            setStarCount(newStarCount);

            if (newStarCount >= winStarCount) {
                setWinner(true);
                if (newStarCount > highScore) {
                    localStorage.setItem('minesweeperHighScore', newStarCount.toString());
                    setHighScore(newStarCount);
                }
            }
        }

        setGrid(newGrid);
    };

    const resetGame = () => {
        initializeGrid();
    };

    const goToHome = () => {
        navigate('/eGov-Game/main-page');
    };

    return (
        <div className="minesweeper-container">
            <button className="home-button" onClick={goToHome}>
                Home
            </button>
            <h1 className='text-white'>
                <img src={eGovLogo} width={150} height={150} alt="eGov Logo" className="logo" />
                Minesweeper
            </h1>
            <div className="score-panel">
                <p>Score: {starCount}</p>
                {/* <p>High Score: {highScore}</p> */}
                <p>Goal: {winStarCount} Digital Platforms</p>
            </div>

            <div className="game-grid">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid-row">
                        {row.map((tile, colIndex) => (
                            <div
                                key={colIndex}
                                className={`tile ${tile.isClicked ? 'clicked' : ''} ${tile.isClicked && tile.hasBomb ? 'bomb' : ''}`}
                                onClick={() => handleTileClick(rowIndex, colIndex)}
                            >
                                {tile.isClicked && (
                                    tile.hasBomb ? '💣' :
                                        <img
                                            src={tileImages[tile.imageIndex || 0]}
                                            alt="eGov Service"
                                            className="tile-logo"
                                        />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {showConfetti && (
                <>
                    <div className="confetti left"></div>
                    <div className="confetti right"></div>
                </>
            )}

            {gameOver && (
                <div className="modal game-over">
                    <div className="modal-content">
                        <h2>💣 Game Over! 💣</h2>
                        <p>You only found {starCount} Digital Platforms!</p>
                        <button onClick={resetGame}>Play Again</button>
                    </div>
                </div>
            )}

            {winner && (
                <div className="modal winner">
                    <div className="modal-content">
                        <h2>You Win!</h2>
                        <p>Congratulations! You found {starCount} Digital Platforms!</p>
                        <button onClick={resetGame}>Play Again</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;