import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
   
    const value = {
        
    }

    return (
        <AppContextProvider>
            {props.children}
        </AppContextProvider>
    )

}

export default AppContextProvider