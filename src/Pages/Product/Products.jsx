import pump from "../../assets/images/pump.png";
import { Link as RouterLink } from "react-router-dom";

function Products() {
  return (
    <div className="product-item">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={pump} alt="pump" />
          </div>
          <div className="col-10">
            <div className="product-category">
              <h4>Pump</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur explicabo veniam placeat impedit numquam deserunt
                incidunt nihil ipsa facere praesentium id.
              </p>
              <RouterLink to="/product-list">
                <button className="btn">View More</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
