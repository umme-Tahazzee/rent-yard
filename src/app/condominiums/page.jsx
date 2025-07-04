'use client'

import { useState } from 'react';
import Navbar from './../../components/Navbar';
import Modal from '../../components/PropertyModal';
import { FaPlus } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import Gallery from './../../components/Gallery';
import Leasing from './../../components/Leasing';
import Charges from './../../components/Charges';
import Rentfrequency from './../../components/Rentfrequency';

const Condominiums = [
  {
    title: 'Property address',
    require: '(Required)',
    icon: ' Add',
  },
  {
    title: 'Application agreement',
    require: '(Optional)',
    icon: ' Add',
  },
  {
    title: 'Leasing info',
    require: '(Required)',
    icon: ' Add',
  },
  {
    title: 'About the property',
    require: '(Optional)',
    icon: ' Add',
  },
  {
    title: 'Charges',
    require: '(Required)',
    icon: ' Add',
  },
  {
    title: 'Community’s amenity/features',
    require: '(Optional but recommended)',
    icon: ' Add',
  },
  {
    title: 'Rent frequency & payment reminder',
    require: '(Required)',
    icon: ' Add',
  },

  {
    title: 'Pet fees',
    require: '(Optional)',
    icon: ' Add',
  },
  {
    title: 'Parking',
    require: '(Optional)',
    icon: ' Add',
  },
  {
    title: 'Nearest educational institution',
    require: '(Optional but recommended)',
    icon: ' Add',
  },
  {
    title: 'Nearest stations',
    require: '(Optional but recommended)',
    icon: ' Add',
  },
  {
    title: 'Nearest landmark',
    require: '(Optional but recommended)',
    icon: ' Add',
  },
  {
    title: 'Utilities provider',
    require: '(Optional but recommended)',
    icon: ' Add',
  }
];

const Page = () => {
 

  const [openModal, setOpenModal] = useState(false);
  const [selectTitle, setSelectedTitle] = useState('')
  

  const handleOpenModal = (title) => {
    setSelectedTitle(title);
    setOpenModal(title)
  }

  const handleCloseModal = () => {
    setOpenModal('');
    setSelectedTitle('');
  };



  return (
    <>
      <Navbar btn='Save & Exit' />

      <main className="max-h-screen bg-white text-gray-900 page-wrapper py-10">
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold mb-4 leading-[100%] tracking-normal">
            Condominiums information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {Condominiums.map(({ title, require, icon }, i) => (
              <div
                key={i}
                className='border border-gray-200 rounded-xl p-4 flex justify-between 
                items-start gap-2 hover:shadow-sm cursor-pointer transition '
                  
              >
                <div className='flex flex-col'>
                  <div className='flex items-center gap-1 text-sm text-[#272B35] font-medium'>

                    <span className="text-lg font-semibold ">{title}</span>
                    <span className={`ml-1 ${require.includes('Required') ?
                      'text-red-500' : 'text-gray-400'}`}>{require}</span>
                  </div>
                </div>
                <div className='text-[#316EED] flex text-lg font-medium  '
                  onClick={() => {
                    handleOpenModal(title)
                  }}
                >
                  <FaPlus className='size-4 mt-1' />
                  <span className='underline ml-2' >{icon} </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Property Gallery Section */}
         <Gallery/>


        {/* modal section  */}
        <Modal open={openModal==='Property address'} onClose={handleCloseModal} title={selectTitle} />
        <Leasing open={openModal==='Leasing info'} onClose={handleCloseModal} title={selectTitle}   />
        <Charges open={openModal==='Charges'} onClose={handleCloseModal} title={selectTitle}    /> 
        <Rentfrequency open={openModal==='Rent frequency & payment reminder'} onClose={handleCloseModal} title={selectTitle}  />

        {/* Footer Section  */}
        <footer className="p-5 flex justify-between items-center mt-20 mb-10">
          <button className="text-sm text-gray-600 underline cursor-pointer">Back</button>
          <button className="text-white px-6 py-2 rounded-[12px] text-sm cursor-pointer bg-[#316EED]">
            Next
          </button>
        </footer>

      </main>
    </>
  );
};

export default Page;
