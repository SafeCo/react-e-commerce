import {useEffect, useState} from 'react'
import "./CartItem.css"

function CartItem({item}) {
    const [value, setValue] = useState(0)

    useEffect(()=>{
        setValue(item.quantity)
    },[item.quantity])
    // const item  = {
    //         "id": 1,
    //         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //         "price": 109.95,
    //         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //         "category": "men's clothing",
    //         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //         "rating": {
    //             "rate": 3.9,
    //             "count": 120
    //         }
    //     }
    
    const updateValue= (action)=>{
        if(action === "increase"){
            setValue(parseInt(value) + 1)

        } else if( action === "decrease"){
            if(value !== 0){
                setValue(parseInt(value) -1 )
            }else{
                setValue(0)
            }
        } else {   
            setValue(action.target.value)
        }
    }

  return (
    <div className="cartItem__container">
        <div className="cartItem__image-container">
            <img src={item.image} className="cartItem__image" alt="item display"/>
        </div>
        <div className="cartItem__info">

            <div className="cartItem__title-container">
                <p className="cartItem__title">{item.title}</p>
            </div>

            <div className="cartItem__price-container">
                <p >{"£"+item.price}</p>
            </div>

            <div className="cartItem__button-container" >
                <button className="cartItem__button">
                    <p>remove</p>
                </button>
            </div>

        </div>
        <div className="cartItem__input-container">
            <div className="cartItem__input-box">
                <input type="number" className="cartItem__input"
                onChange={(e)=>{updateValue(e)}} min="0" value={value}  />
                <div className="cartItem__input-buttons">
                    <button onClick={()=>updateValue("increase")} name="increase" className="cartItem__input-button" >⮝</button>
                    <button onClick={()=>updateValue("decrease")} name="decrease" className="cartItem__input-button">⮟</button>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default CartItem