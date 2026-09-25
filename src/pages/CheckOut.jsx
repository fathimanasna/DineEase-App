import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function CheckOut() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dineease-rrd3.onrender.com/cart")
      .then((Response) => {
        setCart(Response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="checkout-logo">DineEase</div>
      </header>
      <section className="checkout-heading">
        <p className="checkout-label">REVIEW YOUR ORDER </p>
        <h1><span>Checkout</span></h1>
        <p>Almost there! Review your order and confirm.</p>
      </section>
      <div className="checkout-container">
        <h2> Order Summary</h2>
        {
          cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <div className="checkout-item-info">
                <p className="checkout-item-name"> {item.name}</p>
                <p className="checkout-item-quantity"> Quantity: {item.quantity}</p>
              </div>
              <p className="checkout-item-price"> Price: ₹{item.price * item.quantity}</p>
            </div>
          ))
        }
        <div className="checkout-total">
          <span> Total:</span>
          <strong> ₹{total}</strong>
        </div>
        <div className="checkout-buttons">
          <button className="edit-order-button" onClick={() => navigate("/cart")}>Edit Order</button>
          <button className="confirm-order-button" onClick={() => navigate("/bill")} > Confirm Order </button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut