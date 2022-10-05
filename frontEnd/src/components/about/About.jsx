import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pt-14 pb-10">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
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