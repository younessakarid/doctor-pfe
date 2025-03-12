import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";

function Navbar() {

   //const [showmenu , setshowmenu] = useState(false);
   const [token , settoken] = useState(false);
   const navigate = useNavigate()
   
   
  return (
    
    
    <div>

      <div className="flex justify-between items-center   bg-[#eff8ff]  px-30 py-7">
        <img onClick={()=> navigate('/')} src={logo} alt="logo" className='w-45 ' />

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
            : <div className='flex'><button onClick={()=> settoken(true)} className='text-[17px] text-white bg-[#0e384c] px-8 py-2 rounded-[80px] hover:scale-110 transition-all hover:animate-pulse duration-200'>Create account</button><GoArrowUpRight className='text-[#252c62] bg-white p-1 text-2xl rounded-full'  /></div>
        }
        
        
        </div>
     
     
      </div>


      <hr className='color-blue-500 opacity-20' />
    </div>
  )
}

export default Navbar
