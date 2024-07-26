import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/layout/Loader/Loader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
import CatalogueItem from "./CatalogueItem";

function Catalogue() {
  const fetchCatalogue = async () => {
    const { data } = await axios.get("https://imec-db.vercel.app/catalogue");
    return data;
  };
  const { data, error, isLoading } = useQuery("catalogue", fetchCatalogue);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <SectionHeader
        span="IMEC provide"
        textPosition="center"
        head="Catalogue"
      />
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
