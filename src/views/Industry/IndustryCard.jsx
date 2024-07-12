import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

function IndustryCard({ key, img, title, content, path }) {
  return (
    <>
      <div className="row card m-2">
        <div className="col-12 col-md-6 p-1" key={key}>
          <img src={`https://imec-db.vercel.app${img}`} alt={title} />
        </div>
        <div className="col-12 col-md-6 p-5 card-content">
          <h2>{title}</h2>
          <p>{content}</p>
          <RouterLink to={path}>
            <button className="btn">View More</button>
          </RouterLink>
        </div>
      </div>
    </>
  );
}

IndustryCard.propTypes = {
  key: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  path: PropTypes.string,
};

export default IndustryCard;
