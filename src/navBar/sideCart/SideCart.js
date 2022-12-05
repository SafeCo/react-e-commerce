import React from 'react'
import "./SideCart.css"
import { motion } from 'framer-motion'

import CartItem from './components/CartItem'

import cartIcon from "../shopping-cart-icon.svg"
import stockImage from "../parachute.jpg"

function SideCart({cart, setCart, openCart, setOpenCart}) {
    
    const buttonVariant= {
        visible : {
            scale: 1.1,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            transition: {
                duration: 0.2, 
            }
        },
      }

    const closeModal = (e)=>{
        if(e.currentTarget === e.target){
            setOpenCart(!openCart)
        }else{
            return
        }
    }

    return (
        <div 
        className="sideCart__container"
        onClick={(e)=>{closeModal(e)}}
        >
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

                { cart.length > 0 ? (
                    <>
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
                    </>):(
                        <div className="sideCart__empty-container">
                            <div className="sideCart__empty__image-container">
                                <img className="sideCart__empty__image" src={stockImage} />
                            </div>
                                <p className="sideCart__empty__message" >Your cart is empty...</p>
                            <div className="sideCart__empty__button-container">
                                <motion.button
                                className="sideCart__empty__button"
                                variants={buttonVariant}
                                whileHover="visible"
                                >
                                    <p>Shop Mens</p>
                                </motion.button>

                                <motion.button
                                className="sideCart__empty__button"
                                variants={buttonVariant}
                                whileHover="visible"
                                >
                                    <p>Shop Womens</p>
                                </motion.button>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SideCart