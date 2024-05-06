import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function Categories({ title, description, categoryId, src }) {
  return (
    <div className="product-item">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={src} alt={title} />
          </div>
          <div className="col-10 ">
            <div className="product-category">
              <h4>{title}</h4>
              <p>{description}</p>
              <RouterLink to={`/subcategories/${categoryId}`}>
                <button className="btn">View More</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Categories.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  categoryId: PropTypes.string,
  src: PropTypes.string,
};

export default Categories;
