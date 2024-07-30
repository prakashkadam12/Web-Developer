import React from 'react';
import question from "../assets/question (2).png";
import cardImage1 from "../assets/ben.png";
import cardImage2 from "../assets/MODEL-2.png";
import cardImage3 from "../assets/MODEL-4.png";
import coffe from "../assets/COffee.png";
import coffe1 from "../assets/COffee (1).png";
import coffe2 from "../assets/COffee (2).png";
import coffe3 from "../assets/COffee (3).png";
import coffe4 from "../assets/COffee (4).png";

export const About = () => {
  return (
    <div className='px-8 mt-32'>
    
      <div className='flex items-center justify-center flex-col lg:flex-row'>
        {/* Left Section */}
        <div className='text-center'>
        
          <div className='flex justify-center'>
            <h2 className='text-8xl font-extrabold text-[#FFFFFF] mr-2'>WHAT</h2>
            <h2 className='text-8xl font-extrabold text-[#E26E23]'>CLIENTS</h2>
          </div>
       
          <div className='flex justify-center mt-2'>
            <h3 className='text-8xl font-extrabold text-[#FFFFFF] mr-2'>SAY</h3>
            <h3 className='text-8xl font-extrabold text-[#E26E23]'>ABOUT</h3>
            <h3 className='text-8xl font-extrabold text-[#FFFFFF] ml-2'>US</h3>
          </div>
        </div>
        {/* Right Section  */}
        <div className='ml-8 text-center mt-4 lg:mt-0'>
          <img src={question} alt="Question mark" className='w-24 h-24 mx-auto lg:mx-0'/>
          <p className='mt-4 text-lg text-[#FFFFFF]'>
            WHAT OUR CLIENTS SAY.
          </p>
        </div>
      </div>

  
      <div className='w-full max-w-[1416px] h-[346px] mt-20 flex justify-between mx-auto space-x-16 '>
        {/* Card 1 */}
        <div className='w-[432px] h-[346px] bg-[#FF7D00] rounded-lg shadow-lg flex'>
          <div className='w-1/2'>
            <img src={cardImage1} alt="Card 1" className='w-full h-full object-cover rounded-l-lg'/>
          </div>
          <div className='w-1/2 flex flex-col items-center justify-center p-4'>
            <p className='text-center text-6xl font-extrabold text-[#FFFFFF]'>JOSH</p>
            <p className='text-center text-lg font-bold text-[#FFFFFF]'>CONTENT WRITER</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className='w-[432px] h-[346px] bg-[#FF7D00] rounded-lg shadow-lg flex'>
          <div className='w-1/2'>
            <img src={cardImage2} alt="Card 2" className='w-full h-full object-cover rounded-l-lg'/>
          </div>
          <div className='w-1/2 flex flex-col items-center justify-center p-4'>
            <p className='text-center text-5xl font-extrabold text-[#FFFFFF]'>OLIVA</p>
            <p className='text-center text-lg font-bold text-[#FFFFFF]'>BUSINESS WOMEN</p>
            <p className='text-center text-sm text-[#FFFFFF]'>Figma ipsum component variant main layer. Mask flows style bullet clip frame. Style edit variant object bullet layout.</p>
            <div className='flex'>
              <span className='text-3xl font-bold text-[#000000]'>★</span>
              <span className='text-3xl font-bold text-[#000000]'>★</span>
              <span className='text-3xl font-bold text-[#000000]'>★</span>
              <span className='text-3xl font-bold text-[#000000]'>★</span>
              <span className='text-3xl font-bold text-[#FFFFFF]'>★</span>
            </div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className='w-[432px] h-[346px] bg-[#FF7D00] rounded-lg shadow-lg flex'>
          <div className='w-1/2'>
            <img src={cardImage3} alt="Card 3" className='w-full h-full object-cover rounded-l-lg'/>
          </div>
          <div className='w-1/2 flex flex-col items-center justify-center p-4'>
            <p className='text-center text-5xl font-extrabold text-[#FFFFFF]'>DAVID</p>
            <p className='text-center text-lg font-bold text-[#FFFFFF]'>FASHION DESIGNER</p>
          </div>
        </div>
      </div>

    
      <div className='flex justify-center items-center mt-24 space-x-2'>
        <div className='w-24 h-1 bg-[#FFFFFF]'></div>
        <div className='w-24 h-1 bg-[#E26E23]'></div>
        <div className='w-24 h-1 bg-[#FFFFFF]'></div>
      </div>

      {/* Coffee Images */}
      <div className='flex justify-center mt-28 space-x-5 '>
        <img src={coffe} alt="Coffee" className='w-224 h-102'/>
        <img src={coffe4} alt="Coffee" className='w-224 h-102'/>
        <img src={coffe3} alt="Coffee" className='w-224 h-102'/>
        <img src={coffe2} alt="Coffee" className='w-224 h-102'/>
        <img src={coffe1} alt="Coffee" className='w-224 h-102'/>
      </div>
    </div>
  )
}
