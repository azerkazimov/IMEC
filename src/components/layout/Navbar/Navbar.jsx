import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import BasketTab from "../../common/Basket/BasketTab.jsx";
import Dropdown from "./Dropdown.jsx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropDown] = useState(null);
  const [burger_class, setBurgerClass] = useState(false);
  const [burger_bar, setBurgerBar] = useState(false);
  const [data, setData] = useState([]);
  const [basketTab, setBasketTab] = useState(false);

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/nav-bar")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const handleMouseEnter = (id) => {
    setDropDown(id);
  };

  const handleMouseLeave = () => {
    setDropDown(null);
  };

  const changeBG = () => {
    setNav(window.scrollY >= 20);
  };
  window.addEventListener("scroll", changeBG);

  const updateBurger = () => {
    setBurgerClass(!burger_class);
    setBurgerBar(!burger_bar);
  };

  const openBasket = () => {
    setBasketTab(!basketTab);
  };
  const closeBasket = () => {
    setBasketTab(false);
  };

  return (
    <nav
      className={
        nav
          ? isMainPage
            ? "nav-bar active"
            : "nav-bar active other-page"
          : "nav-bar"
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-3 flex-container flex-align-center flex-justify-start">
            <RouterLink to="/" className="logo">
              <img src={logo} alt="IMEC" />
            </RouterLink>
          </div>
          <div className="col-6 col-md-6 flex-container flex-align-center flex-justify-center flex-justify-xs-end">
            <div className="burger-menu" onClick={updateBurger}>
              <span className={burger_bar ? "click" : "unclick"}></span>
              <span className={burger_bar ? "click" : "unclick"}></span>
              <span className={burger_bar ? "click" : "unclick"}></span>
            </div>
            <ul className={burger_class ? "open" : "menu"}>
              {data.map((item) => (
                <li
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <RouterLink
                    to={item.path}
                    className={isMainPage ? "text-natural" : "text-inky"}
                    onClick={updateBurger}
                  >
                    {item.name}
                  </RouterLink>
                  {dropdown === item.id && item.items && (
                    <Dropdown items={item.items} />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2 col-md-3 flex-container flex-align-center flex-justify-space-between px-5">
            <button className="btn d-none">
              <RouterLink to="/">Get a Quote</RouterLink>
            </button>
            <button
              className={
                isMainPage ? "basket text-natural" : "basket text-secondary"
              }
              onClick={openBasket}
            >
              <FontAwesomeIcon icon={faBagShopping} />
            </button>
            <BasketTab basketTab={basketTab} closeBasket={closeBasket} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
