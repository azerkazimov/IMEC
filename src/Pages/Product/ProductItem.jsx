import pump from "../../assets/images/pump.png";
import { Link as RouterLink } from "react-router-dom";
function ProductItem() {
  return (
    <div className="col-12 col-md-4 p-1">
      <div className="products-item">
        <img src={pump} alt="" />
        <div className="products-description">
          <h4>Pump</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <RouterLink to="/product-overview">
            <button className="btn">Add To Card</button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
