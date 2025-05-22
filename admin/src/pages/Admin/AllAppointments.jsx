import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'
import { AppContext } from '../../context/AppContext.jsx'
import { MdCancel } from 'react-icons/md'

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment ,getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>Tous les rendez-vous</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b font-semibold'>
          <p>#</p>
          <p>Patient</p>
          <p>Âge</p>
          <p>Date & Heure</p>
          <p>Médecin</p>
          <p>Frais</p>
          <p>Action</p>
        </div>

        {appointments.map((item, index) => (
          <div 
            className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' 
            key={index}
          >
            <p className='max-sm:hidden'>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 rounded-full' alt="" /> 
              <p>{item.userData.name}</p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img src={item.docData.image} className='w-8 rounded-full bg-gray-200' alt="" /> 
              <p>{item.docData.name}</p>
            </div>
            <p>{currency}{item.amount}</p>
            {item.cancelled ? (
              <p className='text-red-400 text-xs font-medium'>Annulé</p>
            ) : item.isCompleted ? (
              <p className='text-green-500 text-xs font-medium'>Terminé</p>
            ) : (
              <MdCancel
  onClick={() => {
    console.log("Demande d'annulation pour :", item._id);
    cancelAppointment(item._id);
  }}
  className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition-transform"
/>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
