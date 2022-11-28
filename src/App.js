import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import "./App.css"
import ProductPage from "./productPage/ProductPage";
import CartPage from "./cartPage/CartPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <NavBar/> } >
        <Route path="/" element={ <ProductPage/> }  />
        <Route path="/cart" element={ <CartPage/> }  />
      </Route>
    </Routes>
  );
}

export default App;
