import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios' 
import { toast } from 'react-toastify' 
import { AppContext } from '../context/AppContext.jsx'
import verified_icon from '../assets/verified_icon.png'
import RelatedDoctors from '../components/RelatedDoctors.jsx'

function Appointment() {
  const { docId } = useParams()
  const { doctors, backendUrl, token, userData, getDoctorsData } = useContext(AppContext)
  const navigate = useNavigate()

  const [docInfo, setDocInfo] = useState(null)
  const [loading, setLoading] = useState(true) 
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [bookingInProgress, setBookingInProgress] = useState(false)

  const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    if (docInfo) {
      setDocInfo(docInfo)
    } else {
      console.log("Aucun docteur trouvé avec cet ID :", docId)
    }
    setLoading(false)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    let today = new Date()
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endtime = new Date()
      endtime.setDate(today.getDate() + i)
      endtime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Connectez-vous pour prendre rendez-vous')
      return navigate('/login')
    }
    
    if (!slotTime) {
      toast.warning('Veuillez sélectionner une heure de rendez-vous')
      return
    }

    if (!userData || !userData._id) {
      toast.error('Informations utilisateur manquantes. Veuillez vous reconnecter.')
      return navigate('/login')
    }

    const date = docSlots[slotIndex][0].datetime
    
    // Format the date in a more readable format for API
    const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`
    
    setBookingInProgress(true)
    
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`, 
        { docId, slotDate, slotTime, userId: userData._id }, 
        { headers: { token } }
      )
      
      if (data.success) {
        toast.success(data.message, {
          autoClose: 3000,
          onClose: () => {
            getDoctorsData()
            navigate('/my-appointments')
          }
        })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error('Booking error:', error)
      toast.error(error.response?.data?.message || error.message || 'Erreur lors de la réservation')
    } finally {
      setBookingInProgress(false)
    }
  }

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      fetchDocInfo()
      getAvailableSlots()
    }
  }, [doctors, docId])

  // Le reste du component reste inchangé...
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
          <p className="mt-2">Chargement des informations du docteur...</p>
        </div>
      </div>
    )
  }
  
  if (!docInfo) {
    return (
      <div className="text-center p-8 bg-red-50 text-red-600 rounded-lg mx-4 my-6">
        Docteur introuvable. Veuillez vérifier l'ID du médecin ou revenir à la liste des médecins.
      </div>
    )
  }
  
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4 p-4 sm:p-8'>
        <div className='w-full sm:w-1/3 md:w-1/4'>
          <img 
            src={docInfo.image} 
            className='bg-[#1e84b5] w-full rounded-lg object-cover' 
            alt={`Dr. ${docInfo.name}`} 
          />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-4 sm:p-6 mx-0 sm:mx-2 mt-4 sm:mt-0 bg-white'>
          <div className='mb-2'>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900">
              {docInfo.name}
              <img src={verified_icon} alt="Verified Icon" className="w-4 md:w-5 inline align-middle" />
            </h2>
          </div>
          
          <div className='flex flex-wrap items-center gap-2 text-xs sm:text-sm mt-2 text-gray-600'>
            <p className='truncate max-w-full sm:max-w-xs'>{docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full whitespace-nowrap'>{docInfo.experience}</button>
          </div>
          
          <div className='mt-4'>
            <p className='flex items-center gap-1 font-bold text-sm sm:text-base font-medium text-gray-900'>À propos</p>
            <p className='text-xs sm:text-sm text-gray-500 mt-1'>{docInfo.about}</p>
          </div>
          
          <div className='mt-3 text-xs sm:text-sm text-gray-600'>
            {typeof docInfo.address === 'object' ? (
              <>
                <p>{docInfo.address.line1}</p>
                <p>{docInfo.address.line2}</p>
              </>
            ) : (
              <p>{docInfo.address}</p>
            )}
          </div>
          
          <p className='text-gray-500 font-medium mt-4 text-sm sm:text-base'>
            Frais de rendez-vous : <span className='text-gray-700'> € {docInfo.fees}</span>
          </p>
        </div>
      </div>
    
      <div className='sm:ml-40 sm:pl-4 mx-4 sm:mx-0 mt-4 font-medium text-gray-700'>
        <h3 className="text-lg sm:text-xl font-semibold">Réservation</h3>
        
        <div className='relative mt-4'>
          <div className='flex gap-2 md:gap-3 items-center w-full overflow-x-auto pb-2 no-scrollbar'>
            {docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSlotIndex(index)
                  setSlotTime('') 
                }}
                className={`text-center py-4 sm:py-6 px-2 min-w-14 sm:min-w-16 rounded-full cursor-pointer transition-colors ${
                  slotIndex === index ? 'bg-[#1e84b5] text-white' : 'border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <p className="text-xs sm:text-sm">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p className="text-sm sm:text-base font-medium">{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
        </div>
      
        <div className="flex gap-2 md:gap-3 flex-wrap mt-4 sm:mt-6">
          {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
            <p
              key={index} 
              onClick={() => setSlotTime(item.time)}
              className={`text-xs sm:text-sm font-light px-3 sm:px-5 py-1.5 sm:py-2 rounded-full cursor-pointer transition-colors ${
                item.time === slotTime
                  ? "bg-[#1e84b5] text-white"
                  : "text-gray-400 border border-gray-300 hover:border-gray-400"
              }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        {docSlots.length > 0 && docSlots[slotIndex].length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            Aucun créneau disponible pour ce jour.
          </p>
        )}
      
        <div className="flex justify-center sm:justify-start mt-6 mb-6">
          <button 
            onClick={bookAppointment}  
            className={`text-white text-sm font-light px-8 sm:px-14 py-2.5 sm:py-3 rounded-full transition-colors w-full sm:w-auto ${
              !slotTime || bookingInProgress 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#1e84b5] hover:bg-[#1976a2]'
            }`}
            disabled={!slotTime || bookingInProgress}
          >
            {bookingInProgress ? 'Réservation en cours...' : 'Prendre rendez-vous'}
          </button>
        </div>
      </div>

      <RelatedDoctors docId={docId} />
    </div>
  )
}

export default Appointment