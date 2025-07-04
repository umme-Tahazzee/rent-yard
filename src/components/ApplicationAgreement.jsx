import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDownWideLine } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { AiOutlineUpload } from 'react-icons/ai';



const ApplicationAgreement = ({ open, onClose, title }) => {
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
       <div className="gap-6">
 
         {/* Application fee(one-time)*/}
         <div>
           <h5 className="text-[#272B35] text-base f
           ont-semibold mb-2">Upload agreement</h5>
           <label
                 
                  className="w-full  flex items-center justify-center gap-2 
                       cursor-pointer border border-gray-400 rounded-lg bg-[#E0E0E0] 
                       px-4 py-3 border-dashed text-gray-500 hover:border-gray-600 
                       transition-colors text-sm text-center"
                >
                  <AiOutlineUpload size={20} />
                  <span className="text-sm">(Pdf only)</span>
                </label>


         </div>
 
         {/*  Accept immigrant & international student application*/}
        <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="terms" className="text-gray-700 text-sm cursor-pointer">
          Accept immigrant & international student application
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

export default ApplicationAgreement