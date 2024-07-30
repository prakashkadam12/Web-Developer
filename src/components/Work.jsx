import React from 'react';
import group5 from "../assets/Group 5.png";
import { GoArrowDownRight } from 'react-icons/go';

export const Work = () => {
  return (
    <div className='relative w-2078 h-2391 mt-56'>
      {/* First Section*/}
      <div className='flex justify-between w-full mt-8'>
        <h1 className='text-[#BEBEBE] font-extrabold text-10xl flex-grow mr-10'>O</h1>
        <h1 className='text-[#BEBEBE] font-extrabold text-10xl flex-grow'>U</h1>
        <h1 className='text-[#BEBEBE] font-extrabold text-10xl flex-grow'>R</h1>
        <h1 className='text-[#E26E23] font-extrabold text-10xl flex-grow ml-10'>W</h1>
      </div>

      {/* Second Section */}
      <div className='absolute inset-x-0 top-12 flex justify-center items-center space-x-12 mt-28'>
        <h1 className='text-[#FFFFFF] font-extrabold text-8xl'>OUR</h1>
        <h1 className='text-[#E26E23] font-extrabold text-8xl'>WORKFLOW</h1>
      </div>

      {/* Third Section */}
      <div className='mt-56'>
     
        <div className='flex flex-col items-center transform rotate-15 mb-8'>
        <div className='flex items-center space-x-4 ml-0' style={{ marginRight: '550px' }}>

            <h1 className='text-[#E26E23] font-extrabold text-6xl'>01</h1>
            <h1 className='text-[#FFFFFF] font-extrabold text-6xl'>CONCEPT</h1>
          </div>
          <div className='w-full border-t-2 border-dotted border-[#FFFFFF] mt-4'></div>
        </div>
        
       
        <div className='flex flex-col items-center transform rotate-15 mb-8'>
          <div className='flex items-center space-x-4 ml-0' style={{ marginRight: '130px' }}>
            <h1 className='text-[#E26E23] font-extrabold text-6xl'>02</h1>
            <h1 className='text-[#FFFFFF] font-extrabold text-6xl'>BUDGET</h1>
          </div>
          <div className='w-full border-t-2 border-dotted border-[#FFFFFF] mt-4'></div>
        </div>
        
     
        <div className='flex flex-col items-center mb-8'>
    <div className='flex items-center space-x-4 ml-[600px] transform rotate-15 mt-12' style={{ marginRight: '190px' }}>
      <h1 className='text-[#E26E23] font-extrabold text-6xl'>03</h1>
      <h1 className='text-[#FFFFFF] font-extrabold text-6xl'>DEVELOPMENT</h1>
    </div>
    <div className='flex mt-4 space-x-7'>
      <div className='flex-1 mr-[130px]'>
        <p className='text-[#BEBEBE]'>
          Figma ipsum component variant main layer. Community list underline style<br />
          move. Pixel hand bullet layout main line align. Figma ipsum component variant<br />
          main layer. Create auto create scrolling strikethrough slice background. Slice<br />
          share rotate component bullet overflow arrow image object. Outline prototype<br />
          font hand content rectangle resizing pen strikethrough.
        </p>
        <button className='mt-8 px-2 py-1 flex items-center bg-[#E26E23] text-[#FFFFFF] font-semibold rounded-full hover:bg-[#D15E19] ml-96'>
          Explore More
          <GoArrowDownRight className='ml-2' />
        </button>
      </div>
      <img src={group5} alt='Description of the image' className='w-[250px] h-[250px] mt-32' />
    </div>
    <div className='w-full border-t-2 border-dotted border-[#FFFFFF] mt-4 transform rotate-15'></div>
  </div>


    
        <div className='flex flex-col items-center mt-44 transform rotate-15' style={{ marginLeft: '1140px' }}>
          <div className='flex items-center space-x-4'>
            <h1 className='text-[#E26E23] font-extrabold text-6xl'>04</h1>
            <h1 className='text-[#FFFFFF] font-extrabold text-6xl'>RESULT</h1>
          </div>
        </div>
      </div>
      <div className='text-[#E26E23] font-extrabold text-6xl mt-24 mb-0 text-center'>RESULT TELLS </div>
    </div>
  )
}
