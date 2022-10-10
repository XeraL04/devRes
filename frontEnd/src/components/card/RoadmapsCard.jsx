import React from 'react'

const RoadmapsCard = ({roadmap}) => {
  return (
    <div className='w-full text-center items-center'>

      <div className='w-full  text-center items-center mt-1 '>

        <div className=' rounded-lg overflow-hidde text-white mx-auto px-4 py-6 shadow-md transform transition-all hover:scale-110 shadow-fuchsia-700'>
                
          <img src={roadmap.imgUrl} alt="videoImg" className='sm:h-42 sm:w-full  object-cover'/>
                
            <div className='m-4'>
                  
              <h1 className='font-bold sm:truncate'>{roadmap.title}</h1>
                  
            </div>              

            <a href={roadmap.roadmapUrl}>
            <button 
                  className="relative group overflow-hidden px-7 h-10 rounded-md bg-fuchsia-500
                  before:absolute 
                  before:inset-0 
                  before:bg-fuchsia-600 
                  before:scale-y-[0.1] 
                  before:origin-bottom
                  before:transition
                  before:duration-300
                  hover:before:scale-y-100">
                    <span className="relative uppercase text-base text-white"> Read </span> 
                </button>
            </a>

        </div>

      </div>
    </div>
  )
}

export default RoadmapsCard