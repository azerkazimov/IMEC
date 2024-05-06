import pump from "../../assets/images/pump.png";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function ProductItem({ name, img, description, brand }) {
  return (
    <div className="col-12 col-md-4 p-1">
      <div className="products-item">
        <img src={pump} alt="" />
        <div className="products-description">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{brand}</p>
          <RouterLink to="/product-overview">
            <button className="btn">Add To Card</button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  brand: PropTypes.string,
};

export default ProductItem;
