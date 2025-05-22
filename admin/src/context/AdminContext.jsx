import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
    const [doctors, setDoctors] = useState([])
    const [appointments, setAppointments] = useState([])
   
    
    // Getting all Doctors data from Database using API
    const getAllDoctors = async () => {

        try {

            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors',{}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }
  


      // Function to change doctor availablity using API
    const changeAvailability = async (docId) => {
        try {

            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { docId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    

const getAllAppointments = async () => {
  try {
    console.log("Token used:", aToken);

    const response = await axios.get(`${backendUrl}/api/admin/appointments`, {
      headers: {
        atoken: aToken
      }
    });

    console.log('Full response:', response.data); // Log full response

    const data = response.data;

    if (data.success) {
      console.log('Appointments:', data.appointments); // Log appointments
      setAppointments(data.appointments);
    } else {
      console.warn('Backend error:', data.message);
      toast.error(data.message);
    }

  } catch (error) {
    console.error('Request failed:', error);
    toast.error(error.response?.data?.message || error.message);
  }
};


 // Function to cancel appointment using API
    const cancelAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })

            if (data.success) {
                toast.success(data.message)
                getAllAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }

    }




   

    const value = {
        aToken, setAToken,
       backendUrl,doctors,
       getAllDoctors,changeAvailability,
       appointments,setAppointments,
       getAllAppointments,
       cancelAppointment,

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )

}

export default AdminContextProvider