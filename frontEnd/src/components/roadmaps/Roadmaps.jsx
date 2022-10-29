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

          <div className='flex flex-column'>
            
            <div className='pr-3 pt-2'>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              
            </div>

          <h1 className="text-4xl font-bold p-2">Roadmaps</h1>
          

          </div>          
          
          <div className="flex flex-row justify-between">

            <p className="py-6">Here you find a fiew articles to get an idea of the webDev:</p>
          
          <Link to="/roadmaps">

          <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:to-violet-600">
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

            {roadmaps.map((roadmap) =>(
                
                <RoadmapsCard key={roadmap._id} roadmap={roadmap}/>
                
            ))}

            </div>

        </div>
    </div>
  )
}

export default Roadmaps