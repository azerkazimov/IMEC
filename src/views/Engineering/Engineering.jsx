import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
import Catalogue from "../Catalogue/Catalogue";

const fetchPartner = async () => {
  const { data } = await axios.get("https://imec-db.vercel.app/partner");
  return data;
};

const fetchIndustry = async () => {
  const { data } = await axios.get("https://imec-db.vercel.app/industies");
  return data;
};

function Engineering() {
  const { data: partner, error: partnerError, isLoading: partnerLoading } = useQuery("partner", fetchPartner);
  const { data: industry, error: industryError, isLoading: industryLoading } = useQuery("industries", fetchIndustry);

  if (partnerLoading || industryLoading) return <div>Loading...</div>;
  if (partnerError) return <div>Error fetching partners: {partnerError.message}</div>;
  if (industryError) return <div>Error fetching industries: {industryError.message}</div>;

  return (
    <>
      <PageHeader name="IMEC Engineering Company" />
      <div className="engineering">
        <div className="partnership">
          <div className="container">
            <SectionHeader
              span="Partnership"
              textPosition="center"
              head="Partnership"
            />
            <div className="row">
              {partner.map((item) => (
                <div
                  className="col-12 col-md-6 col-lg-3 partner-icon"
                  key={item.id}
                >
                  <Link to={`/partner/${item.path}`}>
                    <img
                      src={`https://imec-db.vercel.app${item.logo}`}
                      alt={item.title}
                    />
                  </Link>
                  <div>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="catalogue">
          <Catalogue />
        </div>
        <div className="industries">
          <div className="container">
            <SectionHeader
              span="industries"
              textPosition="center"
              head="industries"
            />
            <div className="row">
              {industry.map((item) => (
                <div
                  className="col-12 col-md-4 industry-item p-3"
                  key={item.id}
                >
                  <Link to={`/industries/${item.path}`}>
                    <div className="industry-img">
                      <img
                        src={`https://imec-db.vercel.app${item.img}`}
                        alt=""
                      />
                    </div>
                    <div className="">{item.title}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Engineering;
