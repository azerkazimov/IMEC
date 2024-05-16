import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/common/Basket/Basket";
import Navbar from "./components/layout/Navbar/Navbar";
import Company from "./views/CompanyPage/Company";
import Main from "./views/HomePage/Main";
import Industry from "./views/IndustryPage/Industry";
import AllProducts from "./views/ProductPage/AllProducts";
import Catalogue from "./views/CataloguePage/Catalogue";
import Categories from "./views/ProductPage/Categories";
import Products from "./views/ProductPage/Products";
import SubCategories from "./views/ProductPage/SubCategories";
import Service from "./views/ServicePage/Service";

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
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
        <Toaster position="bottom-left" />
      </div>
    </>
  );
}

export default App;
