import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import useOrderStore from "../../../store/orderStore.jsx";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function Order({ id, name, description, img }) {
  const state = useOrderStore((state) => state);
  const removeFromOrder = useOrderStore((state) => state.removeFromOrder);
  const [popUp, setPopUp] = useState(false);
  const popUpRef = useRef(null);
  const [isRemoving, setIsRemoving] = useState(true);

  const handleOrder = () => {
    const newOrder = {
      id: id,
      name: name,
      description: description,
      img: img,
    };
    const itemExist = state.order.some((order) => order.id === id);
    if (itemExist) {
      toast.error(`${name} is alredy in the order`);
    } else {
      state.addToOrder(newOrder);
      toast.success(`${name} added successfully`);
    }
  };

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const removeOrder = () => {
    removeFromOrder(id);
  };

  const handleClick = () => {
    if (isRemoving) {
      removeOrder();
      setIsRemoving(false);
    } else {
      handleOrder();
    }
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

  return (
    <>
      <div className="col-12">
        <div
          className="products-item flex-container"
          onClick={togglePopUp}
          id={id}
        >
          <div className="products-description text-align-start text-natural">
            <h5>{name}</h5>
            <span>{description}</span>
          </div>
          <button className="btn-remove" onClick={removeOrder}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
      <div className={`pop-up ${popUp ? "open-pop-up" : ""}`} ref={popUpRef}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={`https://imec-db.vercel.app${img}`} alt={name} />
            </div>
            <div className="col-6">
              <div className="pop-up-description" id={id}>
                <h4>{name}</h4>
                <p>{description}</p>
                <button
                  className={`btn ${isRemoving ? "danger" : "danger"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
                >
                  {isRemoving ? "Remove" : "Order"}
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

Order.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};
export default Order;
