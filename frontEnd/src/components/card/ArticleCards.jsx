import React from 'react'

const ArticleCards = ({article}) => {
  return (
    <div className="w-full text-center items-center mt-1">
        
        <div className="text-white mx-auto px-4 py-6 shadow-sm hover:scale-105 duration-500 shadow-amber-500">
        
            <img src={article.imgUrl} alt="articleImg" className="w-full h-52 items-center"/>
        
            <h1 className="font-bold">{article.title}</h1>
        
            <p className="mt-3 truncate">{article.desc}</p>
        
            <a href={article.articleUrl}>
      
              <button className="w-20 mt-3 rounded bg-amber-600 hover:scale-105 duration-500">Read</button>
      
            </a>
      
        </div>
    
    </div>
  )
}

export default ArticleCards