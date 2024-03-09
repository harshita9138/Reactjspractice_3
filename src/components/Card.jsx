import React from 'react'

function Card() {
  return (
   <>
   <div className='w-full h-screen bg-white flex items-center px-32 gap-5'>
    <div className="card-container w-1/2 h-[50vh]">
    <div className="card w-full h-full bg-customGreen relative rounded-xl flex items-center justify-center">
        <img className="w-32"src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"/>
        <button className='absolute left-10 bottom-5 px-5 py-1 rounded-full border-2 border-customGreen1 text-customGreen1'>&copy;2019-2022
        {/* for copyright sign */}
        </button>
    </div>
    </div>
    <div className="card-container flex gap-5 w-1/2 h-[50vh]">
    <div className="card rounded-xl  relative w-1/2 h-full flex items-center justify-center bg-customBlack">
    <img className="w-32"src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"/>
        <button className='absolute left-10 bottom-5 px-5 py-1 rounded-full border-2 border-zinc-300 text-zinc-300'>&copy;2019-2022
       
        </button>
    </div>
    <div className="card rounded-xl relative  w-1/2 h-full bg-zinc-800 flex items-center justify-center">
    <img className="w-32"src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"/>
        <button className='absolute left-10 bottom-5 px-8 py-1 rounded-full border-2 border-zinc-300 text-zinc-300' >&copy;2019-2022
     
        </button>
    </div>
    </div>
   </div>
   </>
  )
}

export default Card