import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import PageHeader from "../../components/layout/PageHeader/PageHeader";

function FilteredProducts() {
  const { category } = useParams();
  const [filteredProd, setFilteredProd] = useState([]);
  const url = "https://imec-db.vercel.app/products";
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const products = res.data;
        setFilteredProd(
          category === "all"
            ? products
            : products.filter((item) => item.category === category)
        );
      })
      .catch((err) => console.log(err));
  }, [category]);

  const handleButtonClick = (category) => {
    navigate(`/products/category/${category}`);
  };
  return (
    <>
      <PageHeader name={category} />
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
              <>
                <ProductItem key={item.id} {...item} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteredProducts;
