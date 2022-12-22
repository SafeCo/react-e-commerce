import { useState, useContext } from "react"
import { motion } from "framer-motion"
import { MediaContext } from "../../context/MediaContext"
import "./Card.css"

function Card() {
    const { matches } = useContext(MediaContext)
    const [isHovering, setIsHovering] = useState(false)

    const buttonVariant= {
        visible : {
            scale: 1.1,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            transition: {
                duration: 0.2, 
            }
        },
    }

    return (
        <div className="card__container">
            <div className="card__outline">
                <div  
                className="card__image-container"
                onMouseEnter={()=>{setIsHovering(!isHovering)}}
                onMouseLeave={()=>{setIsHovering(!isHovering)}}
                >
                    { matches?
                        isHovering && (
                            <div className="card__darkBg">
                                <motion.button
                                className="card__darkBg-button"
                                variants={buttonVariant}
                                whileHover="visible"
                                >
                                Shop now
                                </motion.button>
                            </div>
                            )
                            :
                            (null)
                    }
                    <img className="card__image" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="bag" />
                </div>
                <div className="card__title-line"></div>
                <div 
                className="card__text-container">
                    <h4>Bag</h4>
                    <p>£20.00</p>
                </div>
                { !matches ?
                    (
                        <button className="card__darkBg-button">
                            Shop now
                        </button>
                    ):
                    (
                        <div className="fakeButton"></div>
                    )
                }
            </div>
        </div>
    )
}

export default Card