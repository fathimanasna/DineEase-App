import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <span className="hero-circle circle-one"></span>
        <span className="hero-circle circle-two"></span>
        <div className="hero-content">
          <p className="hero-small">WELCOME TO DINEEASE</p>
          <h1> Delicious Food, <br /> <span>Made With Love</span></h1>
          <p className="hero-description">Discover delicious meals and order your favourites with just a few clicks.</p>
          <Link to="/menu" className="hero-button">ORDER NOW<span>→</span></Link>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img src="/images/food1.jpg" alt="Delicious food" />
          </div>
        </div>
      </section>
      <section className="home-info">
        <div className="section-title">
          <span></span>
          <h2> Why choose <em>DineEase?</em></h2>
          <span></span>
        </div>
        <div className="info-container">
          <div className="info-card">
            <div className="info-icon"> 🍽️ </div>
            <h3>Fresh Food</h3>
            <p> Enjoy delicious meals prepared with quality ingredients.  </p>
          </div>
          <div className="info-card">
            <div className="info-icon"> ⚡ </div>
            <h3>Easy Ordering</h3>
            <p>Choose your favourite food and place your order easily. </p>
          </div>
          <div className="info-card">
            <div className="info-icon">🧾 </div>
            <h3>Easy Billing</h3>
            <p> View your order and generate your bill with ease.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home