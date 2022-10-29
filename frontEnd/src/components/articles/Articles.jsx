import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ArticleCards from '../../components/card/ArticleCards'
import {Link} from 'react-router-dom'

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await axios.get ('http://localhost:5000/api/articles/random')
            setArticles(res.data);
        }
        fetchArticles();
    },[])

  return (
    <div name='articles' className='w-full h-auto pt-14 pb-10 bg-gradient-to-b from-black to-gray-800 text-white '>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto '>
            
        <div >
          
          <div className='flex flex-column'>
            
            <div className='pr-3 pt-2'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            
            </div>


            <h1 className="text-4xl font-bold  p-2">Articles</h1>
          
          </div>
          
          
          <div className="flex flex-row justify-between">

            <p className="py-6">Here you find a fiew articles to get an idea of the webDev:</p>
          
          <Link to="/articles">
            {/* <button className="rounded-full px-6 py-3  mx-auto uppercase text-xs font-bold cursor-pointer tracking-wider border-amber-600 border-2 hover:scale-105 hover:bg-gradient-to-b hover:from-amber-700 hover:to-yellow-500 hover:text-white transition-colors duration-200 text-amber-500">
              See all
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
            </button> */}
          
          <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-amber-500 to-red-500 hover:to-red-600">
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

            {articles.map((article) =>(
                
                <ArticleCards key={article._id} article={article}/>
                
            ))}

            </div>

        </div>
    </div>
  )
}

export default Articles