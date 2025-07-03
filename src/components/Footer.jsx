'use client';
import React from 'react';

const Footer = ({ isNextEnabled, title , btn}) => {
  return (
    <footer className="p-5 flex justify-between items-center mt-20 mb-10">
      <button
        // onClick={onBack}
        className="text-sm text-gray-600 underline cursor-pointer"
      >
        {title}
      </button>
      <button
        // onClick={isNextEnabled ? onNext : null}
        className={`text-white px-6 py-2 rounded-[12px] text-sm
          ${isNextEnabled
            ? 'cursor-pointer bg-[#316EED]'
            : 'opacity-50 cursor-not-allowed bg-primary'
          }`}
        disabled={!isNextEnabled}
      >
       {btn}
      </button>
    </footer>
  );
};

export default Footer;
