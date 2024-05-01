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
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum
                    suspendisse ultrices gravida."
              btn="Watch video"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
