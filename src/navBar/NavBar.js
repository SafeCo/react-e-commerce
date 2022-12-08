import {useState, useEffect, useContext} from 'react'

import { CartContext } from '../context/CartContext';

import { Outlet, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import logoBig from './logo-big.svg'
import accountIcon from "./account-icon.svg"
import searchIcon from "./search-icon.svg"
import cartIcon from "./shopping-cart-icon.svg"
import "./NavBar.css";
import SideCart from './sideCart/SideCart';

function NavBar() {


    

    const {cart, setCart} = useContext(CartContext)
    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(cart));
      }, [cart]);



    const [openCart, setOpenCart] = useState(false)
    const [cartCount, setCartCount] = useState("")

    const itemVariant= {
        hidden: {
            borderBottom: "solid #FFFFFF 2px",
            
        },

        visible: {
            borderBottom: "solid #000000 2px",
            transition:{
                duration: 0.2
            }
        }

    }

    useEffect(()=>{
        setCartCount(cart.length)
    },[cart])

    return (
        <>
            <div className="nB__container">
                <div className="nB__box">
                    <div className="nB__logo-container">
                        <Link to={"/"} style={{textDecoration: "none", color: "none"}}>
                            <h3>Simple.</h3>
                        </Link>
                    </div>
                    <ul className="nB__menu">

                        <motion.li 
                        className="nB__menu-item"
                        variants={itemVariant}
                        initial="hidden"
                        whileHover="visible"                        
                        >
                            <button>
                                Watches
                            </button>
                        </motion.li>

                        <motion.li 
                        className="nB__menu-item"
                        variants={itemVariant}
                        initial="hidden"
                        whileHover="visible"
                        >
                            <button>
                                Eyewear
                            </button>
                        </motion.li>
                        <motion.li 
                        className="nB__menu-item"
                        variants={itemVariant}
                        initial="hidden"
                        whileHover="visible"
                        >
                            <button>
                                Jewelry
                            </button>
                        </motion.li>
                        <motion.li 
                        className="nB__menu-item"
                        variants={itemVariant}
                        initial="hidden"
                        whileHover="visible"
                        >
                            <button>
                                Essentials
                            </button>
                        </motion.li>
                        <motion.li 
                        className="nB__menu-item"
                        variants={itemVariant}
                        initial="hidden"
                        whileHover="visible"
                        >
                            <button>
                                Gifting
                            </button>
                        </motion.li>
                        <motion.li 
                        className="nB__menu-item"
                        variants={itemVariant}
                        initial="hidden"
                        whileHover="visible"
                        >
                            <button>
                                Sale
                            </button>
                        </motion.li>
                    </ul>
                    {/* When the icon is clicked the search bar expands from right to left and menu dissappears */}
                    <div className=" nB__icons-container">

                        <div className="nB__icon-container">
                            <img src={searchIcon} className="nB__icon" alt="search Icon"/>
                        </div>

                        <div className="nB__icon-container">
                            <p>Account</p>
                            <img src={accountIcon} className="nB__icon" alt="account Icon"/>
                        </div>

                        <div className="nB__icon-container">
                                    <button 
                                    className="nB__icon__cart"
                                    onClick={()=>{setOpenCart(!openCart)}}
                                    >
                                        <img src={cartIcon} className="nB__icon" alt="cart Icon"/>
                                        <p>{cartCount}</p>
                                    </button>                            
                        </div>
                    </div>
                </div>
            </div> 
            {
                openCart && <SideCart setOpenCart={setOpenCart} openCart={openCart}/>

            }
            <Outlet/>
        </>
    
    )
}

export default NavBar