import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

function MyAppointments() {
  const { backendUrl, token } = useContext(AppContext)
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const parts = slotDate.split('_')
    if (parts.length !== 3) return slotDate
    return `${parts[0]} ${months[+parts[1]]} ${parts[2]}`
  }

  const getUserAppointments = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token }
      })
      setAppointments(data.appointments.reverse())
    } catch (error) {
      console.error("Erreur:", error)
      toast.error(error.message || "Impossible de récupérer les rendez-vous")
    } finally {
      setLoading(false)
    }
  }

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, {
        headers: { token }
      })

      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message || "Erreur lors de l'annulation")
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    } else {
      navigate('/login', { state: { from: '/my-appointments' } })
    }
  }, [token, navigate])

  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen md:px-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left max-w-4xl mx-auto">
        Mes rendez-vous
      </h1>

      {loading ? (
        <div className="max-w-4xl mx-auto flex justify-center py-12">
          <div className="animate-pulse text-lg text-gray-600">Chargement...</div>
        </div>
      ) : appointments.length === 0 ? (
        <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-4">Aucun rendez-vous trouvé.</p>
          <button
            onClick={() => navigate('/doctors')}
            className="bg-[#1e84b5] hover:bg-[#156a94] text-white px-5 py-2 rounded-md transition"
          >
            Prendre un rendez-vous
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {appointments.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 md:p-6">
              <div className="md:flex md:justify-between md:items-center">
                <div className="flex flex-col md:flex-row md:items-center">
                  <img
                    src={item.docData?.image || "/default-doctor.png"}
                    alt={item.docData?.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg mx-auto md:mx-0 md:mr-6"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "/default-doctor.png"
                    }}
                  />
                  <div className="flex flex-col text-sm text-gray-700 mt-4 md:mt-0 text-center md:text-left">
                    <p className="text-lg font-semibold">{item.docData?.name}</p>
                    <p className="text-gray-500 mb-2">{item.docData?.speciality}</p>
                    <div className="mt-2">
                      <p className="font-medium">Adresse:</p>
                      <p>{item.docData?.address?.line1 || "Adresse 1 non disponible"}</p>
                      <p>{item.docData?.address?.line2 || "Adresse 2 non disponible"}</p>
                    </div>
                    <p className="mt-2">
                      <span className="font-semibold">Date & heure:</span>{" "}
                      {slotDateFormat(item.slotDate)} | {item.slotTime}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-3 mt-6 md:mt-0 text-sm">
                  {!item.cancelled && !item.isCompleted && (
                    <button
                      onClick={() => handleCancelAppointment(item._id)}
                      className="border border-gray-400 px-5 py-2 rounded-md hover:bg-red-500 hover:text-white w-full md:w-auto transition"
                    >
                      Annuler le rendez-vous
                    </button>
                  )}

                  {item.cancelled && (
                    <button className="border border-red-500 text-red-600 px-5 py-2 rounded-md bg-red-50 w-full md:w-auto">
                      Annulé
                    </button>
                  )}

                  {item.isCompleted && (
                    <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-md bg-blue-50 w-full md:w-auto">
                      Terminé
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyAppointments








// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// function MyAppointments() {
//   const { backendUrl, token } = useContext(AppContext)
//   const navigate = useNavigate()
//   const [appointments, setAppointments] = useState([])
//   const [loading, setLoading] = useState(true)

//   const slotDateFormat = (dateString) => {
//     const date = new Date(dateString)
//     if (isNaN(date)) return dateString // Fallback
//     return date.toLocaleDateString('fr-FR', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     })
//   }

//   const getUserAppointments = async () => {
//     setLoading(true)
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
//         headers: { token }
//       })
//       setAppointments(data.appointments.reverse())
//     } catch (error) {
//       console.error("Error fetching appointments:", error)
//       toast.error(error.response?.data?.message || "Impossible de récupérer vos rendez-vous")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleCancelAppointment = async (appointmentId) => {
//     try {
//       const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, {
//         headers: { token }
//       })
//       if (data.success) {
//         toast.success(data.message)
//         getUserAppointments()
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Erreur lors de l'annulation")
//     }
//   }

//   const handlePayment = (appointmentId) => {
//     // Replace with Stripe or Razorpay logic later
//     navigate(`/payment/${appointmentId}`)
//   }

//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     } else {
//       navigate('/login', { state: { from: '/my-appointments' } })
//     }
//   }, [token, navigate])

//   return (
//     <div className="px-4 py-8 bg-gray-50 min-h-screen md:px-6">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left max-w-4xl mx-auto">Mes rendez-vous</h1>

//       {loading ? (
//         <div className="max-w-4xl mx-auto flex justify-center py-12">
//           <div className="animate-pulse text-lg text-gray-600">Chargement de vos rendez-vous...</div>
//         </div>
//       ) : appointments.length === 0 ? (
//         <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-4xl mx-auto">
//           <p className="text-lg text-gray-600 mb-4">Vous n'avez pas encore de rendez-vous</p>
//           <button
//             onClick={() => navigate('/doctors')}
//             className="bg-[#1e84b5] hover:bg-[#156a94] text-white px-5 py-2 rounded-md transition"
//           >
//             Prendre un rendez-vous
//           </button>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-6 max-w-4xl mx-auto">
//           {appointments.map((item, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-4 md:p-6">
//               <div className="md:flex md:justify-between md:items-center">
//                 <div className="flex flex-col md:flex-row md:items-center">
//                   <img
//                     src={item.docData.image || "/default-doctor.png"}
//                     alt={item.docData.name}
//                     className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg mx-auto md:mx-0 md:mr-6"
//                     onError={(e) => {
//                       e.target.onerror = null
//                       e.target.src = "/default-doctor.png"
//                     }}
//                   />
//                   <div className="flex flex-col text-sm text-gray-700 mt-4 md:mt-0 text-center md:text-left">
//                     <p className="text-lg font-semibold">{item.docData.name}</p>
//                     <p className="text-gray-500 mb-2">{item.docData.speciality}</p>
//                     <div className="mt-2">
//                       <p className="font-medium">Adresse:</p>
//                       <p className="mb-2">{item.docData.address?.line1 || "Adresse 1 non disponible"}</p>
//                     </div>
//                     <p className="mt-2">
//                       <span className="font-semibold">Date & heure:</span>{" "}
//                       <span className="capitalize">{slotDateFormat(item.slotDate)}</span> | {item.slotTime}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col md:items-end gap-3 mt-6 md:mt-0 text-sm">
//                   {!item.cancelled && !item.payment && !item.isCompleted && (
//                     <>
//                       <button
//                         onClick={() => handlePayment(item._id)}
//                         className="bg-[#1e84b5] hover:bg-[#156a94] text-white px-5 py-2 rounded-md w-full md:w-auto transition"
//                       >
//                         Payer en ligne
//                       </button>
//                       <button
//                         onClick={() => handleCancelAppointment(item._id)}
//                         className="border border-gray-400 px-5 py-2 rounded-md hover:bg-red-500 hover:text-white w-full md:w-auto transition"
//                       >
//                         Annuler le rendez-vous
//                       </button>
//                     </>
//                   )}

//                   {item.payment && !item.cancelled && (
//                     <button className="border border-green-500 text-green-600 px-5 py-2 rounded-md bg-green-50 w-full md:w-auto">
//                       Payé
//                     </button>
//                   )}

//                   {item.isCompleted && (
//                     <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-md bg-blue-50 w-full md:w-auto">
//                       Terminé
//                     </button>
//                   )}

//                   {item.cancelled && (
//                     <button className="border border-red-500 text-red-600 px-5 py-2 rounded-md bg-red-50 w-full md:w-auto">
//                       Annulé
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default MyAppointments








// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'

// function MyAppointments() {
//   const { backendUrl, token } = useContext(AppContext)
//   const navigate = useNavigate()
//   const [appointments, setAppointments] = useState([])
//   const [loading, setLoading] = useState(true)

//   // Format date to a more readable format
//   const slotDateFormat = (dateString) => {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
//     return new Date(dateString).toLocaleDateString('fr-FR', options)
//   }

//   const getUserAppointments = async () => {
//     setLoading(true)
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
//         headers: { token }
//       })
//       setAppointments(data.appointments.reverse())
//     } catch (error) {
//       console.error("Error fetching appointments:", error)
//       toast.error(error.response?.data?.message || "Impossible de récupérer vos rendez-vous")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleCancelAppointment = async (appointmentId) => {
//     try {
//       await axios.delete(`${backendUrl}/api/appointments/${appointmentId}`, {
//         headers: { token }
//       })
//       toast.success("Rendez-vous annulé avec succès")
//       getUserAppointments() // Refresh the list
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Erreur lors de l'annulation")
//     }
//   }

//   const handlePayment = (appointmentId) => {
//     navigate(`/payment/${appointmentId}`)
//   }

//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     } else {
//       navigate('/login', { state: { from: '/my-appointments' } })
//     }
//   }, [token, navigate])

//   return (
//     <div className="px-4 py-8 bg-gray-50 min-h-screen md:px-6">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left max-w-4xl mx-auto">Mes rendez-vous</h1>

//       {loading ? (
//         <div className="max-w-4xl mx-auto flex justify-center py-12">
//           <div className="animate-pulse text-lg text-gray-600">Chargement de vos rendez-vous...</div>
//         </div>
//       ) : appointments.length === 0 ? (
//         <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-4xl mx-auto">
//           <p className="text-lg text-gray-600 mb-4">Vous n'avez pas encore de rendez-vous</p>
//           <button 
//             onClick={() => navigate('/doctors')}
//             className="bg-[#1e84b5] hover:bg-[#156a94] text-white px-5 py-2 rounded-md transition"
//           >
//             Prendre un rendez-vous
//           </button>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-6 max-w-4xl mx-auto">
//           {appointments.map((item, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-4 md:p-6">
//               <div className="md:flex md:justify-between md:items-center">
//                 <div className="flex flex-col md:flex-row md:items-center">
//                   <img
//                     src={item.docData.image || "/default-doctor.png"}
//                     alt={item.docData.name}
//                     className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg mx-auto md:mx-0 md:mr-6"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "/default-doctor.png";
//                     }}
//                   />
//                   <div className="flex flex-col text-sm text-gray-700 mt-4 md:mt-0 text-center md:text-left">
//                     <p className="text-lg font-semibold">{item.docData.name}</p>
//                     <p className="text-gray-500 mb-2">{item.docData.speciality}</p>
//                     <div className="mt-2">
//                       <p className="font-medium">Adresse:</p>
//                       <p className="mb-2">{item.docData.address?.line1 || "Adresse non disponible"}</p>
//                     </div>
//                     <p className="mt-2">
//                       <span className="font-semibold">Date & heure:</span>{" "}
//                       <span className="capitalize">{slotDateFormat(item.slotDate)}</span> | {item.slotTime}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col md:items-end gap-3 mt-6 md:mt-0">
//                   <button 
//                     onClick={() => handlePayment(item._id)}
//                     className="bg-[#1e84b5] hover:bg-[#156a94] text-white px-5 py-2 rounded-md w-full md:w-auto transition"
//                   >
//                     Payer en ligne
//                   </button>
//                   <button 
//                     onClick={() => handleCancelAppointment(item._id)}
//                     className="border border-gray-400 px-5 py-2 rounded-md hover:bg-red-500 hover:text-white w-full md:w-auto transition"
//                   >
//                     Annuler le rendez-vous
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default MyAppointments