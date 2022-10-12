import React,{ useState, useEffect} from 'react';
import axios from 'axios';

import Card from '../../components/card/Card'
const Video = () => {

  const [videos,setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () =>{
      const res = await axios.get('http://localhost:5000/api/videos');
      setVideos(res.data)
      console.log(res.data);
    }
    fetchVideos();
  },[])

  return (
    <>
    <div className="h-full w-full bg-gradient-to-b from-black to-gray-800 ">

      <div className=" mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <div>

              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Videos </p>
            
              <p className="py-6">These are some videos to get into some technologies:</p>
            
            </div>
        
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:px-0">

          {videos.map((video) =>(
            
            <Card key={video._id} video={video}/>
            
            ))}
        
        </div>
      
      </div>

    </div>
  </>
  )
}

export default Video