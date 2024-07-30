import React from 'react';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FaPaperPlane} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between p-8 w-full space-y-8 md:space-y-0 mt-56 '>
      
      {/* 1st div */}
      <div className='flex flex-col items-center space-y-4'>
        <img src={logo} alt="Logo" className='w-[182px] h-[67px]' />
        <div className='flex space-x-4'>
          <FontAwesomeIcon icon={faInstagram} className='text-2xl text-[#E26E23]' />
          <FontAwesomeIcon icon={faFacebook} className='text-2xl text-[#E26E23]' />
          <FontAwesomeIcon icon={faYoutube} className='text-2xl text-[#E26E23]' />
          <FontAwesomeIcon icon={faLinkedin} className='text-2xl text-[#E26E23]' />
        </div>
      </div>

      {/* 2nd div */}
      <div className='flex flex-col items-center space-y-8'>
        <div className='flex flex-col items-center space-y-2'>
          <h2 className='text-2xl font-extrabold text-[#E26E23]'>LOCATION</h2>
          <p className='text-center  text-[#FFFFFF]'>2019 New Market, New Road,<br/> North Carolina, USA</p>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <h2 className='text-2xl font-extrabold text-[#E26E23]'>CONTACT US</h2>
          <p className='text-center  text-[#FFFFFF]'>support@rstheme.com <br/> (+880)155-69569</p>
        </div>
      </div>

      {/* 3rd div */}
      <div className='flex flex-col items-center space-y-1'>
        <h2 className='text-xl font-extrabold text-[#E26E23] mr-24'>SERVICES</h2>
        <div className='flex flex-col items-start text-left text-[#FFFFFF]  ml-8'>
           <p>Web Design</p>
          <p>PR Campaign</p>
          <p>UI / UX Design</p>
        <p>Event Management</p>
       <p>Social Media Strategy</p>
          <p>Mobile App Development</p>
        <p>Video Creation and Promotion</p>
         <p>Online Reputation Management</p>
      </div>

      </div>

      {/* 4th div */}
      <div className='flex flex-col items-center space-y-4'>
      <h2 className='text-2xl font-extrabold text-[#E26E23]'>SUBSCRIBE</h2>
      <div className='relative'>
        <input
          type='email'
          placeholder='Youremail@gmail.com'
          className='p-2 pl-4 pr-10 rounded text-gray-900'
        />
        <FaPaperPlane
          className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E26E23] text-white mr-[-8px]'
          style={{ height: '2.5rem', width: '3.5rem' }} // 12px by 12px
        />
      </div>
    </div>
    </div>
  );
};
