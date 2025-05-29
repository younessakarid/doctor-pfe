import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import industries from "../assets/industries.png";
import { WiStars } from "react-icons/wi";

export default function Imagetextaboutus() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
   
      <div className="w-full lg:w-1/2">
        <img src={industries} alt="Industries" className="w-full h-auto rounded-lg object-cover" />
      </div>
      
      
      <div className="w-full lg:w-1/2">
        <div className="flex items-center gap-2 mb-2">
          <WiStars className="text-xl text-blue-500" />
          <p className="text-sm text-[#1e84b5]">À PROPOS DE NOUS</p>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#0e384c] font-bold mb-4">
          <span className="text-[#1e84b5]">Une passion </span>
          pour la santé dentaire et le bien-être de nos patients
        </h1>
        
        <p className="text-slate-600 mb-6 text-base">
          Notre cabinet dentaire est né d’une volonté claire : offrir à chacun un sourire en pleine santé dans un cadre chaleureux, moderne et rassurant. Forts de plusieurs années d’expérience, nous mettons un point d’honneur à allier technologie de pointe, expertise médicale, et écoute du patient.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
          {[
            "Une approche humaine et personnalisée",
            "Des équipements à la pointe de la technologie",
            "Un cadre moderne et rassurant",
            "Une équipe qualifiée et passionnée",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg-[#1e84b5] rounded-full p-1.5">
                <FiCheck className="text-white" />
              </div>
              <span className="text-slate-700 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
        
        <button className="bg-[#1e84b5] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#0e384c] transition-all hover:scale-105">
          En savoir plus
          <FiArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
