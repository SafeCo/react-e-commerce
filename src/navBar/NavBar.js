import {useState, useEffect, useContext} from 'react'

import { CartContext } from '../context/CartContext';

import { Outlet, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import logoBig from './logo-big.svg'
import accountIcon from "./images/account-icon.svg"
import searchIcon from "./images/search-icon.svg"
import cartIcon from "./images/shopping-cart-icon.svg"
import "./NavBar.css";
import SideCart from './sideCart/SideCart';
import NavList from './navList/NavList';

function NavBar() {

    const {cartCount, setCartCount} = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false)

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 1000px)").matches
    )
    useEffect(() => {
        window
        .matchMedia("(min-width: 1000px)")
        .addEventListener('change', e => setMatches( e.matches ));
        return ()=>{
            window
            .matchMedia("(min-width: 1000px)")
            .removeEventListener('change', e => setMatches( e.matches ));
        }
    }, []);

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

    return (
        <>
            <div className="nB__container">
                <div className="nB__box">
                    <div className="nB__logo__container">
                        <div className="nB__logo-container">
                            <Link to={"/"} style={{textDecoration: "none", color: "none"}}>
                                <h3>Simple.</h3>
                            </Link>
                        </div>
                        
                    </div>

                    {matches? 
                        <NavList/> : 
                        null
                    }

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