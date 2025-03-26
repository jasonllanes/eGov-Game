import React from 'react'
import { useNavigate } from 'react-router-dom'
import './choose_game.css'
// Import videos 
import Game1Video from '../assets/Game_1.mp4'
import Game2Video from '../assets/Game_2.mp4'
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

    return (
        <div className="game-selection-container  ">
            <p className=' fixed bottom-0 mb-2 text-[#393939]'>Developed by: eGov Boyz</p>
            <img src={BGImage} className=' pointer-events-none mt-28 w-full object-contain absolute z-0 bottom-0' alt="" />

            {/* Logo Header */}
            <div className="logos-container">
                <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
            </div>

            <h1 className="selection-title uppercase font-bold">Choose Your Game</h1>

            <div className="game-buttons-container">
                <div className="game-option  flex flex-col gap-2">
                    <button
                        className="game-button game-one "
                        onClick={handleGameOneClick}
                    >
                        <video className="video-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game1Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game One</span>
                    </button>
                    <Button onClick={handleGameOneClick} text="Mine eGov" />

                </div>

                <div className="game-option flex flex-col gap-2">


                    <button
                        className="game-button game-two"
                        onClick={handleGameTwoClick}
                    >
                        <video className="ideo-background hover:scale-[1.05] ease-out duration-500" autoPlay muted loop>
                            <source src={Game2Video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <span className="button-text">Game Two</span>
                    </button>

                    <Button onClick={handleGameTwoClick} text="Flap eGov" />
                </div>
            </div>
        </div>
    )
}

export default choose_game