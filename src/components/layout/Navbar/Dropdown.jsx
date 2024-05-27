import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

function Dropdown({ items, isOpen }) {
  return (
    <>
      <ul className={isOpen ? "dropdown-r open" : "dropdown-r"}>
        {items.map((item, index) => (
          <li key={index} className="dropdown-item">
            <RouterLink to={item.path}>{item.name}</RouterLink>
          </li>
        ))}
      </ul>
    </>
  );
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

export default Dropdown;
