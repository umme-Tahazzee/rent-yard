// components/SectionRenderer.jsx
'use client';

import React from 'react';
import Leasing from './Leasing';
import Charges from './Charges';
import Rentfrequency from './Rentfrequency';
// Import other components if needed

const SectionRenderer = ({ title }) => {
  switch (title) {
    case 'Property address':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Property address form content goes here...</div>;

    case 'Application agreement':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Application agreement form goes here...</div>;

    case 'Leasing info':
      return <Leasing title={title} />;

    case 'About the property':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>About the property form goes here...</div>;

    case 'Charges':
      return <Charges title={title} />;

    case 'Community’s amenity/features':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Community amenities selection goes here...</div>;

    case 'Rent frequency & payment reminder':
      return <Rentfrequency title={title} />;

    case 'Pet fees':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Pet fees form goes here...</div>;

    case 'Parking':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Parking info form goes here...</div>;

    case 'Nearest educational institution':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Nearest schools input goes here...</div>;

    case 'Nearest stations':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Nearest station info goes here...</div>;

    case 'Nearest landmark':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Landmarks input goes here...</div>;

    case 'Utilities provider':
      return <div className='mt-3 p-4 border rounded-xl bg-gray-50'>Utilities provider form goes here...</div>;

    default:
      return <div className='mt-3 p-4 border rounded-xl bg-yellow-50 text-yellow-800'>No form found for: {title}</div>;
  }
};

export default SectionRenderer;
