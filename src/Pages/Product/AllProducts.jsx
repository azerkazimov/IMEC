import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ProductItem from "./ProductItem";

function AllProducts() {
  const url = "https://imec-db.vercel.app/products";
  const [data, setData] = useState([]);
  const [activeProd, setActiveProd] = useState("All product");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleButtonClick = (name) => {
    setActiveProd(name);
  };

  const filteredProd =
    activeProd === "All product"
      ? data
      : data.filter((item) => item.category === activeProd);

  return (
    <>
      <div className="products-page">
        <PageHeader name="All Products" />
        <div className="container pt-5">
          <div className="btn-store">
            <button
              className="btn"
              onClick={() => handleButtonClick("All product")}
            >
              All product
            </button>
            <button className="btn" onClick={() => handleButtonClick("pump")}>
              Pump
            </button>
            <button className="btn" onClick={() => handleButtonClick("bears")}>
              Bears
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
