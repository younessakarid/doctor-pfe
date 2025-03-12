import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { WiStars } from "react-icons/wi";
import { GoArrowUpRight } from "react-icons/go";
import hero_img from '../assets/hero_img.png'
import { FaStar } from "react-icons/fa";



function Header() {
  return (
    <div >

        <section className='bg-[#eff8ff] w-full h-auto l  pr-16  pt-7 flex justify-around items-center relative'>
        
  
          
                <div className='flex flex-col gap-10 mx-30'>
        

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
                  
                  
                </div>
          

                <img src={hero_img}  alt="" />

        </section>
    </div>
  )
}

export default Header





