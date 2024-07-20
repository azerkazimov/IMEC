import axios from "axios";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchIndustry = async (path) => {
  const { data } = await axios.get(
    `https://imec-db.vercel.app/industies?path=${path}`
  );
  return data[0];
};

function Industries() {
  const { path } = useParams();
  const {
    data: industry,
    isLoading,
    isError,
  } = useQuery(["industry", path], () => fetchIndustry(path));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !industry) {
    return <div>Industry not Found!</div>;
  }

  return (
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
  );
}

Industries.propTypes = {
  industries: PropTypes.array,
};

export default Industries;
