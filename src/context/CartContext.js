import { createContext, useState, useEffect} from "react";

import useLocalStorage from "../hooks/useLocalStorage";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [ cart, setCart] = useLocalStorage("cartData",[]);
    const [cartCount, setCartCount] = useState("")

    useEffect(()=>{
        setCartCount(cart.length)
    },[cart])

    const value = { cart, setCart, cartCount, setCartCount}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };