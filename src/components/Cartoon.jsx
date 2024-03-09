import React, { useEffect, useState } from 'react'

function Cartoon() {
  const[rotate,setRotate]=useState(0);
  useEffect(()=>{
    // FINDING POSITION OF MOUSE
    window.addEventListener("mousemove",(e)=>{
      let mouseX=e.clientX;
      // position of mouse at X and Y axis
        let mouseY=e.clientY;
        // now taking distance from centre of screen to mouse
        let deltaX=mouseX-window.innerWidth/2;
        // window.innerwidth is the whole screen i.e 1000px divided by 2 we will get centre i.e 500px
        // DELTA X IS DIFFERENCE IN X AXIS AND DELTA Y IS DIFFERENCE IN Y AXIS
        let deltaY=mouseY-window.innerHeight/2;

        // NOW TAKING OUT ANGLE
// A TAN2 FORMULA IS USED WHICH TAKES X AND VALUE AND GIVE ANSWER IN RADIAN WHICH CAN BE CONVERTED IN DEGREE
// radian ki jo value ayegi Math.A tan2 use hm multiple kr denge 180/Math.pi
        var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
        setRotate(angle-180);
        // - 180 is done for invert taaki jidhr mouse ho udhr hi circle move kre opposite na kre
    })
  })
  return (
    <>
    <div data-scroll data-scroll-speed="-.6"className='w-full  overflow-hidden '></div>
    <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='flex gap-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                {/* big circle */}
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
              <span className=' absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white '>PLAY</span>
                {/* small circle */}
                <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} 
                className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
                {/* line on which circle will rotate */}
            <div className='w-6 h-6 bg-zinc-100 rounded-full'></div></div>
            {/* smallest circle which will rotate */}
            </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
            <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full'>
            <span className=' absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white '>PLAY</span>
            <div   style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
            className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
            <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
            </div>
            </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}
// FOR ANIMATION OF EYES ROLLING WE HAVE TO GET THE ANGLE =
// FOR THAT WE HAVE TO GET THE POSITION OF CURSOR FROM BOTH X AND Y AXIS
// AND THE CENTRE OF SCREEN BOTH HORIZONTALLY AND VERTICALLY,THEN DIFFERENCE OF ABOVE AND THIS VALUE IS MADE
// THEN WE GET DELTA X AND DELTA Y

export default Cartoon