// Création du contexte global avec React
import { createContext } from "react";

// Déclaration du contexte de l'application
export const AppContext = createContext();

const AppContextProvider = (props) => {
    //  Variables d'environnement : backend URL et devise utilisée
    const currency = import.meta.env.VITE_CURRENCY;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    //  Fonction utilitaire : calcule l'âge à partir de la date de naissance
    const calculateAge = (dob) => {
        if (!dob) return '';
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    //  Fonction utilitaire : formate une date de créneau (ex: "7_9_2025" → "07/09/2025")
    const slotDateFormat = (slotDate) => {
        if (!slotDate) return '';
        const parts = slotDate.split('_');
        if (parts.length !== 3) return slotDate;
        const day = parts[0].padStart(2, '0');
        const month = parts[1].padStart(2, '0');
        const year = parts[2];
        return `${day}/${month}/${year}`;
    };

    // Valeurs et fonctions mises à disposition via le contexte
    const value = {
        backendUrl,
        currency,
        calculateAge,
        slotDateFormat,
    };

    // Fourniture du contexte à tous les composants enfants
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
