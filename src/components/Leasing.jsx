'use client'

import { IoCloseSharp } from "react-icons/io5";
const Leasing = ({ open, onClose, title }) => {
  if (!open) return null;

  return (
  <div className="fixed inset-0 z-50  bg-black/30 backdrop-blur-md flex items-center justify-center">
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

    {/* Modal Body */}
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Leasing Manager Name */}
        <div>
          <h5 className="text-[#272B35] text-base font-semibold mb-2">Leasing manager name*</h5>
          <div className="border border-gray-300 rounded-2xl px-4 py-3 hover:border-gray-500 transition-colors">
            <span className="text-base font-medium text-[#272B35]">Alex Johan</span>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <h5 className="text-[#272B35] text-base font-semibold mb-2">Leasing manager Phone number*</h5>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl">🇧🇩</span>
            <input
              type="tel"
              name="phone"
              placeholder="+8801"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 hover:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Contact Email */}
        <div>
          <h5 className="text-[#272B35] text-base font-semibold mb-2">Contact email*</h5>
          <div className="border border-gray-300 rounded-2xl px-4 py-3 hover:border-gray-500 transition-colors">
            <span className="text-base font-medium text-[#272B35]">majarul2025@gmail.com</span>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center mt-6 gap-2">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="terms" className="text-gray-700 text-sm cursor-pointer">
            Address (same as property)
          </label>
        </div>
        
      </div>
    </div>

    {/* Modal Footer */}
    <div className="flex justify-end p-4 border-t border-gray-200">
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
        onClick={onClose}
      >
        Add
      </button>
    </div>
  </div>
</div>


  );
}

export default Leasing