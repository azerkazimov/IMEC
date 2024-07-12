import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../layout/PageHeader/PageHeader";

function CategoryItem() {
  const { itemPath } = useParams();
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const imgContainerRef = useRef(null);
  const zoomRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const posX = (x / width) * 100;
    const posY = (y / height) * 100;

    zoomRef.current.style.backgroundPosition = `${posX}% ${posY}%`;
  };

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/products")
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const findProduct = (products, itemPath) => {
      products[0].items.forEach((item) => {
        item.subItems.forEach((subItem) => {
          if (subItem.path.includes(itemPath)) {
            setCurrentItem(subItem);
          }
        });
      });
    };
    if (products[0]) {
      findProduct(products, itemPath);
    }
  }, [products, itemPath]);

  if (!products || !currentItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader name={currentItem.name} />
      <div className="currentItem-element">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div
                className="img-container"
                ref={imgContainerRef}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={`https://imec-db.vercel.app${currentItem.img}`}
                  alt={currentItem.name}
                  className="main-img"
                />
                <div
                  className="zoom-img"
                  ref={zoomRef}
                  style={{
                    backgroundImage: `url(https://imec-db.vercel.app${currentItem.img})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-12 col-md-6 flex-container flex-align-center">
              <div className="element-description">
                <h2>{currentItem.name}</h2>
                <span>Category: {currentItem.category}</span>
                <p>{currentItem.description}</p>
                <span>Brand-name: {currentItem.brand}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryItem;
