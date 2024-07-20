import SectionHeader from "../../components/layout/SectionHeader/SectionHeader.jsx";
import partnerImg from "../../assets/images/partnership.jpg";
import sectionImage from "../../assets/images/partner-1.jpg";
import sectionImageTwo from "../../assets/images/partner-3.jpg";
import rating from "../../assets/images/rating.jpg";
import benefit from "../../assets/images/benefit.jpg";

function Partner() {
  return (
    <>
      <section className="partnership-agreement">
        <div className="partner-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 flex-container flex-column flex-justify-start flex-align-start">
                <SectionHeader
                  head="Become an IMEC partner"
                  span="Partnership agreement"
                  textColor="white"
                />
                <button className="btn mx-4">Learn More</button>
              </div>
              <div className="col-12 col-md-6">
                <div className="partner-image">
                  <img src={partnerImg} alt="Partnership agreement" />
                </div>
              </div>
            </div>
          </div>
          <div className="waves">
            <div className="wave-shape shape-one">
              <div className="wave wave-one"></div>
            </div>
            <div className="wave-shape shape-two">
              <div className="wave wave-two"></div>
            </div>
            <div className="wave-shape shape-three">
              <div className="wave wave-three"></div>
            </div>
          </div>
        </div>
        <div className="partner-content">
          <div className="container">
            <SectionHeader
              span="choose us"
              head="Why Partner with Us?"
              textPosition="center"
            />
            <div className="row my-5">
              <div className="col-12 col-md-6">
                <img src={sectionImage} alt="Why choose us" />
              </div>
              <div className="col-12 col-md-6 px-5 description">
                <h4>1. Expertise and Innovation</h4>
                <p>
                  Our team of highly skilled engineers and technicians brings
                  decades of experience in industrial mechanical engineering. We
                  are at the forefront of innovation, continuously adopting the
                  latest technologies and methodologies to deliver superior
                  solutions. Partnering with us means gaining access to a wealth
                  of knowledge and expertise that can transform your operations.
                </p>
                <h4>2. Customized Solutions</h4>
                <p>
                  We understand that every business has unique needs and
                  challenges. Our approach is tailored to your specific
                  requirements, ensuring that our solutions are perfectly
                  aligned with your goals. Whether you need design,
                  manufacturing, installation, or maintenance services, we work
                  closely with you to develop customized strategies that deliver
                  optimal results.
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 col-md-6 px-5 description">
                <h4>3. Quality and Reliability</h4>
                <p>
                  Quality and reliability are the cornerstones of our
                  operations. We adhere to the highest industry standards and
                  employ rigorous quality control processes to ensure that every
                  project meets or exceeds your expectations. Our commitment to
                  excellence ensures that you receive durable, efficient, and
                  cost-effective solutions.
                </p>
                <h4>4. Comprehensive Services</h4>
                <p>
                  As a full-service IMEC, we offer a comprehensive range of
                  services, including:
                </p>
                <ul>
                  <li>
                    <span>Design and Engineering: </span>Innovative design
                    solutions tailored to your specifications.
                  </li>
                  <li>
                    <span>Manufacturing:</span> High-precision manufacturing
                    using advanced technologies.
                  </li>
                  <li>
                    <span>Installation:</span> Professional installation
                    services ensuring seamless integration.
                  </li>
                  <li>
                    <span>Maintenance and Support:</span> Ongoing maintenance
                    and support to maximize the lifespan and performance of your
                    equipment.
                  </li>
                </ul>
                <h4>5. Sustainable Practices </h4>
                <p>
                  We are committed to sustainability and environmental
                  responsibility. Our solutions are designed to minimize
                  environmental impact, reduce energy consumption, and promote
                  sustainable practices. Partnering with us helps you achieve
                  your sustainability goals while enhancing operational
                  efficiency.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <img src={sectionImageTwo} alt="Why choose us" />
              </div>
            </div>
            <SectionHeader
              head="Benefits of Partnership"
              textPosition="center"
            />
            <div className="row my-5">
              <div className="col-12 col-md-6">
                <img src={rating} alt="Why choose us" />
              </div>
              <div className="col-12 col-md-6 px-5 description">
                <h4>1. Competitive Advantage</h4>
                <p>
                  Gain a competitive edge by leveraging our advanced engineering
                  solutions and industry expertise. Our innovative approaches
                  and high-quality products can help you outperform competitors
                  and meet the evolving demands of the market.
                </p>
                <h4>2. Cost Savings</h4>
                <p>
                  Our efficient processes and optimized solutions lead to
                  significant cost savings. By improving operational efficiency
                  and reducing downtime, we help you achieve higher productivity
                  and profitability.
                </p>
                <h4>3. Risk Mitigation</h4>
                <p>
                  Partnering with a reliable IMEC reduces the risks associated
                  with mechanical engineering projects. Our proven track record,
                  stringent quality control, and robust support systems ensure
                  that your projects are completed on time, within budget, and
                  to the highest standards.
                </p>
                <h4>4. Long-Term Success</h4>
                <p>
                  We are committed to building long-term partnerships based on
                  trust, collaboration, and mutual success. Our goal is to
                  support your business growth and help you achieve sustained
                  success in the competitive industrial landscape.
                </p>
              </div>
            </div>

            <div className="row my-10">
              <div className="col-12 col-md-6 px-5 description">
                <h2>How to Become a Partner</h2>

                <h4>1. Initial Consultation</h4>
                <p>
                  Contact us to schedule an initial consultation. We will
                  discuss your needs, challenges, and goals to understand how we
                  can best support your business.
                </p>

                <h4>2. Proposal and Agreement</h4>
                <p>
                  Based on our consultation, we will develop a detailed proposal
                  outlining our recommended solutions and partnership terms.
                  Once we reach an agreement, we will formalize the partnership.
                </p>

                <h4>3. Project Planning and Execution</h4>
                <p>
                  Our team will work closely with you to plan and execute the
                  project, ensuring seamless integration and minimal disruption
                  to your operations.
                </p>

                <h4>4. Ongoing Support</h4>
                <p>
                  As a partner, you will receive ongoing support and maintenance
                  services to ensure the continued success and optimal
                  performance of your mechanical systems.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <img src={benefit} alt="Why choose us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partner;
