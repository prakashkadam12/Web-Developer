import React from 'react';
import rectangle25 from '../assets/Rectangle 25.png'; 
import rectangle26 from '../assets/Rectangle 26.png'; 
import rectangle27 from '../assets/Rectangle 27.png'; 
import rectangle29 from '../assets/Rectangle 29.png';
import rectangle30 from '../assets/Frame 34.png'; 
import rectangle31 from "../assets/Rectangle 31.png";
import rectangle32 from "../assets/Rectangle 30.png";

export const Article = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className='text-center'>
       
        <div className='flex flex-col items-center'>
          <h2 className='text-5xl font-extrabold text-[#FFFFFF] ml-3'>WHATS OUR NEW</h2>
          <div className='flex items-center ml-3'>
            <h3 className='text-5xl font-extrabold text-[#E26E23]'>ARTICLE</h3>
            <h3 className='text-5xl font-extrabold text-[#FFFFFF] ml-2'>?</h3>
          </div>
        </div>

        {/* Image  */}
        <div className='flex mt-12'>
         
          <div className='flex flex-col'>
            <img src={rectangle25} alt="Main" style={{ width: '700px', height: '600px' }} /> {/* Reduced size */}
            <div className='flex'>
              <img src={rectangle31} alt="Top Left" style={{ width: '280px', height: '300px' }} /> {/* Reduced size */}
              <img src={rectangle32} alt="Bottom Left" style={{ width: '600px', height: '300px' }} /> {/* Reduced size */}
            </div>
          </div>

          {/* Right part */}
          <div className='flex flex-col ml-[-190px] mb-2'>
            <div className='flex'>
              <img src={rectangle26} alt="Top Right 1" style={{ width: '400px', height: '300px' }} /> {/* Reduced size */}
              <img src={rectangle27} alt="Top Right 2" style={{ width: '200px', height: '300px' }} /> {/* Reduced size */}
            </div>
            <div className='flex'>
              <img src={rectangle29} alt="Bottom Left" style={{ width: '200px', height: '300px' }} /> {/* Reduced size */}
              <img src={rectangle30} alt="Bottom Right" style={{ width: '400px', height: '600px',marginRight:'10px' }} /> {/* Reduced size */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
