import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function MyAppointments() {
  const { doctors } = useContext(AppContext)

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <p className="text-2xl font-semibold text-gray-800 mb-6 text-left md:mx-25">My Appointments</p>

      <div className="flex flex-col gap-6 md:mx-25">
        {
          doctors.slice(0, 2).map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 md:flex md:justify-between">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg mr-6"
                />
                <div className="flex flex-col text-sm text-gray-700">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-500 mb-2">{item.speciality}</p>
                  <p className="font-medium">Address:</p>
                  <p className="mb-2">{item.address}</p>
                  <p><span className="font-semibold">date & heure:</span> 25, Juin, 2024 | 8:30 PM</p>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4 md:flex-col">
                <button className="bg-[#1e84b5] hover:bg-green-400 text-white px-5 py-2 rounded-md">payer en ligne</button>
                <button className="border border-gray-400 px-5 py-2 rounded-md hover:bg-red-500 hover:text-white  transition">annuler le rendez-vous</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments