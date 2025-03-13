import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { WiStars } from "react-icons/wi";
import { FiArrowRight } from "react-icons/fi";

function LocationComponent() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 pt-8 md:pt-15 px-4 md:px-0'>
      {/* Carte en premier sur desktop, deuxième sur mobile */}
      <iframe
        className='rounded-[40px] filter brightness-90 transition-all duration-300 hover:brightness-110 w-full max-w-[550px] h-64 md:h-[500px] order-2 md:order-1'
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=59%20Avenue%20de%20la%20Bourdonnais%2075007%20%E2%80%93%20PARIS+(Dental%207%20Paris%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/collections/drones/">buy drones</a>
      </iframe>

      {/* Section texte en deuxième sur mobile, première sur desktop */}
      <div className='flex flex-col gap-6 md:gap-10 max-w-[550px] w-full order-1 md:order-2'>
        <div>
          <div className='flex items-center gap-2 pb-2'>
            <WiStars className='text-lg md:text-xl text-[#1e84b5]' />
            <p className='text-lg md:text-xl text-[#1e84b5]'>CONTACT NOW</p>
          </div>
          <h1 className='text-3xl md:text-4xl text-[#0e384c] font-bold'>
            <span className='text-[#1e84b5]'>Obtenez</span> Une Consultation<br className='hidden md:block'/>
            Professionnelle Gratuite
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <SlLocationPin className='text-2xl text-[#1e84b5]' />
          <p className='text-blue-950 text-sm md:text-base'>59 Avenue de la Bourdonnais 75007 – PARIS</p>
        </div>

        <div className='flex items-center gap-3'>
          <BsTelephoneForward className='text-2xl text-[#1e84b5]' />
          <p className='text-blue-950 text-sm md:text-base'>+33 (0)1 45 63 20 00</p>
        </div>

        <div className='flex items-center gap-3'>
          <MdOutlineMarkEmailUnread className='text-2xl text-[#1e84b5]' />
          <p className='text-blue-950 text-sm md:text-base'>contact@dental7paris.com</p>
        </div>

        <div className='flex items-center gap-3'>
          <RxTimer className='text-2xl text-[#1e84b5]' />
          <p className='text-blue-950 text-sm md:text-base'>lundi au vendredi de 9h00AM à 19h00PM</p>
        </div>

        <div className='flex items-center gap-2 bg-[#1e84b5] text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:bg-[#0e384c] hover:scale-105 w-fit'>
          <button>Prendre rendez-vous</button>
          <FiArrowRight className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default LocationComponent