import React from 'react';
import rectangle20 from "../assets/Rectangle 20.png";
import rectangle21 from "../assets/Rectangle 21.png";
import reactngle22 from "../assets/Ellipse 6.png";
import rectangle23 from "../assets/Rectangle 23.png";
import rectangle24 from "../assets/Rectangle 22.png";
import { GoArrowDownRight } from 'react-icons/go';


export const Teams = () => {
  return (
    <div className='flex items-center justify-center h-[1183px] w-[1419px] mt-16'>
      <div className='px-8 flex flex-col items-center justify-center'>
        {/* First row */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-24'>
          <div className='text-center lg:text-left'>
            <h2 className='text-8xl font-extrabold text-[#FFFFFF]'>THE MINDS</h2>
            <h2 className='text-8xl font-extrabold text-[#E26E23]'>BEHIND</h2>
            <div className='flex justify-center lg:justify-start space-x-4 mt-4'>
              <h3 className='text-5xl font-extrabold text-[#FFFFFF]'>OUR</h3>
              <h3 className='text-5xl font-extrabold text-[#E26E23]'>CREATIVE</h3>
              <h3 className='text-5xl font-extrabold text-[#FFFFFF]'>TEAM</h3>
              <button className='px-6 py-2 bg-[#E26E23] text-[#FFFFFF] rounded-full flex items-center'>
               Explore more
             <GoArrowDownRight className='ml-2' /></button>

            </div>
    
          </div>
          <div className='mt-8 lg:mt-0'>
            <img src={rectangle20} alt="Team image" className='rounded-lg' style={{ width: '380px', height: '380px' }} />
          </div>
        </div>

        {/* Second part */}
        <div className='flex flex-wrap justify-center lg:space-x-8 mt-8'>
          <img src={rectangle21} alt="Team image" className='rounded-lg' style={{ width: '360px', height: '684px' }} />

          <div className='flex flex-col items-center lg:items-start mt-4 space-x-12'>
            <div className='flex space-x-8'>
              <img src={reactngle22} alt="Team image" className='rounded-lg ml-7 mb-5' style={{ width: '350px', height: '350px' }} />
              <img src={rectangle23} alt="Team image" className='rounded-lg mt-24' style={{ width: '275px', height: '275px' }} />
            </div>
            <img src={rectangle24} alt="Team image" className='rounded-lg mt-4 ml-8' style={{ width: '490px', height: '258px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
