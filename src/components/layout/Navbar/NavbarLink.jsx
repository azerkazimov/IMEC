/* eslint-disable react/prop-types */
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const NavbarLink = ({ category, navOpen }) => {
  const [dropdown, setDropDown] = useState(false);

  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const navigate = useNavigate();

  const handleClickDropdown = () => {
    setDropDown((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropDown(false);
  };

  const handleClickLink = (e, { items, path }) => {
    if (items) {
      e.preventDefault();
      setDropDown((prev) => !prev);
    } else {
      setDropDown(false);
      navigate(path);
    }
  };

  const linkClassName = navOpen
    ? "text-natural"
    : isMainPage
    ? "text-natural"
    : "text-inky";

  const chevronColor = navOpen ? "#fff" : isMainPage ? "#fff" : "#000";

  return (
    <li
      className="nav-link-wrapper"
      key={category.id}
      onClick={handleClickDropdown}
    >
      <div className="flex-container flex-align-center flex-justify-center">
        <RouterLink to={category.path} className={linkClassName}>
          {category.name}
        </RouterLink>
        {category.items && (
          <div className="ml-1 flex-container flex-justify-center flex-align-center">
            <HiOutlineChevronDown
              color={chevronColor}
              onClick={(e) => handleClickLink(e, category)}
            />
          </div>
        )}
      </div>
      {category.items && (
        <Dropdown
          isOpen={dropdown}
          items={category.items}
          closeDropdown={closeDropdown}
        />
      )}
    </li>
  );
};

export default NavbarLink;
