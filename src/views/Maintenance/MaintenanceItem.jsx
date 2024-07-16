import { Link, useParams } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import { useEffect, useState } from "react";
import axios from "axios";

function MaintenanceItem() {
  const { path } = useParams();
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/maintenance")
      .then((res) => res.data)
      .then((data) => {
        if (data.length > 0) {
          const allItems = [...data[0].service, ...data[0].repair];
          const foundItem = allItems.find((item) => item.path.includes(path));
          setCurrentService(foundItem);
        }
      })
      .catch((err) => console.log(err));
  }, [path]);

  if (!currentService) {
    return <div>Service not found...</div>;
  }

  return (
    <>
      <PageHeader name={currentService.title} />
      <div className="maintenance-element my-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={`https://imec-db.vercel.app${currentService.img}`}
                alt={currentService.name}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="col-12 col-md-6 maintenance-content">
              <h2>{currentService.title}</h2>
              <h5>{currentService.header}</h5>
              <p>{currentService.description}</p>
              <div className="btn-store-start">
                <Link to="/get-a-quote">
                  <button className="btn">More Info</button>
                </Link>
                <Link to="/maintenance">
                  <button className="btn">Back to Maintenance</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-10">
            <div className="col-12">
              <div className="maintenance-description">
                <h5>{currentService.content.what_is_it}</h5>
                <h3>Key Features</h3>
                <ul>
                  {currentService.content.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3>Benefits</h3>
                <ul>
                  {currentService.content.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <h3>Applications</h3>
                <ul>
                  {currentService.content.applications.map(
                    (aplication, index) => (
                      <li key={index}>{aplication}</li>
                    )
                  )}
                </ul>
                <h3>Why Choose IMEC</h3>
                <p>{currentService.content.why_choose_imec}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaintenanceItem;
