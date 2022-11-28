import React from 'react'
import "./CartItem.css"

function CartItem() {

    const item  = {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        }

  return (
    <div className="cartItem__container">
        <div className="cartItem__image-container">
            <img src={item.image} className="cartItem__image" alt="item image"/>
        </div>
        <div className="cartItem__info">

            <div className="cartItem__title-container">
                <p className="cartItem__title">{item.title}</p>
            </div>

            <div className="cartItem__price-container">
                <p className="cartItem__price">{item.price}</p>
            </div>

            <div className="cartItem__button-container" >
                <button className="cartItem__button">
                    <p className="cartItem__button-text">remove</p>
                </button>
            </div>

        </div>
        <div className="cartItem__input-container">
            <div className="cartItem__input-box">
                <input type="number" className="cartItem__input"  />
                <div className="cartItem__input-buttons">
                    <button className="cartItem__input-button" >+</button>
                    <button className="cartItem__input-button">-</button>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default CartItem