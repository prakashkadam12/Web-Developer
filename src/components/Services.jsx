import React from 'react';
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import ellipse1 from "../assets/Ellipse 1.png";
import ellipse2 from "../assets/Ellipse 2.png";
import macbook from "../assets/MacBook Air (2022).png";
import ellipse4 from "../assets/Ellipse 4.png";
import ellipse5 from "../assets/Ellipse 5.png";
import books from "../assets/books.png";
import mobile from "../assets/mobile.png";
import { GoArrowDownRight } from 'react-icons/go';
import {MdArrowOutward } from "react-icons/md"

export const Services = () => {
  return (
    <div className="relative w-[1448px] h-[2022px] mx-auto mt-10">
      {/* First Part */}
      <div className="flex w-full h-[574px] items-center justify-center">
  <div className="relative w-[246px] h-full">
    <img src={services1} alt="services1" style={{ width: '246px', height: '574px', objectFit: 'cover' }} />
    <div 
  className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold translate-x-[-140px]">
  OUR
</div>


  </div>
  <div className="relative w-[246px] h-full ml-0 mt-44">
    <img src={services2} alt="services2" style={{ width: '246px', height: '574px', objectFit: 'cover' }} />
    <div className="absolute inset-0 flex items-center justify-center text-[#E26E23] text-8xl font-bold mt-24 ml-56">
      SERVICES
    </div>
  </div>
</div>

<div className='relative w-[1448px] h-[2022px]'>
  {/* Second Part */}
  <div className='flex flex-row mt-56 w-[1409px]'>
  {/* Left Part */}
  <div className='flex flex-col space-y-44 w-[644px]'>
  <div className='flex flex-col space-y-4 relative'>
  <div className='flex items-center space-x-4'>
    <h2 className='text-2xl font-bold text-[#E26E23]'>01</h2>
    <p className='text-xl font-semibold text-[#FFFFFF]'>SOCIAL MEDIA STRATEGY</p>
  </div>
  <p className='text-[#BEBEBE] ml-10'>
    Figma ipsum component variant main layer. Community list underline style <br />
    move. Pixel hand bullet layout main line align. Figma ipsum component variant<br />
    main layer. Create auto create scrolling strikethrough slice background. Slice<br />
    share rotate component bullet overflow arrow image object. Outline prototype<br />
    font hand content rectangle resizing pen strikethrough.
  </p>
  <div className='absolute right-[1%] bottom-[-40%] '>
    <GoArrowDownRight className='text-[#E26E23] w-12 h-12' />
  </div>
</div>

<div className='flex flex-col space-y-4 relative'>
  <div className='flex items-center space-x-4'>
    <h2 className='text-2xl font-bold text-[#E26E23]'>02</h2>
    <p className='text-xl font-semibold text-[#FFFFFF]'>ONLINE REPUTATION MANAGEMENT</p>
  </div>
  <p className='text-[#BEBEBE] ml-10'>
    Figma ipsum component variant main layer. Community list underline style <br />
    move. Pixel hand bullet layout main line align. Figma ipsum component variant<br />
    main layer. Create auto create scrolling strikethrough slice background. Slice<br />
    share rotate component bullet overflow arrow image object. Outline prototype<br />
    font hand content rectangle resizing pen strikethrough.
  </p>
  <div className='absolute right-[1%] bottom-[-4rem]'>
    <MdArrowOutward  className='text-[#BEBEBE] w-12 h-12' />
  </div>
</div>
</div>


  {/* Right Part Images */}
  <div className='relative w-[730px] h-[730px] ml-[135px]'> {/* Adjust ml value to increase space */}
    <img src={ellipse1} alt="Ellipse 1" className="absolute top-0 left-0 w-[430px] h-[430px] object-cover z-10" />
    <img src={ellipse2} alt="Ellipse 2" className="absolute top-[calc(100%/3)] left-[20%] transform -translate-x-2/4 w-[430px] h-[430px] object-cover z-20" />
    <img src={macbook} alt="Macbook" className="absolute top-[10%] left-[-20%] w-[561px] h-[517px] object-cover z-30" />
  </div>
</div>




  {/* Remaining Services */}
  <div className='flex mt-16'>
    {/* Left Image */}
    <div className="relative w-[639px] h-[735px]">
  <img src={ellipse4} alt='Ellipse 4' className="absolute left-0 top-0 w-[400px] h-[400px] object-cover z-10" />
  <img src={ellipse5} alt='Ellipse 5' className="absolute right-[-3%] top-[5%] w-[300px] h-[400px] object-cover z-10" />
  <img src={books} alt='Books' className="absolute top-[-10%] left-[20%] w-[270px] h-[360px] object-cover z-20" />
  <img src={mobile} alt='Mobile' className="absolute bottom-[15%] right-[5%] w-[284px] h-[423px] object-cover z-30" />
</div>


    {/* Right Side Content */}
    <div className='flex flex-col ml-8 space-y-12 w-[639px]'>
    <div className='flex flex-col space-y-4 relative'>
  <div className='flex items-center space-x-4'>
    <h2 className='text-2xl font-bold text-[#E26E23]'>03</h2>
    <p className='text-xl font-semibold text-[#FFFFFF]'>UI/UX DESIGN</p>
  </div>
  <p className='text-[#BEBEBE] ml-12'>
    Figma ipsum component variant main layer. Community list underline style <br />
    move. Pixel hand bullet layout main line align. Figma ipsum component variant<br />
    main layer. Create auto create scrolling strikethrough slice background. Slice<br />
    share rotate component bullet overflow arrow image object. Outline prototype<br />
    font hand content rectangle resizing pen strikethrough.
  </p>
  <div className='absolute right-[9%] bottom-[-20%]'>
    <GoArrowDownRight className='text-[#E26E23] w-6 h-6' />
  </div>
</div>


<div className='flex flex-col space-y-4 relative'>
  <div className='flex items-center space-x-4'>
    <h2 className='text-2xl font-bold text-[#E26E23]'>04</h2>
    <p className='text-xl font-semibold text-[#FFFFFF]'>WEB DESIGN</p>
  </div>
  <p className='text-[#BEBEBE] ml-12'>
    Figma ipsum component variant main layer. Community list underline style <br />
    move. Pixel hand bullet layout main line align. Figma ipsum component variant<br />
    main layer. Create auto create scrolling strikethrough slice background. Slice<br />
    share rotate component bullet overflow arrow image object. Outline prototype<br />
    font hand content rectangle resizing pen strikethrough.
  </p>
  <div className='absolute right-[9%] bottom-[-20%]'>
    <GoArrowDownRight className='text-[#E26E23] w-6 h-6' />
  </div>
</div>

<div className='flex flex-col space-y-4 relative'>
  <div className='flex items-center space-x-4'>
    <h2 className='text-2xl font-bold text-[#E26E23]'>05</h2>
    <p className='text-xl font-semibold text-[#FFFFFF]'>MOBILE APPS DEVELOPMENT</p>
  </div>
  <p className='text-[#BEBEBE] ml-12'>
    Figma ipsum component variant main layer. Community list underline style <br />
    move. Pixel hand bullet layout main line align. Figma ipsum component variant<br />
    main layer. Create auto create scrolling strikethrough slice background. Slice<br />
    share rotate component bullet overflow arrow image object. Outline prototype<br />
    font hand content rectangle resizing pen strikethrough.
  </p>
  <div className='absolute right-[9%] bottom-[-20%]'>
    <GoArrowDownRight className='text-[#E26E23] w-6 h-6' />
  </div>
</div>
</div>
  </div>
</div>

    </div>
  );
};
