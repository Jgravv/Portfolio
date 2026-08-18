import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FrontPage from './FrontPage'
function App() {

  return (
    <>

        <Router>
          <Routes>
            <Route path="/" element={<FrontPage/>}/>
           </Routes>
        </Router>
      </>
  )
}

export default App
