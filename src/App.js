import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './component/LoginPage'
import './App.css'

export default function App() {
    return (
            <div>
              <Router>
                <Routes>
                    {/* <Route exact path="/" component={ LandingPage } /> */}
                    <Route exact path="/login" element={<Login/>}/>
                    {/* <Route path="/register" component={ Register } /> */}
                    {/* <Route path="/forget-password" component={ ForgetPasswordPage } /> */}
                    {/* <Route path="/home" component={ HomePage } /> */}
                </Routes>
        </Router>
            </div>
    )
}

