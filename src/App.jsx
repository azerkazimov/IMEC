// ------ IMEC Main Routes -------

import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/common/Basket/Basket";
import NavbarNew from "./components/layout/Navbar/NavbarNew";
import Catalogue from "./views/CataloguePage/Catalogue";
import Company from "./views/CompanyPage/Company";
import Main from "./views/HomePage/Main";
import Industry from "./views/IndustryPage/Industry";
import AllProducts from "./views/ProductPage/AllProducts";
import Categories from "./views/ProductPage/Categories";
import FilteredProducts from "./views/ProductPage/FilteredProducts";
import ItemPage from "./views/ProductPage/ItemPage";
import Products from "./views/ProductPage/Products";
import SubCategories from "./views/ProductPage/SubCategories";
import Service from "./views/ServicePage/Service";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <NavbarNew />
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
          <Route
            path="/products/category/:category"
            element={<FilteredProducts />}
          />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product-item/:prodId/:name" element={<ItemPage />} />
        </Routes>
        <Toaster position="bottom-left" />
      </div>
    </>
  );
}

export default App;
