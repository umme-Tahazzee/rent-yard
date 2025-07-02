'use client'
import React from 'react'
import  Image  from 'next/image';
import logo from '../../public/assests/logo.png'

const Navbar = () => {
  return (
<div className="navbar bg-base-100 shadow-sm page-wrapper">
  <div className="flex-1  ">
  <Image
  src= {logo}
  alt="logo"
  width={100}               
  height={100}               
  className="rounded-lg"
/>
  </div>
  <div className="flex-none ">
    <button className="btn btn-ghost outline-1
     outline-neutral-500 px-4 py-2 ">
        Exit
    </button>
  </div>
</div>
  )
}

export default Navbar