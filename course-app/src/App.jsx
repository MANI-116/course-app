import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/langing'
import Register from './pages/register'
import Login from './pages/login'
import Courses from './pages/courses'





function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
      
    </>
  )
}

export default App
