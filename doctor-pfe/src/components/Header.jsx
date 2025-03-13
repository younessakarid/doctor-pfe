import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import hero_img from '../assets/hero_img.png'
import { FaStar } from "react-icons/fa";
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import { PiTooth } from "react-icons/pi";
import { GiToothbrush } from "react-icons/gi";

function Header() {
  return (
    <div className="bg-[#eff8ff] w-full  overflow-x-hidden flex justify-center lg:pt-9 relative">
    <section className='w-full max-w-7xl h-auto px-4 lg:pl-10 pt-7 flex flex-col lg:flex-row justify-center items-center mb-0'>

        {/* Text Content */}
        <div className='flex flex-col pl-2 gap-4 md:gap-5 w-auto md:pt-6 lg:max-w-[50%]'>
          <h1 className='text-5xl md:text-6xl text-[#0e384c]  font-bold leading-tight'>
            Vivez<span className='text-[#1e84b5]'> l'excellence<br/> dentaire</span>  avec une <br/>touche de douceur.
          </h1>

          <p className='text-[#5c7b8a] text-base md:text-lg'>
            Il est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page 
            lorsqu'il en examine la mise en page. L'intérêt d'utiliser Lorem Ipsum est qu'il possède une distribution 
            de lettres plus ou moins normale.
          </p>

          {/* Bouton corrigé */}
          <div className='flex items-center  gap-2 w-fit text-sm md:text-[17px] text-white bg-[#1e84b5] py-2 md:py-3 px-6 rounded-full hover:scale-105 transition-all duration-200'>
            <button className='whitespace-nowrap'>Prendre rendez-vous</button>
            <GoArrowUpRight className='text-[#1e84b5] bg-white p-1 text-3xl rounded-full shrink-0' />
          </div>

          <hr className='border-[#1e84b5] opacity-10' />

          <div className='flex flex-row justify-center lg:justify-start md:flex-row gap-2 text-sm md:text-base text-[#0f4766] '>
            <span>Google Rating</span>
            <span className='text-[#ffa800] flex items-center gap-1'>
              5.0 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            <span>based on 492 reviews</span>
          </div>

          {/* Decorative Stars */}
          <img src={star2} alt="" className='absolute w-20 md:w-40 opacity-25 animate-pulse top-14 left-19 hidden md:block' />
        </div>

        {/* Image Section */}
        <div className='relative mt-8 lg:mt-0 lg:ml-10'>
        <img 
           src={hero_img} 
           className='w-full max-w-[650px] h-auto md:h-auto object-contain mb-0' 
           alt="Dental illustration" 
        />

          <img 
            src={star1} 
            alt="decoration" 
            className='absolute w-20 md:w-40 opacity-90 animate-pulse top-1 right-4 md:right-0' 
          />

          <div className='absolute bg-white top-[20%] left-8 md:left-10 rounded-full p-2 hover:bg-[#0e384c] duration-300 hover:animate-ping'>
            <PiTooth className='w-8 h-8 md:w-[70px] md:h-[70px] text-[#1e84b5] hover:text-white' />
          </div>

          <div className='absolute bg-white bottom-[30%] right-10 md:right-0 rounded-full p-2 hover:bg-[#0e384c] duration-300 hover:animate-ping'>
            <GiToothbrush className='w-8 h-8 md:w-[70px] md:h-[70px] text-[#1e84b5] hover:text-white' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header











