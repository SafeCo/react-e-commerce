import { useEffect, useState } from "react"
import Footer from "../globalComponents/footer/Footer"
import "./ProductPage.css"
import tempImage from "../globalImages/watch.jpg"
import { useParams } from "react-router-dom"

function ProductPage() {

    const product ={
            "id": 11,
            "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            "price": 109,
            "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            "category": "electronics",
            "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            "rating": {
                "rate": 4.8,
                "count": 319
            }
    }


// const [product, setProduct] = useState({})
// const params = useParams()

//     useEffect(()=>{
//         const url = "https://fakestoreapi.com/products/" + params.id
//         fetch(url)
//             .then(res=>res.json(url))
//             .then((json)=>{ setProduct(json) })
//             .catch(error => console.log(error))
//     },[])



    return (
        <div className="productPage__container">
            <div className="productPage__product-container">
                <div className="productPage__images__container">
                    <ul className="productPage__sideImages__container">

                        <li className="productPage__sideImage-container">
                            <img className="productPage__sideImage" src={tempImage} />
                        </li>

                        <li className="productPage__sideImage-container">
                            <img className="productPage__sideImage" src={tempImage} />
                        </li>

                        <li className="productPage__sideImage-container">
                            <img className="productPage__sideImage" src={tempImage} />
                        </li>
                        
                        <li className="productPage__sideImage-container">
                            <img className="productPage__sideImage" src={tempImage} />
                        </li>
                        
                        <li className="productPage__sideImage-container">
                            <img className="productPage__sideImage" src={tempImage} />
                        </li>

                        <li className="productPage__sideImage-container">
                            <img className="productPage__sideImage" src={tempImage} />
                        </li>

                    </ul>
                    <div className="productPage__mainImage-container">
                        <img className="productPage__mainImage" src={tempImage} />
                    </div>
                </div>
                
                <div className="productPage__info__container">
                    <div className="productPage__title-container container-spacing">
                        <h2>{product.title}</h2>
                    </div>

                    <div className="productPage__rating-container container-spacing">
                        <div>{product.rating.rate}</div>
                    </div>

                    <div className="productPage__price-container container-spacing">
                        <p>£{product.price.toFixed(2)}</p>
                        <p>Tax and duties included</p>
                    </div>
                    <div className="productPage__description-container container-spacing">
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



            </div>
            <Footer/>
        </div>
    )
}

export default ProductPage