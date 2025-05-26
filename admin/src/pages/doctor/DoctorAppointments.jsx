import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext.jsx'
import { AppContext } from '../../context/AppContext.jsx'
import { MdCancel, MdCheckCircle } from 'react-icons/md'

function DoctorAppointments() {

  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment} = useContext(DoctorContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

 
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mes Rendez-vous</h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden text-sm max-h-[80vh] overflow-y-scroll border">
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-4 py-4 px-6 bg-gray-100 border-b text-gray-700 font-medium">
          <p>#</p>
          <p>Patient</p>
          <p>Paiement</p>
          <p>Âge</p>
          <p>Date & Heure</p>
          <p>Frais</p>
          <p>Action</p>
        </div>

        {appointments.reverse().map((item, index) => (
          <div
            key={item._id}
            className="flex flex-wrap sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-4 items-center py-4 px-6 border-b text-gray-600 hover:bg-gray-50"
          >
            <p className="sm:block hidden">{index + 1}</p>
            <div className="flex items-center gap-3">
              <img src={item.userData.image} className="w-8 h-8 rounded-full object-cover" alt="Patient" />
              <p className="font-medium">{item.userData.name}</p>
            </div>
            <div>
              <span className={`px-2 py-1 text-xs rounded-full ${item.payment ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-700'}`}>
                {item.payment ? 'En ligne' : 'Espèces'}
              </span>
            </div>
            <p className="hidden sm:block">{calculateAge(item.userData.dob)} ans</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <p>{currency}{item.amount}</p>

            {item.cancelled ? (
              <p className="text-red-500 text-xs font-semibold">Annulé</p>
            ) : item.isCompleted ? (
              <p className="text-green-600 text-xs font-semibold">Terminé</p>
            ) : (
              <div className="flex gap-2">
                <MdCancel
                  onClick={() => cancelAppointment(item._id)}
                  className="text-red-500 hover:text-red-700 w-6 h-6 cursor-pointer"
                  title="Annuler"
                />
                <MdCheckCircle
                  onClick={() => completeAppointment(item._id)}
                  className="text-green-500 hover:text-green-700 w-6 h-6 cursor-pointer"
                  title="Terminer"
                />
              </div>
              
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorAppointments
