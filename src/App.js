import { Route, Routes } from "react-router-dom";
import "./App.css"

import { CartContextProvider } from "./context/CartContext";

import NavBar from "./navBar/NavBar";
import ProductsPage from "./productsPage/ProductsPage";
import HomePage from "./homePage/HomePage";
import { MediaContextProvider } from "./context/MediaContext";
import ProductPage from "./productPage/ProductPage";


function App() {
  return (
    <MediaContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={ <NavBar/> } >
            <Route path="/" element={ <HomePage/> } />
            <Route path="/products" element={ <ProductsPage/> }  />
            <Route path="/products/:id" element={ <ProductPage/> }  />
          </Route>
        </Routes>
      </CartContextProvider>
    </MediaContextProvider>

    
  );
}

export default App;
