'use client';


import { IoCloseSharp } from "react-icons/io5";

import { useState } from 'react';
import {
  FaFan,
  FaTv,
  FaSnowflake,
  FaFireExtinguisher,
  FaCar,
  FaFire,
  FaShieldAlt,
  FaHome
} from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const amenitiesList = [
  "Air conditioning",
  "Cable ready",
  "Ceiling fan",
  "High ceilings",
  "Private balcony",
  "Refrigerator",
  "Wooded views",
  "W/D hookup",
  "Hardwood Floor (home)",
  "Fireplace (home)",
  "First aid kit",
  "Carbon monoxide alarm",
  "Expanded patios (home)",
  "Free parking on premises",
  "Fire extinguisher"
];

export default function AmenitiesSelector({ open, onClose, title }) {
  if (!open) return null;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAmenities = amenitiesList.filter((amenity) =>
    amenity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

   <div className="fixed inset-0 z-50  bg-black/30 backdrop-blur-md flex 
   items-center justify-center" >
   <div className="bg-white border border-gray-300 rounded-3xl w-full max-w-5xl shadow-lg 
   relative overflow-hidden">

   {/* Modal Header */}
       <div className="bg-[#F4F4F4] p-4 flex justify-between items-center border-b border-gray-300 rounded-t-3xl">
         <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
         <button
           className="text-gray-600 text-2xl hover:text-gray-900 transition-colors"
           onClick={onClose}
         >
           <IoCloseSharp />
         </button>
       </div>
    
    <div className="p-5">
    
      {/* Search Bar */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 mb-4 shadow-sm">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search amenities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      {/* Amenity Tags */}
      <div className="flex flex-wrap gap-2">
        {filteredAmenities.map((amenity, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-full text-gray-700 bg-white hover:border-blue-500 hover:text-blue-500 transition duration-200"
          >
            {getAmenityIcon(amenity)}
            {amenity}
          </button>
        ))}
      </div>
    </div>
    </div>
   


     </div>
       
  );
}

// Icon mapping function
function getAmenityIcon(name) {
  const lower = name.toLowerCase();
  if (lower.includes("air")) return <FaSnowflake />;
  if (lower.includes("ceiling fan")) return <FaFan />;
  if (lower.includes("cable")) return <FaTv />;
  if (lower.includes("fire extinguisher")) return <FaFireExtinguisher />;
  if (lower.includes("fireplace")) return <FaFire />;
  if (lower.includes("parking")) return <FaCar />;
  if (lower.includes("alarm")) return <FaShieldAlt />;
  if (lower.includes("floor")) return <FaHome />;
  return null;
}
