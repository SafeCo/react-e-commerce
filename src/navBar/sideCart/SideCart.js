import {useContext} from 'react'
import { motion } from 'framer-motion';
import { CartContext } from '../../context/CartContext';

import "./SideCart.css"

import CartItem from './components/CartItem'
import EmptyCart from './components/EmptyCart';

import cartIcon from "../icons/shopping-cart-icon.svg"


function SideCart({modalFlipSwitch}) {

    const {cart, setCart} = useContext(CartContext)

    const boxVariant={
        hidden:{
            x: "100%"
        },
        visible: {
            x: "0",
            transition: {
                when:"beforeChildren",
                duration:0.4
            }
        }
    }

    const removeItem = (id)=>{
        setCart(cart.filter((item)=>{
            return item.id !== id
        }))
        
    }



    function getSum (){
        const totals = cart.map((item)=>{
            return item.price * item.quantity
        })
        console.log(totals)
        const sum = totals.reduce((total, num)=>{
            return total + num
        }) 
        return sum.toFixed(2)
    }
    

    return (
        <motion.div 
            className="sideCart__box"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            exit={{x: "100%", transition: {duration: 1}}}
        >
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
                    onClick={(e)=>{modalFlipSwitch()}}
                    >
                        <p>X</p>
                    </button>
                </div>
            </header>
            { cart.length !== 0 ? (
                <>
                    <main className="sideCart__items">
                        { 
                            cart.map((item)=>{
                                return <CartItem removeItem={removeItem} key={item.id} item={item}/>
                            })
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
                        <p>{"£" + getSum() } </p>
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
                    <EmptyCart/>
                )
            }
        </motion.div>
    )
}

export default SideCart