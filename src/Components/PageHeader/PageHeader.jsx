import PropTypes from "prop-types";
import keys from "../../assets/images/keys.png";
import { useRef } from "react";

function PageHeader({ name }) {
  const pageHeaderRef = useRef(null);
  return (
    <div ref={pageHeaderRef} className="page-header">
      <div className="container">
        <div className="row">
          <h1>{name}</h1>
        </div>
      </div>
      <img src={keys} alt="" />
    </div>
  );
}

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
export default PageHeader;
