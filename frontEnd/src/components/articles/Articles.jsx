import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ArticleCards from '../../components/card/ArticleCards'
import {Link} from 'react-router-dom'

const Portfolio = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await axios.get ('http://localhost:5000/api/articles/random')
            setArticles(res.data);
        }
        fetchArticles();
    },[])

  return (
    <div name='articles' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            
        <div>
          
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Articles</h1>
          
          <div className="flex flex-row justify-between">

            <p className="py-6">Here you find a fiew articles to get an idea of the webDev:</p>
          
          <Link to="/articles">
            <button>See all</button>
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

export default Portfolio