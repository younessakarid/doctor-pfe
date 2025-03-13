import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { WiStars } from "react-icons/wi";
import { GoArrowUpRight } from "react-icons/go";
import hero_img from '../assets/hero_img.png'
import { FaStar } from "react-icons/fa";
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import { PiTooth } from "react-icons/pi";
import { GiToothbrush } from "react-icons/gi";


function Header() {
  return (
    <div >

        <section className='bg-[#eff8ff] w-full h-auto l  pr-16  pt-7 flex justify-between items-center relative'>
        
  
          
                <div className='flex flex-col gap-10 mx-30 pt-6 '>
        

                   <div>
                    <h1 className='text-6xl text-[#0e384c] font-bold'>Vivez<span className='text-6xl text-[#1e84b5] font-bold'> l'excellence<br/> dentaire</span>  avec une <br/>touche de douceur.</h1>
                  </div>
                  
        
                  <div>
                    <p  className='text-[#5c7b8a]'>Il est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu <br/> lisible d'une page lorsqu'il en examine la mise en page. L'intérêt d'utiliser <br/>Lorem Ipsum est qu'il possède une distribution de lettres plus ou moins <br/> normale.</p>
                  </div>
        
                  <div className='flex items-center gap-2 text-[17px]  text-white bg-[#1e84b5] py-[9px] pl-4 mr-80 rounded-[80px] hover:scale-110 transition-all duration-200 hover:animate-bounce'>
                    <button>Prendre rendez-vous</button>
                    <GoArrowUpRight className='text-[#1e84b5] bg-white p-1 text-3xl rounded-full'  />
                  </div>
        
                  <hr className='color-[#1e84b5] opacity-10' />
                  <p className='flex gap-2 text-l text-[#0f4766]'>Google Rating <span className='text-[#ffa800] flex items-center gap-1'> 5.0 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>  based on 492 reviews</p>
                  
                  <img src={star2} alt="" className='absolute w-40 opacity-25 animate-pulse top-6 left-8' />
                  <img src={star2} alt="" className='absolute w-30 opacity-5 bottom-40 left-165' />
                </div>
          

                <div className='relative'> 
                  <img src={hero_img} className='w-[650px] h-[605px]'  alt="" />
                  <img src={star1} alt="" className='absolute w-40 opacity-90 animate-pulse top-1' />
                   
                   <div className='absolute bg-white top-35 left-16 rounded-full hover:bg-[#0e384c] duration-300 hover:animate-ping '>
                   <PiTooth className='p-2 w-[70px] text-[#1e84b5]  h-[70px] hover:text-white' />
                   </div>

                   <div className='absolute bg-white top-70 right-16 rounded-full hover:bg-[#0e384c] duration-300 hover:animate-ping '>
                   <GiToothbrush className='p-2 w-[70px] text-[#1e84b5]  h-[70px] hover:text-white' />
                   </div>
                </div>
               

        </section>
    </div>
  )
}

export default Header