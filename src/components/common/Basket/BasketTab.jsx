import { useRef, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import useOrderStore from "../../../store/orderStore.jsx";
import PropTypes from "prop-types";
import Order from "./Order.jsx";

function BasketTab({ basketTab, closeBasket }) {
  const basketTabRef = useRef(null);
  const order = useOrderStore((state) => state.order);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (basketTabRef.current && !basketTabRef.current.contains(e.target)) {
        closeBasket();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [basketTab, closeBasket]);

  return (
    <div ref={basketTabRef} className={`basket-tab ${basketTab ? "open" : ""}`}>
      <div className="basket-title">
        <h3>Order</h3>
        <span onClick={closeBasket}>+</span>
      </div>
      <div className="orders-tab">
        {order.map((item) => {
          return (
            <Order
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              img={item.img}
              textColor={"text-natural"}
            />
          );
        })}
      </div>
      <div className="btn-store basket-btns">
        <RouterLink to="/basket">
          <button className="btn">Order List</button>
        </RouterLink>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}

BasketTab.propTypes = {
  basketTab: PropTypes.bool,
  closeBasket: PropTypes.func,
};

export default BasketTab;
