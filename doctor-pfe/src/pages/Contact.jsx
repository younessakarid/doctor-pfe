import React from "react";
import contactt from "../assets/contactt.webp";

const ContactezNous = () => {
  return (
    <div className="min-h-screen bg-[#eff8ff] px-4 py-10 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
        Contactez-nous
      </h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row bg-[#eff8ff] rounded-2xl overflow-hidden w-full max-w-5xl shadow-xl border border-blue-100">
        
        {/* Image on the Left */}
        <div className="md:w-1/2 w-full">
          <img
            src={contactt}
            alt="Bureau"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contact Info on the Right */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-1">Notre BUREAU</h3>
            <p className="text-gray-700">54709 Willms Station</p>
            <p className="text-gray-700">Suite 350, Washington, USA</p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Téléphone :</span> (415) 555‑0132
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email :</span> greatstackdev@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">Carrières chez PRESCRIPTO</h3>
            <p className="text-gray-700">
              Découvrez nos équipes et les postes à pourvoir.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline mt-2 inline-block"
            >
              Voir les offres d'emploi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactezNous;
