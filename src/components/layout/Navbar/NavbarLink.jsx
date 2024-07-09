/* eslint-disable react/prop-types */
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const NavbarLink = ({ category, navOpen }) => {
  const [dropdown, setDropDown] = useState(false);

  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const handleClickDropdown = () => {
    setDropDown(!dropdown);
  };
  const navigate = useNavigate();
  const handleClickLink = (e, { items }) => {
    if (items) {
      e.preventDefault();
    } else {
      navigate(e.target.href);
    }
  };

  const linkClassName = navOpen
    ? "text-natural"
    : isMainPage
    ? "text-natural"
    : "text-inky";

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
              color="#fff"
              onClick={(e) => handleClickLink(e, category)}
            />
          </div>
        )}
      </div>
      {category.items && <Dropdown isOpen={dropdown} items={category.items} />}
    </li>
  );
};

export default NavbarLink;
