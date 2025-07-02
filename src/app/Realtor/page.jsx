import { AiOutlineUpload } from 'react-icons/ai';


const page = () => {
  return (
   <div className='bg-base-100 shadow-sm border border-gray-200 rounded-t-2xl '>
    <h2 className='bg-[#F4F4F4] text-[#6F6C6A] p-5 border border-gray-200 rounded-t-2xl  '>
    Realtor verification
    </h2>
    <div className='p-5'>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* 000000000 */}
      <div className="">
      <h5 className='text-[#272B35] text-[16px] font-semibold p-2'>Lenience number*</h5>
        <label
          htmlFor="ownershipDoc"
          className="w-full cursor-pointer  border flex flex-row
           border-gray-400 rounded-2xl px-4 py-4
            hover:border-gray-600 transition-colors text-center"
        >
          <span className="text-md font-bold text-[#6F6C6A]">000000000000</span>
        </label>     
      </div>
   

       {/* pdf only section  */}
       <div className="">
        <h5 className='text-[#272B35] text-[16px] font-semibold p-2 ' >Additional documents for realtor</h5>
        <label
          htmlFor="ownershipDoc"
          className="w-full cursor-pointer flex flex-row items-center justify-center 
          gap-2 border border-gray-400 rounded-lg bg-[#E0E0E0] px-4 py-4 border-dashed
           text-gray-500 hover:border-gray-600 transition-colors text-sm text-center"
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

      {/* pdf only section  */}
       <div className="">
        <h5 className='text-[#272B35] text-[16px] font-semibold p-2' >Realtor verification</h5>
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