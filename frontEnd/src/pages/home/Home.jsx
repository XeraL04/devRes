import React from 'react'

import First from '../../components/first/First'
import About from '../../components/about/About'
import Articles from '../../components/articles/Articles'
import Videos from '../../components/videos/Videos'
import Roadmaps from '../../components/roadmaps/Roadmaps'
import Contact from '../../components/contact/Contact'
// import CardShuffle from '../../components/card/CardShuffle'


const Home = () => {
  

  
  return (
    <div>
        <First/>
        <About/>
        <Articles/>
        <Videos/>        
        <Roadmaps/>
        <Contact/>
        {/* <CardShuffle/> */}
    </div>
  )
}

export default Home