import React from 'react'

const CardShuffle = () => {
  return (
    // <div className="flex row justify-center items-center h-screen">
      
    //   <div className="h-48 w-64 text-white p-8 rounded-b-xl  shadow-lg shadow-black -ml-20 transition-all duration-200 ease-in-out cursor-pointer hover:origin-bottom hover:-rotate-12 hover:-translate-x-8	 bg-orange-800">
      
    //     <h1 className="text-2xl">Box one</h1>
      
    //     <p className="text-sm leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      
    //   </div>
      
    //   <div className="h-48 w-64 text-white p-8 rounded-b-xl shadow-lg shadow-black -ml-32 transition-all duration-200 ease-in-out cursor-pointer hover:origin-bottom hover:-rotate-12 hover:translate-x-8 bg-blue-800">
      
    //     <h1 className="text-2xl">Box two</h1>
      
    //     <p className="text-sm leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      
    //   </div>
      
    //   <div className="h-48 w-64 text-white p-8 rounded-b-xl shadow-lg shadow-black -ml-32 transition-all duration-200 ease-in-out cursor-pointer hover:origin-bottom hover:-rotate-12 hover:translate-x-8 bg-green-800">
      
    //     <h1 className="text-2xl">Box three</h1>
      
    //     <p className="text-sm leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      
    //   </div>
    // </div>
    
    <div className='grid grid-flow-col scroll-auto gap-5 overflow-y-auto overscroll-x-contain snap-mandatory	'>
      <div className="bg-green-800">
        <h1>HTML</h1>
      </div>
      <div className="bg-gray-800">
        <h1>CSS</h1>
      </div>
      <div className="bg-blue-800">
        <h1>JS</h1>
      </div>
      <div className='bg-emerald-700'>
        <h1>ReactJs</h1>
      </div>
      <div className='bg-yellow-700'>
        <h1>GIT</h1>
      </div>
      <div className="bg-violet-500">
        <h1>Logica</h1>
      </div>
      <div className='bg-rose-700'>
        <h1>SEGUe</h1>
      </div>
    </div>
  )
}

export default CardShuffle