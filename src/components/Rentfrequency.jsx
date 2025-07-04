import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDownWideLine } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";


const Rentfrequency = ({ open, onClose, title }) => {
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
   
           {/* Application fee(one-time)*/}
           <div>
             <h5 className="text-[#272B35] text-base font-semibold mb-2">Rent payment frequency
              <span className="text-red-500 gap-2 text-[16px]" >*</span>
             </h5>
             <div className="flex justify-between border border-gray-300 rounded-2xl px-4 py-3
              hover:border-gray-500 transition-colors">
               <p className="text-base font-medium text-[#272B35]">Monthly</p>
               <div className="flex gap-2">
                <RiArrowDownWideLine className="mt-1 size-4 " />
               </div>
             </div>
           </div>
   
           {/* Admin fee(one-time) */}
         <div>
             <h5 className="text-[#272B35] text-base font-semibold mb-2">Rent Reminder/Statement date*</h5>
             <div className="flex justify-between border border-gray-300 rounded-2xl px-4 py-3
              hover:border-gray-500 transition-colors">

              <div className="flex justify-between items-center w-full">
              <div className="text-base font-medium text-[#272B35]">25th Every month</div>
                        <FaRegCalendarAlt className="size-6 text-[#272B35]" />
                 </div>
            
             </div>
           </div>
   
   
           {/* Terms & Conditions */}
           <div className="flex items-center mt-6 gap-2">
             <MdErrorOutline className="size-6"/>
             <div  className="text-[#272B35] text-[16px] cursor-pointer">
               Address (same as property)
             </div>
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

export default Rentfrequency