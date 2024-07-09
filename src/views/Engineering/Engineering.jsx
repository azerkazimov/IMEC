import { useEffect, useState } from "react";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
import axios from "axios";
import Catalogue from "../Catalogue/Catalogue";

function Engineering() {
  const [partner, setPartner] = useState([]);
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/partner")
      .then((res) => {
        setPartner(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/industies")
      .then((res) => {
        setIndustry(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
                <div className="col-12 col-md-6 col-lg-3 partner-item" key={item.id}>
                  <img src={`https://imec-db.vercel.app${item.img}`} alt={item.title} />
                  <div className="">{item.title}</div>
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
                <div className="col-12 col-md-4 industry-item p-3" key={item.id}>
                  <img src={`https://imec-db.vercel.app${item.img}`} alt="" />
                  <div className="">{item.title}</div>
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
