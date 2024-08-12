import PropTypes from "prop-types";

function PartnerItem({ img, name, content }) {
  return (
    <div className="partner-item">
      <div className="partner-logo">
        <img src={img} alt={name} />
      </div>
      <div className="partner-item-content">
        <h4>{name}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

PartnerItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
};

export default PartnerItem;
