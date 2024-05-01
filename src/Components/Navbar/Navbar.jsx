import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
// import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import axios from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [row, setRow] = useState(true);
  const [dropdown, setDropDown] = useState(null);
  const [burger_class, setBurgerClass] = useState(false);
  const [burger_bar, setBurgerBar] = useState(false);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost:3000/nav-bar")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
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

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="container">
        <div className={row ? "row" : "column"}>
          <div className="col-12 col-md-3 flex-container flex-align-center flex-justify-start">
            <RouteLink to="/" className="logo">
              <img src={logo} alt="Pizza" />
            </RouteLink>
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
                <RouteLink to={item.path}>{item.name}</RouteLink>
                {dropdown === item.id && item.items && (
                  <Dropdown items={item.items} />
                )}
              </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-3 flex-container flex-align-center flex-justify-end px-5">
            <button className="btn d-none">
              <RouteLink to="/">Get a Quote</RouteLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
