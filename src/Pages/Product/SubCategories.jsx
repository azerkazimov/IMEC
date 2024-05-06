import { useParams } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { Link as RouterLink } from "react-router-dom";
import pump from "../../assets/images/pump.png";

import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://imec-db.vercel.app/subCategories?categoryId=";

function SubCategories() {
  const [subCats, setSubCats] = useState([]);
  const { catId } = useParams();
  useEffect(() => {
    axios.get(url + catId).then(({ data }) => {
      setSubCats(data);
    });
  }, []);
  return (
    <>
      <PageHeader name="Products" />

      <div className="container mt-5">
        <div className="row">
          {subCats.map(({ id, name, description }) => {
            return (
              <div className="col-12 col-md-4 p-1" key={id}>
                <div className="products-item">
                  <img src={pump} alt="" />
                  <div className="products-description">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <RouterLink to={"/products/"+ id}>
                      <button className="btn">Add To Card</button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SubCategories;
