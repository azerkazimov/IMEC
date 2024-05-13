import PropTypes from "prop-types";
import pump from "../../assets/images/pump.png";
import useOrderStore from "../../Components/store/orderStore";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function ProductItem({ id, name, description, brand /*img*/ }) {
  const state = useOrderStore((state) => state);
  const [popUp, setPopUp] = useState(false);
  const popUpRef = useRef(null);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const closePopUp = () => {
    setPopUp(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        closePopUp();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpRef]);

  const handleOrder = () => {
    const newOrder = {
      id: id,
      name: name,
      description: description,
    };
    state.addToOrder(newOrder);
    toast.success(`${name} added successfully`);
  };

  return (
    <>
      <div className="col-12 col-md-4 p-1">
        <div className="products-item" onClick={togglePopUp}>
          <img src={pump} alt={name} />
          <div className="products-description" id={id}>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{brand}</p>
            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                handleOrder();
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
      <div className={`pop-up ${popUp ? "open-pop-up" : ""}`} ref={popUpRef}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={pump} alt="" />
            </div>
            <div className="col-6">
              <div className="pop-up-description" id={id}>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{brand}</p>
                <button className="btn" onClick={handleOrder}>
                  Order
                </button>
                <span onClick={closePopUp}>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProductItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  brand: PropTypes.string,
};

export default ProductItem;
