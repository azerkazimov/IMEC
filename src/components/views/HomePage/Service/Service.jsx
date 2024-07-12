import { FaTractor } from "react-icons/fa";
import SectionHeader from "../../../layout/SectionHeader/SectionHeader.jsx";
import ServiceItem from "./ServiceItem.jsx";
import { GiMining, GiOilPump } from "react-icons/gi";

function Service() {
  return (
    <section className="service-section">
      <div className="container">
        <div className="row text-center">
          <SectionHeader
            span="Services"
            head="What we do"
            textPosition="center"
          />
        </div>
        <div className="row">
          <ServiceItem
            icon={<GiMining />}
            head="Mining"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure sint voluptatum laboriosam veritatis."
          />
          <ServiceItem
            icon={<GiOilPump />}
            head="Oil & Gas"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure sint voluptatum laboriosam veritatis."
          />
          <ServiceItem
            icon={<FaTractor />}
            head="Agro"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure sint voluptatum laboriosam veritatis."
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
