import React from 'react'
import { BsTelephoneXFill } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

function UnderHeader() {
  return (
    <div className='bg-[#0e384c] py-6 md:py-9 px-4 mt-0'>


      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0'>
        
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-7'>
          
          <div className='flex items-center gap-3'>
            <BsTelephoneXFill className='text-2xl md:text-3xl text-gray-100' />
            <div>
              <h4 className='text-gray-100 text-base md:text-xl font-bold'>Avez-vous besoin de services dentaires ?</h4>
              <h4 className='text-gray-300 text-sm md:text-base'>Appelez au : +33 (0)1 45 63 20 00</h4>
            </div>
          </div>

          
          <div className='text-white text-2xl opacity-15 hidden md:block'>|</div>

          
          <div className='flex items-center gap-3'>
            <IoTimerOutline className='text-2xl md:text-3xl text-gray-100' />
            <div>
              <h4 className='text-gray-100 text-base md:text-xl font-bold'>Horaires d'ouverture</h4>
              <h4 className='text-gray-300 text-sm md:text-base'>lundi au vendredi de 9h00AM à 19h00PM</h4>
            </div>
          </div>
        </div>

     
        <div className='flex items-center gap-2 bg-[#1e84b5] rounded-full text-white 
                       px-4 py-2 md:px-6 md:py-3 hover:scale-105 md:hover:scale-110 
                       transition-all duration-200 hover:animate-none md:hover:animate-bounce
                       whitespace-nowrap'>
          <button className='text-sm md:text-base'>Prendre rendez-vous</button>
          <GoArrowUpRight className='text-[#1e84b5] bg-white p-1 text-2xl md:text-3xl rounded-full shrink-0' />
        </div>
      </div>
    </div>
  )
}

export default UnderHeader