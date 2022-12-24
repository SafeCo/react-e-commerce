import {useEffect, useState, useContext} from 'react'

import { CartContext } from '../context/CartContext';

import "./ProductsPage.css"

import Product from './components/Product'
import Footer from "../globalComponents/footer/Footer"
import Sort from './components/Sort';
import LoadingSpinner from "../globalComponents/loadingSpinner/LoadingSpinner";

function ProductPage() {

    const {updateCart} = useContext(CartContext)
    const [loaded, setLoaded] = useState(false);
    const [productList, setProductList] = useState([])
    const [sortFilter , setSortFilter] = useState("Highest Rated")


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
            .finally(() => {
                setLoaded(true);
            });
    },[])

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
            default:
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
            {   loaded? 
                (
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
                ):
                ( 
                    <LoadingSpinner/> 
                )
            }
            <Footer/>
        </>
        
    )
}

export default ProductPage