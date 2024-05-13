import Main from "./Pages/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Industry from "./Pages/Industry/Industry";
import Categories from "./Pages/Product/Categories";
import Service from "./Pages/Service/Service";
import Company from "./Pages/Company/Company";
import Basket from "./Components/Basket/Basket";
import Products from "./Pages/Product/Products";
import SubCategories from "./Pages/Product/SubCategories";
import AllProducts from "./Pages/Product/AllProducts";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/subcategories/:catId" element={<SubCategories />} />
          <Route path="/products/:subCatId" element={<Products />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </>
  );
}

export default App;
