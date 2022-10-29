import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pt-14 pb-10">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className=' flex flex-column items-center pb-8 '>






              <div className='pr-3 '>

                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  className="w-8 h-8"
                >
                  
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                
                </svg>
              
              </div>








              <p className='text-4xl font-bold'>About</p>
              
            </div>

            <p className='text-xl text-justify mt-10 '>
            it is a site for beginner developers where you can find different resources that will allow you to know what 
            kind of developer you want to be as well as the development of your capacities and your mastery of different 
            technologies
            </p>

        </div>

    </div>
  )
}

export default About