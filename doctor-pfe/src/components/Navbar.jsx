import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import profile_pic from '../assets/profile_pic.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import 'animate.css'

function Navbar() {
  const [token, setToken] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
      <div className="flex justify-between items-center bg-[#eff8ff] px-4 sm:px-8 md:px-16 lg:px-30 py-4">
        <img 
          onClick={() => navigate('/')} 
          src={logo} 
          alt="logo" 
          className='w-32 sm:w-40 md:w-48 lg:w-55 cursor-pointer' 
        />

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-[#082431]"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 lg:gap-12 text-[#082431] items-center text-sm lg:text-[17px]'>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
            <NavLink 
              to="/doctors" 
              className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
            >
              All doctors
            </NavLink>
          </li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
            >
              About
            </NavLink>
          </li>
          <li className='hover:scale-110 transition-transform duration-300 ease-in-out'>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Token area */}
        <div className="hidden md:block">
          {
            token ? 
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={profile_pic} alt="profile" />
              <RiArrowDropDownLine className="w-6 h-6" />
              <div className="absolute top-10 right-0 pt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-[180px] bg-stone-100 rounded flex flex-col gap-2 p-4 shadow-md">
                  <p onClick={()=>navigate('my-profile')} className="hover:text-[#1e84b5] cursor-pointer">My Profile</p>
                  <p onClick={()=>navigate('my-appointments')} className="hover:text-[#1e84b5] cursor-pointer">My Appointments</p>
                  <p 
                    onClick={() => setToken(false)}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
            : 
            <button 
              onClick={() => setToken(true)} 
              className='text-sm lg:text-[18px] text-white bg-[#1e84b5] px-4 lg:px-8 py-2 lg:py-[9px] rounded-[80px] hover:scale-110 transition-all duration-200 hover:animate-pulse'
            >
              Create account
            </button>
          }
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#eff8ff] shadow-lg animate__animated animate__fadeIn">
          <ul className='flex flex-col text-[#082431] text-center'>
            <li className='py-3 border-b border-gray-200 hover:bg-blue-50'>
              <NavLink 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className='py-3 border-b border-gray-200 hover:bg-blue-50'>
              <NavLink 
                to="/doctors" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
              >
                All doctors
              </NavLink>
            </li>
            <li className='py-3 border-b border-gray-200 hover:bg-blue-50'>
              <NavLink 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
              >
                About
              </NavLink>
            </li>
            <li className='py-3 border-b border-gray-200 hover:bg-blue-50'>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "text-[#1e84b5] font-bold" : "")}
              >
                Contact
              </NavLink>
            </li>
            
            {!token && (
              <li className='py-4'>
                <button 
                  onClick={() => {
                    setToken(true);
                    setIsMenuOpen(false);
                  }} 
                  className='text-white bg-[#1e84b5] px-8 py-2 rounded-[80px] transition-all duration-200'
                >
                  Create account
                </button>
              </li>
            )}
          </ul>
        </div>
      )}

      <hr className='color-[#1e84b5] opacity-10' />
    </div>
  )
}

export default Navbar





// function Navbar() {

//    //const [showmenu , setshowmenu] = useState(false);
//    const [token , settoken] = useState(false);
//    const navigate = useNavigate()
   
   
//   return (
    
    
//     <div>

//       <div className="flex justify-between items-center   bg-[#eff8ff]  px-30 py-4">
//         <img onClick={()=> navigate('/')} src={logo} alt="logo" className='w-55 ' />

//         <ul className='flex gap-12  text-[#082431] items-center text-[17px]'>
//           <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/" exact activeClassName="active"  >Home</NavLink></li>
//           <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/doctors" activeClassName="active">All doctors</NavLink></li>
//           <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/about" activeClassName="active">About</NavLink></li>
//           <li className='hover:scale-110 transition-transform duration-300 ease-in-out'><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
//         </ul>

//         <div>
//         {
//             token ? 
//             <div className='flex items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={profile_pic} alt="" />
//               <RiArrowDropDownLine className='w-2' />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                   <p>My profile</p>
//                   <p>My Appointements</p>
//                   <p>Logout</p>
//                 </div>
//               </div>
//             </div>
//             :<button onClick={()=> settoken(true)} className='text-[18px] text-white bg-[#1e84b5]  px-8 py-[9px] rounded-[80px] hover:scale-110 transition-all duration-200 hover:animate-pulse'>Create account</button>
//         }
        
        
//         </div>
     
     
//       </div>


//       <hr className='color-[#1e84b5] opacity-10' />
//     </div>
//   )
// }

// export default Navbar
