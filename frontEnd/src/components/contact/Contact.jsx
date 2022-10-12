import React from 'react'
import undraw_contact_us_re from '../../assets/undraw_contact_us_re_4qqt.svg'

const Contact = () => {
  return (
    <div name="contact" className=" relativ w-full h-auto pt-14 bg-gradient-to-b from-gray-800 to-black p-4 text-white">
        

        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>

            {/* <div className="flex justify-center items-center "> */}
            <div className="flex flex-col items-center justify-center h-full px-4 md:flex-row gap-3 ">

                <form method="POST" action="https://getform.io/f/a7bd2524-9eab-48e7-bf0c-4bacc323a12d" className="flex flex-col w-full md:w-1/2">
                    <div>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter you name" 
                        className="w-full bg-transparent border-b-2 border-b-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-b-indigo-500  " 
                        // className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" 
                        />
                    
                    </div>


                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter you email" 
                        className=" w-full bg-transparent border-b-2 border-b-gray-300 my-4 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-b-indigo-500" />
                    
                    <textarea 
                        name="message" 
                        placeholder="Enter your message" 
                        rows="5" 
                        className="w-full bg-transparent border-b-2 border-b-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-b-indigo-500"></textarea>
                        {/* className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea> */}

                    <button 
                        className=" text-white font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-xl hover:scale-110 duration-300 uppercase"> 
                            Let's talk
                    </button>
                </form>
                        
                {/* <div className="rounded-2xl mx-auto w-2/3 md:w-full">
                    <img src={undraw_contact_us_re} alt="" />
                </div> */}

            </div>

        </div>
        </div>
  )
}

export default Contact

