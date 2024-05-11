import PropTypes from "prop-types";

function Order({ id, name, description }) {
  return (
    <div className="col-12">
      <div className="products-item mb-2" id={id}>
        <div className="products-description text-align-start">
          <h5>{name}</h5>
          <span>{description}</span>
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
