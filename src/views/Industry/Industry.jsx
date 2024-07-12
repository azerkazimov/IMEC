import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
import IndustryCard from "./IndustryCard";

function Industry() {
  const [industry, setIndustry] = useState([]);

  useEffect(() => {
    axios
      .get("https://imec-db.vercel.app/industies")
      .then((res) => setIndustry(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="industry">
        <div className="industry-overlay">
          <div className="industry-header">
            <PageHeader name="Industry" />
          </div>
        </div>
        <div className="industry-items">
          <SectionHeader
            span="industries"
            head="industries"
            textPosition="center"
          />
          <div className="container">
            {industry.map((item) => (
              <IndustryCard
                img={item.img}
                title={item.title}
                key={item.id}
                content={item.content}
                path={item.path}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Industry;
