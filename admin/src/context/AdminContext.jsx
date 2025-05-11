import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
   
    const value = {
        
    }

    return (
        <AdminContextProvider>
            {props.children}
        </AdminContextProvider>
    )

}

export default AdminContextProvider