import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import useOrderStore from "../../../store/orderStore.jsx";
import BasketTab from "../../common/Basket/BasketTab.jsx";
import NavbarLink from "./NavbarLink.jsx";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader.jsx";

const Navbar = () => {
  const fetchNavBar = async () => {
    const { data } = await axios.get("https://imec-db.vercel.app/navBar");
    return data;
  };
  const { data, error, isLoading } = useQuery("navBar", fetchNavBar);
  const [navScrolled, setNavScrolled] = useState(false);
  const [basketTab, setBasketTab] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const navRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const changeBG = useCallback(() => {
    setNavScrolled(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBG);
    return () => window.removeEventListener("scroll", changeBG);
  }, [changeBG]);

  const order = useOrderStore((state) => state.order);
  const basketTabCount = order.length;

  const openBasket = () => {
    setBasketTab(!basketTab);
  };

  const closeBasket = () => {
    setBasketTab(false);
  };

  const toggleNav = () => {
    setIsOpenNav((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(e.target)
      ) {
        setIsOpenNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navCondition = navScrolled
    ? isMainPage
      ? "nav-bar active"
      : "nav-bar active other-page"
    : "nav-bar";

  const burgerMenuColor = isOpenNav
    ? "bg-natural"
    : isMainPage
    ? "bg-natural"
    : "bg-inky";

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading navbar data.</div>;
  }

  return (
    <div className={navCondition}>
      <div className="container">
        <div className="row flex-justify-space-between">
          <div className="col-3 col-md-2 flex-container flex-align-center flex-justify-start">
            <RouterLink to="/" className="logo">
              <img src={logo} alt="IMEC" />
            </RouterLink>
          </div>
          <menu
            className={`${
              isOpenNav ? "open text-natural" : "menu"
            } col-7 nav-links`}
            ref={navRef}
          >
            {data.map((category) => (
              <NavbarLink
                key={category.id}
                category={category}
                navOpen={isOpenNav}
              />
            ))}
          </menu>
          <div className="col-2 col-md-3 btn-store">
            <button className="btn d-none">
              <RouterLink to="/get-a-quote">Get a Quote</RouterLink>
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
            <button
              className="burger-menu"
              onClick={toggleNav}
              ref={burgerButtonRef}
            >
              <span
                className={`${
                  isOpenNav ? "click" : "unclick"
                } ${burgerMenuColor}`}
              ></span>
              <span
                className={`${
                  isOpenNav ? "click" : "unclick"
                } ${burgerMenuColor}`}
              ></span>
              <span
                className={`${
                  isOpenNav ? "click" : "unclick"
                } ${burgerMenuColor}`}
              ></span>
            </button>

            <BasketTab basketTab={basketTab} closeBasket={closeBasket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
