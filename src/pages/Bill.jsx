import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'

function Bill() {
  const [cart, setCart] = useState([])
  const billRef = useRef()

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

  const generateBill = async () => {
  try {
    const canvas = await html2canvas(billRef.current)

    const link = document.createElement("a")
    link.download = "DineEase-Bill.png"
    link.href = canvas.toDataURL("image/png")
    link.click()

    const response = await axios.get(
      "https://dineease-rrd3.onrender.com/cart"
    )

    const cartItems = response.data

    await Promise.all(
      cartItems.map((item) =>
        axios.delete(
          `https://dineease-rrd3.onrender.com/cart/${item.id}`
        )
      )
    )

    alert("Thank you for ordering from DineEase! Your bill is ready. 🍴")

    window.location.href = "/"

  } catch (error) {
    console.log(error)
    alert("Sorry, something went wrong while generating your bill.")
  }
}

  return (
    <div className="bill-page">
      <div className="bill" ref={billRef}>
        <div className="bill-header">
          <h1>DineEase</h1>
          <h2>Order Bill</h2>
        </div>
        {
          cart.map((item) => (
            <div className="bill-item" key={item.id}>
              <p> {item.name} × {item.quantity}</p>
              <p> ₹{item.price * item.quantity} </p>
            </div>
          ))
        }
        <div className="bill-total">
          <h2>Total: ₹{total}</h2>
        </div>
        <p> Thank you for ordering from DineEase!</p>
      </div>
      <button className="generate-bill" onClick={generateBill}> Generate Bill</button>
    </div>
  )
}

export default Bill