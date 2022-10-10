import React from 'react'

const ArticleCards = ({article}) => {
  return (
    <div className="w-full text-center items-center mt-1">
        
        <div className="rounded-lg overflow-hidden text-white mx-auto px-4 py-6 shadow-md transform transition-all hover:scale-110 shadow-amber-500">
        
            <img src={article.imgUrl} alt="articleImg" className="w-full h-48 object-cover "/>
            
            <div>

              <h1 className="font-bold">{article.title}</h1>
        
              <p className="mt-3 sm:truncate text-gray-300">{article.desc}</p>
        
            </div>
            <div className="mt-3">
              <a href={article.articleUrl}>
                <button 
                  className="relative group overflow-hidden px-7 h-10 rounded-md bg-amber-500
                  before:absolute 
                  before:inset-0 
                  before:bg-amber-600 
                  before:scale-y-[0.1] 
                  before:origin-bottom
                  before:transition
                  before:duration-300
                  hover:before:scale-y-100">
                    <span className="relative uppercase text-base text-white"> Read </span> 
                </button>
              </a>
            </div>
        </div>
    
    </div>
  )
}

export default ArticleCards