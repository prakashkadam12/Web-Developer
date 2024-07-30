import React from 'react';
import { Navbar } from '../components/Navbar';
import { Services } from '../components/Services';
import { Work } from '../components/Work';
import { Result } from '../components/Result';
import {About} from "../components/About";
import { Teams } from '../components/Teams';
import { Article } from '../components/Article';
import {Contact} from "../components/Contact";
import { Footer } from '../components/Footer';
import { GoArrowDownRight } from 'react-icons/go';

export const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="text-center mt-10 relative" style={{ width: '1500px', height: '685px' }}>
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[#E26E23] text-11xl font-extrabold" style={{ width: '1328px', height: '162px' }}>
          MARKETING
        </h1>
        <div className='flex justify-center items-center mt-8 ml-32 space-x-2' style={{ width: '1044px', height: '185px' }}>
          <div className='flex flex-col items-baseline ml-32'>
            <p className='text-[#FFFFFF] text-7xl font-bold mb-0'>for</p>
            <p className='text-[#FFFFFF] text-7xl font-bold mb-0'>by</p>
          </div>
          <h2 className='text-[#E26E23] text-10xl font-extrabold mx-0 mb-16' style={{ width: '892px', height: '160px' }}>ARTISTS</h2>
        </div>
        <p style={{ marginLeft: '30rem' }} className='text-[#FFFFFF]'>Creative mind, creative works</p>
      </div>
      {/*  vertical lines */}
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="border-l-2 border-dotted border-white h-96"></div>
      </div>
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0" style={{ left: 'calc(58% - 10px)' }}>
  <div className="border-l-2 border-dotted border-white h-96"></div>
</div>



      {/*  horizontal lines */}
      <div className="absolute bottom-2/4 left-0 w-full z-0" style={{ marginBottom: '45px' }}>
  <div className="border-t-2 border-dotted border-white"></div>
      </div>

      <div className="absolute top-1/4 left-0 w-full z-0" style={{ marginTop: '-60px' }}>
  <div className="border-t-2 border-dotted border-white"></div>
</div>

 
      <div className='flex justify-center items-center mt-24 mr-12'>
    <p className='text-[#FFFFFF] text-xl mx-1'>Modern</p>
    <p className='text-[#E26E23] text-xl mx-1'>Problem</p>
    <p className='text-[#FFFFFF] text-xl mx-1'>Requires Modern</p>
    <p className='text-[#E26E23] text-xl mx-1'>Solution</p>
    <button className='bg-[#E26E23] text-[#FFFFFF] text-xl px-2 py-1 rounded-full ml-4 flex items-center justify-center' style={{ width: '193px', height: '45px' }}>
      Let's Connect
      <GoArrowDownRight style={{ width: '25px', height: '25px', marginLeft: '8px' }} />
    </button>
     </div>
   </div>

      {/* Services */}
      <Services />
      <Work/>
      <Result/>
      <About/>
      <Teams/>
      <Article/>
      <Contact/>
      <Footer/>
    </div>
  );
};
