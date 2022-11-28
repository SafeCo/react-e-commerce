import React from 'react'
import {useOutletContext} from "react-router-dom";


function CartPage() {
    const [cart, setCart] = useOutletContext()

    

    return (
    <div>CartPage</div>
    )
}

export default CartPage