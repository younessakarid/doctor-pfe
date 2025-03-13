import React from 'react'
import logo from '../assets/logo.png'


function Footer() {
  return (

    <div className='mt-40 bg-[#0e384c] text-white pt-25  mb-0 relative '>
     <div className='flex justify-around flex-wrap items-start pb-11'>

        
        <div className='flex gap-6 flex-col'>
           <img src={logo} alt="" className='w-45' />
           <p className='text-l w-[350px]'>L'objectif de notre clinique est d'offrir des soins dentaires
             amicaux et attentionnés, ainsi que des traitements généraux, 
             esthétiques et spécialisés de la plus haute qualité.</p>
        </div>

       
        <div>

            <h4 className='pb-4 font-bold text-xl'>Navigation</h4>

            <ul className='flex flex-col gap-2'>
                <li><a href="" className='text-l hover:text-[#1e84b5]'>Home</a></li>
                <li><a href="" className='text-l hover:text-[#1e84b5]'>About</a></li>
                <li><a href="" className='text-l hover:text-[#1e84b5]'>Contact</a></li>
                <li><a href="" className='text-l hover:text-[#1e84b5]'>Politique de confidentialité</a></li>
            </ul>

        </div>


        <div>

            <h4 className='pb-4 font-bold text-xl'>Social Media</h4>

            <ul className='flex flex-col gap-2'>
                <li><a href="" className='text-l hover:text-[#1e84b5]'>Instagram</a></li>
            </ul>

        </div>

   
        <div>
           <h4 className='pb-4 font-bold text-xl'>Contactez-nous</h4>
           <div className='flex flex-col gap-2'>
            <h6 className='text-l'>+33 (0)1 45 63 20 00</h6>
            <h6 className='text-l'>contact@dental7paris.com</h6>
           </div>
           
        </div>            
    
     </div>
       <hr className='pb-6  mx-24 opacity-45' />
       <p className='flex justify-center pb-5 text-l'>Copyright © 2025 Dental7Paris - All Right Reserved.</p>


       
     </div>
  )
}

export default Footer