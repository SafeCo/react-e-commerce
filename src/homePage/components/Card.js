import { useState, useRef, useEffect } from "react"
import {motion, AnimatePresence} from "framer-motion"
import "./Card.css"

function Card() {
    const [isHovering, setIsHovering] = useState(false)

    const containerVariant={
        hidden:{
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                when:"beforeChildren",
                duration:1
            }
        }
    }

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

    const widthVariant={
        hidden:{
            width: "0%"
        },
        visible: {
            width: "90%",
            transition:{
                duration: 0.4
            }
        }
    }

    const appearVariant={
        hidden: {
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.div 
        className="card__container"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        >
            <div className="card__outline">
                <div  
                className="card__image-container"
                onMouseEnter={()=>{setIsHovering(!isHovering)}}
                onMouseLeave={()=>{setIsHovering(!isHovering)}}
                >
                <AnimatePresence>
                    {
                        isHovering && (
                            <motion.div 
                            className="card__darkBg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            >
                            
                                <motion.button
                                variants={buttonVariant}
                                whileHover="visible"

                                >Shop now</motion.button>
                            </motion.div>
                            )
                    }
                </AnimatePresence>
                    <img className="card__image" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                </div>
                <motion.div
                variants={widthVariant}
                className="card__title-line"
                >
                </motion.div>
                <motion.div 
                variants={appearVariant}
                className="card__title-container">
                    <p>Here is a bag</p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card