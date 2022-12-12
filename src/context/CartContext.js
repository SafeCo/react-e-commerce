import { createContext, useState, useEffect} from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart] = useState([]);
    const [avoidReading, setAvoidReading] = useState(true)

    // useEffect(() => {
    //     console.log(avoidReading)
    //     if(cart == false && avoidReading){
    //         setAvoidReading(false)
    //         console.log("working")
    //         const items = JSON.parse(localStorage.getItem("cartData"));
    //         setCart(items)
    //     } else{
    //         console.log("else")
    //         localStorage.setItem('cartData', JSON.stringify(cart));
    //     }
    // }, [cart]);

    // useEffect(() => {
    //     localStorage.setItem('cartData', JSON.stringify(cart));
    // }, [cart]);



    

    const value = { cart, setCart}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };