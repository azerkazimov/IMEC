import bannerVideo from "../../assets/Mastering Milling_ Flotation Concentration.mp4";
import Counter from "../Counter/Counter";

function Header() {
  return (
    <div id="header" className="header">
      <div className="bg-video">
        <div className="overlay">
          <video src={bannerVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1>
                Industrial Mechanical{" "}
                <span className="highlight">Engineering</span> Company
              </h1>
            </div>
            <div className="col-12 col-md-6 flex-container flex-align-center">
              <div className="row">
                <div className="col-6 p-4 ">
                  <div className="main-counter">
                    <Counter end={15} interval={100} />
                    <p className="counter-header">Section</p>
                  </div>
                </div>
                <div className="col-6 p-4">
                  <div className="main-counter">
                    <Counter end={100} interval={100} />
                    <p className="counter-header">Section</p>
                  </div>
                </div>
                <div className="col-6 p-4 ">
                  <div className="main-counter">
                    <Counter end={25} interval={100} />
                    <p className="counter-header">Section</p>
                  </div>
                </div>
                <div className="col-6 p-4">
                  <div className="main-counter">
                    <Counter end={55} interval={100} />
                    <p className="counter-header">Section</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
