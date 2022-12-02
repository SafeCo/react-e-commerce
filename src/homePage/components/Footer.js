import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer__container" >
        
            <ul className="footer__firstCol temp">
                <li>simple</li>
                <li>email</li>
                <li>socials</li>
            </ul>

            <div className="footer__secondCol temp">
                <div>shop try list</div>
                <div>Shop bags</div>
                <div>Shop eyewear</div>
                <div>Shop jewelery</div>
                <div>Shop jewelery</div>
            </div>

            <div className="footer__thirdCol temp">
                <div>customer service</div>
                <div>conat</div>
                <div>Socials</div>
            </div>
        </footer>
    )
}

export default Footer