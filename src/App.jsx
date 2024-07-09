// ------ IMEC Main Routes -------
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/common/Basket/Basket";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import Catalogue from "./views/Catalogue/Catalogue";
import Company from "./views/Company/Company";
import Engineering from "./views/Engineering/Engineering";
import Industry from "./views/Industry/Industry";
import Main from "./views/Main/Main";
import Maintenance from "./views/Maintenance/Maintenance";
import Partner from "./views/Partner/Partner";
import Construction from "./views/Process/Construction";
import Consultation from "./views/Process/Consultation";
import Installation from "./views/Process/Installation";
import Process from "./views/Process/Process";
import ItemPage from "./views/ProductPage/ItemPage";
import Products from "./views/ProductPage/Products";
import Repair from "./views/ServicePage/Repair";
import Service from "./views/ServicePage/Service";
import SalesSupport from "./views/Support/SalesSupport";
import ServiceSupport from "./views/Support/ServiceSupport";
import Support from "./views/Support/Support";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/partnership-agreement" element={<Partner />} />
          <Route path="/industries" element={<Industry />} />
          <Route path="/about-imec" element={<Company />} />
          <Route path="/products" element={<Products />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/maintenance/service" element={<Service />} />
          <Route path="/maintenance/repair" element={<Repair />} />
          <Route path="/process-optimization" element={<Process />} />
          <Route
            path="/process-optimization/design-construction-plant"
            element={<Construction />}
          />
          <Route
            path="/process-optimization/installation"
            element={<Installation />}
          />
          <Route
            path="/process-optimization/consultation"
            element={<Consultation />}
          />
          <Route path="/support" element={<Support />} />
          <Route path="/support/sales" element={<SalesSupport />} />
          <Route path="/support/service" element={<ServiceSupport />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product-item/:prodId/:name" element={<ItemPage />} />
        </Routes>
        <Toaster position="bottom-left" />
        <Footer />
      </div>
    </>
  );
}

export default App;
