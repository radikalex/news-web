import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <header>
        <nav>

          <div className='logo'>
            <span>Articles Alex</span>
          </div>

          <div className='navLinks-container'>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/list">Articles</Link></span>
            <span><Link to="/form">Add new article</Link></span>
          </div>
            
        </nav>
    </header>
  )
}

export default Header