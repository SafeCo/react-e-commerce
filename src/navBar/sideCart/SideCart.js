import {useContext , useState} from 'react'
import { CartContext } from '../../context/CartContext';

import "./SideCart.css"

import CartItem from './components/CartItem'
import EmptyCart from './components/EmptyCart';

import cartIcon from "../shopping-cart-icon.svg"


function SideCart({ openCart, setOpenCart}) {

    const {cart, setCart} = useContext(CartContext)
    console.log(cart.length !== 0)
    const removeItem = (id)=>{
        console.log(id)
        setCart(cart.map((item)=>{
            return item.id !== id
        }))
    }

    const closeModal = (e)=>{
        if(e.currentTarget === e.target){
            setOpenCart(!openCart)
        }else{
            return
        }
    }

    function getSum (){
        const totals = cart.map((item)=>{
            return item.price * item.quantity
        })
        const sum = totals.reduce((total, num)=>{
            return total + num
        }) 
        return sum
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
                { cart.length !== 0 ? (
                    <>
                        <main className="sideCart__items">
                            { cart ?
                                cart.map((item)=>{
                                    return <CartItem removeItem={removeItem} key={item.id} item={item}/>
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
            </div>
        </div>
    )
}

export default SideCart