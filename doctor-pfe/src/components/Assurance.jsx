import React from "react";

export default function Assurance() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12 items-center justify-center mt-16 mb-16 px-4 sm:px-6 lg:px-8">
      
      {[
        {
          value: "75+",
          title: "Assurances Acceptées",
          desc: "Nous acceptons diverses assurances\ndentaires pour faciliter vos soins.",
        },
        {
          value: "2K",
          title: "Projets Réalisés",
          desc: "Plus de 2000 projets de soins\nréalisés avec excellence.",
        },
        {
          value: "22K",
          title: "Clients Satisfaits",
          desc: "La satisfaction de nos patients\nest notre plus grande fierté.",
        },
        {
          value: "18+",
          title: "Médecins Expérimentés",
          desc: "Notre équipe de médecins expérimentés\ngarantit des soins de qualité.",
        },
      ].map((item, index) => (
        <div className="text-center w-full sm:w-[45%] lg:w-[22%]" key={index}>
          <h1 className="text-[#0e384c] font-bold mb-1 text-[32px] sm:text-[40px] lg:text-[44px]">
            {item.value}
          </h1>
          <h2 className="text-[18px] sm:text-[20px] text-[#0e384c] mb-2">{item.title}</h2>
          <hr className="border-t border-blue-500 opacity-20 my-4 mx-auto w-16" />
          <p className="text-[#527282] text-sm sm:text-base whitespace-pre-line">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
