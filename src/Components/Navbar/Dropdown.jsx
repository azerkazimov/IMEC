import { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

function Dropdown({ items }) {
  const [dropdown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <ul
        className={dropdown ? "dropdown clicked" : "dropdown"}
        onClick={handleDropDown}
      >
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
  items: PropTypes.array.isRequired,
};

export default Dropdown;
