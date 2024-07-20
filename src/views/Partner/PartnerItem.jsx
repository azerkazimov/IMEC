import axios from "axios";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader"; // Adjust the import path as needed
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchPartner = async (path) => {
  const { data } = await axios.get(
    `https://imec-db.vercel.app/partner?path=${path}`
  );
  return data[0];
};

function PartnerItem() {
  const { path } = useParams();
  const {
    data: partner,
    isLoading,
    isError,
  } = useQuery(["partner", path], () => fetchPartner(path));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !partner) {
    return <div>Partner not found...</div>;
  }
  return (
    <div className="partner-item">
      <div className="partner-item-overlay">
        <div className="partner-background">
          <img
            src={`https://imec-db.vercel.app${partner.banner}`}
            alt={partner.title}
          />
        </div>
        <div className="partner-logo">
          <img
            src={`https://imec-db.vercel.app${partner.logo}`}
            alt={partner.title}
          />
        </div>
      </div>
      <div className="partner-item-description">
        <div className="container">
          <div className="row">
            <SectionHeader
              span="our partner"
              head={partner.title}
              textPosition="center"
            />
          </div>
          <div className="row">
            <div className="col-12 col-md-6 partner-item-content">
              <h1>{partner.header}</h1>
              <p>{partner.content}</p>
              <p>
                For more information, visit{" "}
                <a
                  href={partner.company}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {partner.title}
                </a>
                .
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={`https://imec-db.vercel.app${partner.img}`}
                alt={partner.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerItem;
