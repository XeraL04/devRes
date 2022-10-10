import React, {useState, useEffect}from 'react';
import axios from 'axios';
import Card from '../../components/card/Card'
import {Link} from 'react-router-dom'


const Videos = () => {

    const [videos,setVideos] = useState([]);

    useEffect(() => {
      const fetchVideos = async () =>{
        const res = await axios.get('http://localhost:5000/api/videos/random');
        setVideos(res.data)
        console.log(res.data);
      }
      fetchVideos();
    },[])

  return (
    <div
      name="videos"
      className="w-full h-auto pt-14 pb-10 bg-gradient-to-b from-gray-800 to-black "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div>
          
            <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Videos</h1>
            
            <div className="flex flex-row justify-between">

              <p className="py-6">These are some videos to get into some technologies:</p>
            
              <Link to="/video">
                <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-green-500 to-teal-500 hover:to-teal-600">
                  <span className="relative text-sm text-white"> get started </span>
                  <div className="flex items-center -space-x-3 translate-x-3">
                    <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                  </div>
                </button>
              </Link>
          
            </div>

        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {videos.map((video) =>(
            
            <Card key={video._id} video={video}/>
            
          ))}
          


        </div>
      </div>
    </div>
  )
}

export default Videos