'use client'
import React from 'react'
import  Image  from 'next/image';
import logo from '../../public/assests/logo.png'

const Navbar = ({btn}) => {
  return (
  <>
    <div className="navbar bg-base-100  page-wrapper">
      <div className="flex-1">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>

      <div className="flex-none">
        <button className="btn btn-ghost outline-1 outline-neutral-500 px-4 py-2">
         {btn}
        </button>
      </div>
    </div>
    <div className="divider my-0 shadow-sm " /> 
  </>
)

}

export default Navbar