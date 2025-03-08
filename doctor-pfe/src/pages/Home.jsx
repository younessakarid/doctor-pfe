import React from 'react'
import image from '../assets/image.png'

function Home() {
  return (
    <div>

        <section className='bg-blue-500 w-full h-[500px] mt-10 rounded-[55px] flex justify-between items-end relative'>

            <h1 className='text-[200px] absolute top-1 left-39 z-[2] text-white blur-50'>HelthCare</h1>

        <p className='pb-10 pl-10 text-white'>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Odio, quasi.
        <br />Consectetur laboriosam.</p>

             <img src={image} alt="" className='w-100 z-[3]' />

              <div className='pb-10 pr-10 flex items center gap-2'>
              <button className='text-[17px] text-white bg-blue-900 px-8 py-2 rounded-[80px] hover:scale-110 transition-all duration-200'>book consultation</button>
              <button className='bg-blue-900 w-10 h-10 rounded-full'></button>
              </div>
             

        </section>

    </div>
  )
}

export default Home