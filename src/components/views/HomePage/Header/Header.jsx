import { useEffect, useRef } from "react";
import bannerVideo from "../../../../assets/imec_trim.mp4";
import Counter from "../../../common/Counter/Counter.jsx";
import { gsap } from "gsap";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const textElements = headerRef.current.querySelectorAll(".text");
    gsap.to(textElements, { duration: 1, y: "0%", stagger: 0.3 });
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="bg-video">
        <div className="overlay">
          <video src={bannerVideo} autoPlay loop muted />
        </div>
      </div>
      <div className="main-content">
        <div className="container row main-content-section p-10">
          <div className="col-md-8 offset-md-2">
            <h1><span className="text">Imec</span></h1>
            <h1><span className="text highlight">Engineering</span></h1>
            <h1><span className="text">Company</span></h1>
          </div>
        </div>
        <div className="container row">
          <div className="col-12 col-md-6 col-lg-3 p-4 ">
            <div className="main-content-counter">
              <Counter end={15} interval={100} />
              <p className="counter-header">Section</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-4">
            <div className="main-content-counter">
              <Counter end={100} interval={100} />
              <p className="counter-header">Section</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-4 ">
            <div className="main-content-counter">
              <Counter end={25} interval={100} />
              <p className="counter-header">Section</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-4">
            <div className="main-content-counter">
              <Counter end={55} interval={100} />
              <p className="counter-header">Section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
