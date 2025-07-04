'use client'

import { AiOutlineUpload } from 'react-icons/ai';

const page = () => {
 return (
  <div className="bg-base-100 shadow-sm border border-gray-200 rounded-t-2xl">
    <h2 className="bg-[#F4F4F4] text-[#6F6C6A] p-5 border border-gray-200 rounded-t-2xl">
      Company & office info
    </h2>

    <div className="p-5"> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Company Name */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Company name</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Runyan trade center</span>
          </label>
        </div>

        {/* Company Identifier */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Company Identifier (EIN/TIN)</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Name</span>
          </label>
        </div>

        {/* Job Title */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Your job title*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Manager</span>
          </label>
        </div>

        {/* Agreement Upload */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Agreement with landlord/owner*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-400 rounded-lg bg-[#E0E0E0] px-4 py-4 border-dashed text-gray-500 hover:border-gray-600 transition-colors text-sm text-center"
          >
            <AiOutlineUpload size={20} />
            <span className="text-sm">(Pdf only)</span>
          </label>
          <input id="ownershipDoc" type="file" accept=".pdf" className="hidden" />
        </div>

        {/* Country/Region */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Country/Region*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Street address*</span>
          </label>
        </div>

        {/* Apt/Suite */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Apt, suite, unit (if applicable)</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Name</span>
          </label>
        </div>

        {/* Job Title Again */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Your job title*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Manager</span>
          </label>
        </div>

        {/* Phone Number */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Phone number</h5>
          <div className="relative w-full max-w-sm">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl">🇧🇩</span>
            <input
              type="tel"
              name="phone"
              placeholder="+8801"
              className="w-full pl-12 pr-4 py-2 border border-gray-400 hover:border-gray-600 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
        </div>

        {/* Contact Email */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Contact email*</h5>
          <label
            htmlFor="Email"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">majarul2025@gmail.com</span>
          </label>
        </div>

        {/* City */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">City/Town*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Dallas</span>
          </label>
        </div>

        {/* State */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">State/Territory*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer border flex flex-row border-gray-400 rounded-2xl px-4 py-4 hover:border-gray-600 transition-colors text-center"
          >
            <span className="font-medium text-[16px] text-[#272B35]">Manager</span>
          </label>
        </div>

        {/* Zip Code */}
        <div>
          <h5 className="text-[#272B35] text-[16px] font-semibold p-2">Zip code*</h5>
          <label
            htmlFor="ownershipDoc"
            className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-400 rounded-lg px-4 py-4 text-gray-500 transition-colors text-sm text-center"
          >
            <span className="text-sm">75061</span>
          </label>
          <input id="ownershipDoc" type="file" accept=".pdf" className="hidden" />
        </div>
      </div>
    </div>

    {/* Terms & Conditions */}
    <div className="mt-4 flex items-center gap-2 p-5">
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
);

}

export default page