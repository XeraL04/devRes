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
                <button className="rounded-full px-6 py-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-green-600 border-2 hover:scale-105 hover:bg-gradient-to-b hover:from-green-700 hover:to-emerald-500 hover:text-white duration-500 text-green-500">
                  See all
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
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