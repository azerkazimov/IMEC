import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <div className="currentItem-element my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div
                className="img-container"
                ref={imgContainerRef}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={`https://imec-db.vercel.app${currentItem.sectionImg}`}
                  alt={currentItem.name}
                  className="main-img"
                />
                <div
                  className="zoom-img"
                  ref={zoomRef}
                  style={{
                    backgroundImage: `url(https://imec-db.vercel.app${currentItem.sectionImg})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-12 col-md-6 px-5 flex-container flex-align-center">
              <div className="element-description">
                <h2>{currentItem.name}</h2>
                <p>{currentItem.description}</p>
                <Link to="/products">
                  <button className="btn">Back to Products</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="container mt-10">
            <div className="row">
              <div className="col-12 element-subtypes">
                <h2>{currentItem.typesHeader}</h2>
                <p>{currentItem.typesDescription}</p>
                <ul>
                  {currentItem.types.map((type) => (
                    <li key={type.id}>
                      <span>{type.type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryItem;
