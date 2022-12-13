import { motion } from "framer-motion";
import "./HamburgerMenu.css";
import fashionImage from "../../globalImages/fashion.jpg"
import jewelryImage from "../../globalImages/jewelry.jpg"
import phoneImage from "../../globalImages/phone.jpg"
import essentialsImage from "../../globalImages/essentials.jpg"
import saleImage from "../../globalImages/watch.jpg"

function HamburgerMenu({modalFlipSwitch}) {
    const boxVariant={
        hidden:{
            x: "-100%"
        },
        visible: {
            x: "0",
            transition: {
                when:"beforeChildren",
                duration:0.4
            }
        }
    }
    // const boxExitVariant={
    //     hidden:{
    //         x: "0"
    //     },
    //     visible: {
    //         x: "-100%",
    //         transition: {
    //             when:"beforeChildren",
    //             duration:0.4
    //         }
    //     }
    // }

    return (
        <motion.div 
            className="hM__box"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            exit={{x: "-100%", transition: {duration: 1}}}
        >
            <header className="hM__header__container">
                <div className="empty" ></div>
                <div className="hM__logo__container">
                    <h3>Simple.</h3>
                </div>
                <div className="hM__exitButton__container">
                    <button 
                        className="hM__exitButton"
                        onClick={()=>{modalFlipSwitch()}}
                    >
                        <p>X</p>
                    </button>
                </div>
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

        </motion.div>

    )
}

export default HamburgerMenu