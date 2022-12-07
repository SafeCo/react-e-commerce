import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"

import { CartContextProvider } from "./context/CartContext";

import NavBar from "./navBar/NavBar";
import ProductPage from "./productPage/ProductPage";
import CartPage from "./cartPage/CartPage";
import HomePage from "./homePage/HomePage";


function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={ <NavBar/> } >
          <Route path="/" element={ <HomePage/> } />
          <Route path="/products" element={ <ProductPage/> }  />
          <Route path="/cart" element={ <CartPage/> }  />
        </Route>
    </Routes>
    </CartContextProvider>
    
  );
}

export default App;
