import Main from "./views/HomePage/Main";
import Navbar from "./components/layout/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Industry from "./views/IndustryPage/Industry";
import Categories from "./views/ProductPage/Categories";
import Service from "./views/ServicePage/Service";
import Company from "./views/CompanyPage/Company";
import Basket from "./components/common/Basket/Basket";
import Products from "./views/ProductPage/Products";
import SubCategories from "./views/ProductPage/SubCategories";
import AllProducts from "./views/ProductPage/AllProducts";
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
        <Toaster position="bottom-left" />
      </div>
    </>
  );
}

export default App;
