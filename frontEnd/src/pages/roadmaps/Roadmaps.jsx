import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'

import RoadmapsCard from '../../components/card/RoadmapsCard'

const Roadmaps = () => {

    const [roadmaps, setRoadmaps] = useState([]);

    useEffect(() => {
        const fetchRoadmaps = async () =>{
            const res = await axios.get('http://localhost:5000/api/roadmaps');
            setRoadmaps(res.data);
        }
        fetchRoadmaps();
    },[])

  return (
    <div className="h-full w-full bg-gradient-to-b from-black to-gray-800 ">

    <div className=" mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
            <div>

                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Roadmaps </p>
            
                <p className="py-6">Here you can find some articles to gat an idea about the webDev:</p>
            
            </div>
        
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:px-0">

                {
                    roadmaps.map((roadmap) => (
                        <RoadmapsCard key={roadmap._id} roadmap={roadmap}/>
                    ))
                }
        
        </div>
    
    </div>
    
    </div>
  )
}

export default Roadmaps