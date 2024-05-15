import PropTypes from "prop-types";

function ServiceItem({ head, content, icon }) {
  return (
    <div className="col-12 col-md-4 p-4">
      <div className="service-item text-align-center">
        <div className="icon">{icon}</div>
        <h4>{head}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  icon: PropTypes.element,
  head: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ServiceItem;
