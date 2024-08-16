import rdi from "../../../../assets/images/rdi.jpg";
import comressor from "../../../../assets/images/compressor.jpg";
import acceptance from "../../../../assets/images/acceptance_3.jpg";
import monitoring from "../../../../assets/images/acceptance_5.jpg";
import advance from "../../../../assets/images/advanced.jpg";
import dynamic from "../../../../assets/images/dynamic_5.jpg";
import ServiceItem from "./ServiceItem.jsx";
import SectionHeader from "../../../layout/SectionHeader/SectionHeader.jsx";

function Service() {
  return (
    <section className="service">
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
            img={rdi}
            head="RDI Motion Amplification Service"
            content=" IMEC offers revolutionary RDI Motion Amplification, a cutting-edge technology that magnifies minute movements, allowing for precise identification and diagnosis of machinery issues."
          />
          <ServiceItem
            img={monitoring}
            head=" Periodic Status Monitoring"
            content="IMEC’s Periodic Status Monitoring service ensures continuous machinery health through regular checks and evaluations, helping to prevent unexpected disruptions and costly downtime."
          />
          <ServiceItem
            img={advance}
            head="Advanced Services"
            content="IMEC provides Advanced Services that tackle the most complex maintenance challenges, offering innovative solutions that go beyond traditional methods to enhance system reliability and performance."
          />
          <ServiceItem
            img={acceptance}
            head="Precision Maintenance Services"
            content="IMEC's Precision Maintenance Services are focused on achieving the highest levels of accuracy and efficiency, ensuring your equipment operates at peak performance with minimal downtime."
          />
          <ServiceItem
            img={comressor}
            head="Compressor Services"
            content=" IMEC's Compressor Services are tailored to enhance the efficiency, reliability, and longevity of your compressor systems, providing comprehensive maintenance and repair solutions."
          />
          <ServiceItem
            img={dynamic}
            head="Vibration Analysis Services"
            content="IMEC offers expert Vibration Analysis Services to monitor and evaluate the health of your equipment, ensuring early detection of potential mechanical issues for enhanced reliability and performance."
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
