import axios from "axios";
import { useRef } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import PageHeader from "../../layout/PageHeader/PageHeader";

const fetchProducts = async () => {
  const { data } = await axios.get("https://imec-db.vercel.app/products");
  return data;
};

function CategoryItem() {
  const { itemPath } = useParams();
  const imgContainerRef = useRef(null);
  const zoomRef = useRef(null);

  const { data: products, isLoading } = useQuery("products", fetchProducts);

  const currentItem = products?.[0]?.items
    .flatMap(item => item.subItems)
    .find(subItem => subItem.path.includes(itemPath));

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const posX = (x / width) * 100;
    const posY = (y / height) * 100;

    zoomRef.current.style.backgroundPosition = `${posX}% ${posY}%`;
  };

  if (isLoading || !currentItem) {
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
                <h2>{currentItem.title}</h2>
                <p>{currentItem.description}</p>
                <div className="btn-store-start">
                  <Link to="/get-a-quote">
                    <button className="btn">More Info</button>
                  </Link>
                  <Link to="/products">
                    <button className="btn">Back to Products</button>
                  </Link>
                </div>
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
