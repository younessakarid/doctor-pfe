import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import home_icon from '../assets/home_icon.svg'
import { AdminContext } from '../context/AdminContext'
import appointment_icon from '../assets/appointment_icon.svg'
import add_icon from '../assets/add_icon.svg'
import people_icon from '../assets/people_icon.svg'


const Sidebar = () => {

  const { aToken } = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-[#eff8ff] border-r'>
      {aToken && <ul className='text-[#515151] mt-5'>

        <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:text-[#1e84b5] ${isActive ? 'bg-[#F2F3FF] text-[#1e84b5] border-r-4 border-[#1e84b5]' : ''}`}>
          <img className='min-w-5' src={home_icon} alt='' />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>
        <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:text-[#1e84b5] ${isActive ? 'bg-[#F2F3FF]  text-[#1e84b5] border-r-4 border-[#1e84b5]' : ''}`}>
          <img className='min-w-5' src={appointment_icon} alt='' />
          <p className='hidden md:block'>Appointments</p>
        </NavLink>
        <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:text-[#1e84b5] ${isActive ? 'bg-[#F2F3FF] text-[#1e84b5] border-r-4 border-[#1e84b5]' : ''}`}>
          <img className='min-w-5' src={add_icon} alt='' />
          <p className='hidden md:block'>Add Doctor</p>
        </NavLink>
        <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:text-[#1e84b5] ${isActive ? 'bg-[#F2F3FF] text-[#1e84b5] border-r-4 border-[#1e84b5]' : ''}`}>
          <img className='min-w-5' src={people_icon} alt='' />
          <p className='hidden md:block'>Doctors List</p>
        </NavLink>
      </ul>}

</div>
  )
}


export default Sidebar