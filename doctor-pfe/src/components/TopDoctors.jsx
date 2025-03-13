import React from 'react'
import { doctors } from '../assets/assets'


function TopDoctors() {
  return (
    <div >




{/* Container for the doctor cards */}
<div className='flex gap-5 flex-wrap justify-center items-center '>
  {doctors.slice(0,5).map((item, index) => (
    <div key={index} className='rounded-[20px] w-[220x] h-[350px] shadow-sm border border-gray-100 hover:border-[#252c62] transition-all duration-300'>
      <div className='flex justify-center bg-[#eaefff] rounded-[20px]'>
        <img src={item.image} alt="" className='w-[260px] h-[257px] px-6 pt-6  hover:scale-105'/>
      </div>

      <div className='h-[110px] flex flex-col justify-center items-center pb-5'>
        <div className='flex gap-1 justify-center items-center'>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <p className='text-[13px] text-green-500'>Disponible</p>
        </div>

        <h2 className='text-xl text-[#252c62] font-semibold'>{item.name}</h2>
        <p className='text-[13px] text-[#252c62]'>{item.speciality}</p>
      </div>
    </div>
  ))}
</div>

{/* "More" button moved outside the doctor cards container for better layout */}
<div className='flex justify-center mt-8'>
  <button className='bg-[#eaefff] text-[#252c62] px-6 py-2 rounded-[65px] hover:scale-110 hover:bg-[#1b214f] transition-all duration-300 font-semibold hover:text-white'>
    More
  </button>
</div>


    </div>
  )
}

export default TopDoctors