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
import SideCart from './sideCart/SideCart';
import NavList from './navList/NavList';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import ModalWrapper from '../globalComponents/modalWrapper/ModalWrapper';
function NavBar() {

    const {cartCount, setCartCount} = useContext(CartContext)
    const [openSideCart, setSideOpenCart] = useState(false)
    const [modalChild, setModalChild]= useState("")
	const [modalOpen, setModalOpen] = useState(false)

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

    const modalSwitchOpen= (e)=>{
        console.log(e.currentTarget.name)
		switch(e.currentTarget.name){
			case "hamburgerMenu":
                console.log("owkring")
				setModalChild(
					<HamburgerMenu/>
				)
                break;
            case "viewComments":
                setModalChild(
                    // <ViewComments 
                    //     user={user}
                    //     postPhotoUrl={profilePic}
                    //     caption={caption}
                    //     postId={postId}
                    //     username={username}
                    //     imageUrl={imageUrl}  
                    // />
                )
                break;
			default :
				break;
		}
		setModalOpen(!modalOpen)
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
                                    name="hamburgerMenu" 
                                    onClick={(e)=>{modalSwitchOpen(e); console.log("click")}}
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
            {modalOpen && 
                <ModalWrapper modalState={modalOpen} modalSwitch={modalSwitchOpen}>
                    {modalChild}
                </ModalWrapper>
            }
            <Outlet/>
        </>
    
    )
}

export default NavBar