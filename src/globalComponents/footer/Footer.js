import {useContext, useState} from 'react'
import { MediaContext } from '../../context/MediaContext'
import './Footer.css'

//social media icons
import facebookIcon from "./icons/facebook-icon.svg"
import instagramIcon from "./icons/instagram-icon.svg"
import twitterIcon from "./icons/twitter-icon.svg"
import youtubeIcon from "./icons/youtube-icon.svg"
import emailIcon from "./icons/email-icon.svg"

function Footer() {
    const { matches } = useContext(MediaContext)
    const { mobile} = useContext(MediaContext)
    const [accordion, setAccordion] = useState([
        {shop: false},
        {service: false},
        {join: false},
    ])

    const accordionSwitch = (e)=>{
        const targetName = e.target.name
        const test = accordion.map((item)=>{
            console.log(item)
            return item
            // if(item.name === targetName){
            //     return item
            // }
            
        })
        console.log(test)
        // setAccordion((e)=>{
        //     accordion.map
        // })
    }

    return ( 
        <footer className="footer__container" >
            <div 
                className={mobile ? "footer__list-container": "footer__list-container mobile"}
            >
                <div className="footer__socialMedia ">
                    <div>
                        <p className="footer__logo">Simple.</p>
                        <p>simple@simplemail.com</p>
                    </div>
                    <ul className="footer__socials">
                        <li>
                            <img className="footer__social-icon nomargin" src={facebookIcon} />
                        </li>
                        <li>
                            <img className="footer__social-icon" src={instagramIcon} />
                        </li>
                        <li>
                            <img className="footer__social-icon" src={twitterIcon} />
                        </li>
                        <li>
                            <img className="footer__social-icon" src={youtubeIcon} />
                        </li>
                    </ul>
                </div>

                <div className="footer__shop ">
                    <div className="footer__list-title">
                        <h4>Shop Simple</h4>
                        <button 
                            className="footer__list-button"
                            name="shop"
                            onClick={(e)=>{accordionSwitch(e)}}
                        >
                            <p>+</p>
                        </button>
                    </div>
                    { mobile &&
                        <ul className="footer__list">
                            <li>
                            <p>Shop electronics</p>
                            </li>
                            <li>
                                <p>Shop clothes</p>
                            </li>
                            <li>
                                <p>Shop jewelery</p>
                            </li>
                            <li>
                                <p>Shop bags</p>
                            </li> 
                        </ul>
                    }
                </div>

                <div className="footer__service ">
                    <div>
                        <h4>Customer service</h4>
                    </div>
                    {mobile &&
                        <ul className="footer__list">
                            <li>
                                <p>Accessibility Statement</p>
                            </li>
                            <li>
                                <p>My Account</p>
                            </li>
                            <li>
                                <p>Shipping & Returns</p>
                            </li>
                            <li>
                                <p>FAQ</p>
                            </li>
                            <li>
                                <p>Contact us</p>
                            </li>
                            <li>
                                <p>Social media</p>
                            </li>
                            <li>
                                <p>Store locator</p>
                            </li>
                        </ul> 
                    }              
                </div>

                <div className="footer__join ">
                    <div>
                        <h4>Join Simple.</h4>
                    </div>
                    { mobile &&
                        <ul className="footer__list">
                            <li>
                                <p>Our Story</p>
                            </li>
                            <li>
                                <p>Our blog</p>
                            </li>
                            <li>
                                <p>VIP rewards</p>
                            </li>
                            <li>
                                <p>Ambassadors & Affiliates</p>
                            </li>
                        </ul>
                    }
                    
                </div>

                {matches && 
                    <div className="footer__signUp ">
                        <div>
                            <p>Sign up to our newsletter</p>
                        </div>
                        <div className="footer__input-container">
                            <input 
                            className="footer__input"
                            type="text" 
                            placeholder="Enter your email address.." 
                            />
                            <button className="footer__input-button">
                                <img  src={emailIcon} className="footer__input-icon" alt="Email Icon"  />
                            </button>
                        </div>
                    </div>    
                }
            </div>
            {!matches && 
                    <div className="footer__signUp mobile">
                        <div>
                            <p>Sign up to our newsletter</p>
                        </div>
                        <div className="footer__input-container">
                            <input 
                            className="footer__input"
                            type="text" 
                            placeholder="Enter your email address.." 
                            />
                            <button className="footer__input-button">
                                <img  src={emailIcon} className="footer__input-icon" alt="Email Icon"  />
                            </button>
                        </div>
                    </div>    
                }
            <div className="footer__tC">
                <p>Terms & Conditions | </p>
                <p>Privacy Policy |</p>
                <p> © 2022 Simple.</p>
            </div>
        </footer>
    )
}

export default Footer