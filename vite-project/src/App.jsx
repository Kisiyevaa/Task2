import React from 'react'
import Blog from './pages/Blog/Blog'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import {Route,Routes} from "react-router-dom"
import AboutBlog from './components/Layout/AboutBlog/AboutBlog'
function App() {
  return (
    <div>
   <Header/>
   <Routes>
    <Route path='/' element={<Blog/>}/>
    <Route path='/:id' element={<AboutBlog/>}/>
   </Routes>
   <Footer/>
    </div>
  )
}

export default App