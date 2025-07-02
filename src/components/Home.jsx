'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import router
import { IoHomeOutline, IoKeyOutline } from "react-icons/io5";
import { PiBuildingApartment, PiMapPinSimpleAreaLight } from "react-icons/pi";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiOutlinePropertySafety } from "react-icons/ai";

import Landloard from '@/app/Landlord/page'
import Realtor from '@/app/Realtor/page'
import Property from '@/app/Property/page'

const propertyTypes = [
  {
    title: 'Single House Property',
    description: 'Single unit house for single family',
    icon: <IoHomeOutline />,
  },
  {
    title: 'Apartments complex',
    description: 'Multiple unit house for families',
    icon: <MdOutlineHomeWork />
  },
  {
    title: 'Condominiums',
    description: 'Multiple unit house for families',
    icon: <PiBuildingApartment />,
    link: '/condominiums', // ✅ add link here
  },
];

const roles = [
  {
    title: 'Landlord',
    description: 'Owner of the property',
    icon: <IoKeyOutline />,
  },
  {
    title: 'Realtor',
    description: 'Manage property on behalf of owner',
    icon: <PiMapPinSimpleAreaLight />,
  },
  {
    title: 'Property management company',
    description: 'For management company',
    icon: <AiOutlinePropertySafety />,
  },
];

const Home = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const router = useRouter(); // ✅ use router

  const renderComponent = () => {
    switch (selectedRole) {
      case 'Landlord':
        return <Landloard />;
      case 'Realtor':
        return <Realtor />;
      case 'Property management company':
        return <Property />;
      default:
        return null;
    }
  };

  return (
    <main className=" lg:h-[650px] bg-white font-sans text-gray-900 
    page-wrapper py-10">
      <section className="space-y-10">

        {/* Property type */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 leading-[100%]
           tracking-normal">Property type</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {propertyTypes.map(({ title, description, icon, link }, i) => (
              <div
                key={i}
                className="border border-gray-200 hover:border-primary rounded-xl p-4
                 flex items-start gap-4 transition cursor-pointer"
                onClick={() => {
                  if (link) router.push(link); 
                }}
              >
                <div className='text-2xl mt-1'>{icon}</div>
                <div>
                  <h3 className="font-medium text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Select your role */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 leading-[100%]
           tracking-normal">Select your role</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {roles.map(({ title, description, icon }, i) => (
              <div
                key={i}
                onClick={() => setSelectedRole(title)}
                className={`border ${
                  selectedRole === title ? 'border-primary bg-gray-50' : 'border-gray-200'
                } hover:border-primary 
                rounded-xl p-4 flex items-start gap-4 transition cursor-pointer`}
              >
                <div className='text-2xl mt-1'>{icon}</div>
                <div>
                  <h3 className="font-medium text-sm mb-1">{title}</h3>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditional component */}
        <div className="mt-10">
          {renderComponent()}
        </div>

      </section>
    </main>
  );
};

export default Home;
