import './App.css'
import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='overflow-x-hidden overflow-y-auto' >
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
