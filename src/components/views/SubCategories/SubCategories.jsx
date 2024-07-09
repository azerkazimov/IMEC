import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function SubCategories({ title, description, categoryId, src, path }) {
  return (
    <div className="subCategory-item" id={categoryId}>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="category-list">
              <ul>
                <li><RouterLink to={path}/>Hello</li>
                <li><RouterLink to={path}/>Hello</li>
                <li><RouterLink to={path}/>Hello</li>
                <li><RouterLink to={path}/>Hello</li>
                <li><RouterLink to={path}/>Hello</li>
              </ul>
            </div>
          </div>
          <div className="col-10 ">
            <div className="subCategory-content">
              <h4>{title}</h4>
              <img src={src} alt={title} />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SubCategories.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  categoryId: PropTypes.string,
  src: PropTypes.string,
  path: PropTypes.string,
};

export default SubCategories;
