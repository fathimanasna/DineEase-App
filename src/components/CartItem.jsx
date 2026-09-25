import React from 'react'
import axios from 'axios'

function CartItem({ item }) {
  const updateQuantity = (newQuantity) => {
    if (newQuantity < 1) {
      return;
    }
    axios
      .put(`https://dineease-rrd3.onrender.com/cart/${item.id}`, {
        ...item,
        quantity: newQuantity
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const removeItem = () => {
    const confirmRemove = window.confirm(`Are you sure you want to remove ${item.name} from your order?`);
    if (!confirmRemove) {
      return;
    }
    axios
      .delete(`https://dineease-rrd3.onrender.com/cart/${item.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='cart-item'>
      <img src={item.image} alt={item.name} className='cart-item-image' />
      <div className='cart-item-info'>
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <div className='quantity'>
          <button onClick={() => updateQuantity(item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.quantity + 1)}>+</button>
        </div>
        <p className='item-total'>Total: {item.price * item.quantity}</p>
        <button className='remove-button' onClick={removeItem}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
