import {useEffect, useState} from 'react'
import "./ProductPage.css"
import Product from './components/Product'

function ProductPage() {
    const [productList, setProductList] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json))
            .catch(error => console.log(error))
    },[])

    const sortByPrice = ()=>{
        setProductList(
            productList
            .map((product)=>product)
            .sort((a , b)=>{
                return parseFloat(a.price) - parseFloat(b.price)
            })
        )
    }
    

    return (
        <>
            <div className="productPage__container">
                <div className="productPage__filterBar">
                    
                </div>
                <button onClick={()=>{sortByPrice()}}>
                Test
                </button>
                <div className="productPage__product-container">
                {
                    productList.map((product) => {
                        return (<Product key={product.id} product={product} />)
                    })
                }
                </div> 
            </div>
            
        </>
        
    )
}

export default ProductPage