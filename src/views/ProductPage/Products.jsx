import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../components/layout/PageHeader/PageHeader.jsx";
import ProductItem from "./ProductItem.jsx";
import { useParams } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const { subCatId } = useParams();

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/products?subCatId=" + subCatId)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [subCatId]);

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

export default Products;
