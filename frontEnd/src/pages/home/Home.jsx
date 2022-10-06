import React from 'react'

import First from '../../components/first/First'
import About from '../../components/about/About'
import Articles from '../../components/articles/Articles'
import Videos from '../../components/videos/Videos'
import Roadmaps from '../../components/roadmaps/Roadmaps'
import Contact from '../../components/contact/Contact'


const Home = () => {
  

  
  return (
    <div>
        <First/>
        <About/>
        <Articles/>
        <Videos/>        
        <Roadmaps/>
        <Contact/>
    </div>
  )
}

export default Home