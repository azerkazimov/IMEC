import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useOrderStore from "../store/orderStore";

function Order({ id, name, description }) {
  const removeFromOrder = useOrderStore((state) => state.removeFromOrder);
  const removeOrder = () => {
    removeFromOrder(id);
  };
  return (
    <div className="col-12">
      <div className="products-item flex-container " id={id}>
        <div className="products-description text-align-start">
          <h5>{name}</h5>
          <span>{description}</span>
        </div>
        <button className="btn-remove" onClick={removeOrder}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}

Order.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
};
export default Order;
