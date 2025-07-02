'use client'

import { AiOutlineUpload } from 'react-icons/ai';

const page = () => {
   return (
     <div className='bg-base-100 shadow-sm border border-gray-200 rounded-t-2xl '>
      <h2 className='bg-[#F4F4F4] text-[#6F6C6A] p-5 border border-gray-200 rounded-t-2xl  '>
     Company & office info
      </h2>
      <div className='p-5'>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* 000000000 */}
        <div className="">
        <h5 className='text-[#272B35] text-[16px] font-semibold p-2'>Company name</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer  border flex flex-row
             border-gray-400 rounded-2xl px-4 py-4
              hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] leading-[100%] tracking-[0%] text-[#272B35]">Runyan trade center</span>
          </label>     
        </div>
     
  
         {/*name section  */}
         <div className="">
        <h5 className='text-[#272B35] text-[16px] font-semibold p-2'>Company Identifier(EIN/TIN)</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer  border flex flex-row
             border-gray-400 rounded-2xl px-4 py-4
              hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] leading-[100%] tracking-[0%] text-[#272B35]">Name</span>
          </label>     
        </div>

        {/*name section  */}
         <div className="">
        <h5 className='text-[#272B35] text-[16px] font-semibold p-2'>Your job title*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer  border flex flex-row
             border-gray-400 rounded-2xl px-4 py-4
              hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] leading-[100%] tracking-[0%] text-[#272B35]">Manager</span>
          </label>     
        </div>
  
        {/* pdf only section  */}
         <div className="">
          <h5 className='text-[#272B35] text-[16px] font-semibold p-2' >Agreement with landlord/owner* </h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer flex flex-row items-center justify-center 
            gap-2 border border-gray-400 rounded-lg bg-[#E0E0E0] px-4 py-4 border-dashed text-gray-500 hover:border-gray-600 transition-colors text-sm text-center"
          >
            <AiOutlineUpload size={20} />
            <span className="text-sm">(Pdf only)</span>
          </label>
  
          <input
            id="ownershipDoc"
            type="file"
            accept=".pdf"
            className="hidden"
          />
        </div>
  
  
      </div>
   
  
  
  
         {/* Example checkbox below */}
         <div className="mt-4 flex items-center gap-2">
           <input
             type="checkbox"
             id="terms"
             className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
           />
           <label htmlFor="terms" className="text-gray-700 text-sm cursor-pointer">
            Accept RentYard property adding terms & condition
           </label>
         </div>
   
      </div>
   
   
     </div>
    )
}

export default page