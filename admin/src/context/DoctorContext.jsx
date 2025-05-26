import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
    
   const [appointments, setAppointments] = useState([])
   const [dashData, setDashData] = useState(false)


    // Getting Doctor appointment data from Database using API
    const getAppointments = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/doctor/appointments', { headers: { dToken } })

            if (data.success) {
                setAppointments(data.appointments)
                console.log(data.appointments);
                
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

     // Function to cancel appointment using API
  const cancelAppointment = async (appointmentId) => {
    try {
        const { data } = await axios.post(
            backendUrl + '/api/doctor/cancel-appointment',
            { appointmentId },
            { headers: { dtoken: dToken } } // <<< header correctement formaté
        )

        if (data.success) {
            toast.success(data.message)
            getAppointments()
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }
}



      // Function to Mark appointment completed using API
    const completeAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', { appointmentId }, { headers: { dtoken: dToken } })

            if (data.success) {
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }





     // Getting Doctor dashboard data using API
    const getDashData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', {headers: { dtoken: dToken } })

            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
                
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }


   
    const value = {
        dToken,
        setDToken,
        backendUrl,
        appointments,
        setAppointments,
        getAppointments,
        cancelAppointment,
        completeAppointment,
        getDashData,dashData,setDashData
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )

}

export default DoctorContextProvider