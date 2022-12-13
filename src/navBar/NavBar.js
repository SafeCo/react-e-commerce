import {useState, useEffect, useContext} from 'react'

import { CartContext } from '../context/CartContext';
import { Outlet, Link } from "react-router-dom";

import "./NavBar.css";

// ICONS
import accountIcon from "./icons/account-icon.svg"
import hamburgerIcon from "./icons/hamburger-icon.svg"
import searchIcon from "./icons/search-icon.svg"
import cartIcon from "./icons/shopping-cart-icon.svg"

//COMPONENTS
import NavList from './navList/NavList';
import ModalWrapper from '../globalComponents/modalWrapper/ModalWrapper';

function NavBar() {

    const {cartCount} = useContext(CartContext)
	const [modalOpen, setModalOpen] = useState(false)
    const [componentName, setComponentName] = useState("")

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

    return (
        <>
            <div className="nB__container">
                <div className="nB__box">
                    { !matches ?
                        <div className="nB__hB-container temp">
                            <div className="nB__icon-container">
                                    <button 
                                    className="nB__icon__button"
                                    name="hamburgerMenu" 
                                    onClick={(e)=>{
                                        setComponentName(e.currentTarget.name);
                                        setModalOpen(!modalOpen);
                                        }
                                    }
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
                    <div className=" nB__icons__container temp">
                        <div className="nB__icons-container">
                            <div className="nB__icon-container temp2">
                                <img src={searchIcon} className="nB__icon" alt="search Icon"/>
                            </div>

                            <div className="nB__icon-container temp2">
                                {matches && <p className="nB__icon__text">Account</p>}
                                <img src={accountIcon} className="nB__icon" alt="account Icon"/>
                            </div>

                            <div className="nB__icon-container temp2">
                                <button 
                                className="nB__icon__button cart"
                                name="sideCart" 
                                onClick={(e)=>{
                                    setComponentName(e.currentTarget.name);
                                    setModalOpen(!modalOpen);
                                    }
                                }
                                >
                                    {matches && 
                                        <p className="nB__icon__text">Cart</p>
                                    }
                                    <img src={cartIcon} className="nB__icon" alt="cart Icon"/>
                                    { cartCount > 0 &&
                                        <div className="nB__icon__count">
                                            <p>{cartCount}</p>
                                        </div>
                                    }
                                </button>                            
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div> 
            {modalOpen && 
                <ModalWrapper 
                    modalState={modalOpen}  
                    setModalOpen={setModalOpen} 
                    componentName={componentName} 
                />
            }
            <Outlet/>
        </>
    
    )
}

export default NavBar