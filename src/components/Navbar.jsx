import React from 'react';
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4' style={{ width: '1260px', height: '67px' }}>
      {/* left part */}
      <div className='flex items-center justify-center'>
        <img src={logo} alt="Logo" className='w-[182px] h-[67px]' />
      </div>

      {/* right part */}
      <div className='flex space-x-10 mr-24'>
        <div className='text-white'>HOME</div>
        <div className='text-white'>SERVICES</div>
        <div className='text-white'>FEATURES</div>
        <div className='text-white'>PORTFOLIO</div>
        <div className='text-white'>BLOG</div>
        <div className='text-white'>CONTACT</div>
      </div>
    </div>
  );
}
