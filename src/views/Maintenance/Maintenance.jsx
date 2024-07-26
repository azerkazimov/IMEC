import axios from "axios";
import { useQuery } from "react-query";
import { Link as RouterLink } from "react-router-dom";
import Loader from "../../components/layout/Loader/Loader";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";

function Maintenance() {
  const fetchMaintenance = async () => {
    const { data } = await axios.get("https://imec-db.vercel.app/maintenance");
    return data[0];
  };

  const { data, error, isLoading } = useQuery("maintenance", fetchMaintenance);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const { service, repair } = data || { service: [], repair: [] };

  return (
    <>
      <PageHeader name="Maintenance Solution & Service" />
      <div className="maintenance">
        <div className="service">
          <SectionHeader
            span="our services"
            textPosition="center"
            head="Service"
          />
          <div className="container">
            <div className="row">
              {service.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-4 maintenance-item p-3"
                  key={item.id}
                >
                  <RouterLink to={item.path}>
                    <div className="maintenance-img">
                      <img
                        src={`https://imec-db.vercel.app${item.img}`}
                        alt={item.name}
                      />
                    </div>
                    <p>{item.title}</p>
                  </RouterLink>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="repair">
          <SectionHeader
            span="Repair jobs"
            textPosition="center"
            head="Repair"
          />
          <div className="container">
            <div className="row">
              {repair.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-4 maintenance-item p-3"
                  key={item.id}
                >
                  <RouterLink to={item.path}>
                    <div className="maintenance-img">
                      <img
                        src={`https://imec-db.vercel.app${item.img}`}
                        alt={item.title}
                      />
                    </div>
                    <p>{item.title}</p>
                  </RouterLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maintenance;
