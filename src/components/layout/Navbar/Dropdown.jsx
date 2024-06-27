import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

function Dropdown({ items, isOpen }) {
  return (
    <>
      <ul className={isOpen ? "dropdown-r open" : "dropdown-r"}>
        <div className="row dropdown-c">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item col-12 col-lg-4">
              <RouterLink to={item.path}>{item.name}</RouterLink>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

export default Dropdown;
