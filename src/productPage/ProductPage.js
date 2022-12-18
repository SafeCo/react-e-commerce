import Footer from "../globalComponents/footer/Footer"
import "./ProductPage.css"
import tempImage from "../globalImages/watch.jpg"

function ProductPage() {

    const data ={
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
                
                <div>
                    <h2>TITLE</h2>
                    <p>£200</p>
                    <p>Tax and duties included</p>
                    <div>STARS</div>
                    <div>Description</div>
                    <div>Add to cart button</div>
                    
                </div>



            </div>
            <Footer/>
        </div>
    )
}

export default ProductPage