import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>DineEase</h2>
          <p>Delicious food, made with love.</p>
          <p className="footer-tagline">Good food. Good mood. Good moments.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ dineEase@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Monday - Friday</p>
          <span>10:00 AM - 10:00 PM</span>
          <p>Saturday - Sunday</p>
          <span>9:00 AM - 11:00 PM</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 DineEase. All rights reserved.</p>
        <p> Made with <span>♥</span> for food lovers </p>
      </div>
    </footer>
  )
}

export default Footer