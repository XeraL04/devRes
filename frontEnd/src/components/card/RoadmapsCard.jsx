import React from 'react'

const RoadmapsCard = ({roadmap}) => {
  return (
    <div className='w-full text-center items-center'>

      <div className='w-full text-center items-center mt-1'>

        <div className='rounded-lg overflow-hidde text-white mx-auto px-4 py-6 shadow-md hover:scale-105 duration-500 shadow-fuchsia-700'>
                
          <img src={roadmap.imgUrl} alt="videoImg" className='sm:h-42 sm:w-full  object-cover'/>
                
            <div className='m-4'>
                  
              <h1 className='font-bold sm:truncate'>{roadmap.title}</h1>
                  
            </div>              

            <a href={roadmap.roadmapUrl}>
              <button className="sm:w-20 sm:mt-3 rounded-lg bg-fuchsia-600 hover:scale-105 duration-500 shadow-md shadow-pink-700">Watch</button>
            </a>

        </div>

      </div>
    </div>
  )
}

export default RoadmapsCard