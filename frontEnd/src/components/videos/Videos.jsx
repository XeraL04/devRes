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
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div>
          
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Videos</h1>
          
          <div className="flex flex-row justify-between">

            <p className="py-6">These are some videos to get into some technologies:</p>
          
          <Link to="/video">
            <button>See all</button>
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