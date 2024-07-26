import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/layout/Loader/Loader";
import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
import IndustryCard from "./IndustryCard";

function Industry() {
  const fetchIndusty = async () => {
    const { data } = await axios.get("https://imec-db.vercel.app/industies");
    return data;
  };
  const {
    data: industry,
    error,
    isLoading,
  } = useQuery("industry", fetchIndusty);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <Loader />;

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
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Industry;
