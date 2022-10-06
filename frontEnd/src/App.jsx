import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Video from './pages/video/Video'
import Articles from './pages/articles/Articles'
import Roadmaps from './pages/roadmaps/Roadmaps'

import './App.css'

function App() {


  return (
    <div className="App">
      <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/roadmaps" element={<Roadmaps/>}/>
        
        </Routes>
    </div>
  )
}

export default App
