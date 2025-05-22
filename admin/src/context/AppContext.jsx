import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const calculateAge = (dob) => {
        if (!dob) return ''
        const today = new Date()
        const birthDate = new Date(dob)
        let age = today.getFullYear() - birthDate.getFullYear()
        const m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }
        return age
    }

    const slotDateFormat = (slotDate) => {
        if (!slotDate) return ''
        const parts = slotDate.split('_')
        if(parts.length !== 3) return slotDate
        const day = parts[0].padStart(2, '0')
        const month = parts[1].padStart(2, '0')
        const year = parts[2]
        return `${day}/${month}/${year}`
    }

    const value = {
        backendUrl,
        currency,
        calculateAge,
        slotDateFormat,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider
