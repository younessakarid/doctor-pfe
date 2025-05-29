import React from 'react';
import Untitled1 from "../assets/Untitled1.png";
import Untitled2 from "../assets/Untitled2.png";
import Untitled3 from "../assets/Untitled3.png";

function CollabSections() {
  return (
    <div className="bg-[#f1f9ff] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">

        {/* Text Section */}
        <div className="text-center md:text-left md:max-w-md">
          <h4 className="text-[#0e384c] text-lg sm:text-xl md:text-2xl font-bold leading-snug">
            La confiance du principal fournisseur <br className="hidden sm:block" />
            d'assurance du secteur
          </h4>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 md:mt-0">
          <img src={Untitled1} alt="Logo 1" className="w-20 sm:w-24 md:w-28" />
          <img src={Untitled2} alt="Logo 2" className="w-20 sm:w-24 md:w-28" />
          <img src={Untitled3} alt="Logo 3" className="w-20 sm:w-24 md:w-28" />
        </div>

      </div>
    </div>
  );
}

export default CollabSections;
