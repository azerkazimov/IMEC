import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { HiOutlineShoppingBag, HiX } from "react-icons/hi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import BasketTab from "../../common/Basket/BasketTab.jsx";
import Dropdown from "./Dropdown.jsx";
import useOrderStore from "../../../store/orderStore.jsx";
import { HiBars3, HiOutlineChevronDown } from "react-icons/hi2";
import NavbarLink from "./NavbarLink.jsx";

const NavbarNew = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const changeBG = () => {
    setNavScrolled(window.scrollY >= 20);
  };
  window.addEventListener("scroll", changeBG);
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  //   const [dropdown, setDropDown] = useState(null);
  const [burger_class, setBurgerClass] = useState(false);
  const [burger_bar, setBurgerBar] = useState(false);
  const [data, setData] = useState([]);
  const [basketTab, setBasketTab] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/nav-bar")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  const navCondition = navScrolled
    ? isMainPage
      ? "nav-bar active"
      : "nav-bar active other-page"
    : "nav-bar";

  const order = useOrderStore((state) => state.order);
  const basketTabCount = order.length;
  const openBasket = () => {
    setBasketTab(!basketTab);
  };
  const closeBasket = () => {
    setBasketTab(false);
  };
  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };
  return (
    <div className={navCondition}>
      <div className="container">
        <div className="row flex-justify-space-between">
          <div className="col-3 col-md-2 flex-container flex-align-center flex-justify-start">
            <RouterLink to="/" className="logo">
              <img src={logo} alt="IMEC" />
            </RouterLink>
          </div>
          <menu className={`${isOpenNav ? "open" : "menu"} nav-links`}>
            {data.map((item) => (
              <NavbarLink key={item.id} item={item} />
            ))}
          </menu>
          <div className="col-2 col-md-3 flex-container flex-align-center flex-justify-space-between px-5">
            <button className="btn d-none">
              <RouterLink to="/">Get a Quote</RouterLink>
            </button>
            <button
              onClick={toggleNav}
              className={`nav-toggle ${isOpenNav && "open"}`}
            >
              {isOpenNav ? <HiX size={24} /> : <HiBars3 size={24} />}
            </button>
            <button
              className={
                isMainPage ? "basket text-natural" : "basket text-secondary"
              }
              onClick={openBasket}
            >
              <HiOutlineShoppingBag />
              {basketTabCount > 0 && (
                <span className="basket-count">{basketTabCount}</span>
              )}
            </button>
            <BasketTab basketTab={basketTab} closeBasket={closeBasket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
