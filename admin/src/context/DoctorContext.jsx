import { createContext } from "react";

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {
   
    const value = {
        
    }

    return (
        <DoctorContextProvider>
            {props.children}
        </DoctorContextProvider>
    )

}

export default DoctorContextProvider