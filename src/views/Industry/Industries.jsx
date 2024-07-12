import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Industries() {
  const [industry, setIndustry] = useState([]);
  const { path } = useParams();

  useEffect(() => {
    axios
      .get(`https://imec-db.vercel.app/industies?path=${path}`)
      .then((res) => setIndustry(res.data[0]))
      .catch((err) => console.log(err));
  }, [path]);
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
