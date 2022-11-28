import React from 'react'
import "./SideCart.css"
import cartIcon from "../shopping-cart-icon.svg"
import CartItem from './components/CartItem'

function SideCart({cart, setCart}) {
    console.log(cart)
    return (
        <div className="sideCart__container">
            <div className="sideCart__box">
                <header className="sideCart__header">
                    <div>
                        <img src={cartIcon} alt="shopping cart icon" style={{height: 30, width: 30}}  /> 
                    </div>

                    <div> 
                        <p>Review your cart</p>
                    </div>

                    <div>
                        <p>X</p>
                    </div>
                </header>
                <main className="sideCart__items">
                { cart ?
                    cart.map((item)=>{
                        return <CartItem item={item}/>
                    })
                    :
                    null
                }

                </main>

            </div>
        </div>
    )
}

export default SideCart