import React from 'react'

const ArticleCards = ({article}) => {
  return (
    <div className="w-full text-center items-center mt-1">
        
        <div 
          className="
            rounded-lg 
            overflow-hidden 
            text-white 
            mx-auto 
            px-4 py-6 
            shadow-md 

            hover:shadow-xl
            hover:shadow-amber-500

            transition-all 
             
            shadow-amber-500
            ">
            <img 
              src={article.imgUrl} 
              alt="articleImg" 
              className=" w-full h-40 object-cover "
            />
            
            <div>

              <h1 className="font-bold">{article.title}</h1>
        
              <p className="mt-3 sm:truncate text-gray-300">{article.desc}</p>
        
            </div>

            <div className="mt-3">

              <a href={article.articleUrl} className="p-0.5 inline-flex items-center justify-center font-bold overflow-hidden ">
                
                <button 
                  className='
                    px-4 py-2 mx-8 my-0 rounded 
                    bg-gradient-to-tr from-amber-500 via-orange-500 to-red-500 
                    hover:bg-gradient-to-tr hover:from-red-500 hover:via-orange-600 hover:to-amber-500 
                    hover:scale-110 
                    transition-all duration-300
                    '>
                  Read
                </button>
              </a>

            </div>
        </div>
    
    </div>
  )
}

export default ArticleCards





// <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">




// <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>

// <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">

// <span class="relative text-white">Button Text</span>

// </span>
// </a>