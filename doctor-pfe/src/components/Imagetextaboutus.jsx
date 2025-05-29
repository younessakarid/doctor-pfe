import React from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import industries from "../assets/industries.png";
import { WiStars } from "react-icons/wi";

export default function Imagetextaboutus() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img src={industries} alt="Industries" className="w-full rounded-lg object-cover" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <WiStars className="text-xl text-blue-500" />
          <p className="text-sm text-[#1e84b5]">À PROPOS DE NOUS</p>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#0e384c] font-bold mb-4 leading-snug">
          <span className="text-[#1e84b5]">Une passion </span>
          pour la santé dentaire et le bien-être de nos patients
        </h1>

        {/* Paragraph */}
        <p className="text-slate-600 mb-6 text-sm sm:text-base">
          Notre cabinet dentaire est né d’une volonté claire : offrir à chacun un sourire en pleine santé dans un cadre chaleureux, moderne et rassurant. Forts de plusieurs années d’expérience, nous mettons un point d’honneur à allier technologie de pointe, expertise médicale, et écoute du patient.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-6">
          {[
            "Une approche humaine et personnalisée",
            "Des équipements à la pointe de la technologie",
            "Technologie de pointe",
            "Une équipe qualifiée et passionnée",
          ].map((text, idx) => (
            <div className="flex items-start gap-2" key={idx}>
              <div className="bg-[#1e84b5] rounded-full p-1">
                <FiCheck className="text-white" />
              </div>
              <span className="text-slate-700 text-sm sm:text-base">{text}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-[#1e84b5] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#0e384c] transition-all hover:scale-105 text-sm sm:text-base">
          En savoir plus
          <FiArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
