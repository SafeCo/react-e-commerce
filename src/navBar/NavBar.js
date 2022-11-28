import {useState, useEffect} from 'react'
import { Outlet, Link } from "react-router-dom";
import logoBig from './logo-big.svg'
import accountIcon from "./account-icon.svg"
import searchIcon from "./search-icon.svg"
import cartIcon from "./shopping-cart-icon.svg"
import "./NavBar.css";
import SideCart from './sideCart/SideCart';

function NavBar() {

    const [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState("")

    useEffect(()=>{
        setCartCount(cart.length)
    },[cart])

    return (
        <>
            <div className="nB__container">
                <div className="nB__box">
                    <div className="nB__logo-container">
                        <img src={logoBig}  className="nB__logo" alt="logo" />
                    </div>
                    <ul className="nB__menu">
                        <li className="nB__menu-item">
                            <button>
                                Watches
                            </button>
                        </li>
                        <li className="nB__menu-item">
                            <button>
                                Eyewear
                            </button>
                        </li>
                        <li className="nB__menu-item">
                            <button>
                                Jewelry
                            </button>
                        </li>
                        <li className="nB__menu-item">
                            <button>
                                Essentials
                            </button>
                        </li>
                        <li className="nB__menu-item">
                            <button>
                                Gifting
                            </button>
                        </li>
                        <li className="nB__menu-item">
                            <button>
                                Sale
                            </button>
                        </li>
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
                                <p>Cart</p>
                                <img src={cartIcon} className="nB__icon" alt="cart Icon"/>
                                <p>{cartCount}</p>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div> 
            <SideCart cart={cart} setCart={setCart}/>
            <Outlet context={[cart, setCart]}/>
        </>
    
    )
}

export default NavBar