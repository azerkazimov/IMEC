import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../layout/PageHeader/PageHeader";
import PropTypes from "prop-types";

function CategoryItem({ products }) {
  const { categoryPath, itemPath } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products
      .flatMap(category => category.items)
      .flatMap(item => item.subItems)
      .find(subitem => subitem.path === itemPath);

    setProduct(foundProduct);
  }, [categoryPath, itemPath, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader name={product.name} />
      <div className="product-element">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="img-container">
                <img
                  src={`https://imec-db.vercel.app${product.img}`}
                  alt={product.name}
                  className="main-img"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 flex-container flex-align-center">
              <div className="element-description">
                <h2>{product.name}</h2>
                <span>Category: {product.category}</span>
                <p>{product.description}</p>
                <span>Brand-name: {product.brand}</span>
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
