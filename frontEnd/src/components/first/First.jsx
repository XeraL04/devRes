import React from 'react'
import HeroImage2 from '../../assets/HeroImage2.png'

const First = () => {
  return (
    <div
      name="home"
      className="h-full w-full pt-10 pb-10 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">

          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello web developers
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            Different resources to help you in the web development journey. From developers to developers.
          </p>

        </div>

        <div>

          <img
            src={HeroImage2}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />

        </div>

      </div>
      
    </div>
  )
}

export default First