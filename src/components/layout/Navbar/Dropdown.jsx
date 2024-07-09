import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function Dropdown({ items, isOpen }) {
  return (
    <ul className={isOpen ? "dropdown-r open" : "dropdown-r"}>
      <div className="row dropdown-c">
        {items.map((item, index) => (
          <li key={index} className="dropdown-item col-12 col-lg-4">
            <RouterLink className="sub-category-header" to={item.path}>
              {item.name}
            </RouterLink>
            {item.subItems && (
              <ul>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <FaAngleRight />
                    <RouterLink to={subItem.path}>{subItem.name}</RouterLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </div>
    </ul>
  );
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

export default Dropdown;
