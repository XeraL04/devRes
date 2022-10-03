import React from 'react'

const Videos = ({video}) => {

  return (
    // <div className='w-full text-center items-center'>
    <div className='w-full text-center items-center mt-1'>

            <div className='text-white mx-auto px-4 py-6 shadow-sm hover:scale-105 duration-500 shadow-green-500'>
              
              <img src={video.imgUrl} alt="videoImg" className='w-full items-center'/>
              
              <h1 className='font-bold'>{video.title}</h1>
              
              <p className=" mt-3 truncate ">{video.desc} </p>
              
              <a href={video.videoUrl}>
                <button className="w-20 mt-3 rounded bg-green-600 hover:scale-105 duration-500">Watch</button>
              </a>

            </div>

      </div>
    )
}

export default Videos
