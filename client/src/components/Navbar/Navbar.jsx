import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';

export default function Navbar() {
  return (
    <nav>
      <Logo/>
      <Link to='/'>Home</Link>
      <Link to='/all-tutorials'>Tutorials</Link>
      <Link to='/jobs'>Jobs</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/practice'>Practice</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </nav>
  )
}
