import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../layout/PageHeader/PageHeader";
import PropTypes from "prop-types";
import axios from "axios";

function CategoryItem() {
  const { categoryPath, itemPath } = useParams();
  const [products, setProducts] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  console.log(categoryPath, itemPath);
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
              <div className="img-container">
                <img
                  src={`https://imec-db.vercel.app${currentItem.img}`}
                  alt={currentItem.name}
                  className="main-img"
                />
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

CategoryItem.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CategoryItem;
