import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './choose_game.css'
import Game1Video from '../assets/Game_1.mp4'
import Game2Video from '../assets/Game_2.mp4'
import Game3Video from '../assets/Game_3.mp4'
import Game4Video from '../assets/Game_4.mp4'
import eGovLogo from '../assets/eGovPHLogoB.png'
import eLGULogo from '../assets/eLGULogo.png'
import Button from '@/components/button/button.tsx'
import BGImage from '../assets/9c1a30a1-14c1-4326-a173-1e8fd93e440f.png'

const UNLOCK_CODE = '@dict2o2o'
const LS_KEY = 'egov-games-unlocked'

const choose_game = () => {
    const navigate = useNavigate()
    const [unlocked, setUnlocked] = useState(() => localStorage.getItem(LS_KEY) === 'true')
    const [codeInput, setCodeInput] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        localStorage.setItem(LS_KEY, String(unlocked))
    }, [unlocked])

    const handleGameOneClick = () => navigate('/eGov-Game/game-one')
    const handleGameTwoClick = () => navigate('/eGov-Game/game-two')
    const handleMemoryFlipClick = () => navigate('/eGov-Game/memory-flip')
    const handleDinoRunnerClick = () => navigate('/eGov-Game/dino-runner')
    const handleEGovMazeClick = () => navigate('/eGov-Game/egov-maze')
    const handleRouletteClick = () => navigate('/eGov-Game/roulette')
    const handleGuessImposterClick = () => navigate('/eGov-Game/guess-imposter')
    const handleSkribblClick = () => navigate('/eGov-Game/skribbl')
    const handlePdfCompressorClick = () => navigate('/eGov-Game/pdf-compressor')
    const handleCollageMakerClick = () => navigate('/eGov-Game/collage-maker')

    const handleUnlock = () => {
        if (codeInput === UNLOCK_CODE) {
            setUnlocked(true)
            setError(false)
            setPanelOpen(false)
            setCodeInput('')
        } else {
            setError(true)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleUnlock()
    }

    return (
        <div className="game-selection-container">

            {/* Unlock Panel - top right */}
            <div className="unlock-panel">
                <button
                    className="unlock-toggle-btn"
                    onClick={() => setPanelOpen(prev => !prev)}
                    title={unlocked ? 'All games unlocked' : 'Enter unlock code'}
                >
                    {unlocked ? '🔓' : '🔒'}
                </button>
                {panelOpen && !unlocked && (
                    <div className="unlock-form">
                        <p className="unlock-label">Enter unlock code</p>
                        <input
                            type="password"
                            className={`unlock-input${error ? ' unlock-input-error' : ''}`}
                            placeholder="Code..."
                            value={codeInput}
                            onChange={e => { setCodeInput(e.target.value); setError(false) }}
                            onKeyDown={handleKeyDown}
                            autoFocus
                        />
                        <button className="unlock-submit-btn" onClick={handleUnlock}>
                            Unlock
                        </button>
                        {error && <p className="unlock-error-msg">Invalid code. Try again.</p>}
                    </div>
                )}
                {panelOpen && unlocked && (
                    <div className="unlock-success-panel">
                        <p className="unlock-success-msg">All games unlocked!</p>
                        <button
                            className="lock-again-btn"
                            onClick={() => { setUnlocked(false); setPanelOpen(false) }}
                        >
                            🔒 Lock games
                        </button>
                    </div>
                )}
            </div>

            <p className=' fixed bottom-0 mb-2 text-[#393939]'>Developed by: R10 eGov Programmers</p>
            <img src={BGImage} className=' pointer-events-none mt-28 w-full object-contain absolute z-0 bottom-0' alt="" />

            {/* Logo Header */}
            <div className="logos-container">
                <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
            </div>

            <h1 className="selection-title uppercase font-bold">Choose Your Game</h1>

            <div className="game-buttons-container">
                {/* Game 1 - Mine eGov */}
                <div className="game-option flex flex-col gap-2">
                    <button className="game-button game-one" onClick={handleGameOneClick}>
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game1Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game One</span>
                    </button>
                    <Button onClick={handleGameOneClick} text="Mine eGov!" />
                </div>

                {/* Game 2 - Flappy Bird */}
                <div className="game-option flex flex-col gap-2">
                    <button className="game-button game-two" onClick={handleGameTwoClick}>
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game2Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game Two</span>
                    </button>
                    <Button onClick={handleGameTwoClick} text="Flappy Birdi'eGov" />
                </div>

                {/* Game 3 - Memory Flip */}
                <div className="game-option flex flex-col gap-2">
                    <button className="game-button game-three" onClick={handleMemoryFlipClick}>
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game3Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game Three</span>
                    </button>
                    <Button onClick={handleMemoryFlipClick} text="Memory Flip" />
                </div>

                {/* Game 4 - Dino Runner */}
                <div className="game-option flex flex-col gap-2">
                    <button className="game-button game-four" onClick={handleDinoRunnerClick}>
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game4Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Dino Runner</span>
                    </button>
                    <Button onClick={handleDinoRunnerClick} text="eGov Dino Runner" />
                </div>

                {/* Game 5 - eGov Roulette */}
                <div className="game-option flex flex-col gap-2">
                    <button className="game-button game-five" onClick={handleRouletteClick}>
                        <div className="video-background hover:scale-[1.05] ease-out duration-500 flex items-center justify-center bg-[#020617]">
                            <img src={eGovLogo} alt="eGov Roulette thumbnail" className="h-20 w-auto opacity-90" />
                        </div>
                        <span className="button-text">Game Five</span>
                    </button>
                    <Button onClick={handleRouletteClick} text="eGov Roulette" />
                </div>

                {/* Locked games — revealed only after entering the correct code */}
                {unlocked && (
                    <>
                        {/* Game 6 - Guess the Imposter */}
                        <div className="game-option flex flex-col gap-2">
                            <button className="game-button game-six" onClick={handleGuessImposterClick}>
                                <div className="video-background hover:scale-[1.05] ease-out duration-500 flex items-center justify-center bg-[#0d1117]">
                                    <span style={{ fontSize: '3.5rem' }}>🕵️</span>
                                </div>
                                <span className="button-text">Game Six</span>
                            </button>
                            <Button onClick={handleGuessImposterClick} text="Guess the Imposter" />
                        </div>

                        {/* Game 7 - eGov Skribbl */}
                        <div className="game-option flex flex-col gap-2">
                            <button className="game-button game-seven" onClick={handleSkribblClick}>
                                <div className="video-background hover:scale-[1.05] ease-out duration-500 flex items-center justify-center bg-[#0f1e2e]">
                                    <span style={{ fontSize: '3.5rem' }}>🎨</span>
                                </div>
                                <span className="button-text">Game Seven</span>
                            </button>
                            <Button onClick={handleSkribblClick} text="eGov Skribbl" />
                        </div>

                        {/* eGov Maze */}
                        <div className="game-option flex flex-col gap-2">
                            <button className="game-button game-five" onClick={handleEGovMazeClick}>
                                <div className="video-background hover:scale-[1.05] ease-out duration-500 flex items-center justify-center bg-[#020617]">
                                    <img src={eGovLogo} alt="eGov Maze thumbnail" className="h-20 w-auto opacity-90" />
                                </div>
                                <span className="button-text">Maze</span>
                            </button>
                            <Button onClick={handleEGovMazeClick} text="eGov Maze" />
                        </div>

                        {/* PDF Compressor */}
                        <div className="game-option flex flex-col gap-2">
                            <button
                                className="game-button game-five"
                                onClick={handlePdfCompressorClick}
                                style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)', position: 'relative', overflow: 'hidden' }}
                            >
                                <span className="button-text">PDF Compressor</span>
                            </button>
                            <Button onClick={handlePdfCompressorClick} text="Compress PDFs" />
                        </div>

                        {/* Collage Maker */}
                        <div className="game-option flex flex-col gap-2">
                            <button className="game-button game-five" onClick={handleCollageMakerClick}>
                                <div className="video-background hover:scale-[1.05] ease-out duration-500 flex items-center justify-center bg-[#1a1a2e]">
                                    <span style={{ fontSize: '3.5rem' }}>🖼️</span>
                                </div>
                                <span className="button-text">Collage Maker</span>
                            </button>
                            <Button onClick={handleCollageMakerClick} text="Collage Maker" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default choose_game
