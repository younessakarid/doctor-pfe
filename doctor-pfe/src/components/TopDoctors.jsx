import React from 'react'
import { WiStars } from "react-icons/wi";
import { doctors } from '../assets/assets'


function TopDoctors() {
  return (
    <div className='bg-[#f1f9ff] py-8 '>
     <div className="w-screen relative left-1/2 -translate-x-1/2 py-12  px-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-[4%]">
        <div className="text-center mb-8 animate_animated animate_slideInUp" >
          <div className='flex items-center justify-center gap-1 pb-3'>
            <WiStars className='text-2xl text-[#1e84b5]' />
            <p className="text-[#1e84b5] font-small ">NOTRE ÉQUIPE</p>
          </div>
          
          <h2 className="text-4xl font-bold mb-5">
            <span className="text-[#1e84b5]">Notre Équipe</span>
            <span className="text-[#1a3c5d]"> de Dentistes Sympathiques.</span>
          </h2>
          <p className="text-gray-600">
          Des dentistes à l'écoute, offrant des soins de qualité pour un sourire éclatant.
          </p>
        </div>
        </div>
        
</div>



{/* Container for the doctor cards */}
<div className='flex gap-5 flex-wrap justify-center items-center '>
  {doctors.slice(0,5).map((item, index) => (
    <div key={index} className='rounded-[20px] w-[220x] h-[350px]  border-gray-100  transition-all duration-300'>
      <div className='flex justify-center bg-[#e7ecef] rounded-[30px] overflow-hidden'>
        <img src={item.image} alt="" className='w-[260px] h-[257px] px-6 pt-6 z-3  hover:scale-115 transition-transform duration-700 object-contain '/>
      </div>

      <div className='h-[110px] flex flex-col justify-center items-center pb-5'>
        <div className='flex gap-1 justify-center items-center'>
        </div>

        <h2 className='text-xl text-[#0e384c] font-semibold'>{item.name}</h2>
        <p className='text-[13px] text-gray-600'>{item.speciality}</p>
      </div>
    </div>
  ))}
</div>

{/* "More" button moved outside the doctor cards container for better layout */}
<div className='flex justify-center mt-3'>
  <button className='bg-[#e7ecef] text-[#252c62] px-6 py-2 rounded-[65px] hover:scale-110 hover:bg-[#0e384c] transition-all duration-300 font-semibold hover:text-white'>
    More
  </button>
</div>


    </div>
  )
}

export default TopDoctors