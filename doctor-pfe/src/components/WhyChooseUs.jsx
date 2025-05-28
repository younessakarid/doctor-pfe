import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import whychooseusimg from "../assets/whychooseusimg.png";
import img1 from "../assets/img1.png";
import imgtwo from "../assets/imgtwo.png";
import paymentmethod from "../assets/paymentmethod.png";
import emergencycall from "../assets/emergencycall.png";
import positiveexperience from "../assets/positiveexperience.png";
import datamanagement from "../assets/datamanagement.png";
import "tailwindcss-animated";

// ... Imports identiques

const WhyChooseUs = () => {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f1f9ff] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-[4%]">
        <div className="text-center mb-8 animate__animated animate__slideInUp">
          <p className="text-[#1e84b5] font-small mb-2">POURQUOI NOUS CHOISIR</p>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#1e84b5]">Une approche moderne </span>
            <span className="text-[#1a3c5d]">de la santé dentaire</span>
          </h2>
          <p className="text-gray-600">
            Votre confort, notre engagement au quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-[35px] shadow-sm p-6 animate__animated animate__fadeInUp hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e84b5] bg-opacity-10 rounded-full flex items-center justify-center">
                  <img src={img1} className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-[#1a3c5d] text-lg font-bold mb-1">Docteur Expérimenté</h3>
                  <p className="text-gray-600 text-sm">Des médecins qualifiés avec des années d’expertise pour des soins fiables.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[35px] shadow-sm p-6 animate__animated animate__fadeInUp animate__delay-1s hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e84b5] bg-opacity-10 rounded-full flex items-center justify-center">
                  <img src={imgtwo} className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-[#1a3c5d] text-lg font-bold mb-1">Soins Personnalisés</h3>
                  <p className="text-gray-600 text-sm">Une approche adaptée à chaque patient pour un traitement sur mesure.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[35px] shadow-sm p-6 animate__animated animate__fadeInUp animate__delay-2s hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e84b5] bg-opacity-10 rounded-full flex items-center justify-center">
                  <img src={paymentmethod} className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-[#1a3c5d] text-lg font-bold mb-1">Options de Paiement Flexibles</h3>
                  <p className="text-gray-600 text-sm">Des solutions de paiement accessibles pour tous les budgets.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate__animated animate__zoomIn animate__delay-1s">
            <div className="relative">
              <img src={whychooseusimg} alt="Tooth" className="w-100 h-auto" />
              <div className="absolute -top-4 -left-4">
                <div className="w-8 h-8 text-[#1e84b5] opacity-50">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0l3.09 6.91L22 12l-6.91 3.09L12 24l-3.09-6.91L2 12l6.91-3.09L12 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[35px] shadow-sm p-6 animate__animated animate__fadeInUp hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e84b5] bg-opacity-10 rounded-full flex items-center justify-center">
                  <img src={emergencycall} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-[#1a3c5d] text-lg font-bold mb-1">Services d'Urgence</h3>
                  <p className="text-gray-600 text-sm">Disponibles 24h/24 pour répondre à toutes vos urgences médicales.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[35px] shadow-sm p-6 animate__animated animate__fadeInUp animate__delay-1s hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e84b5] bg-opacity-10 rounded-full flex items-center justify-center">
                  <img src={positiveexperience} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-[#1a3c5d] text-lg font-bold mb-1">Avis Positifs des Patients</h3>
                  <p className="text-gray-600 text-sm">Des patients satisfaits qui témoignent de la qualité de nos soins.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[35px] shadow-sm p-6 animate__animated animate__fadeInUp animate__delay-2s hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e84b5] bg-opacity-10 rounded-full flex items-center justify-center">
                  <img src={datamanagement} className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-[#1a3c5d] text-lg font-bold mb-1">Technologie de Pointe</h3>
                  <p className="text-gray-600 text-sm">Des équipements modernes pour des soins précis et efficaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate__animated animate__fadeInUp">
          <p className="text-gray-600 max-w-3xl mx-auto">
           Nous croyons en l'utilisation des dernières technologies et techniques<br/>
           afin de garantir les meilleurs résultats pour nos patients.
          </p>

          <div className="mt-8">
            <button className="bg-[#1e84b5] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 hover:bg-[#0e384c] hover:scale-105">
              <a href='#' className="flex items-center gap-2">
                Voir Tous Nos Services
                <FiArrowRight className="text-white" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
