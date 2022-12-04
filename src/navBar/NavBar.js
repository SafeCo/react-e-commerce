import {useState, useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import logoBig from './logo-big.svg'
import accountIcon from "./account-icon.svg"
import searchIcon from "./search-icon.svg"
import cartIcon from "./shopping-cart-icon.svg"
import "./NavBar.css";
import SideCart from './sideCart/SideCart';

function NavBar() {

    const [cart, setCart] = useState([])
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
                    <h3>Simple.</h3>
                        {/* <img src={logoBig}  className="nB__logo" alt="logo" /> */}
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
                            <Link to="/cart">
                                <div className="nB__icon__cart">
                                    <button>
                                        <img src={cartIcon} className="nB__icon" alt="cart Icon"/>
                                        <p>{cartCount}</p>
                                    </button>
                                </div>
                                
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div> 
            {/* <SideCart cart={cart} setCart={setCart}/> */}
            <Outlet context={[cart, setCart]}/>
        </>
    
    )
}

export default NavBar