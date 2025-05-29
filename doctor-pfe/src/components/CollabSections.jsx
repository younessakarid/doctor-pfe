import React from 'react';
import Untitled1 from "../assets/Untitled1.png";
import Untitled2 from "../assets/Untitled2.png";
import Untitled3 from "../assets/Untitled3.png";

function CollabSections() {
  return (
    <div className='bg-[#f1f9ff] py-12 px-4'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16'>
        
      
        <div className='text-center md:text-left'>
          <h4 className='text-[#0e384c] text-xl md:text-2xl font-bold'>
            La confiance du principal fournisseur <br className='hidden md:block' />
            d'assurance du secteur
          </h4>
        </div>
        
       
        <div className='flex flex-wrap justify-center md:justify-start gap-6 md:gap-10'>
          <img src={Untitled1} alt="Logo 1" className='h-12 md:h-16 w-auto object-contain' />
          <img src={Untitled2} alt="Logo 2" className='h-12 md:h-16 w-auto object-contain' />
          <img src={Untitled3} alt="Logo 3" className='h-12 md:h-16 w-auto object-contain' />
        </div>

      </div>
    </div>
  );
}

export default CollabSections;
