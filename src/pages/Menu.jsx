import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Menu() {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)

    axios
      .get("https://dineease-rrd3.onrender.com/menu")
      .then((response) => {
        setFoods(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleOrder = (food) => {
    axios
      .get("https://dineease-rrd3.onrender.com/cart")
      .then((response) => {

        const alreadyOrdered = response.data.find(
          (item) =>
            item.name.trim().toLowerCase() ===
            food.name.trim().toLowerCase()
        )
        if (alreadyOrdered) {
          alert(`${food.name} is already ordered!`)
          return
        }

        const orderItem = {
          name: food.name,
          image: food.image,
          price: food.price,
          quantity: 1
        }
        axios
          .post("https://dineease-rrd3.onrender.com/cart", orderItem)
          .then(() => {
            alert(`${food.name} order placed!`)
            navigate("/cart")
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const filteredFood = foods.filter((food) => {
    const matchesCategory =
      category === "All" || food.category === category
    const matchesSearch =
      food.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="menu-page">
      <section className="menu-header">
        <p className="menu-label">EXPLORE OUR MENU</p>
        <h1> Delicious Food,<br /><span>Made For You</span></h1>
        <p className="menu-description">Discover delicious dishes prepared with care. Choose your favourite and enjoy every bite.</p>
      </section>
      <div className="menu-search">
        <input type="text" placeholder="Search your favourite food..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <span>⌕</span>
      </div>
      <div className="category-buttons">
        <button className={category === "All" ? "active-category" : ""} onClick={() => setCategory("All")}>All</button>
        <button className={category === "Breakfast" ? "active-category" : ""} onClick={() => setCategory("Breakfast")}> Breakfast </button>
        <button className={category === "Lunch" ? "active-category" : ""} onClick={() => setCategory("Lunch")}> Lunch</button>
        <button className={category === "Dinner" ? "active-category" : ""} onClick={() => setCategory("Dinner")}> Dinner</button>
        <button className={category === "Snacks" ? "active-category" : ""} onClick={() => setCategory("Snacks")} > Snacks</button>
        <button className={category === "Desserts" ? "active-category" : ""} onClick={() => setCategory("Desserts")}>  Desserts</button>
        <button className={category === "Beverages" ? "active-category" : ""} onClick={() => setCategory("Beverages")} > Beverages</button>
      </div>
      <div className="food-container">
        {
        loading ? (
          <div className="no-food">
            <h3>Loading our delicious menu... 🍴</h3>
            <p>Please wait a moment.</p>
          </div>
        ) : filteredFood.length === 0 ? (
          <div className="no-food">
            <h3>No food found 😔</h3>
            <p>Try searching for something else.</p>
          </div>
        ) : (
          filteredFood.map((food) => (
            <div className="food-card" key={food.id} >
              <div className="food-image-wrapper">
                <img src={food.image} alt={food.name} className="food-image" />
                <span className="food-category">{food.category} </span>
              </div>
              <div className="food-card-content">
                <h2> {food.name} </h2>
                <p className="food-description"> {food.description} </p>
                <div className="food-bottom">
                  <div>
                    <span className="price-label"> Price</span>
                    <div className="food-price"> ₹{food.price} </div>
                  </div>
                  <button className="order-button" onClick={() => handleOrder(food)} >Order Now<span>→</span> </button>
                </div>
              </div>
            </div>
          ))
        )
        }
      </div>
    </div>
  )
}

export default Menu