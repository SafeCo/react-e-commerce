import { createContext, useState, useEffect} from "react";

import useLocalStorage from "../hooks/useLocalStorage";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [ cart, setCart] = useLocalStorage("cartData",[]);
    const [cartCount, setCartCount] = useState("")

    useEffect(()=>{
        setCartCount(cart.length)
    },[cart])

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

    const value = { cart, setCart, cartCount, setCartCount, updateCart}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };