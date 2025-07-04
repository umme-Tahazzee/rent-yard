'use client'

import { IoCloseSharp } from "react-icons/io5";


const Modal = ({open , onClose , title}) => {
  if (!open) return null;

  return (
   <>
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
       

        {/* Modal Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 p-5">
          <div>
            <label className="block text-sm font-medium mb-1">
             Property name as identifier
             <span className="text-red-500">*</span></label>
            <input
              type="text"
              defaultValue="Dallas apartments complex"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Total apartment unit<span className="text-red-500">*</span></label>
            <input
              type="text"
              defaultValue="50"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Property website <span className="text-gray-400">(optional)</span></label>
            <input
              type="url"
              placeholder="https://"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country/Region<span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>Choose country</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Street address<span className="text-red-500">*</span></label>
            <input
              type="text"
              defaultValue="111 Austin Ave"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Apt, suite, unit (if applicable)</label>
            <input
              type="text"
              defaultValue="123"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City/Town<span className="text-red-500">*</span></label>
            <input
              type="text"
              defaultValue="Dallas"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State/Territory<span className="text-red-500">*</span></label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
              <option>Choose state</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Zip code<span 
            className="text-red-500">*</span></label>
            <input
              type="text"
              defaultValue="75061"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end p-4 border-t">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm hover:bg-blue-700"
            onClick={onClose}
          >
            Add
          </button>
        </div>
      </div>
      </div>

   </>
   
  );
}

export default Modal