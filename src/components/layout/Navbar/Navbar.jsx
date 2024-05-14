import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Dropdown from "./Dropdown.jsx";
import BasketTab from "../../common/Basket/BasketTab.jsx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [row, setRow] = useState(true);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 993) {
        setRow(false);
      } else {
        setRow(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (id) => {
    setDropDown(id);
  };

  const handleMouseLeave = () => {
    setDropDown(null);
  };

  const changeBG = () => {
    setNav(window.scrollY >= 50);
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
    <nav className={nav ? "nav active" : "nav"}>
      <div className="container">
        <div className={row ? "row" : "column"}>
          <div className="col-12 col-md-3 flex-container flex-align-center flex-justify-start">
            <RouterLink to="/" className="logo">
              <img src={logo} alt="IMEC" />
            </RouterLink>
          </div>
          <div className="col-12 col-md-6 flex-container flex-align-center flex-justify-center">
            <label htmlFor="menu-btn" className="menu-icon">
              <span className="nav-icon"></span>
            </label>
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
                  <RouterLink to={item.path}>{item.name}</RouterLink>
                  {dropdown === item.id && item.items && (
                    <Dropdown items={item.items} />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-3 flex-container flex-align-center flex-justify-space-between px-5">
            <button className="btn d-none">
              <RouterLink to="/">Get a Quote</RouterLink>
            </button>
            <button className="basket d-none" onClick={openBasket}>
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
