import React from 'react'

const ArticleCards = ({article}) => {
  return (
    <div className="w-full text-center items-center mt-1">
        
        <div className="rounded-lg overflow-hidden text-white mx-auto px-4 py-6 shadow-md hover:scale-105 duration-500 shadow-amber-500">
        
            <img src={article.imgUrl} alt="articleImg" className="w-full h-48 object-cover "/>
            
            <div>

              <h1 className="font-bold">{article.title}</h1>
        
              <p className="mt-3 sm:truncate text-gray-300">{article.desc}</p>
        
            </div>

            <a href={article.articleUrl}>
      
              <button className="w-20 mt-3 rounded-lg bg-amber-600 hover:scale-105 duration-500 shadow-md shadow-yellow-700">Read</button>
      
            </a>
      
        </div>
    
    </div>
  )
}

export default ArticleCards