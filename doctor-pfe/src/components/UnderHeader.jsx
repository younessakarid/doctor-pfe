import React from 'react'
import { BsTelephoneXFill } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

function UnderHeader() {
  return (
    <div className='bg-[#0e384c] flex justify-around py-9 flex-wrap  items-center'>
        
        <div className='flex justify-center gap-7 items-center'>
        <div className='flex justify-center items-center gap-3'>
        <BsTelephoneXFill className='text-3xl text-gray-100' />
        <div>
            <h4 className='text-gray-100 text-xl font-bold'>Avez-vous besoin de services dentaires ?</h4>
            <h4 className='text-gray-300'>Appelez au : +33 \(0)1 45 63 20 00</h4>
        </div>
        </div>

        <div className='text-white text-3xl opacity-15'>|</div>

        <div className='flex justify-center items-center gap-3'>
        <IoTimerOutline className='text-4xl text-gray-100' />
        <div>
            <h4 className='text-gray-100 text-xl font-bold'> Horaires d'ouverture</h4>
            <h4 className='text-gray-300'>lundi au vendredi de 9h00AM à 19h00PM</h4>
        </div>
        </div>
        </div>

        <div className='flex items-center px-3 py-2 bg-[#1e84b5]  rounded-[80px] text-white gap-2 hover:scale-110 transition-all duration-200 '>
                           <button>Prendre rendez-vous</button>
                           <GoArrowUpRight className='text-[#1e84b5] bg-white p-1 text-3xl rounded-full'  />
                          </div>
        </div>
  )
}

export default UnderHeader