import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import 'animate.css'

function Navbar() {

   //const [showmenu , setshowmenu] = useState(false);
   const [token , settoken] = useState(false);
   const navigate = useNavigate()
   
   
  return (
    
    
    <div>

      <div className="flex justify-between items-center   bg-[#eff8ff]  px-30 py-4">
        <img onClick={()=> navigate('/')} src={logo} alt="logo" className='w-55 ' />

        <ul className='flex gap-12  text-[#082431] items-center text-[17px]'>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/" exact activeClassName="active"  >Home</NavLink></li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/doctors" activeClassName="active">All doctors</NavLink></li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>

        <div>
        {
            token ? 
            <div></div>
            :<button onClick={()=> settoken(true)} className='text-[18px] text-white bg-[#1e84b5]  px-8 py-[9px] rounded-[80px] hover:scale-110 transition-all duration-200 hover:animate-pulse'>Create account</button>
        }
        
        
        </div>
     
     
      </div>


      <hr className='color-[#1e84b5] opacity-10' />
    </div>
  )
}

export default Navbar
