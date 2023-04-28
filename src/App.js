import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/LoginPage'
import Signup from './component/SignUp'
import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

