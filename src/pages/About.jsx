import React from 'react'

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="about-small">ABOUT DINEEASE</p>
        <h1> Good Food, <br /> <span>Good Moments</span></h1>
        <p className="about-intro">
          At DineEase, we believe that great food brings people together. Our goal is to make ordering delicious food simple, convenient, and enjoyable.</p>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img src="/images/food2.jpg" alt="Delicious food" />
        </div>
        <div className="about-text">
          <p className="section-label">WHO WE ARE</p>
          <h2> Your Favourite Food, <br /> <span>Just A Few Clicks Away</span></h2>
          <p> DineEase is a simple and convenient food ordering platform created for people who love good food without the hassle. </p>
          <p> From breakfast and lunch to dinner, snacks, desserts and beverages, you can explore our menu and find something delicious for every occasion. </p>
          <p>We focus on making the entire experience easy — from discovering your favourite dishes to placing your order.</p>
        </div>
      </section>
      <section className="about-values">
        <div className="section-title">
          <span></span>
          <h2>Why <em>DineEase?</em></h2>
          <span></span>
        </div>
        <div className="values-container">
          <div className="value-card">
            <div className="value-icon">🍽️</div>
            <h3>Quality Food</h3>
            <p> Discover delicious dishes made with care and quality ingredients. </p>
          </div>
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Easy Ordering</h3>
            <p> Browse our menu and place your order quickly and easily. </p>
          </div>
          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Made With Care</h3>
            <p>We want every DineEase experience to be simple and enjoyable. </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
