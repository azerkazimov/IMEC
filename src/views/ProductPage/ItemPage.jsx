import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader/PageHeader";

function ItemPage() {
  const { id, name } = useParams();
  const location = useLocation();
  const { category, description, brand, img } = location.state || {};
  const itemRef = useRef(id);

  return (
    <>
      <PageHeader name={name} />

      <div className="product-element" ref={itemRef}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={`https://imec-db.vercel.app${img}`} alt={name} />
            </div>
            <div className="col-12 col-md-6 flex-container flex-align-center">
              <div className="element-description">
                <h2>{name}</h2>
                <span>Category: {category}</span>
                <p>{description}</p>
                <span>Brand-name: {brand}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
