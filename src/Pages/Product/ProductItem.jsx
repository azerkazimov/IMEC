import PropTypes from "prop-types";
import pump from "../../assets/images/pump.png";
import useOrderStore from "../../Components/store/orderStore";

function ProductItem({ id, name, description, brand /*img*/ }) {
  const state = useOrderStore((state) => state);

  const handleOrder = () => {
    const newOrder = {
      id: id,
      name: name,
      description: description,
    };
    state.addToOrder(newOrder);
  };

  return (
    <div className="col-12 col-md-4 p-1">
      <div className="products-item">
        <img src={pump} alt={name} />
        <div className="products-description" id={id}>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{brand}</p>
          <button className="btn" onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>
    </div>
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
