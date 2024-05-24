import React from 'react'

import NavBar from './pages/home/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Logout from './pages/auth/Logout'
import WriteBlog from './pages/blog/WriteBlog'

function App(): React.ReactNode {

  return (
    <>
      <div className="bg bg-home bg-cover bg-center  bg-blog-img h-screen w-full bg-fixed bg-no-repeat overflow-y-auto">
        <NavBar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/blog/write" element={<WriteBlog />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
