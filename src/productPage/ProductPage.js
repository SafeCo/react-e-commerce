import {useEffect, useState} from 'react'
import Product from './components/Product'

function ProductPage() {
    const [productList, setProductList] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json))
            .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        console.log(productList[0])
    },[productList])

    return (
        <div>
            <Product/>
        </div>
    )
}

export default ProductPage