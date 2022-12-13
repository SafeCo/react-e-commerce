import "./HamburgerMenu.css";
import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"
import essentialsImage from "../../globalImages/essentials.jpg"
import saleImage from "../../globalImages/watch.jpg"

function HamburgerMenu() {

    return (
       
            <div className="hM__box">
                <header className="hM__logo__container">
                    <h3>Simple.</h3>
                </header>
                <main>
                    <ul className="hM__options__container">
                        <li className="hM__option__container">
                            <img className="hM__option__img"  src={fashionImage}/>
                            <div  className="hM__option__text-container">
                                <p className="hM__option__text">Clothes</p>
                            </div>
                        </li>

                        <li className="hM__option__container">
                            <img className="hM__option__img"  src={jewelryImage}/>
                            <div  className="hM__option__text-container">
                                <p className="hM__option__text">Jewelry</p>
                            </div>
                        </li>

                        <li className="hM__option__container">
                            <img className="hM__option__img"  src={phoneImage}/>
                            <div  className="hM__option__text-container">
                                <p className="hM__option__text">Technology</p>
                            </div>
                        </li>

                        <li className="hM__option__container">
                            <img className="hM__option__img"  src={essentialsImage}/>
                            <div  className="hM__option__text-container">
                                <p className="hM__option__text">essentials</p>
                            </div>
                        </li>

                        <li className="hM__option__container">
                            <img className="hM__option__img"  src={saleImage}/>
                            <div  className="hM__option__text-container">
                                <p className="hM__option__text">Sale</p>
                            </div>
                        </li>

                    </ul>

                </main>

            </div>

    )
}

export default HamburgerMenu