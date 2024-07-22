import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function SectionHeader({ span, head, content, btn, textPosition, textColor, link }) {
  return (
    <div className="container">
      <div className={`section-header text-align-${textPosition}`}>
        <span className="head" style={{ color: textColor }}>
          {span}
        </span>
        <h2 style={{ color: textColor }}>{head}</h2>
        <p>{content}</p>
        {btn && (
          <RouterLink to={link} className="btn-content">
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
  span: PropTypes.string,
  head: PropTypes.string,
  content: PropTypes.string,
  btn: PropTypes.string,
  link: PropTypes.string,
  textPosition: PropTypes.string,
  textColor: PropTypes.string,
};

export default SectionHeader;
