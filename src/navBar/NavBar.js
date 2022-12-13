import {useState, useEffect, useContext} from 'react'

import { CartContext } from '../context/CartContext';

import { Outlet, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import logoBig from './logo-big.svg'
import accountIcon from "./icons/account-icon.svg"
import hamburgerIcon from "./icons/hamburger-icon.svg"
import searchIcon from "./icons/search-icon.svg"
import cartIcon from "./icons/shopping-cart-icon.svg"
import "./NavBar.css";
import SideCart from './sideCart/SideCart';
import NavList from './navList/NavList';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';

function NavBar() {

    const {cartCount, setCartCount} = useContext(CartContext)
    const [openSideCart, setSideOpenCart] = useState(false)
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false)

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
                    { !matches ?
                        <div className="nB__hB-container temp">
                            <div className="nB__icon-container">
                                    <button 
                                    className="nB__icon__button"
                                    onClick={()=>{setOpenHamburgerMenu(!openHamburgerMenu)}}
                                    >
                                        <img src={hamburgerIcon} className="nB__icon" alt="Hamburger Icon"/>
                                    </button>    
                            </div>
                        </div> :
                        null
                    }
                    <div className="nB__logo__container temp">
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
                    <div className=" nB__icons-container temp">

                        <div className="nB__icon-container">
                            <img src={searchIcon} className="nB__icon" alt="search Icon"/>
                        </div>

                        <div className="nB__icon-container">
                            <p>Account</p>
                            <img src={accountIcon} className="nB__icon" alt="account Icon"/>
                        </div>

                        <div className="nB__icon-container">
                                    <button 
                                    className="nB__icon__button"
                                    onClick={()=>{setSideOpenCart(!openSideCart)}}
                                    >
                                        <img src={cartIcon} className="nB__icon" alt="cart Icon"/>
                                        <p>{cartCount}</p>
                                    </button>                            
                        </div>
                    </div>
                </div>
            </div> 
            {
                openSideCart && 
                    <SideCart 
                        setOpenCart={setSideOpenCart} 
                        openCart={openSideCart}
                    />
            }
            {
                openHamburgerMenu && 
                    <HamburgerMenu 
                        openHamburgerMenu={openHamburgerMenu} 
                        setOpenHamburgerMenu={setOpenHamburgerMenu} 
                    />
            }
            <Outlet/>
        </>
    
    )
}

export default NavBar