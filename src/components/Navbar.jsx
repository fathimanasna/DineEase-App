import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/" className="brand-link">
          <img src="/dineease-logo.png" alt="DineEase Logo" className="brand-logo"/>
          <span className="brand-name">DineEase</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  )
}

export default Navbar