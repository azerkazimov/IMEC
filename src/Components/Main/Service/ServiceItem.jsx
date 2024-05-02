import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";

function ServiceItem({ head, content }) {
  return (
    <div className="col-12 col-md-4 p-4">
      <div className="service-item text-center">
        <div className="icon">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <h4>{head}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

ServiceItem.propTypes = {
  head: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ServiceItem;
