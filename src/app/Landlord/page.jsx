import { AiOutlineUpload } from 'react-icons/ai';


const page = () => {
 return (
  <div className='bg-base-100 shadow-sm border border-gray-200 rounded-t-2xl '>
   <h2 className='bg-[#F4F4F4] text-[#6F6C6A] p-5 border border-gray-200 rounded-t-2xl  '>
    Proof of ownership
   </h2>
   <div className='p-5'>
     <h5 className='text-[#272B35] text-[16px] font-semibold p-2' >Ownership doc*</h5>
    <label
        htmlFor="ownershipDoc"
        className="flex w-[20%] items-center justify-center gap-2 cursor-pointer border-1
         border-gray-400 rounded-lg bg-[#E0E0E0] px-4 py-3 border-dashed
          text-gray-500 hover:border-gray-600 transition-colors"
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