import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { specialityData } from '../assets/assets';

function Doctors() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const decodeSpeciality = (speciality) => {
    return speciality ? speciality.replace(/-/g, ' ') : '';
  };

  const decodedSpeciality = decodeSpeciality(speciality);

  const filteredDoctors = decodedSpeciality
    ? doctors.filter(doc => doc.speciality.toLowerCase().trim() === decodedSpeciality.toLowerCase().trim())
    : doctors;

  const handleSpecialityClick = (specialityName) => {
    const slug = specialityName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/doctors/${slug}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-10">

      {/* Sidebar */}
      <div className="min-w-[250px]">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Parcourir les spécialités</h2>
        <div className="flex flex-col gap-3">
          {specialityData.map((item, idx) => (
            <button 
              key={idx}
              onClick={() => handleSpecialityClick(item.speciality)}
              className="border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition text-left text-[#0a2b3b]"
            >
              {item.speciality}
            </button>
          ))}
          <button 
            onClick={() => navigate('/doctors')}
            className="border border-gray-300 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-left"
          >
            Voir Tout
          </button>
        </div>
      </div>

      {/* Doctors Cards */}
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((item, index) => (
            <div 
              key={index} 
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer rounded-[20px] w-[220px] sm:w-[250px] border border-gray-200 max-h-[320px] shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center h-[185px] bg-[#e7ecef] rounded-[20px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-[220px] h-[200px] object-contain p-4 hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col items-center p-4">
                <h2 className="text-lg font-bold text-[#0e384c]">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-1 text-center">{item.speciality}</p>
                <p className="text-xs text-gray-500">{item.degree}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No doctors found for this specialty.</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
