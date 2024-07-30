import React from 'react';
import rectangle10 from "../assets/Rectangle 10.png";
import rectangle11 from "../assets/Rectangle 11 (1).png";
import rectangle12 from "../assets/Rectangle 11.png";
import rectangle13 from "../assets/Rectangle 12.png";
import rectangle14 from "../assets/Rectangle 13.png";
import rectangle15 from "../assets/Rectangle 14.png";
import rectangle16 from "../assets/Rectangle 10 (1).png";

export const Result = () => {
  return (
    <div className='bg-[#E26E23] w-full mt-0'>
      <h1 className='text-[#FFFFFF] font-extrabold text-6xl text-center  w-screen'>MORE ABOUT US</h1>

     
      <div className='grid grid-cols-3 grid-rows-3 gap-4 px-8 py-8'>
        {/* Card 1 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle10} alt="Rectangle 10" className='w-full h-full object-cover'/>
        </div>
        
        {/* Card 2 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle12} alt="Rectangle 12" className='w-full h-full object-cover'/>
        </div>
        
        {/* Card 3 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] p-4 overflow-hidden flex-col items-center justify-center space-y-4'>
        <h3 className='text-center text-[#FFFFFF] mt-2 text-3xl font-bold'>
        MAKE IT FAMOUS
         </h3>
         <p className=' text-[#FFFFFF] mb-2 text-left ml-9'>
        Figma ipsum component variant main layer.<br/> 
        Edit group inspect style thumbnail duplicate<br/> 
        connection auto pixel. Prototype clip arrow<br/> 
        ellipse create. Blur subtract content flows<br/> 
        rectangle edit. Flows pencil fill bullet effect.<br/> 
        Layer frame frame clip fill star underline.<br/> 
        Opacity rectangle frame flatten image group<br/> 
        link.
       </p>
        </div>
        
        {/* Card 4 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle13} alt="Rectangle 13" className='w-full h-full object-cover'/>
        </div>
        
        {/* Card 5 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle14} alt="Rectangle 14" className='w-full h-full object-cover'/>
        </div>
        
        {/* Card 6 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle15} alt="Rectangle 15" className='w-full h-full object-cover'/>
        </div>
        
        {/* Card 7 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] p-4 overflow-hidden flex-col items-center justify-center space-y-10'>
        <h3 className='text-center text-[#FFFFFF] mt-2 text-3xl font-bold'>
        MAKE IT FAMOUS
         </h3>
         <p className='text-left text-[#FFFFFF] mb-2 ml-9'>
        Figma ipsum component variant main layer.<br/> 
        Edit group inspect style thumbnail duplicate<br/> 
        connection auto pixel. Prototype clip arrow<br/> 
        ellipse create. Blur subtract content flows<br/> 
        rectangle edit. Flows pencil fill bullet effect.<br/> 
        Layer frame frame clip fill star underline.<br/> 
        Opacity rectangle frame flatten image group<br/> 
        link.
       </p>
        </div>

        {/* Card 8 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle16} alt="Rectangle 16" className='w-full h-full object-cover'/>
        </div>
        
        {/* Card 9 */}
        <div className='rounded-lg shadow-lg w-[400px] h-[460px] overflow-hidden'>
          <img src={rectangle11} alt="Rectangle 11" className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  )
}
