import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {

   const [showmenu , setshowmenu] = useState(false);
   const [token , settoken] = useState(false);
    
   
  return (
    
    <div>

      <div className="flex justify-between items-center mt-4 mb-4 ">
        <img src={logo} alt="logo" className='w-45 ' />

        <ul className='flex gap-10 items-center text-[17px]'>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/" exact activeClassName="active"  >Home</NavLink></li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/doctors" activeClassName="active">All doctors</NavLink></li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>

        <div>
        {
            token ? 
            <div></div>
            : <button onClick={()=> settoken(true)} className='text-[17px] text-white bg-blue-500 px-8 py-2 rounded-[80px] hover:scale-110 transition-all duration-200'>Create account</button>
        }
        
        
        </div>
     
     
      </div>


      <hr className='color-purple-500' />
    </div>
  )
}

export default Navbar
