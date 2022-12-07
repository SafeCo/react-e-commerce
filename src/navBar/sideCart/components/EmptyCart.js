import React from 'react'
import { motion } from 'framer-motion'
import "./EmptyCart.css"
import stockImage from "../../parachute.jpg"



function EmptyCart() {
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
        <div className="emptyCart__container">
            <div className="emptyCart__image-container">
                <img className="emptyCart__image" src={stockImage} />
            </div>
                <p className="emptyCart__message" >Your cart is empty...</p>
            <div className="emptyCart__button-container">
                <motion.button
                className="emptyCart__button"
                variants={buttonVariant}
                whileHover="visible"
                >
                    <p>Shop Mens</p>
                </motion.button>

                <motion.button
                className="emptyCart__button"
                variants={buttonVariant}
                whileHover="visible"
                >
                    <p>Shop Womens</p>
                </motion.button>
            </div>
        </div>
    )
}

export default EmptyCart