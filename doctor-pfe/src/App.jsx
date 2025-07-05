// Importation de React et des modules nécessaires à la navigation
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Importation des pages principales de l'application
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfil from './pages/MyProfile';

// Importation des composants communs (navigation, pied de page, animations, notifications)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MouseFollower from './components/MouseFollower';

function App() {
  // Récupère l’URL actuelle pour détecter si on est sur la page de login
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className='mx-0 sm:mx-[0%]'>
      {/* Composant pour afficher les notifications Toast */}
      <ToastContainer />

      {/* Animation du curseur */}
      <MouseFollower />

      {/* Affiche le menu de navigation sauf sur la page de login */}
      {!isLoginPage && <Navbar />}

      {/* Définition des routes (navigation SPA) */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfil />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>

      {/* Affiche le pied de page sauf sur la page de login */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
