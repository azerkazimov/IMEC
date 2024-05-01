import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({ items }) {
  const [dropdown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <ul
        id="dropdown"
        className={dropdown ? "dropdown clicked" : "dropdown"}
        onClick={handleDropDown}
      >
        {items.map((item, index) => (
          <li key={index} className="dropdown-item">
            {item}
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
