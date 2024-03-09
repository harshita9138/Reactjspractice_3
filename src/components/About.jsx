import React from 'react'

function About() {
  return (
    <>
    <div className=' z-5 w-full py-20 bg-customGreen1 rounded-tl-2xl rounded-tr-2xl'>
<h1 className="font-['Neue_Montreal'] text-[4vw] p-20">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
<div className='border-t-[1px] border-zinc-400 mt-12 flex justify-between items-center py-5 px-20 font-semibold'>

<div className=" flex gap-40 h-screen">
      <div className=" p- flex-grow justify-start">
        <div className="flex-grow  ">
         <p className='whitespace-nowrap font-light  mt-30'>What you can expect: </p>
        </div>
      </div>
      <div className=" p-8 ">
        <p className='text-lg font-light  leading-1 -mt-10'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
        <br/><p className='text-lg font-light  leading-1'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
      </div>
      <div className=" p-8">
        <ul className="list-none font-light  leading-none"><br/>S: <br/><br/>
          <li className="mb-4"><a href="#" className="underline">Instagram</a></li>
          <li className="mb-4"><a href="#" className="underline">Behance</a></li>
          <li className="mb-4"><a href="#" className="underline">Facebook</a></li>
          <li className="mb-4"><a href="#" className="underline">Linkedin</a></li>
        </ul>
      </div>
    </div>
    </div>
    <div className='w-full flex gap-5 border-t-[1px] border-zinc-400 -mt-[30vw] pt-10'>
<div className='w-1/2 ml-20'>
<h1 className='text-5xl'>Our approach:</h1>
<button className='flex gap-10 items-center px-6 py-4 bg-zinc-900 rounded-full text-white mt-5'>Read more
<div className='w-2 h-2 bg-zinc-100 rounded-full'>
    </div></button>
</div>
<div className='w-1/2 h-[70vh] rounded-3xl '><img className='rounded-3xl -ml-20 transition duration-300 ease-in-out transform hover:scale-95' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"/>

</div>
    </div>
    </div>
    </>
  )
}

export default About