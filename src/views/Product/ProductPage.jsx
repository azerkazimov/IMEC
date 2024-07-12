import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader/PageHeader";

function ProductPage() {
  const { id, name } = useParams();
  const location = useLocation();
  const { category, description, brand, img } = location.state || {};
  const itemRef = useRef(id);

  const imgContainerRef = useRef(null);
  const zoomRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const posX = (x / width) * 100;
    const posY = (y / height) * 100;

    zoomRef.current.style.backgroundPosition = `${posX}% ${posY}%`;
  };

  return (
    <>
      <PageHeader name={name} />
      <div className="product-element" ref={itemRef}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div
                className="img-container"
                ref={imgContainerRef}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={`https://imec-db.vercel.app${img}`}
                  alt={name}
                  className="main-img"
                />
                <div
                  className="zoom-img"
                  ref={zoomRef}
                  style={{
                    backgroundImage: `url(https://imec-db.vercel.app${img})`,
                  }}
                ></div>
              </div>
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

export default ProductPage;
