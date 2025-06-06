import React, { useContext } from 'react';

import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext'; // Missing import
import logo from '../assets/logo.png';

function Navbar() {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
     
  const logout = () => {
    if (dToken) {
      setDToken('');
      localStorage.removeItem('dToken');
    }
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-400 bg-[#eff8ff]'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={logo} alt="Logo" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button 
        onClick={logout} 
        className='text-sm lg:text-[15px] text-white bg-[#1e84b5] px-2 lg:px-4 py-2 lg:py-[9px] rounded-[80px] hover:scale-110 transition-all duration-200 hover:animate-pulse'
      >
        Déconnexion
      </button>
    </div>
  )
}

export default Navbar;