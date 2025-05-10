import React from 'react'
import Imagetextaboutus from '../components/Imagetextaboutus';
import CollabSections from '../components/CollabSections';
import VideoBanner from '../components/VideoBanner';
import Assurance from '../components/Assurance';

import { FiArrowRight, FiCheck } from "react-icons/fi";

import { WiStars } from "react-icons/wi";
import imagedentalLLL from "../assets/imagedentalLLL.png"



function About() {
  return (
    <>
    {/* Header */}
    <div className="text-center py-16 px-4 bg-[#eff8ff]">
        <h1 className="text-[#1e84b5] text-4xl sm:text-5xl font-bold">
        À propos<span className="text-[#0e384c]"> de nous</span>
        </h1>

        <div className="flex justify-center gap-2 pt-4 text-sm sm:text-base">
          <h6><a href="/" className="text-[#0e384c]">Home</a></h6>
          <span className="text-[#1e84b5] font-semibold opacity-70"> / </span>
          <h6 className="text-[#0e384c]">About Us</h6>
        </div>
      </div>
     <Imagetextaboutus/>
     <CollabSections/>
     <VideoBanner/>
     <Assurance/>
     <div className="container mx-auto px-5 py-8 flex flex-col lg:flex-row items-center gap-10 relative">
            
           
              
            <div className="w-full lg:w-1/2 ">
              <div className="flex items-center gap-1 mb-2">
                <WiStars className="text-l text-blue-500" />
                <p className="text-[14px] text-[#1e84b5]">À PROPOS DE NOUS</p>
              </div>
              
              <h1 className="text-4xl text-[#0e384c] font-bold  mb-4">
              <span className="text-[#1e84b5]">Une passion </span> pour la santé dentaire et le bien-être de nos patients
              </h1>
         
              <p className="text-slate-600 mb-6">
              Notre cabinet dentaire est né d’une volonté claire : offrir à chacun un sourire en pleine santé dans un cadre chaleureux, moderne et rassurant. Forts de plusieurs années d’expérience, nous mettons un point d’honneur à allier technologie de pointe, expertise médicale, et écoute du patient.
              </p>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="bg-[#1e84b5] rounded-full p-1">
                    <FiCheck className="text-white" />
                  </div>
                  <span className="text-slate-700">Une approche humaine et personnalisée</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#1e84b5] rounded-full p-1">
                    <FiCheck className="text-white" />
                  </div>
                  <span className="text-slate-700">Des équipements à la pointe de la technologie</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#1e84b5] rounded-full p-1">
                    <FiCheck className="text-white" />
                  </div>
                  <span className="text-slate-700">Une équipe qualifiée et passionnée</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-[#1e84b5] rounded-full p-1">
                    <FiCheck className="text-white" />
                  </div>
                  <span className="text-slate-700">Des soins accessibles et de qualit</span>
                </div>
              </div>
              
              <button className="bg-[#1e84b5] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#0e384c] transition-all  hover:scale-105">
               En savoir plus
                <FiArrowRight className="text-white" />
              </button>
            </div>
            <div className="relative w- lg:w-1/2 ml-30 ">
              <img  src={imagedentalLLL}   className="w-full rounded-lg  "/>
            </div>
            
          </div>
      </>
  )
}

export default About