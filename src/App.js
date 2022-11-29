import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import "./App.css"
import ProductPage from "./productPage/ProductPage";
import CartPage from "./cartPage/CartPage";
import HomePage from "./homePage/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <NavBar/> } >
        <Route path="/" element={ <HomePage/> } />
        <Route path="/products" element={ <ProductPage/> }  />
        <Route path="/cart" element={ <CartPage/> }  />
      </Route>
    </Routes>
  );
}

export default App;
