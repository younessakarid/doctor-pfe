import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { WiStars } from "react-icons/wi";
import { GoArrowUpRight } from "react-icons/go";

function LocationComponent() {
  return (
   <div className='flex justify-center items-center gap-20 pt-15 flex-wrap'>

    <iframe
      className='rounded-[40px] filter brightness-90 transition-all duration-300 hover:brightness-110'
      width="550"
      height="500"
      src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=59%20Avenue%20de%20la%20Bourdonnais%2075007%20%E2%80%93%20PARIS+(Dental%207%20Paris%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
       >
      <a href="https://www.gps.ie/collections/drones/">buy drones</a>
    </iframe>
  
        <div className='flex flex-col gap-10'>

           <div>
           <div className='flex items-center gap-2 pb-2'>
            <WiStars className='text-l text-[#1e84b5]' />
            <p className='text-l  text-[#1e84b5]'>CONTACT NOW</p>
          </div>
            <h1 className='text-4xl text-[#0e384c] font-bold'><span className='text-4xl text-[#1e84b5] font-bold'>Obtenez</span> Une Consultation <br/>Professionnelle</h1>
          </div>
          

          <div className='flex items-center gap-3'>
            <SlLocationPin className='text-2xl text-[#1e84b5]'  />
            <p className='text-blue-950'>59 Avenue de la Bourdonnais 75007 – PARIS</p>
          </div>

          <div className='flex items-center gap-3'>
            <BsTelephoneForward className='text-2xl text-[#1e84b5]'  />
            <p className='text-blue-950'>+33 (0)1 45 63 20 00</p>
          </div>

          <div className='flex items-center gap-3'>
            <MdOutlineMarkEmailUnread  className='text-2xl text-[#1e84b5]' />
            <p className='text-blue-950'>contact@dental7paris.com</p>
          </div>

          <div className='flex items-center gap-3'>
            <RxTimer className='text-2xl text-[#1e84b5]' />
            <p className='text-blue-950'> lundi au vendredi de 9h00AM à 19h00PM</p>
          </div>

          <div className='flex items-center gap-2 text-[17px]  text-white bg-[#1e84b5] py-[9px] pl-4 mr-57 rounded-[80px] hover:scale-110 transition-all duration-200 hover:animate-bounce'>
                    <button>Prendre rendez-vous</button>
                    <GoArrowUpRight className='text-[#1e84b5] bg-white p-1 text-3xl rounded-full'  />
           </div>

          
          
        </div>
   
   </div>
  )
}

export default LocationComponent