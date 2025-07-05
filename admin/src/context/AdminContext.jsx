// Importation des dépendances nécessaires : axios pour les requêtes HTTP, React context API et notifications
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

// Création d’un contexte global pour l’espace administrateur
export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    // Initialisation des variables : URL du backend et états utilisés par l’admin
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '');
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [dashData, setDashData] = useState(false);

    // 🔹 Fonction pour récupérer la liste de tous les docteurs depuis l’API admin
    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/all-doctors',
                {},
                { headers: { aToken } }
            );

            if (data.success) {
                setDoctors(data.doctors);
                console.log(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // 🔹 Fonction pour changer la disponibilité d’un docteur
    const changeAvailability = async (docId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/change-availability',
                { docId },
                { headers: { aToken } }
            );

            if (data.success) {
                toast.success(data.message);
                getAllDoctors(); // Rafraîchir la liste des docteurs
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // 🔹 Fonction pour récupérer tous les rendez-vous via l’API admin
    const getAllAppointments = async () => {
        try {
            console.log("Token used:", aToken);

            const response = await axios.get(`${backendUrl}/api/admin/appointments`, {
                headers: { atoken: aToken }
            });

            const data = response.data;

            if (data.success) {
                console.log('Appointments:', data.appointments);
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

    // 🔹 Fonction pour annuler un rendez-vous donné
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + '/api/admin/cancel-appointment',
                { appointmentId },
                { headers: { aToken } }
            );

            if (data.success) {
                toast.success(data.message);
                getAllAppointments(); // Mettre à jour la liste après annulation
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    // 🔹 Fonction pour charger les données statistiques du tableau de bord admin
    const getDashData = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + '/api/admin/dashboard',
                { headers: { aToken } }
            );

            if (data.success) {
                setDashData(data.dashData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // Données et fonctions partagées dans tout le composant via le contexte admin
    const value = {
        aToken, setAToken,
        backendUrl, doctors,
        getAllDoctors, changeAvailability,
        appointments, setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData, getDashData
    };

    // Fourniture du contexte Admin à toute l'application
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
