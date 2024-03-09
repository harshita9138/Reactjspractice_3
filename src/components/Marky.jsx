import React from 'react'
import { motion } from 'framer-motion'
function Marky() {
  return (
    <>
    <div  data-scroll data-scroll-section data-scroll-speed=".2"className='w-full py-10 bg-customGreen rounded-tl-2xl rounded-tr-2xl overflow-hidden'>
    <div className='text  border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap pt-8 pb-6'>
    <motion.h1 initial={{x:0}} animate={{x: "-100%"}}  transition ={{ease: "linear", repeat: Infinity, duration:5}}  className=' text-[10vw] leading-none font-["Founders_Grotesk"] text-white -mt-3 pr-20'>WE ARE OCHI</motion.h1>
    <motion.h1 initial={{x:0}} animate={{x: "-100%"}}  transition ={{ease: "linear", repeat: Infinity, duration:5}} className='text-[10vw] leading-none  font-["Founders_Grotesk"] text-white  -mt-3 pr-20'>WE ARE OCHI</motion.h1>
    <motion.h1 initial={{x:0}} animate={{x: "-100%"}}  transition ={{ease: "linear", repeat: Infinity, duration:5}} className='text-[10vw] leading-none  font-["Founders_Grotesk"] text-white  -mt-3 pr-20'>WE ARE OCHI</motion.h1>
  
    {/* TO ANIMATE H1 WE HAVE CONVERTED IT INTO MOTION.H1 BY USING AND INSTALLING FRAMER MOTION */}
</div>
    </div>
    </>
    
  )
}

export default Marky