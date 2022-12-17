import { useState, useContext, } from "react"
import {motion, AnimatePresence} from "framer-motion"

import { MediaContext } from "../../context/MediaContext"

import "./Product.css"

function Product({product, updateCart}) {
    
    const { matches } = useContext(MediaContext)
    const [isHovering, setIsHovering] = useState(false)

    return (
        <motion.div 
            className="product__container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            onMouseEnter={()=>{setIsHovering(!isHovering)}}
            onMouseLeave={()=>{setIsHovering(!isHovering)}}
        >
                <div className="product__image-container">
                    <img src={product.image} className="product__image" alt={product.title}/>
                </div>
                <div className="product__title-container">
                    <p className="product__title">{product.title}</p>
                </div>
                <div className="product__price-container">
                    <p>{"£" + product.price}</p>
                </div>
                <AnimatePresence>
                    { matches?
                        isHovering ?
                            (
                                <div 
                                    className="product__button-container" 
                                >
                                    <motion.button 
                                    onClick={()=>{updateCart(product)}}
                                    className="product__button"
                                    initial={{height:0}}
                                    animate={{height: 50}}
                                    exit={{height: 0}}
                                    transition={{type: "ease"}}
                                    >
                                        ADD TO CART
                                    </motion.button>
                                </div> 
                            )
                            :
                            (
                                <div className="fakeButton"></div>
                            )
                        :
                        (
                            <div 
                                    className="product__button-container" 
                                >
                                    <motion.button 
                                    onClick={()=>{updateCart(product)}}
                                    className="product__button"
                                    initial={{height:0}}
                                    animate={{height: 50}}
                                    exit={{height: 0}}
                                    transition={{type: "ease"}}
                                    >
                                        ADD TO CART
                                    </motion.button>
                                </div> 
                        )
                    }
                </AnimatePresence>
                
        </motion.div>
    )
}

export default Product