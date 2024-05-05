import Main from "./Pages/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Industry from "./Pages/Industry/Industry";
import Product from "./Pages/Product/Product";
import Service from "./Pages/Service/Service";
import Company from "./Pages/Company/Company";
import ProductList from "./Pages/Product/ProductList";
import Basket from "./Components/Basket/Basket";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/product-overview" element={<ProductList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
