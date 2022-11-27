import "./Product.css"

function Product() {
    const product = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }

    return (
        <div className="product__container">
            <div className=" temp product__image-container">
                <img src={product.image} className="product__image" alt={product.title}/>
            </div>
            <div className=" temp product__title-container">
                <p className="product__title">{product.title}</p>
            </div>
            <div className=" temp product__price-contianer">
                <p>{"£ " + product.price}</p>
            </div>
            <div>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product