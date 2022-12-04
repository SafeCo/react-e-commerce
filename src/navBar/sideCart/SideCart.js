import React from 'react'
import "./SideCart.css"
import cartIcon from "../shopping-cart-icon.svg"
import CartItem from './components/CartItem'

function SideCart({cart, setCart, openCart, setOpenCart}) {
    return (
        <div className="sideCart__container">
            <div className="sideCart__box">
                <header className="sideCart__header">
                
                    <div className="sideCart__header__icon-container" >
                        <img src={cartIcon} 
                        className="sideCart__header__icon"
                        alt="shopping cart icon"  
                        /> 
                    </div>

                    <div className="sideCart__header__title-container"> 
                        <p>Review your cart</p>
                    </div>

                    <div className="sideCart__header__exit-container">
                        <button 
                        className="sideCart__header__exit"
                        onClick={()=>{setOpenCart(!openCart)}}
                        >
                            <p>X</p>
                        </button>
                    </div>
                </header>


                <main className="sideCart__items">
                    { cart ?
                        cart.map((item)=>{
                            return <CartItem key={item.id} item={item}/>
                        })
                        :
                        null
                    }
                </main>
                <div className="sideCart__promo-container">
                    <p>enter promo code</p>
                    <button>
                        <p>+</p>
                    </button>

                </div>
                <div className="sideCart__subTotal-container">
                    <p>subtotal: </p>
                </div>
                <div className="sideCart__checkOut__button-container">
                    <button className="sideCart__checkOut__button ">
                            <p>CHECKOUT</p>
                    </button>
                </div>
                <div className="sideCart__message-container">
                    <p>By clicking ‘CHECKOUT’, you will be redirected to the eShopWorld checkout page where payment will be taken and your order fulfilled.</p>
                </div>
            </div>
        </div>
    )
}

export default SideCart