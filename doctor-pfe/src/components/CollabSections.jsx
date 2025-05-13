import React from 'react'
import { BsTelephoneXFill } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Untitled1 from "../assets/Untitled1.png";
import Untitled2 from "../assets/Untitled2.png";
import Untitled3 from "../assets/Untitled3.png";

function CollabSections() {
  return (
    <div className='bg-[#f1f9ff] py-6 md:py-9 px-4 mt-0'>
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16 pr-15'>
      
      <div className='flex flex-col md:flex-row items-center gap-16 md:gap-24'>
        
        <div className='flex items-center mb-10 md:mb-0'>
          <div>
            <h4 className='text-[#0e384c] items-center text-base md:text-2xl font-bold'>La confiance du principal fournisseur <br/> d'assurance du secteur</h4>
          </div>
        </div>
        
        <div className='w-60 flex gap-10'>
          <img src={Untitled1} alt="Logo 1" />
          <img src={Untitled2} alt="Logo 2" />
          <img src={Untitled3} alt="Logo 3" />
        </div>
        
      </div>
      
    </div>
  </div>
  )
}

export default CollabSections