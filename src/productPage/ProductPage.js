import {useEffect, useState} from 'react'
import "./ProductPage.css"
import Product from './components/Product'
import {useOutletContext} from "react-router-dom";


function ProductPage() {

    const [cart, setCart] = useOutletContext()

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
    // useEffect(()=>{
    //     console.log(cart)
    // },[cart])

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
            
        </>
        
    )
}

export default ProductPage