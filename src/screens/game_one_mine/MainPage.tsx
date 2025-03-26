import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import eGovLogo from '../../assets/eGovLogo.png'; // Adjust the path if needed based on your file structure

interface Tile {
    hasBomb: boolean;
    isClicked: boolean;
}

const MainPage = () => {
    const navigate = useNavigate();
    const gridSize = 5; // 5x5 grid
    const bombCount = 3;
    const winStarCount = 10; // Stars needed to win

    const [grid, setGrid] = useState<Tile[][]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);
    const [starCount, setStarCount] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

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
    };

    const handleTileClick = (rowIndex: number, colIndex: number) => {
        if (gameOver || winner || grid[rowIndex][colIndex].isClicked) {
            return;
        }

        const newGrid = [...grid];
        newGrid[rowIndex][colIndex] = {
            ...newGrid[rowIndex][colIndex],
            isClicked: true
        };

        if (newGrid[rowIndex][colIndex].hasBomb) {
            setGameOver(true);
        } else {
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
                <p>Stars: {starCount}</p>
                <p>High Score: {highScore}</p>
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
                                    tile.hasBomb ? '💣' : <img src={eGovLogo} alt="eGov Logo" className="tile-logo" />
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
                        <h2>Game Over!</h2>
                        <p>You found {starCount} stars</p>
                        <button onClick={resetGame}>Play Again</button>
                    </div>
                </div>
            )}

            {winner && (
                <div className="modal winner">
                    <div className="modal-content">
                        <h2>You Win!</h2>
                        <p>Congratulations! You found {starCount} stars!</p>
                        <button onClick={resetGame}>Play Again</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainPage;