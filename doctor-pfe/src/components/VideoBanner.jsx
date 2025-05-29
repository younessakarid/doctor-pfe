import React, { useState } from 'react';
import Cabiner from '../assets/Cabiner.png';
import Play from '../assets/Play.png';
import Hover from '../assets/play-button.png'; 
import 'animate.css';

export default function VideoBanner() {
    const [isHovered, setIsHovered] = useState(false); 

    return (
        <div
            className="w-full h-[400px] sm:h-[450px] md:h-[500px] mt-6 md:mt-10 px-4 sm:px-6 md:px-12 lg:pr-16 rounded-3xl md:rounded-[55px] relative overflow-hidden bg-cover bg-center flex items-center justify-center mx-auto"
            style={{ backgroundImage: `url(${Cabiner})` }}
        >
            <div className="text-center max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl px-2">
                <p className="text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 animate__animated animate__fadeInUp">
                    Visite Clinick
                </p>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 animate__animated animate__fadeInUp leading-tight">
                    Notre Cabinet Dentaire
                </h1>

                <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 animate__animated animate__fadeInUp">
                    Profitez d'un environnement accueillant et professionnel pour tous vos soins dentaires. Notre équipe est dédiée à votre santé bucco-dentaire.
                </p>

                <button
                    className="bg-white text-[#1a3c5d] font-medium py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-full transition-all duration-300 hover:bg-[#0e384c] hover:text-white hover:scale-105"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <a
                        href='https://www.youtube.com/watch?v=Y-x0efG1seA'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                        <span className="text-sm sm:text-base">Play video</span>
                        <img
                            src={isHovered ? Hover : Play}
                            className="w-4 sm:w-5 md:w-6"
                            alt="Play icon"
                        />
                    </a>
                </button>
            </div>
        </div>
    );
}
