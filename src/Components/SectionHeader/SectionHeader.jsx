import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function SectionHeader({ span, head, content, btn }) {
  return (
    <div className="container">
      <div className="section-header">
        <span className="head">{span}</span>
        <h2>{head}</h2>
        <p>{content}</p>
        {btn && (
          <RouterLink to="/" className="btn-content">
            {btn}
            <span>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </RouterLink>
        )}
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  span: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  content: PropTypes.string,
  btn: PropTypes.string,
};

export default SectionHeader;
