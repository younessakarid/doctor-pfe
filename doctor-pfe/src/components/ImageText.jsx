import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import imgtest from "../assets/imgtest.png";
import { WiStars } from "react-icons/wi";
import star1 from "../assets/star1.png";

export default function ImageText() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-9 relative">
      <div className="relative w-full lg:w-1/2 ml-0 lg:ml-30">
        <img src={imgtest} className="w-full rounded-lg" />
      </div>

      <div className="w-full lg:w-1/2 mr-0 lg:mr-30 mt-6 lg:mt-0">
        <div className="flex items-center gap-2 mb-2">
          <WiStars className="text-lg text-blue-500" />
          <p className="text-sm text-[#1e84b5]">À PROPOS DE NOUS</p>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#0e384c] font-bold mb-4">
          <span className="text-[#1e84b5]">Votre voyage </span>
          vers un sourire plus sain commence ici
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mb-6">
          L'objectif de notre clinique est de fournir une dentisterie amicale
          et attentionnée et le plus haut niveau de traitements dentaires
          généraux, cosmétiques et spécialisés. Avec des cabinets dentaires
          dans le monde entier.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
          {[
            "Une équipe expérimentée",
            "Services complets",
            "Technologie de pointe",
            "Services dentaires d'urgence",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg-[#1e84b5] rounded-full p-1">
                <FiCheck className="text-white" />
              </div>
              <span className="text-slate-700 text-sm sm:text-base">
                {text}
              </span>
            </div>
          ))}
        </div>

        <button
          className="bg-[#1e84b5] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#0e384c] transition-all hover:scale-105"
          onClick={() => navigate("/About")}
        >
          En savoir plus
          <FiArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
