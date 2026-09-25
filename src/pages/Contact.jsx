import React, { useState } from 'react'
import axios from 'axios'

function Contact() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        axios
            .post('https://dineease-rrd3.onrender.com/contacts', formData)
            .then((response) => {
                console.log(response.data)
                alert('Thank you for contacting DineEase!')
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            })
            .catch((error) => {
                console.log(error)
                alert('Something went wrong. Please try again.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <p>GET IN TOUCH</p>
                <h1>We'd Love To <br /><span>Hear From You</span></h1>
                <p className="contact-intro"> Have a question, suggestion, or just want to say hello? Send us a message and we'll be happy to hear from you.</p>
            </section>
            <section className="contact-section">
                <div className="contact-info">
                    <p className="section-label">CONTACT US</p>
                    <h2>Let's Talk About<br /><span>Good Food</span></h2>
                    <p className="contact-text"> Whether you have a question about our menu, your order, or anything else, our team is here to help.</p>
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div>
                            <h3>Visit Us</h3>
                            <p>DineEase Restaurant</p>
                            <p>Kerala, India</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div>
                            <h3>Email Us</h3>
                            <p>dineEase@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea name="message" placeholder="Write your message..." rows="6" value={formData.message} onChange={handleChange} required ></textarea>
                        </div>
                        <button type="submit" className="contact-button" disabled={loading} >
                            {loading ? 'SENDING...' : 'SEND MESSAGE'}
                            {!loading && <span>→</span>}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact