import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'


function Feature() {
 const cards=[useAnimation(),useAnimation()]
//  here i have 2 cards thats why 2 useAnimation have taken
const handleHover=(index)=>{
  cards[index].start({y:"0"});
};
const handleHoverEnd=(index)=>{
  cards[index].start({y:"100%"});
};
  return (
    <>
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-2 pb-20'>
            <h1 className="text-5xl font-['Neue_Montreal' tracking-tight ]">Featured projects</h1>
            
        </div>
      <div className='px-20  '>
      <div className="cards w-full flex gap-8 mt-10">
        
                {/* <div className="cardcontainer relative w-1/2 h-[80vh]  ">
                    <h1 className='absolute  z-[9] text-8xl tracking-tight  text-customGreen1 font-bold mb-10 leading-none left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
                    <h1 className='absolute  z-[9] text-8xl tracking-tight  text-customGreen1 font-bold mb-10 leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"FYDE".split("").map((item,index)=>(
                    <span>{item}</span>
                ))}
                </h1>
                </h1>
<div className=' rounded-lg w-full h-full '>
    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"/>
</div> 
                </div>
                <div className=''>
                    <button className="  py-2 px-4  font-bold    border border-zinc-800 rounded-full ">
                    AUDIT </button>
                    <button className="  font-bold py-2 px-4  border border-zinc-800 rounded-full">
                    COPYWRITING </button>
                    <button className=" t font-bold py-2 px-4   border border-zinc-800 rounded-full">
                    SALES DECK</button>
                    <button className="  font-bold py-2 px-4  border border-zinc-800 rounded-full">
                    SLIDES DESIGN </button>
                </div> */}

<div className="relative ">
  <motion.div
 onHoverStart={()=>handleHover(0)}
 onHoverEnd={()=>handleHoverEnd(0)}
  className="cardcontainer relative w-full h-[80vh]  ">
    <h1 className='absolute z-[9] flex overflow-hidden text-8xl tracking-tight text-customGreen1 font-bold mb-10 leading-none left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>
      {"FYDE".split("").map((item,index)=>(
        < motion.span
        initial={{y:"100%"}}
        animate={cards[0]}
        transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}}
        className='inline-block'>{item}</motion.span>
      ))}

    </h1>
    <div className='rounded-lg w-full h-full'>
      <img className='w-full h-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"/>
    </div> 
  </motion.div>
  <div className='mt-4'>
    <button className="py-2 px-4 font-bold border border-zinc-800 rounded-full">
      AUDIT
    </button>
    <button className="font-bold py-2 px-4 border border-zinc-800 rounded-full ml-2">
      COPYWRITING
    </button>
    <button className="font-bold py-2 px-4 border border-zinc-800 rounded-full ml-2">
      SALES DECK
    </button>
    <button className="font-bold py-2 px-4 border border-zinc-800 rounded-full ml-2">
      SLIDES DESIGN
    </button>
  </div>
</div>

                {/* <div className="cardcontainer relative w-1/2 h-[80vh] ">
                <h1 className='absolute  z-[9] text-8xl tracking-tight  text-customGreen1 font-bold mb-10 leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
                {"VISE".split("").map((item,index)=>(
                    <span>{item}</span>
                ))}
                </h1>

                <div className=' rounded-lgw-full h-full  '>
                <img className='w-full h-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"/>
                </div>
                </div>
                <div className='mt-4'>
    <button className="py-2 px-4 font-bold border border-zinc-800 rounded-full">
      AGENCY
    </button>
    <button className="font-bold py-2 px-4 border border-zinc-800 rounded-full ml-2">
      COMPANY
    </button>
   
  </div> */}

<div className="relative">
  <motion.div 
   onHoverStart={()=>handleHover(1)}
   onHoverEnd={()=>handleHoverEnd(1)}
  className="cardcontainer relative w-100  h-[80vh] ">
    <h1 className=' flex overflow-hidden absolute z-[9] text-8xl tracking-tight text-customGreen1 font-bold mb-10 leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
      {"VISE".split("").map((item,index)=>(
          < motion.span
          initial={{y:"100%"}}
          animate={cards[1]}
          transition={{ease:[0.22, 1, 0.36, 1],delay:index*.05}}
          className='inline-block'>{item}</motion.span>
      ))}
    </h1>
    <div className='rounded-lg w-full h-full'>
      <img className='w-full h-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"/>
    </div>
  </motion.div>
  <div className='absolute top-[80vh] -left-20 w-full flex justify-center mt-4'>
    <button className="py-2 px-4 font-bold border border-zinc-800 rounded-full">
      AGENCY
    </button>
    <button className="font-bold py-2 px-4 border border-zinc-800 rounded-full ml-2">
      COMPANY PRESENTATION
    </button>
  </div>
</div>
<button className='flex gap-5 items-center px-4 py-4 bg-zinc-900 rounded-full text-white mt-[50vw] w-60 absolute  top-3/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>VIEW ALL CASE STUDIES
<div className='w-2 h-2 bg-zinc-100 rounded-full'>
    </div></button>
            </div>
      </div>
    </div>
    </>
  )
}

export default Feature