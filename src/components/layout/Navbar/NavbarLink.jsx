/* eslint-disable react/prop-types */
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const NavbarLink = ({ item, navOpen }) => {
  const [dropdown, setDropDown] = useState(null);

  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const handleClickDropdown = () => {
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

  const linkClassName = navOpen
    ? "text-natural"
    : isMainPage
    ? "text-natural"
    : "text-inky";

  return (
    <li
      className="nav-link-wrapper"
      key={item.id}
      onClick={handleClickDropdown}
    >
      <div className="flex-container flex-align-center flex-justify-center">
        <RouterLink to={item.path} className={linkClassName}>
          {item.name}
        </RouterLink>
        {item.items && (
          <div className="ml-1 flex-container flex-justify-center flex-align-center">
            <HiOutlineChevronDown
              color="#fff"
              onClick={(e) => handleClickLink(e, item)}
            />
          </div>
        )}
      </div>
      {item.items && <Dropdown isOpen={dropdown} items={item.items} />}
    </li>
  );
};

export default NavbarLink;
