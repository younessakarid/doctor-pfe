import React from "react";
import tooth from "../assets/tooth.png";
import implant from "../assets/implant.png";
import medicine from "../assets/medicine.png";
import monitoring from "../assets/monitoring.png";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import "tailwindcss-animated";



export default function FirstSection(){
     
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#f1f9ff] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-[4%]">
        <div className="text-center mb-8 animate__animated animate__slideInUp" >
          <p className="text-[#1e84b5] font-small mb-2">NOTRE SERVICES</p>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#1e84b5]">Haute qualité</span>
            <span className="text-[#1a3c5d]"> services pour vous</span>
          </h2>
          <p className="text-gray-600">
            Un accompagnement attentif pour un sourire en pleine santé.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          
          <div className="bg-white rounded-[35px] shadow-sm p-8 text-center animate__animated animate__fadeInUp hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <img src={tooth}  className="w-16 h-16" />
            </div>
            <h3 className="text-[#1a3c5d] text-xl font-bold mb-3">Dentisterie Esthétique</h3>
            <p className="text-gray-600 mb-4">
              Le sourire, première communication. Nous sommes excités de vous rencontrer.
            </p>
            <button  onClick={() => navigate('/')}  className="bg-white text-[#1e84b5] font-medium py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#0e384c] hover:text-white hover:scale-105">
                                <a href='#' className="flex items-center gap-2">
                                    Voir plus
                             
                                    <FaArrowRight />
                                </a>
                            </button>
          </div>

         
          <div className="bg-white rounded-[30px] shadow-sm p-8 text-center animate__animated animate__fadeInUp animate__duration_700ms hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <img src={implant} alt="Find Doctors" className="w-16 h-16" />
            </div>
            <h3 className="text-[#1a3c5d] text-xl font-bold mb-3">Implants <br/>Dentaires</h3>
            <p className="text-gray-600 mb-4">
              Rendez-vous confirmés. Nous sommes excités de vous rencontrer.
            </p>
            <button className="bg-white text-[#1e84b5] font-medium py-2 px-4 rounded-full mt-6 transition-all duration-300 hover:bg-[#0e384c] hover:text-white hover:scale-105">
                                <a href='#' className="flex items-center gap-2">
                                    Voir plus
                             
                                    <FaArrowRight />
                                </a>
                            </button>
          </div>

     
          <div className="bg-white rounded-[30px] shadow-sm p-8 text-center animate__animated animate__fadeInUp  hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <img src={medicine} className="w-16 h-16" />
            </div>
            <h3 className="text-[#1a3c5d] text-xl font-bold mb-3">Blanchiment <br/>des dents</h3>
            <p className="text-gray-600 mb-4">
              L'essentiel à votre porte. Nous sommes excités de vous rencontrer.
            </p>
            <button className="bg-white text-[#1e84b5] font-medium py-2 px-4 rounded-full mt-6 transition-all duration-300 hover:bg-[#0e384c] hover:text-white hover:scale-105">
                <a href='#' className="flex items-center gap-2">
                                    Voir plus  <FaArrowRight />
                            
                </a>
            </button>
          </div>

        
          <div className="bg-white rounded-[30px] shadow-sm  p-8 text-center animate__animated animate__fadeInUp hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4">
              <img src={monitoring} alt="Dentisterie Numérique" className="w-16 h-16" />
            </div>
            <h3 className="text-[#1a3c5d] text-xl font-bold mb-3">Dentisterie Numérique</h3>
            <p className="text-gray-600 mb-4">
              L'innovation au service de votre sourire. Nous sommes excités de vous rencontrer.
            </p>
            <button className="bg-white text-[#1e84b5] font-medium py-2 px-4 rounded-full  transition-all duration-300 hover:bg-[#0e384c] hover:text-white hover:scale-105">
                <a href='#' className="flex items-center gap-2">
                                    Voir plus  <FaArrowRight />
                            
                </a>
            </button>
          </div>
        </div>

        
        <div className="text-center mt-12 animate__animated animate__fadeInUp">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nous croyons en l'utilisation des dernières technologies et techniques <br/> afin de 
            garantir les meilleurs résultats pour nos patients.
          </p>

          <div className="mt-8">
           
          <button className=" bg-[#1e84b5] text-white  font-medium py-2 px-4 rounded-full transition-all duration-300   hover:bg-[#0e384c]  hover:scale-105">
                                <a href='#' className="flex items-center gap-2">
                                View All Services
                             
                                  <FiArrowRight className="text-white" />
                                </a>
                            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 