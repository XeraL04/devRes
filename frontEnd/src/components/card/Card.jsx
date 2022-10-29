import React from 'react'

const Videos = ({video}) => {

  return (
      <div 
        className='w-full text-center items-center mt-1'>

        <div 
          className='
            rounded-lg 
            overflow-hidde 
            text-white 
            mx-auto 
            px-4 py-6 
            shadow-md 
            shadow-green-500
            
            transition-all
            hover:shadow-xl 
            hover:shadow-green-500

            '>
                
          <img 
            src={video.imgUrl} 
            alt="videoImg" 
            className='
              h-42 w-full  
              object-cover'/>
                
            <div className='m-4'>
                  
              <h1 className='font-bold sm:truncate'>{video.title}</h1>
                  
              <p className="mt-3 sm:truncate text-gray-300 ">{video.desc} </p>

            </div>              

            <a href={video.videoUrl}>
              <button 
                className='
                px-4 py-2 mx-8 my-0 rounded 
                bg-gradient-to-tr from-green-500 via-emerald-500 to-teal-500 
                hover:bg-gradient-to-tr hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 
                hover:scale-110 
                transition-all duration-300
                '>
                    <span className=" uppercase text-base text-white">
                      Watch
                    </span>
              </button>
            </a>

        </div>

      </div>

    )
}

export default Videos