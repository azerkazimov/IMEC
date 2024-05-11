import PropTypes from "prop-types";

function Order({ id, name, description }) {
  return (
    <div className="col-12">
      <div className="product-categories">
        <div className="product-item" id={id}>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
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
