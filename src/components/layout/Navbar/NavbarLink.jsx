/* eslint-disable react/prop-types */
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const NavbarLink = ({ item }) => {
  const [dropdown, setDropDown] = useState(null);

  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const handleClickDropdown = (e, id) => {
    setDropDown(!dropdown);
  };
  const router = useNavigate();
  const handleClickLink = (e, { items }) => {
    if (items) {
      e.preventDefault();
    } else {
      router(e.target.href);
    }
  };
  return (
    <li
      className="nav-link-wrapper"
      key={item.id}
      onClick={(e) => handleClickDropdown(e, item.id)}
      // onMouseEnter={() => handleMouseEnter(item.id)}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="flex-container flex-align-center flex-justify-center">
        <RouterLink
          to={item.path}
          onClick={(e) => handleClickLink(e, item)}
          className={isMainPage ? "text-natural" : "text-inky"}
          // onClick={updateBurger}
        >
          {item.name}
        </RouterLink>
        {item.items && (
          <div className="ml-1 flex-container flex-justify-center flex-align-center">
            <HiOutlineChevronDown color="#fff" />
          </div>
        )}
      </div>
      {item.items && <Dropdown isOpen={dropdown} items={item.items} />}
    </li>
  );
};

export default NavbarLink;
