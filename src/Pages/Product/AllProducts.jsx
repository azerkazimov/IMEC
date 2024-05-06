import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ProductItem from "./ProductItem";

function AllProducts() {
  const url = "https://imec-db.vercel.app/products";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PageHeader name="Product" />
      <div className="container">
        <div className="product-categories">
          <div className="row">
            {data.map((item) => (
              <ProductItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllProducts;
