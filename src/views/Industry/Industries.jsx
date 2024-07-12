import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function Industries({ industries }) {
  const { path } = useParams();
  const industry = industries.find(
    (item) => item.path === `/industries/${path}`
  );

  if (!industry) {
    return <div>Indystry not Found!</div>;
  }

  return (
    <>
      <div className="industry-item">
        <img
          src={`https://imec-db.vercel.app${industry.img}`}
          alt={industry.title}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="industry-content">
                <h1 className="industry-header">{industry.title}</h1>
                <p>{industry.content}</p>
                <Link to="/industries">
                  <button className="btn">Back to Industries</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Industries.propTypes = {
  industries: PropTypes.array,
};
export default Industries;
