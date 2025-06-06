import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { WiStars } from "react-icons/wi";
import 'animate.css';

function RelatedDoctors({ docId }) {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      const filteredDoctors = doctors.filter(doc => doc._id !== docId);
      setRelDoc(filteredDoctors);
    }
  }, [doctors, docId]);

  const handleDoctorClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f1f9ff] py-8 pb-20 rounded-[10px]">
      <div className="w-screen relative left-1/2 -translate-x-1/2 py-2 px-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-[4%] sm:py-14">
          <div className="text-center mb-8 animate__animated animate__fadeInUp">
            <div className='flex items-center justify-center gap-1 pb-3'>
              <WiStars className='text-2xl sm:text-3xl text-[#1e84b5]' />
              <p className="text-[#1e84b5] font-small text-sm sm:text-base">NOTRE ÉQUIPE</p>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
              <span className="text-[#1e84b5]">Notre Équipe</span>
              <span className="text-[#1a3c5d]"> de Dentistes Sympathiques.</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg">
              Des dentistes à l'écoute, offrant des soins de qualité pour un sourire éclatant.
            </p>
          </div>
        </div>
      </div>

      <div className='flex gap-5 flex-wrap justify-center items-center sm:gap-8'>
        {relDoc.slice(0, 5).map((item, index) => (
          <Link
            to={`/appointment/${item._id}`}
            key={index}
            onClick={handleDoctorClick}
            className="rounded-[20px] w-[220px] sm:w-[250px] border-gray-100 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s"
          >
            <div className='flex justify-center bg-[#e7ecef] rounded-[30px] overflow-hidden'>
              <img 
                src={item.image} 
                alt={item.name} 
                className='w-[260px] sm:w-[280px] h-[200px] sm:h-[260px] px-6 pt-6 z-3 hover:scale-110 transition-transform duration-700 object-contain' 
              />
            </div>

            <div className='flex flex-col justify-center items-center pb-2 mt-4'>
              <h2 className='text-xl sm:text-2xl text-[#0e384c] font-semibold'>{item.name}</h2>
              <p className='text-xs text-gray-600 px-2 text-center whitespace-nowrap'>
                {item.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className='flex justify-center mt-3 sm:mt-6'>
        <button className='bg-[#e7ecef] text-[#252c62] px-6 py-2 sm:px-8 sm:py-3 rounded-[65px] hover:scale-110 hover:bg-[#0e384c] transition-all duration-300 font-semibold hover:text-white'>
          Voir plus
        </button>
      </div>
    </div>
  );
}

export default RelatedDoctors;
