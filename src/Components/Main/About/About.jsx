import SectionHeader from "../../SectionHeader/SectionHeader";
import about from "../../../assets/images/about.jpg";
import Counter from "../../Counter/Counter";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <div className="about-image">
              <img src={about} alt="about" />
              <div className="about-counter">
                <Counter end={7} interval={500} />
                <p>Project of successful work</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 flex-container flex-align-center">
            <SectionHeader
              span="About us"
              head="Great Experience"
              content="Welcome to Industrial Mechanical Engineering Company, your trusted partner in industrial equipment solutions. We specialize in providing top-quality spare parts for industrial machinery, comprehensive equipment repair services, and cutting-edge diagnostic solutions. With a team of seasoned engineers boasting over a decade of experience, particularly in the demanding mining industry, we bring unparalleled expertise to every project. Our commitment to excellence is evident in every aspect of our work. At Industrial Mechanical Engineering Company, quality is non-negotiable. We source only the finest parts and materials to ensure optimal performance and longevity for your equipment. Our meticulous attention to detail means we don't just address symptoms; we diagnose the root causes of issues, providing innovative solutions that stand the test of time. Explore our comprehensive range of services and discover why leading industrial businesses rely on IMEC for unparalleled quality and expertise."
              btn="Watch video"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
