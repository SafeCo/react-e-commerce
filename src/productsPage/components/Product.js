import { useState, useContext, } from "react"
import {motion, AnimatePresence} from "framer-motion"

import { MediaContext } from "../../context/MediaContext"

import "./Product.css"
import { Link } from "react-router-dom"

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
            <Link to={"/products/"+ product.id} >
                <div className="product__image-container">
                    <img src={product.image} className="product__image" alt={product.title}/>
                </div>
            </Link>
            <div className="product__title-container">
                <p className="product__title">{product.title}</p>
            </div>
            <div className="product__price-container">
                <p>{"£" + product.price.toFixed(2)}</p>
            </div>
            <div className="product__button-container">
                <AnimatePresence>
                    { matches?
                        isHovering &&
                            (
                                    <motion.button 
                                    className="product__button"
                                    key="addToCart"
                                    onClick={()=>{updateCart(product)}}
                                    initial={{height:0}}
                                    animate={{height: 50}}
                                    exit={{height: 0}}
                                    transition={{type: "ease"}}
                                    >
                                        ADD TO CART
                                    </motion.button>
                            )
                        :
                        (
                            
                                    <button 
                                    onClick={()=>{updateCart(product)}}
                                    className="product__button"
                                    >
                                        ADD TO CART
                                    </button>
                        )
                    }
                </AnimatePresence>
            </div> 
        </motion.div>
    )
}

export default Product