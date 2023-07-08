import React from 'react'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Ranking from './Pages/Ranking'
import About from './Pages/About'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

import './Main.css'

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar className='navbar' >
        </Navbar>
      
      
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='/news'  element={<About/>} />
          <Route path='/ranking'  element={<Ranking/>} />
          
        </Routes>
      </div>
      <Footer></Footer>
      
    
    </Router>
  )
}

export default App