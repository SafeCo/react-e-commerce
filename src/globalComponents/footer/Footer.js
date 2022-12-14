import {useContext} from 'react'
import { MediaContext } from '../../context/MediaContext'
import './Footer.css'

//social media icons
import facebookIcon from "./social-media-icons/facebook-icon.svg"
import instagramIcon from "./social-media-icons/instagram-icon.svg"
import twitterIcon from "./social-media-icons/twitter-icon.svg"
import youtubeIcon from "./social-media-icons/youtube-icon.svg"
import emailIcon from "./social-media-icons/email-icon.svg"

function Footer() {
    const { matches } = useContext(MediaContext)

    return (
        <footer className="footer__container" >
            <div className="footer__list-container">

                <ul className="footer__socialMedia colSpace">
                    <li className="footer__logo">Simple.</li>
                    <li>simple@simplemail.com</li>
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
                </ul>

                <ul className="footer__shop colSpace">
                    <li>
                        <h4>Shop Simple</h4>
                    </li>
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

                <ul className="footer__service colSpace">
                    <li>
                        <h4>Customer service</h4>
                    </li>
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

                <ul className="footer__join colSpace">
                    <li>
                        <h4>Join Simple.</h4>
                    </li>
                    <li>
                        <p>Our Story</p>
                    </li>
                    <li>
                        <p>Our blog</p>
                    </li>
                    <li>
                        <p>Simple. VIP rewards</p>
                    </li>
                    <li>
                        <p>Ambassadors & Affiliates</p>
                    </li>
                </ul>

                {matches && 
                    <ul className="footer__signUp colSpace">
                        <li>
                            <p>Sign up to our newsletter</p>
                        </li>
                        <li className="footer__input-container">
                            <input 
                            className="footer__input"
                            type="text" 
                            placeholder="Enter your email address.." 
                            />
                            <button className="footer__input-button">
                                <img  src={emailIcon} className="footer__input-icon" alt="Email Icon"  />
                            </button>
                        </li>
                    </ul>    
                }
            </div>
                {!matches && 
                        <ul className="footer__signUp mobile colSpace">
                            <li>
                                <p>Sign up to our newsletter</p>
                            </li>
                            <li className="footer__input-container">
                                <input 
                                className="footer__input"
                                type="text" 
                                placeholder="Enter your email address.." 
                                />
                                <button className="footer__input-button">
                                    <img  src={emailIcon} className="footer__input-icon" alt="Email Icon"  />
                                </button>
                            </li>
                        </ul>    
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