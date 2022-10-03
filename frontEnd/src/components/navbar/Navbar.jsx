import React, {useState} from 'react'
// import {Link} from 'react-scroll'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [ 
        {
            id:1,
            page: 'home',
            link:'/'
        },
        {
            id:3,
            page: 'articles',
            link:'/articles'
        },
        {
            id:4,
            page:'videos',
            link:'/video'
        },
    ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky">
        <div>
            <h1 className="text-5xl font-signature ml-2">devResources</h1>
        </div>

            <ul className="hidden md:flex">

                {links.map(({id, link, page}) =>(
                    <li 
                        key={id} 
                        className="px-10 cursor-pointer capitalize font-bold
                        text-gray-500 hover:scale-105 duration-300"
                    >
                        <Link to={link}>
                            {page}
                        </Link>
                    </li>
                ))}

            </ul>
            <div onClick={() =>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav&&(

                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                  
                    {links.map(({id, link}) =>(
                        <li 
                            key={id} 
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                            {link}
                        </Link>
                        </li>
                    ))}  
                </ul>
            )}

    </div>
  )
}

export default Navbar