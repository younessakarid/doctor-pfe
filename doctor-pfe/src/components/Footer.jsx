import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className='mt-40 bg-[#0e384c] text-white pt-16 md:pt-25 rounded-t-[20px] relative'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='flex flex-col md:flex-row justify-around gap-8 md:gap-4 lg:gap-6 pb-11'>

          
          <div className='flex gap-6 flex-col max-w-[350px] mx-auto md:mx-0'>
            <img src={logo} alt="Logo" className='w-32 md:w-45 mx-auto md:mx-0' />
            <p className='text-base md:text-l text-center md:text-left'>
              L'objectif de notre clinique est d'offrir des soins dentaires
              amicaux et attentionnés, ainsi que des traitements généraux, 
              esthétiques et spécialisés de la plus haute qualité.
            </p>
          </div>

          
          <div className='text-center md:text-left'>
            <h4 className='pb-4 font-bold text-lg md:text-xl'>Navigation</h4>
            <ul className='flex flex-col gap-2'>
              <li><a href="" className='text-base md:text-l hover:text-[#1e84b5]'>Home</a></li>
              <li><a href="" className='text-base md:text-l hover:text-[#1e84b5]'>About</a></li>
              <li><a href="" className='text-base md:text-l hover:text-[#1e84b5]'>Contact</a></li>
              <li><a href="" className='text-base md:text-l hover:text-[#1e84b5]'>Politique de confidentialité</a></li>
            </ul>
          </div>

          
          <div className='text-center md:text-left'>
            <h4 className='pb-4 font-bold text-lg md:text-xl'>Social Media</h4>
            <ul className='flex flex-col gap-2'>
              <li><a href="" className='text-base md:text-l hover:text-[#1e84b5]'>Instagram</a></li>
            </ul>
          </div>

          
          <div className='text-center md:text-left'>
            <h4 className='pb-4 font-bold text-lg md:text-xl'>Contactez-nous</h4>
            <div className='flex flex-col gap-2'>
              <h6 className='text-base md:text-l'>+33 (0)1 45 63 20 00</h6>
              <h6 className='text-base md:text-l'>contact@dental7paris.com</h6>
            </div>
          </div>

        </div>

        <hr className='pb-6 mx-4 md:mx-24 opacity-45' />
        <p className='text-center pb-5 text-base md:text-l px-4'>
          Copyright © 2025 Dental7Paris - All Right Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer