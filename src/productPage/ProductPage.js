import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { CartContext } from "../context/CartContext"
import { MediaContext } from '../context/MediaContext';



import "./ProductPage.css"
import LoadingSpinner from "../globalComponents/loadingSpinner/LoadingSpinner"
import Footer from "../globalComponents/footer/Footer"


import Rating from "./component/Rating"
import SideImages from "./component/SideImages";

function ProductPage() {
    const {mobile} = useContext(MediaContext)
    const {updateCart} = useContext(CartContext)
    const params = useParams()

    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState({})

    useEffect(()=>{
        const url = "https://fakestoreapi.com/products/" + params.id
        fetch(url)
            .then(res=>res.json(url))
            .then((json)=>{setProduct(json)})
            .catch(error => console.log(error))
            .finally(() => {
                setLoaded(true);
            });
    },[])


    return (
        <div className="productPage__container">
            <AnimatePresence>
                { loaded ? 
                    (   
                    <motion.div 
                        className="productPage__product-container"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                    >
                        <div className="productPage__images__container">
                            { mobile &&
                                <ul className="productPage__sideImages__container">
                                    <SideImages/>
                                </ul>
                            }
                            <div className="productPage__mainImage-container">
                                <img className="productPage__mainImage" src={product.image} />
                            </div>
                            { !mobile &&
                                <ul className="productPage__sideImages__container">
                                    <SideImages/>
                                </ul>
                            }
                        </div>
                        
                        <div className="productPage__info__container">
                            <div className="productPage__title-container container-spacing">
                                <h2>{product.title}</h2>
                            </div>

                            <div className="productPage__rating-container container-spacing">
                                <div className="productPage__rating-stars"> 
                                    <Rating rating={product.rating.rate}/>
                                    <div>{product.rating.rate}/5</div>
                                </div>
                                <p className="productPage__rating-review">{product.rating.count} reviews</p>
                            </div>

                            <div className="productPage__price-container container-spacing">
                                <p>£{product.price.toFixed(2)}</p>
                                <p>Tax and duties included</p>
                            </div>
                            <div className="productPage__description-container container-spacing">
                                <p>Description</p>
                                <p>{product.description}</p>
                            </div>
                            <div className="productPage__button-container">
                                <button 
                                onClick={()=>{updateCart(product)}}
                                className="productPage__button"
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </motion.div>) 
                    :
                    (
                    <LoadingSpinner/>
                    )  
                }
            </AnimatePresence>
            <Footer/>
        </div>
    )
}

export default ProductPage