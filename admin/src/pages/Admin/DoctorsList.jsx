import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'

function DoctorList() {

  const { doctors, aToken , getAllDoctors , changeAvailability} = useContext(AdminContext)

    useEffect(() => {
    if (aToken) {
        getAllDoctors()
    }
}, [aToken])

  return (
     <div className="w-full px-6 py-4">
  <h1 className="text-2xl font-semibold text-gray-800 mb-6">All Doctors</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
    {doctors.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
      >
        <div className="bg-[#eff8ff] h-48 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="p-4">
          <p className="text-lg font-semibold text-gray-800">{item.name}</p>
          <p className="text-sm text-gray-500">{item.speciality}</p>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={item.available}
              onChange={() => changeAvailability(item._id)}
              className="accent-blue-600 "
            />
            <span>Disponible</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default DoctorList