import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20 '>
            it is a site for beginner developers where you can find different resources that will allow you to know what 
            kind of developer you want to be as well as the development of your capacities and your mastery of different 
            technologies
            </p>

            {/* <br />

            <p className='text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aut, molestiae est eum quos aperiam earum 
                animi odit sed magni! Laborum eaque eligendi ipsam consectetur minima reprehenderit eveniet commodi unde 
                veritatis aliquam, fugiat non voluptates assumenda nihil tempora maiores culpa ea debitis in labore vitae! 
                Nam eaque omnis dolorum nobis.
            </p> */}
        </div>

    </div>
  )
}

export default About