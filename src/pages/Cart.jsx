import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://dineease-rrd3.onrender.com/cart")
      .then((response) => {
        setCart(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const total = cart.reduce(
    (a, b) => a + b.price * b.quantity,
    0
  )

  return (
    <div className="cart-page">
      <header className="cart-header">
        <div className="cart-logo"> DineEase</div>
      </header>
      <section className="cart-heading">
        <p className="cart-small-title"> YOUR DINING EXPERIENCE</p>
        <h1>Your <span>Order</span></h1>
        <p> Review your selected dishes before placing your order.</p>
      </section>
      {
        cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">  🍽️ </div>
            <h2>Your cart is empty</h2>
            <p> Looks like you haven't ordered anything yet.</p>
            <button onClick={() => navigate("/menu")} className="continue-button">Explore Menu </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-items-title">
                <h2> Selected Items</h2>
                <span>{cart.length} {cart.length === 1 ? "item" : "items"}</span>
              </div>
              <div className="cart-items">
                {
                  cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))
                }
              </div>
            </div>
            <div className="cart-summary">
              <h2> Order Summary</h2>
              <div className="summary-line">
                <span>Items </span>
                <span> {cart.length}</span>
              </div>
              <div className="summary-line">
                <span> Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-line">
                <span>Delivery </span>
                <span className="free"> FREE</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total </span>
                <strong>₹{total} </strong>
              </div>
              <button className="checkout-button" onClick={() => navigate("/checkout")} >Proceed to Checkout<span>→</span></button>
              <button className="continue-button" onClick={() => navigate("/menu")}>← Continue Ordering</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Cart