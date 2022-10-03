import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

import './App.css'
import Articles from './pages/articles/Articles'

function App() {


  return (
    <div className="App">
      <Navbar/>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/video" element={<Video/>}/>
          <Route path="/articles" element={<Articles/>}/>
        
        </Routes>
    </div>
  )
}

export default App
