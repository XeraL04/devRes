import React from 'react'

const RoadmapsCard = ({roadmap}) => {
  return (


      <div className='w-full  text-center items-center mt-1 '>

        <div 
          className=' 
            rounded-lg 
            overflow-hidde 
            text-white 
            mx-auto 
            px-4 py-6

            shadow-md 
            shadow-fuchsia-700

            transition-all 
             
            hover:shadow-xl
            hover:shadow-fuchsia-700
            '>
                
          <img src={roadmap.imgUrl} alt="videoImg" className='h-40 w-full  object-cover' />
                
            <div className='m-4'>
                  
              <h1 className='font-bold sm:truncate'>{roadmap.title}</h1>
                  
            </div>              

            <a href={roadmap.roadmapUrl}>
            <button 
                  className='
                    px-4 py-2 mx-8 my-0 rounded 
                    bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-rose-500 
                    hover:bg-gradient-to-tr hover:from-rose-500 hover:via-pink-600 hover:to-fuchsia-500 
                    hover:scale-110
                    transition-all duration-300
                    '>
                  Read
                </button>
            </a>

        </div>

      </div>
  )
}

export default RoadmapsCard