import {useEffect, useState, useContext} from 'react'

import { CartContext } from '../context/CartContext';

import "./ProductsPage.css"

import Product from './components/Product'
import Footer from "../globalComponents/footer/Footer"
import Sort from './components/Sort';

function ProductPage() {

    const {cart, setCart} = useContext(CartContext)

    const updateCart = (product)=>{

        const productExists = cart.find(c => c.id === product.id);

        if (productExists === undefined) {
            const newObj = {...product}
            newObj.quantity = 1
            setCart([...cart, newObj])

        } else {
            const newObj = {...productExists}
            const quantity =  parseFloat(newObj.quantity)
            newObj.quantity = quantity + 1 ;

            setCart(cart.map((item)=>{
                if(item.id === newObj.id){
                    return newObj
                }else{
                    return item
                }
            }))
        }
    }

    const [productList, setProductList] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{
                setProductList(
                    json
                    .map((product)=>product)
                    .sort((a , b)=>{
                        return parseFloat(b.rating.rate) - parseFloat(a.rating.rate)
                    })
                )
            })
            .catch(error => console.log(error))
    },[])

    useEffect(()=>{console.log(productList)},[productList])

    const [sortFilter , setSortFilter] = useState("Highest Rated")

    useEffect(()=>{
        sortBy(sortFilter)
    },[sortFilter])

    const sortBy = (sort)=>{
        switch(sort){
            case "Price: Low to High":
                setProductList(
                    productList
                    .map((product)=>product)
                    .sort((a , b)=>{
                        return parseFloat(a.price) - parseFloat(b.price)
                    })
                )
                break;
            case "Price: High to Low":
                setProductList(
                    productList
                    .map((product)=>product)
                    .sort((a , b)=>{
                        return parseFloat(b.price) - parseFloat(a.price)
                    })
                )
                break;
            case "Highest Rated":
                setProductList(
                    productList
                    .map((product)=>product)
                    .sort((a , b)=>{
                        return parseFloat(b.rating.rate) - parseFloat(a.rating.rate)
                    })
                )
                break;
            
        }
        
    }
    

    return (
        <>
            <div className="productsPage__container">
                <Sort sortFilter={ sortFilter } setSortFilter={setSortFilter} />
                
                <div className="productsPage__products-container">
                    <div className="productsPage__products">
                        {
                            productList.map((product) => {
                                return (<Product key={product.id} product={product} updateCart={updateCart} />)
                            })
                        }
                    </div>
                </div> 
            </div>
            <Footer/>
        </>
        
    )
}

export default ProductPage