import { useNavigate } from 'react-router-dom'
import './choose_game.css'
// Import videos / thumbnails 
import Game1Video from '../assets/Game_1.mp4'
import Game2Video from '../assets/Game_2.mp4'
import Game3Video from '../assets/Game_3.mp4'
import Game4Video from '../assets/Game_4.mp4'
// Import logos
import eGovLogo from '../assets/eGovPHLogoB.png'
import eLGULogo from '../assets/eLGULogo.png'
import Button from '@/components/button/button.tsx'
import BGImage from '../assets/9c1a30a1-14c1-4326-a173-1e8fd93e440f.png'
const choose_game = () => {
    const navigate = useNavigate()

    const handleGameOneClick = () => {
        navigate('/eGov-Game/game-one')
    }

    const handleGameTwoClick = () => {
        navigate('/eGov-Game/game-two')
    }

    const handleMemoryFlipClick = () => {
        navigate('/eGov-Game/memory-flip')
    }

    const handleDinoRunnerClick = () => {
        navigate('/eGov-Game/dino-runner')
    }

    const handleEGovMazeClick = () => {
        navigate('/eGov-Game/egov-maze')
    }

    // const handlePdfCompressorClick = () => {
    //     navigate('/eGov-Game/pdf-compressor')
    // }

    return (
        <div className="game-selection-container  ">
            <p className=' fixed bottom-0 mb-2 text-[#393939]'>Developed by: R10 eGov Programmers</p>
            <img src={BGImage} className=' pointer-events-none mt-28 w-full object-contain absolute z-0 bottom-0' alt="" />

            {/* Logo Header */}
            <div className="logos-container">
                <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
            </div>

            <h1 className="selection-title uppercase font-bold">Choose Your Game</h1>

            <div className="game-buttons-container">
                <div className="game-option flex flex-col gap-2">
                    <button
                        className="game-button game-one"
                        onClick={handleGameOneClick}
                    >
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game1Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game One</span>
                    </button>
                    <Button onClick={handleGameOneClick} text="Mine eGov!" />
                </div>

                <div className="game-option flex flex-col gap-2">
                    <button
                        className="game-button game-two"
                        onClick={handleGameTwoClick}
                    >
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game2Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game Two</span>
                    </button>
                    <Button onClick={handleGameTwoClick} text="Flappy Birdi'eGov" />
                </div>

                <div className="game-option flex flex-col gap-2">
                    <button
                        className="game-button game-three"
                        onClick={handleMemoryFlipClick}
                    >
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game3Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game Three</span>
                    </button>
                    <Button onClick={handleMemoryFlipClick} text="Memory Flip" />
                </div>

                <div className="game-option flex flex-col gap-2">
                    <button
                        className="game-button game-four"
                        onClick={handleDinoRunnerClick}
                    >
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game4Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Dino Runner</span>
                    </button>
                    <Button onClick={handleDinoRunnerClick} text="eGov Dino Runner" />
                </div>

                <div className="game-option flex flex-col gap-2">
                    <button
                        className="game-button game-five"
                        onClick={handleEGovMazeClick}
                    >
                        <div className="video-background hover:scale-[1.05] ease-out duration-500 flex items-center justify-center bg-[#020617]">
                            <img
                                src={eGovLogo}
                                alt="eGov Maze thumbnail"
                                className="h-20 w-auto opacity-90"
                            />
                        </div>
                        <span className="button-text">Game Five</span>
                    </button>
                    <Button onClick={handleEGovMazeClick} text="eGov Maze" />
                </div>

                {/* <div className="game-option flex flex-col gap-2">
                    <button
                        className="game-button game-five"
                        onClick={handlePdfCompressorClick}
                        style={{
                            background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <span className="button-text">PDF Compressor</span>
                    </button>
                    <Button onClick={handlePdfCompressorClick} text="Compress PDFs" />
                </div> */}
            </div>
        </div>
    )
}

export default choose_game