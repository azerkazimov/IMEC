import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import CatalogueItem from "./CatalogueItem";

function Catalogue() {
  const url = "https://imec-db.vercel.app/catalogue";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <PageHeader name="Catalogues" />
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <CatalogueItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalogue;
