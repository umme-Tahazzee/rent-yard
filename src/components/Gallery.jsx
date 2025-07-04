'use client'

import { FiUpload } from "react-icons/fi";

const Gallery = () => {
  return (
   <div className="mt-8 bg-base-100 shadow-sm border border-gray-200 rounded-t-2xl ">
             <h3 className='bg-[#F4F4F4] text-[#6F6C6A] p-5 border border-gray-200 rounded-t-2xl'>
               Property gallery
               <span className="text-gray-500">(It's not unit photo)*</span></h3>
             <div className="mb-6 p-4">
               <label className="text-md font-semibold mb-1 block">Featured photos
                 <span className="text-red-500">*</span>
   
   
               </label>
               {/* Upload Photo Section */}
               <div className="w-full">
                 <div className="flex flex-col md:flex-row md:items-start gap-6 flex-wrap">
   
                   {/* Upload Cover Photo */}
                   <div className="w-full md:w-72 h-48 flex flex-col items-center justify-center border-2 border-dashed
                 border-[#316EED] rounded-lg cursor-pointer bg-gray-50 text-[#272B35] text-[16px] font-bold
                   text-center px-4">
   
                     <div className="border border-[#316EED] border-dashed p-2 rounded-md mb-3">
                       <FiUpload className="text-3xl text-[#272B35] size-8" />
                     </div>
   
                     <p>
                       Upload cover photo<br />
                       <span className="text-sm font-normal text-gray-500">(jpg, png only)</span>
                     </p>
                   </div>
   
                   {/* Image Placeholder Grid */}
                   <div className="flex flex-col sm:flex-row flex-wrap gap-4">
   
                     {/* First Column (2x2 grid) */}
                     <div className="grid grid-cols-2 gap-2">
                       {Array.from({ length: 4 }).map((_, index) => (
                         <div key={`first-col-${index}`} className="w-24 h-24 border-2 border-dashed border-gray-300
                        rounded-lg flex items-center justify-center text-gray-400 text-xl">
                           +
                         </div>
                       ))}
                     </div>
   
                     {/* Second Column (4x2 grid) */}
                     <div className="grid grid-cols-4 gap-2 md:pl-5 ">
                       {Array.from({ length: 8 }).map((_, index) => (
                         <div key={`second-col-${index}`} className="w-24 h-24 border-2 border-dashed border-gray-300
                       rounded-lg flex items-center justify-center text-gray-400 text-xl">
                           +
                         </div>
                       ))}
                     </div>
   
                   </div>
                 </div>
               </div>
   
             </div>
   
             <div className='p-5'>
               <div className="w-full h-16 border-1  border-gray-300 rounded-lg flex text-xl">
               <label className="text-md font-semibold mb-1 block p-3">Videos
                  <span className="text-gray-400">(optional)</span></label>
   
                </div>
             </div>
   
           </div>
  )
}

export default Gallery