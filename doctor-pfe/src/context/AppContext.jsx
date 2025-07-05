// Importation des dépendances nécessaires : React, axios pour les requêtes HTTP, toast pour les notifications
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

// Création d’un contexte global pour partager les données dans toute l'application
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Déclaration de variables globales : symbole de devise, URL du backend et états (token, docteurs, utilisateur)
  const currencySymbol = '€';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem('token') || false);
  const [doctors, setDoctors] = useState([]);
  const [userData, setUserData] = useState(false);

  // Fonction pour récupérer la liste des docteurs depuis l’API
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/list');
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load doctors");
    }
  };

  // Fonction pour récupérer les informations du profil utilisateur via l’API, en utilisant le token
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/get-profile', {
        headers: { token }
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Appel initial pour charger les docteurs dès le premier rendu
  useEffect(() => {
    getDoctorsData();
  }, []);

  // Appel conditionnel pour charger les infos utilisateur quand le token change
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token]);

  // Regroupement des variables et fonctions dans un objet pour le fournir aux composants enfants
  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token, setToken,
    backendUrl,
    userData, setUserData,
    loadUserProfileData
  };

  // Fourniture du contexte aux composants enfants
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

// Export du provider pour l’utiliser dans l’arborescence de l’app
export default AppContextProvider;
