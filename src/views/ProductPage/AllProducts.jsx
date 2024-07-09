import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../components/layout/PageHeader/PageHeader.jsx";
import ProductItem from "./ProductItem.jsx";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const url = "https://imec-db.vercel.app/products"; 
  const [data, setData] = useState([]);
  const [activeProd, setActiveProd] = useState("all");
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleButtonClick = (category) => {
    navigate(`/products/category/${category}`)
    setActiveProd(category);
  };

  const filteredProd =
    activeProd === "all"
      ? data
      : data.filter((item) => item.category === activeProd);

  return (
    <>
      <div className="products-page">
        <PageHeader name="Products" />
        <div className="container pt-5">
          <div className="btn-store">
            <button className="btn" onClick={() => handleButtonClick("all")}>
              All product
            </button>
            <button className="btn" onClick={() => handleButtonClick("pump")}>
              Pump
            </button>
            <button className="btn" onClick={() => handleButtonClick("bearings")}>
              Bearings
            </button>
            <button className="btn" onClick={() => handleButtonClick("valve")}>
              Valves
            </button>
            <button className="btn" onClick={() => handleButtonClick("v-belt")}>
              V-belt
            </button>
            <button className="btn" onClick={() => handleButtonClick("hdpe")}>
              Pipes
            </button>
          </div>
        </div>
        <div className="container">
          <div className="product-categories">
            <div className="row">
              {filteredProd.map((item) => (
                <ProductItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
