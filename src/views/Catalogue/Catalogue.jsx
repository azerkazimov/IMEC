import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
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
      <SectionHeader span="IMEC provide" textPosition="center" head="Catalogue" />
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
