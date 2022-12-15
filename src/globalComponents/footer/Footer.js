import {useContext, useState} from 'react'
import { MediaContext } from '../../context/MediaContext'
import './Footer.css'
import Accordion from './Accordion';
import { accordionData } from './accordionData';

//social media icons
import facebookIcon from "./icons/facebook-icon.svg"
import instagramIcon from "./icons/instagram-icon.svg"
import twitterIcon from "./icons/twitter-icon.svg"
import youtubeIcon from "./icons/youtube-icon.svg"
import emailIcon from "./icons/email-icon.svg"
import FooterList from './FooterList';

function Footer() {
    const { matches } = useContext(MediaContext)
    const { mobile} = useContext(MediaContext)
    const [accordion, setAccordion] = useState([
        {shop: false},
        {service: false},
        {join: false},
    ])

    const accordionSwitch = (e)=>{
        const targetName = e.currentTarget.name
        const test = accordion.map((item)=>{
            const keyName= Object.keys(item)[0]
            console.log(keyName)
            if(keyName === targetName){
                console.log(item[keyName])
                return {[targetName] : !item[keyName]}
            }else{
                return item
            }
            
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
                {mobile ?
                    (<FooterList/>):
                    accordionData.map(({ title, content }) => (
                        <Accordion key={title} title={title} content={content} />
                    ))
                }

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