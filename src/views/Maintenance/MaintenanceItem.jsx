import { useParams } from "react-router-dom";
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
      <div className="maintenance-element">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={`https://imec-db.vercel.app${currentService.img}`}
                alt={currentService.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="col-12 col-md-6">
              <h2>{currentService.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaintenanceItem;
