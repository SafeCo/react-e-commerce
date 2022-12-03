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
                        <p>Shop Simple</p>
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
                        <p>Customer service</p>
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
                        <p>contact us</p>
                    </li>
                    <li>
                        <p>socials</p>
                    </li>
                    <li>
                        <p>Store locator</p>
                    </li>
                </ul>

                <ul className="footer__fourthCol colSpace">
                    <li>
                        <p>Join Simple.</p>
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
                        <p>Sign up for newsletter</p>
                    </li>
                    <li>
                        <p>enter your email/click to sign up</p>
                    </li>
                    <li>
                        <p>flag UNITED KINGDOM dwn</p>
                    </li>
                </ul>    
            </div>
            <div className="footer__tC">
                <p>Terms & Conditions | </p>
                <p>Privacy Policy |</p>
                <p> C 2022 Simple.</p>
            </div>
        </footer>
    )
}

export default Footer