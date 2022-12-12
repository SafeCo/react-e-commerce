import {useEffect, useState, useContext} from 'react'

import { CartContext } from '../context/CartContext';

import "./ProductPage.css"

import Product from './components/Product'
import Footer from "../globalComponents/footer/Footer"

function ProductPage() {

    const {cart, setCart} = useContext(CartContext)

    // const [cart, setCart] = useOutletContext()

    const updateCart = (product)=>{

        const items = JSON.parse(localStorage.getItem("cartData"));
        const storageExists = items?.find(c => c.id === product.id);

    

 //*********************************************************
            //LOCAL STORAGE TO REPLACE CART STATE
       
            if(items === null){
                //if there are no items in local storage create 'cartData' key and add an item
                const newObj = {...product}
                newObj.quantity = 1
                localStorage.setItem('cartData', JSON.stringify([newObj]))
            }else{
                //if there are items check these conditions:

                if(storageExists === undefined){
                    // if there is no copy then add it to storage with a quantity of 1
                    const newObj = {...product}
                    newObj.quantity = 1
                    localStorage.setItem('cartData', JSON.stringify([...items, newObj]))
                }else{
                    // a copy must exist then we need to update local storage with it
                    const newObj = {...storageExists}
                    const quantity =  parseFloat(newObj.quantity)
                    newObj.quantity = quantity + 1 ;
                    
                    const test = items.map((item)=>{
                        if(item.id === newObj.id){
                            return newObj
                        }else{
                            return item
                        }
                    })
                    console.log(test)
                    localStorage.removeItem("cartData")
                    localStorage.setItem("cartData", JSON.stringify(test))
                }
            }
        
 //*********************************************************




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
            .then(json=>setProductList(json))
            .catch(error => console.log(error))
    },[])


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
            case "Highest rated":
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
            <div className="productPage__container">
                <div className="productPage__filterBar">
                    <label htmlFor="sort" >Sort by:</label>
                    <select onChange={(e)=>{sortBy(e.target.value)}} name="sort">
                        <option></option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest rated</option>
                    </select>
                </div>
                
                <div className="productPage__products-container">
                    <div className="productPage__products">
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