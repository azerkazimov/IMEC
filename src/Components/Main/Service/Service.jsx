import SectionHeader from "../../SectionHeader/SectionHeader";
import ServiceItem from "./ServiceItem";

function Service() {
  return (
    <section className="service-section">
      <div className="container">
        <div className="row text-center">
          <SectionHeader span="Services" head="What we do" />
        </div>
        <div className="row">
          <ServiceItem
            head="Service"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure sint voluptatum laboriosam veritatis."
          />
          <ServiceItem
            head="Service"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure sint voluptatum laboriosam veritatis."
          />
          <ServiceItem
            head="Service"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, iure sint voluptatum laboriosam veritatis."
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
