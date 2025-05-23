import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'
import { AppContext } from '../../context/AppContext.jsx'
import { MdCancel, MdCalendarMonth, MdPerson, MdLocalHospital, MdAttachMoney } from 'react-icons/md'

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  const getStatusBadge = (item) => {
    if (item.cancelled) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
          Annulé
        </span>
      )
    }
    if (item.isCompleted) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
          Terminé
        </span>
      )
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
        En cours
      </span>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6'>
      <div className='max-w-7xl mx-auto'>
      
        <div className='mb-8'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='p-2 bg-blue-600 rounded-lg'>
              <MdCalendarMonth className='text-white text-2xl' />
            </div>
            <h1 className='text-3xl font-bold text-gray-900'>Tous les rendez-vous</h1>
          </div>
          <p className='text-gray-600'>Gérez et suivez tous les rendez-vous médicaux</p>
          
          
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-6'>
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Total</p>
                  <p className='text-2xl font-bold text-gray-900'>{appointments.length}</p>
                </div>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <MdCalendarMonth className='text-blue-600 text-xl' />
                </div>
              </div>
            </div>
            
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Terminés</p>
                  <p className='text-2xl font-bold text-green-600'>
                    {appointments.filter(item => item.isCompleted).length}
                  </p>
                </div>
                <div className='p-2 bg-green-100 rounded-lg'>
                  <MdPerson className='text-green-600 text-xl' />
                </div>
              </div>
            </div>
            
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>En cours</p>
                  <p className='text-2xl font-bold text-blue-600'>
                    {appointments.filter(item => !item.cancelled && !item.isCompleted).length}
                  </p>
                </div>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <MdLocalHospital className='text-blue-600 text-xl' />
                </div>
              </div>
            </div>
            
            <div className='bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm text-gray-600'>Annulés</p>
                  <p className='text-2xl font-bold text-red-600'>
                    {appointments.filter(item => item.cancelled).length}
                  </p>
                </div>
                <div className='p-2 bg-red-100 rounded-lg'>
                  <MdCancel className='text-red-600 text-xl' />
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
          
          <div className='hidden lg:grid grid-cols-[0.5fr_2.5fr_1fr_2fr_2fr_1.2fr_1.5fr] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200'>
            <div className='text-sm font-semibold text-gray-700'>#</div>
            <div className='text-sm font-semibold text-gray-700'>Patient</div>
            <div className='text-sm font-semibold text-gray-700'>Âge</div>
            <div className='text-sm font-semibold text-gray-700'>Date & Heure</div>
            <div className='text-sm font-semibold text-gray-700'>Médecin</div>
            <div className='text-sm font-semibold text-gray-700'>Frais</div>
            <div className='text-sm font-semibold text-gray-700'>Statut</div>
          </div>

          <div className='max-h-[70vh] overflow-y-auto'>
            {appointments.length === 0 ? (
              <div className='flex flex-col items-center justify-center py-16 text-gray-500'>
                <MdCalendarMonth className='text-6xl mb-4 text-gray-300' />
                <p className='text-lg font-medium'>Aucun rendez-vous trouvé</p>
                <p className='text-sm'>Les rendez-vous apparaîtront ici une fois créés</p>
              </div>
            ) : (
              appointments.map((item, index) => (
                <div key={index} className='border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200'>
                  
                  <div className='hidden lg:grid grid-cols-[0.5fr_2.5fr_1fr_2fr_2fr_1.2fr_1.5fr] gap-4 px-6 py-4 items-center'>
                    <div className='text-sm text-gray-600 font-medium'>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    <div className='flex items-center gap-3'>
                      <div className='relative'>
                        <img 
                          src={item.userData.image} 
                          className='w-10 h-10 rounded-full object-cover border-2 border-gray-200' 
                          alt="" 
                        />
                      
                      </div>
                      <div>
                        <p className='font-semibold text-gray-900'>{item.userData.name}</p>
                      </div>
                    </div>
                    
                    <div className='text-sm text-gray-600'>
                      <span className='font-medium'>{calculateAge(item.userData.dob)} ans</span>
                    </div>
                    
                    <div className='text-sm text-gray-700'>
                      <div className='flex flex-col'>
                        <span className='font-medium'>{slotDateFormat(item.slotDate)}</span>
                        <span className='text-blue-600 font-semibold'>{item.slotTime}</span>
                      </div>
                    </div>
                    
                    <div className='flex items-center gap-3'>
                      <img 
                        src={item.docData.image} 
                        className='w-9 h-9 rounded-full object-cover border-2 border-gray-200' 
                        alt="" 
                      />
                      <div>
                        <p className='font-medium text-gray-900 text-sm'>{item.docData.name}</p>
                      </div>
                    </div>
                    
                    <div className='text-sm'>
                      <span className='font-bold text-green-600 text-base'>
                        {currency}{item.amount}
                      </span>
                    </div>
                    
                    <div className='flex items-center gap-2'>
                      {getStatusBadge(item)}
                      {!item.cancelled && !item.isCompleted && (
                        <button
                          onClick={() => {
                            console.log("Demande d'annulation pour :", item._id);
                            cancelAppointment(item._id);
                          }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 hover:scale-110 transform"
                          title="Annuler le rendez-vous"
                        >
                          <MdCancel className="text-xl" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className='lg:hidden p-4'>
                    <div className='flex items-start justify-between mb-3'>
                      <div className='flex items-center gap-3'>
                        <div className='relative'>
                          <img 
                            src={item.userData.image} 
                            className='w-12 h-12 rounded-full object-cover border-2 border-gray-200' 
                            alt="" 
                          />
                          <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white'></div>
                        </div>
                        <div>
                          <p className='font-semibold text-gray-900'>{item.userData.name}</p>
                          <p className='text-sm text-gray-600'>{calculateAge(item.userData.dob)} ans</p>
                        </div>
                      </div>
                      {getStatusBadge(item)}
                    </div>
                    
                    <div className='grid grid-cols-2 gap-3 mb-3'>
                      <div className='bg-gray-50 p-3 rounded-lg'>
                        <p className='text-xs text-gray-500 mb-1'>Date & Heure</p>
                        <p className='font-medium text-sm'>{slotDateFormat(item.slotDate)}</p>
                        <p className='text-blue-600 font-semibold text-sm'>{item.slotTime}</p>
                      </div>
                      
                      <div className='bg-gray-50 p-3 rounded-lg'>
                        <p className='text-xs text-gray-500 mb-1'>Frais</p>
                        <p className='font-bold text-green-600'>{currency}{item.amount}</p>
                      </div>
                    </div>
                    
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <img 
                          src={item.docData.image} 
                          className='w-8 h-8 rounded-full object-cover border border-gray-200' 
                          alt="" 
                        />
                        <p className='font-medium text-gray-900 text-sm'>{item.docData.name}</p>
                      </div>
                      
                      {!item.cancelled && !item.isCompleted && (
                        <button
                          onClick={() => {
                            console.log("Demande d'annulation pour :", item._id);
                            cancelAppointment(item._id);
                          }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                          title="Annuler le rendez-vous"
                        >
                          <MdCancel className="text-xl" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllAppointments