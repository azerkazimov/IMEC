import PropTypes from "prop-types";

function ServiceItem({ head, content, img }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 service-item">
      <img src={img} alt="" />
      <div className="item flex-container flex-column text-align-center flex-justify-space-around">
        <h4>{head}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  head: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default ServiceItem;
