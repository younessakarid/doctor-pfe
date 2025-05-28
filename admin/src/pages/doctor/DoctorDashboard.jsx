import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  const getAppointmentStatus = (item) => {
    if (item.cancelled) {
      return <span className='px-3 py-1 text-xs font-semibold bg-red-100 text-red-600 rounded-full'>Annulé</span>
    }
    if (item.isCompleted) {
      return <span className='px-3 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded-full'>Terminé</span>
    }
    return (
      <div className='flex gap-2'>
        <button 
          onClick={() => cancelAppointment(item._id)}
          className='p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200'
          title="Annuler"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          onClick={() => completeAppointment(item._id)}
          className='p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200'
          title="Terminer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    )
  }

  if (!dashData) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      <div className="w-full p-6">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Tableau de bord Médecin</h1>
          <p className="text-gray-600">Bienvenue dans votre espace médecin</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          
          <div className='group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300'>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
            <div className='flex items-center justify-between relative z-10'>
              <div>
                <p className='text-3xl font-bold mb-1'>{currency} {dashData.earnings}</p>
                <p className='text-emerald-100 font-medium'>Revenus</p>
              </div>
              <div className='w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-emerald-100">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Revenus totaux</span>
            </div>
          </div>

          <div className='group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300'>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
            <div className='flex items-center justify-between relative z-10'>
              <div>
                <p className='text-3xl font-bold mb-1'>{dashData.appointments}</p>
                <p className='text-blue-100 font-medium'>Rendez-vous</p>
              </div>
              <div className='w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-blue-100">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Total des rendez-vous</span>
            </div>
          </div>

          <div className='group relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300'>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
            <div className='flex items-center justify-between relative z-10'>
              <div>
                <p className='text-3xl font-bold mb-1'>{dashData.patients}</p>
                <p className='text-purple-100 font-medium'>Patients</p>
              </div>
              <div className='w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm'>
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-purple-100">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm">Patients traités</span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
          <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className='text-xl font-bold text-gray-800'>Dernières Réservations</h2>
            </div>
          </div>

          <div className='divide-y divide-gray-100'>
            {dashData.latestAppointments.slice(0, 5).map((item, index) => (
              <div 
                key={index}
                className='px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group'
              >
                <div className='flex items-center gap-4'>
                  
                  <div className="relative">
                    <img 
                      className='w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-blue-300 transition-all duration-200' 
                      src={item.userData.image} 
                      alt={item.userData.name}
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>
                  
                  <div className='flex-1'>
                    <h3 className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200'>
                      {item.userData.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <p className='text-sm text-gray-600'>
                        Réservé le {slotDateFormat(item.slotDate)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {getAppointmentStatus(item)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {dashData.latestAppointments.length === 0 && (
            <div className="px-6 py-12 text-center">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-500 text-lg">Aucun rendez-vous trouvé</p>
              <p className="text-gray-400 text-sm mt-1">Les nouveaux rendez-vous apparaîtront ici</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard