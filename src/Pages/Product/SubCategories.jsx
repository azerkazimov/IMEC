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
  }, [catId]);
  return (
    <>
      <PageHeader name="Subcategories" />

      <div className="container mt-5">
        <div className="row">
          {subCats.map(({ id, name, description }) => {
            return (
              <div className="col-12 col-md-6 p-1" key={id}>
                <div className="products-item">
                  <RouterLink to={"/products/" + id}>
                    <div className="row">
                      <div className="col-2">
                        <img src={pump} alt="" />
                      </div>
                      <div className="col-10 text-align-start">
                        <div className="products-description">
                          <h4>{name}</h4>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </RouterLink>
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
