import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import eLGULogo from '../../assets/eLGULogo.png';
// Import all the specified images
// import eGovLogo from '../../assets/eGovLogo.png';
import eGovLogo from '../../assets/eGovPHLogoB.png'
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
    const [lives, setLives] = useState(2);
    const [showLivesModal, setShowLivesModal] = useState(false);

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
        setLives(2);
        setShowLivesModal(false);
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
        if (gameOver || winner || grid[rowIndex][colIndex].isClicked || showLivesModal) {
            return;
        }

        const newGrid = [...grid];
        const randomImageIndex = getRandomUnusedImageIndex();

        newGrid[rowIndex][colIndex] = {
            ...newGrid[rowIndex][colIndex],
            isClicked: true,
            imageIndex: randomImageIndex
        };

        if (newGrid[rowIndex][colIndex].hasBomb) {
            if (lives > 1) {
                setLives(lives - 1);
                setShowLivesModal(true);
            } else {
                setGameOver(true);
            }
        } else {
            setUsedImageIndices([...usedImageIndices, randomImageIndex]);
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
            {/* <button className="restart-button" onClick={resetGame} style={{ marginLeft: '10px' }}>
                Restart
            </button> */}
            <h1 className='text-white'>
                <div className='flex justify-center space-x-9'>
                    <div className="logos-container w-44 flex space-x-5 bg-[#ffffff] p-2 rounded-lg">
                        <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                    </div>
                    <div className="logos-container w-44 flex space-x-5 bg-[#ffffff] p-2 rounded-lg">
                        <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
                    </div>
                </div>
            </h1 >
            <div className="score-panel">
                <p>Score: {starCount}</p>
                <p>Lives: {lives}</p>
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

            {/* Show selected/correct logos below the grid */}
            <div className="selected-logos-panel" style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                {grid.flat().filter(tile => tile.isClicked && !tile.hasBomb && typeof tile.imageIndex === 'number').map((tile, idx) => (
                    <img
                        key={idx}
                        src={tileImages[tile.imageIndex!]}
                        alt={`Selected Logo ${idx + 1}`}
                        style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '8px', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                    />
                ))}
            </div>

            {
                showConfetti && (
                    <>
                        <div className="confetti left"></div>
                        <div className="confetti right"></div>
                    </>
                )
            }

            {
                showLivesModal && !gameOver && !winner && (
                    <div className="modal lives-modal">
                        <div className="modal-content">
                            <h2>Oops! You hit a bomb!</h2>
                            <p>You have {lives} {lives === 1 ? 'life' : 'lives'} left.</p>
                            <button onClick={() => setShowLivesModal(false)}>Continue</button>
                        </div>
                    </div>
                )
            }

            {
                gameOver && (
                    <div className="modal game-over">
                        <div className="modal-content">
                            <h2>💣 Game Over! 💣</h2>
                            <p>You only found {starCount} Digital Platforms!</p>
                            <button onClick={resetGame}>Play Again</button>
                        </div>
                    </div>
                )
            }

            {
                winner && (
                    <div className="modal winner">
                        <div className="modal-content">
                            <h2>You Win!</h2>
                            <p>Congratulations! You found {starCount} Digital Platforms!</p>
                            <button onClick={resetGame}>Play Again</button>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default MainPage;