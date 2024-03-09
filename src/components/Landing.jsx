import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function Landing() {

  return (
    <>
    <div data-scroll   data-scroll-speed="-.3"className='w-full h-100vh bg-white pt-1 overflow-hidden'>
    <div className='textstruc ture mt-32 px-20 '>
        {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item ,index)=>{
             return (<div className="masker ">
                <div className='w-fit flex overflow-hidden'>
                {index===1 && 
                (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1],duration:1
                }}className='mr-[1vw] rounded w-[8vw] h-[5vw] relative mt-[1vw] '><img className="rounded-lg "src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"/></motion.div>
                )}
             <h1 className="text-[6vw] h-full leading-none tracking-tightest flex items-center  font-extrabold">{item}
             </h1>
         </div>
         </div>
        //  masker baar baar repeat na klrna pade thats why we have used  mapping
             );
        })}
    
    </div>
    <div className='border-t-[1px] border-zinc-400 mt-12 flex justify-between items-center py-5 px-20 font-semibold'>
        {["For public and private companies",
"From the first pitch to IPO"].map((item,index)=><p className="text-md font-light tracking-tight leading-none">{item}</p>)}
    
    <div className='start flex items-center gap-1'>
    <div className='px-4 py-2 border-[1px] rounded-full  border-zinc-500 text-md  hover:bg-black hover:text-white group '>START THE PROJECT</div>
    <div className='w-8 h-8 rounded-full border-[1px]   border-zinc-500 flex items-center justify-center hover:bg-black hover:text-white group '><MdArrowOutward /></div>
    </div>
    </div>
 
    </div>
    </>
  );
}

export default Landing