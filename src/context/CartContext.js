import { createContext, useState, useEffect} from "react";

import useLocalStorage from "../hooks/useLocalStorage";
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart] = useLocalStorage("cartData",[]);

    const value = { cart, setCart}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };