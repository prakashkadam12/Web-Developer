import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { GoArrowDownRight} from "react-icons/go";

export const Contact = () => {
  return (
    <div className='flex flex-col space-y-4 mt-72'>
      <div className='flex items-center justify-center space-x-9 bg-[#E26E23] w-full h-[50px] px-4  transform rotate-15'>
        <FontAwesomeIcon icon={faLinkedin} className='text-white text-2xl' />
        <FontAwesomeIcon icon={faYoutube} className='text-white text-2xl' />
        <p className='text-3xl font-extrabold text-[#FFFFFF]'>CONNECT WITH US</p>
        <GoArrowDownRight  className='text-[#FFFFFF] w-8 h-8' />
        <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' />
        <FontAwesomeIcon icon={faFacebook} className='text-white text-2xl' />
      </div>

      <div className='flex items-center justify-center space-x-4 bg-[#E26E23] w-full h-[50px] px-4  transform rotate-15'>
        <p className='text-3xl font-extrabold text-[#FFFFFF]'>WE LIKE TO START YOUR PROJECT WITH US</p>
        <button className='bg-white text-[#E26E23] font-bold py-1 px-2 rounded-full flex items-center mt-3'>
        Get Started
      <GoArrowDownRight className='ml-2' />
    </button>
      </div>
    </div>
  );
};
