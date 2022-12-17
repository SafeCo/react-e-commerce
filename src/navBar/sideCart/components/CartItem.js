import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';

import "./CartItem.css"

function CartItem({item, removeItem}) {
    const {cart, setCart} = useContext(CartContext)
    
    const updateValue= (action)=>{
        if(action === "increase"){
            const num = parseInt(item.quantity) + 1;
            updateItemQuantity(num)

        } else if( action === "decrease"){
            if(item.quantity !== 1){
                const num = parseInt(item.quantity) - 1;
                updateItemQuantity(num)
            }else{
                const num = 1;
                updateItemQuantity(num)
            }
        } 
    }

    const updateItemQuantity = (num)=>{
        setCart(cart.map((items)=>{
            if(items.id === item.id){
                item.quantity = num
                return item
            }else{
                return items
            }
        }))
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
                <p >{"£"+item.price.toFixed(2)}</p>
            </div>

            <div className="cartItem__removeButton-container" >
                <button onClick={()=>{console.log("working");removeItem(item.id)}} className="cartItem__removeButton">
                    <p>remove</p>
                </button>
            </div>

        </div>
        <div className="cartItem__input-container">
            <div className="cartItem__input-box">
                <input type="number" className="cartItem__input"
                onChange={(e)=>{updateValue(e)}} min="0" value={item.quantity}  />
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