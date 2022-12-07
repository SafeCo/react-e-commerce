import { createContext, useState} from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart] = useState([]);
    const value = { cart, setCart}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };