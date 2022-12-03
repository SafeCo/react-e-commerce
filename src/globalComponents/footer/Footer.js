import React from 'react'
import './Footer.css'

//social media icons
import facebookIcon from "./social-media-icons/facebook-icon.svg"
import instagramIcon from "./social-media-icons/instagram-icon.svg"
import twitterIcon from "./social-media-icons/twitter-icon.svg"
import youtubeIcon from "./social-media-icons/youtube-icon.svg"

function Footer() {
    return (
        <footer className="footer__container" >
            <div className="footer__list-container">
                <ul className="footer__firstCol colSpace">
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

                <ul className="footer__secondCol colSpace">
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

                <ul className="footer__thirdCol colSpace">
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

                <ul className="footer__fourthCol colSpace">
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

                <ul className="footer__fifthCol colSpace">
                    <li>
                        <p>Sign up to our newsletter</p>
                    </li>
                    <li>
                        <input 
                        type="text" 
                        placeholder="Enter your email address.." 
                        />
                        <button>
                            <p>Sign Up</p>
                        </button>
                    </li>
                </ul>    
            </div>
            <div className="footer__tC">
                <p>Terms & Conditions | </p>
                <p>Privacy Policy |</p>
                <p> © 2022 Simple.</p>
            </div>
        </footer>
    )
}

export default Footer