import React, { useState } from 'react'; // Import useState
import Cabiner from '../assets/Cabiner.png';
import Play from '../assets/Play.png';
import Hover from '../assets/play-button.png'; // Hover icon
import 'animate.css';

export default function VideoBanner() {
    const [isHovered, setIsHovered] = useState(false); // State for hover

    return (
        <div
            className='w-full h-[500px] mt-10   pr-16 rounded-[55px] relative overflow-hidden bg-cover bg-no-repeat bg-fixed bg-center flex items-center justify-center'
            style={{ backgroundImage: `url(${Cabiner})` }}
        >
            <div className="text-center max-w-2xl">
            
                <p className="text-white text-lg mb-4 animate__animated animate__fadeInUp">
                    Visite Clinick
                </p>

               
                <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">
                    Notre Cabinet Dentaire
                </h1>

                <p className="text-white text-lg mb-8 animate__animated animate__fadeInUp">
                    Profitez d'un environnement accueillant et professionnel pour tous vos soins dentaires. Notre équipe est dédiée à votre santé bucco-dentaire.
                </p>

              
                <button
                    className="bg-white text-[#1a3c5d] font-medium py-3 px-6 rounded-full transition-all duration-300 hover:bg-[#1c98ed] hover:text-white hover:scale-105"
                    onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                >
                    <a href='https://www.youtube.com/watch?v=Y-x0efG1seA' className="flex items-center gap-2">
                        Play video
                 
                        {isHovered ? (
                            <img src={Hover} className="w-6" alt="Hover play icon" />
                        ) : (
                            <img src={Play} className="w-6" alt="Play icon" />
                        )}
                    </a>
                </button>
            </div>
        </div>
    );
}