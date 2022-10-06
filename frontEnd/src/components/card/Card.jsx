import React from 'react'

const Videos = ({video}) => {

  return (
    <div className='w-full text-center items-center'>

      <div className='w-full text-center items-center mt-1'>

        <div className='rounded-lg overflow-hidde text-white mx-auto px-4 py-6 shadow-md hover:scale-105 duration-500 shadow-green-500'>
                
          <img src={video.imgUrl} alt="videoImg" className='sm:h-42 sm:w-full  object-cover'/>
                
            <div className='m-4'>
                  
              <h1 className='font-bold sm:truncate'>{video.title}</h1>
                  
              <p className="mt-3 sm:truncate text-gray-300 ">{video.desc} </p>

            </div>              

            <a href={video.videoUrl}>
              <button className="sm:w-20 sm:mt-3 rounded-lg bg-green-600 hover:scale-105 duration-500 shadow-md shadow-emerald-700">Watch</button>
            </a>

        </div>

      </div>
    </div>

    )
}

export default Videos
