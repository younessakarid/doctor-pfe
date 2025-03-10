import React from 'react'
import { doctors } from '../assets/assets'

function TopDoctors() {
  return (
    <div>

        <h1 className='flex justify-center pt-8 pb-4 font-bold text-2xl'>Les meilleurs médecins à réserver.</h1>
        <p className='flex justify-center pb-8 text-sm'>Parcourez simplement notre vaste liste de médecins de confiance.</p>

        <div className='flex gap-5 flex-wrap justify-center items-center'>
            {doctors.slice(0,4).map((item,index)=> 
              
              <div className='rounded-[20px]  w-[280px] h-[360px] shadow-sm  border-1 border-gray-100 hover:border-[#252c62] transition-all duration-300 hover:scale-105'>

                <div className='flex justify-center bg-gray-100 rounded-[20px]'>
                 <img src={item.image} key={index} alt="" className='w-[260px] h-[270px] px-6 pt-6'/>
                </div>


                 <div className=' h-[110px] flex flex-col justify-center items-center pb-6'>
                    <div className='flex gap-1 justify-center items-center'>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className='text-[13px] text-green-500'>Disponible</p>
                    </div>
                    
                    
                    <h2 key={index} className='text-xl text-[#252c62]  font-semibold '>{item.name}</h2>
                    <p key={index} className='text-[13px] text-[#252c62]'>{item.speciality}</p>
                 </div>

              </div>
            
            )}

            <button className='flex justify-center bg-[#252c62] text-white px-6 py-2 rounded-[65px] mt-3'>more</button>
        </div>
    </div>
  )
}

export default TopDoctors