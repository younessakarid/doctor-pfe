import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'
import { MdLocalHospital, MdPeople, MdVerified, MdSchedule } from 'react-icons/md'

function DoctorList() {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  const availableDoctors = doctors.filter(doc => doc.available).length
  const totalDoctors = doctors.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
              <MdLocalHospital className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Équipe Médicale</h1>
              <p className="text-gray-600">Gérez les médecins et leur disponibilité</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Médecins</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{totalDoctors}</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-xl">
                  <MdPeople className="text-blue-600 text-2xl" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Disponibles</p>
                  <p className="text-3xl font-bold text-green-600 mt-1">{availableDoctors}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-xl">
                  <MdVerified className="text-green-600 text-2xl" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Non Disponibles</p>
                  <p className="text-3xl font-bold text-red-500 mt-1">{totalDoctors - availableDoctors}</p>
                </div>
                <div className="p-3 bg-red-100 rounded-xl">
                  <MdSchedule className="text-red-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        {doctors.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <MdLocalHospital className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Aucun médecin trouvé</h3>
            <p className="text-gray-500">Les médecins apparaîtront ici une fois ajoutés au système</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {doctors.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 h-56 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      item.available 
                        ? 'bg-green-100/80 text-green-800 border border-green-200' 
                        : 'bg-red-100/80 text-red-800 border border-red-200'
                    }`}>
                      {item.available ? 'Disponible' : 'Indisponible'}
                    </div>
                  </div>
                </div>

                {/* Card Content - flex-1 to push toggle section to bottom */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex-1">
                    {/* Doctor Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Dr. {item.name}
                    </h3>
                    
                    {/* Specialty - Fixed height container */}
                    <div className="mb-4 min-h-[3rem] flex items-start">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full leading-relaxed text-center break-words">
                        {item.speciality}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Section - Always at bottom */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-4">
                      <span className="text-sm font-medium text-gray-700">
                        Disponibilité
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.available}
                          onChange={() => changeAvailability(item._id)}
                          className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 hover:shadow-lg transition-all duration-300"></div>
                      </label>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>ID: #{String(index + 1).padStart(3, '0')}</span>
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${
                            item.available ? 'bg-green-500' : 'bg-gray-400'
                          }`}></div>
                          <span className="capitalize">
                            {item.available ? 'En ligne' : 'Hors ligne'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorList