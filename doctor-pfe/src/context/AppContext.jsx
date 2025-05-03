import React from "react"; 
import { doctors } from "../assets/assets";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


// import React, { createContext, useState, useContext } from 'react';
// import { specialityData, doctors } from '../assets/assets'; // Importer vos données de médecins

// // Créer un contexte
// const AppContext = createContext();

// // Le fournisseur du contexte
// export const AppProvider = ({ children }) => {
//   const [selectedSpeciality, setSelectedSpeciality] = useState(null);

//   // Fonction pour filtrer les médecins par spécialité
//   const filterDoctorsBySpeciality = (speciality) => {
//     return doctors.filter((doctor) => doctor.speciality === speciality);
//   };

//   return (
//     <AppContext.Provider value={{ selectedSpeciality, setSelectedSpeciality, filterDoctorsBySpeciality }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Hook personnalisé pour accéder au contexte
// export const useAppContext = () => useContext(AppContext);
// export default AppContext;
