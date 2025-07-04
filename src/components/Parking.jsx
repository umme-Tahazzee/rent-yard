'use client'

import { IoCloseSharp } from "react-icons/io5";


const Parking = ({ open, onClose, title }) => {
 if (!open) return null;

 return (
  <div>

   <div className="fixed inset-0 z-50 
    bg-black/30 backdrop-blur-md flex items-center justify-center">
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
   <div className="p-6 space-y-4">
  {/* Document Section */}
  <div className="p-4 border border-gray-200 rounded-lg">
    <label htmlFor="ownershipDoc" className="cursor-pointer flex justify-between ">
      <span className="text-sm font-bold text-black">Guest vehicle parking time</span>
      <button type="button" className="btn bg-white  " >2H</button>
    </label>
  </div>

  {/* Textarea Section */}
  <div className="p-4 border border-gray-200 rounded-lg">
    <textarea
      placeholder="Type your message .."
      rows={5}
      className="w-full p-2 "
    />
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

  </div>




 );
}

export default Parking