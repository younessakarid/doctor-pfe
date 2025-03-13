import React, { useState } from 'react';
import Cabiner from '../assets/Cabiner.png';
import Play from '../assets/Play.png';
import Hover from '../assets/play-button.png'; 
import 'animate.css';

export default function VideoBanner() {
    const [isHovered, setIsHovered] = useState(false); 

    return (
        <div
            className='w-auto h-96 md:h-[500px] mt-6 md:mt-10 px-4 md:px-12 lg:pr-16 rounded-3xl md:rounded-[55px] relative overflow-hidden bg-cover bg-no-repeat bg-fixed bg-center flex items-center justify-center mx-4 md:mx-12'
            style={{ backgroundImage: `url(${Cabiner})` }}
        >
            <div className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <p className="text-white text-base md:text-lg mb-2 md:mb-4 animate__animated animate__fadeInUp">
                    Visite Clinick
                </p>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 animate__animated animate__fadeInUp">
                    Notre Cabinet Dentaire
                </h1>

                <p className="text-white text-sm md:text-base lg:text-lg mb-4 md:mb-8 animate__animated animate__fadeInUp">
                    Profitez d'un environnement accueillant et professionnel pour tous vos soins dentaires. Notre équipe est dédiée à votre santé bucco-dentaire.
                </p>

                <button
                    className="bg-white text-[#1a3c5d] font-medium py-2 px-4 md:py-3 md:px-6 rounded-full transition-all duration-300 hover:bg-[#0e384c] hover:text-white hover:scale-105"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <a href='https://www.youtube.com/watch?v=Y-x0efG1seA' className="flex items-center gap-2">
                        <span className="text-sm md:text-base">Play video</span>
                        {isHovered ? (
                            <img src={Hover} className="w-4 md:w-6" alt="Hover play icon" />
                        ) : (
                            <img src={Play} className="w-4 md:w-6" alt="Play icon" />
                        )}
                    </a>
                </button>
            </div>
        </div>
    );
}