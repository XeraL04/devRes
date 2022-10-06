import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RoadmapsCard from '../card/RoadmapsCard';
import {Link} from 'react-router-dom'


const Roadmaps = () => {

    const [roadmaps, setRoadmaps] = useState([]);

    useEffect(() => {
        const fetchRoadmaps = async () =>{
            const res = await axios.get('http://localhost:5000/api/roadmaps/random')
            setRoadmaps(res.data)
        }
        fetchRoadmaps()
    },[])

  return (
    <div name='roadmaps' className='w-full h-auto pt-14 pb-10 bg-gradient-to-b from-black to-gray-800  text-white '>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto '>
            
        <div>
          
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Roadmaps</h1>
          
          <div className="flex flex-row justify-between">

            <p className="py-6">Here you find a fiew articles to get an idea of the webDev:</p>
          
          <Link to="/roadmaps">

            <button className="rounded-full px-6 py-3  mx-auto uppercase text-xs font-bold cursor-pointer tracking-wider border-fuchsia-600 border-2 hover:scale-105 hover:bg-gradient-to-b hover:from-fuchsia-700 hover:to-pink-500 hover:text-white duration-500 text-fuchsia-500">
              See all
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
            </button>
          
          </Link>
          
          </div>

        </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {roadmaps.map((roadmap) =>(
                
                <RoadmapsCard key={roadmap._id} roadmap={roadmap}/>
                
            ))}

            </div>

        </div>
    </div>
  )
}

export default Roadmaps