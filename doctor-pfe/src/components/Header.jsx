import React from 'react'
import head_image from '../assets/head-image.png'
import dental from '../assets/dental.png';
import icon_water from '../assets/icone-de-l-eau-bleue.png';



function Header() {
  return (
    <div>

        <section className='bg-[#252c62] w-full h-[500px] mt-10  pr-16 rounded-[55px] flex justify-between items-end relative'>
        

                    <div>
                       <h1 className='text-[200px] absolute top-1 left-45 z-[2] text-white blur-50 font-bold'>DentCare</h1>

                        <div className='flex justify-between absolute gap-100 top-1/2 left-70 items-center'>
                            <div className='flex gap-1 items-center'>
                                <img src={dental} className='w-7 bg-[#e7c3d1] rounded-full p-1' alt="" />
                                <h5 className='text-gray-300'>Reduce HB13</h5>

                            </div>

                            <div className='flex gap-1 items-center'>
                               <img src={icon_water} className='w-7 bg-[#a1dcc5] rounded-full p-1'  alt="" />
                               <h5 className='text-gray-300'>Reduce HB13</h5>
                            </div>
                        </div>
                    </div>


                   


                <p className='pb-10 pl-10 text-white'>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Odio, quasi.
                <br />Consectetur laboriosam.</p>
        
                     <img src={head_image} alt="" className='w-100 z-[3]' />
        
                      <div className='pb-10 pr-10 flex items center gap-2'>
                      <button className='text-[17px] text-[#252c62] font-bold bg-[#e7c3d1] px-8 py-2 rounded-[80px] hover:scale-110 transition-all duration-200 '>book consultation</button>
                      <button className='bg-[#e7c3d1] w-10 h-10 rounded-full hover:scale-110 transition-all duration-200'></button>

                      </div>
                     
        
        </section> 

    </div>
  )
}

export default Header