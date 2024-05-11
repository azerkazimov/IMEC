import { useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import _Categories from "../../Components/ProductComponents/Categories";
import axios from "axios";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/categories")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PageHeader name="Products" />
      <div className="container">
        <div className="product-categories">
          {data.map((item) => (
            <_Categories
              key={item.id}
              title={item.title}
              description={item.description}
              categoryId={item.id}
              src={`https://imec-db.vercel.app${item.img}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
