// ------ IMEC Main Routes -------
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Basket from "./components/common/Basket/Basket";
import GetAQuoteForm from "./components/common/GetAQuoteForm/GetAQuoteFomr";
import Footer from "./components/layout/Footer/Footer";
import Loader from "./components/layout/Loader/Loader";
import Navbar from "./components/layout/Navbar/Navbar";
import Categories from "./components/views/Categories/Categories";
import CategoryItem from "./components/views/Categories/CategoryItem";
import Catalogue from "./views/Catalogue/Catalogue";
import Company from "./views/Company/Company";
import Engineering from "./views/Engineering/Engineering";
import Industries from "./views/Industry/Industries";
import Industry from "./views/Industry/Industry";
import Main from "./views/Main/Main";
import Maintenance from "./views/Maintenance/Maintenance";
import MaintenanceItem from "./views/Maintenance/MaintenanceItem";
import Partner from "./views/Partner/Partner";
import PartnerItem from "./views/Partner/PartnerItem";
import Construction from "./views/Process/Construction";
import Consultation from "./views/Process/Consultation";
import Installation from "./views/Process/Installation";
import Process from "./views/Process/Process";
import SingleSupport from "./views/Support/SingleSupport";
import Support from "./views/Support/Support";
import CategorySubItem from "./components/views/Categories/CategorySubItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/get-a-quote" element={<GetAQuoteForm />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/partner/:path" element={<PartnerItem />} />
            <Route path="/industries" element={<Industry />} />
            <Route path="/industries/:path" element={<Industries />} />
            <Route path="/about-imec/overview" element={<Company />} />
            <Route path="/products" element={<Categories />} />
            <Route
              path="/product-item/:categoryPath/:itemPath"
              element={<CategoryItem />}
            />
            <Route
              path="/product-item/:categoryPath/:itemPath/:subCats"
              element={<CategorySubItem type="product" />}
            />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route
              path="/maintenance/:type/:path"
              element={<MaintenanceItem />}
            />
            <Route
              path="/maintenance/:type/:itemPath/:subCats"
              element={<CategorySubItem type="service" />}
            />
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
            <Route
              path="/support/sales"
              element={
                <SingleSupport
                  header="Sales"
                  numberOne="+994 51 240 46 50"
                  numberTwo="+994 50 483 44 41"
                  content="Our Customer Sales Support team is your trusted partner in navigating the industrial landscape. We offer a comprehensive, consultative approach tailored to your unique needs. Our experts provide insightful recommendations, prompt responses, and personalized assistance, ensuring you receive the best solutions for your operations. From the initial inquiry to post-purchase support, we are committed to enhancing your experience, optimizing your efficiency, and fostering long-term success. Trust us to deliver exceptional service and innovative solutions that drive your business forward."
                />
              }
            />
            <Route
              path="/support/service"
              element={
                <SingleSupport
                  header="Service"
                  number="+994 50 483 44 41"
                  content="Our Customer Service Support is dedicated to providing exceptional assistance tailored to your specific needs. We prioritize your satisfaction by offering prompt and effective solutions to any challenges you may face. Our knowledgeable and friendly team is available to guide you through every step, ensuring seamless communication and resolution. Whether you need technical support, product information, or service scheduling, we are here to help. With our commitment to excellence, you can trust us to keep your operations running smoothly and efficiently. Experience unparalleled support with our dedicated customer service team."
                />
              }
            />
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
        )}

        <Toaster position="bottom-left" />
        <Footer />
      </div>
    </>
  );
}

export default App;
