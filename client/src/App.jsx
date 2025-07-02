import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Blogs from './pages/Blogs/Blogs'
import Practice from './pages/Practice/Practice'
import AllJobs from './pages/AllJobs/AllJobs'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import AllTutorials from './pages/AllTutorials/AllTutorials';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/all-tutorials' element={<AllTutorials/>}></Route>
        <Route path='/practice' element={<Practice/>}></Route>
        <Route path='/jobs' element={<AllJobs/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
