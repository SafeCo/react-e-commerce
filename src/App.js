import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar/NavBar";
import "./App.css"
import ProductPage from "./productPage/ProductPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <NavBar/> } >
        <Route path="/" element={ <ProductPage/> }  />
      </Route>
    </Routes>
  );
}

export default App;
