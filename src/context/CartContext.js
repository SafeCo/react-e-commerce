import { createContext, useState, useEffect} from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart] = useState([]);


    useEffect(() => {
        if(cart){
            localStorage.setItem('cartData', JSON.stringify(cart));
        }else{
            localStorage.setItem('cartData', JSON.stringify(cart));
        }
    }, [cart]);

    const value = { cart, setCart}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };