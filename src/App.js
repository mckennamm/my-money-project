//imports
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom' 
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'

//pages & components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
    {authIsReady && (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={user? <Home /> : <Navigate to="login"/>}/>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/> 
          <Route path="/signup"element={!user ? <Signup /> : <Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    )}
    </div>
  )
}

export default App