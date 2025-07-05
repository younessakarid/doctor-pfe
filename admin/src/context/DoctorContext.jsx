// Importation des modules nécessaires : contexte React, axios pour les requêtes HTTP, et toast pour les notifications
import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

// Création du contexte global dédié aux docteurs
export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    // Déclaration des variables globales et états pour le token, les rendez-vous, les données du tableau de bord et du profil
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [dToken, setDToken] = useState(localStorage.getItem('dToken') || '');
    const [appointments, setAppointments] = useState([]);
    const [dashData, setDashData] = useState(false);
    const [profileData, setProfileData] = useState(false);

    // 🔹 Fonction pour récupérer tous les rendez-vous du docteur
    const getAppointments = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + '/api/doctor/appointments',
                { headers: { dToken } }
            );

            if (data.success) {
                setAppointments(data.appointments);
                console.log(data.appointments);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // 🔹 Fonction pour annuler un rendez-vous
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/doctor/cancel-appointment',
                { appointmentId },
                { headers: { dToken } }
            );

            if (data.success) {
                toast.success(data.message);
                getAppointments(); // Mise à jour de la liste des rendez-vous
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    // 🔹 Fonction pour marquer un rendez-vous comme complété
    const completeAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/doctor/complete-appointment',
                { appointmentId },
                { headers: { dToken } }
            );

            if (data.success) {
                toast.success(data.message);
                getAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    // 🔹 Fonction pour récupérer les données du tableau de bord du docteur
    const getDashData = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + '/api/doctor/dashboard',
                { headers: { dToken } }
            );

            if (data.success) {
                setDashData(data.dashData);
                console.log(data.dashData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // 🔹 Fonction pour récupérer les informations du profil du docteur
    const getProfileData = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + '/api/doctor/profile',
                { headers: { dToken } }
            );

            console.log(data.profileData);

            if (data.success) {
                setProfileData(data.profileData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // Mise à disposition de toutes les fonctions et états via le contexte
    const value = {
        dToken,
        setDToken,
        backendUrl,
        appointments,
        setAppointments,
        getAppointments,
        cancelAppointment,
        completeAppointment,
        getDashData,
        dashData,
        setDashData,
        profileData,
        setProfileData,
        getProfileData,
    };

    // Fourniture du contexte aux composants enfants
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;
