import { FaChevronRight } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.7346014103387!2d49.83649331523463!3d40.37841947936862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8336c3e4e3%3A0xd7e5d585ed54c4b6!2zMjggTWF5IFN0LCBCYWt1LCDQnNCw0LvQvtCy0L7QvQ!5e0!3m2!1sen!2saz!4v1628560524411!5m2!1sen!2saz"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div className="col-12 col-md-8 bg-inky p-5">
          <div className="footer-blog">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-5">
                  <h4>IMEC activities</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum tempore reiciendis ea illum, consequatur enim ut
                    officiis.
                  </p>
                </div>
                <div className="col-md-6 p-5">
                  <h4>Additional Link</h4>
                  <ul>
                    <li>
                      <FaChevronRight />
                      <Link to="/company">About</Link>
                    </li>
                    <li>
                      <FaChevronRight />
                      <Link to="/service">Services</Link>
                    </li>
                    <li>
                      <FaChevronRight />
                      <Link to="/industry">Industry</Link>
                    </li>
                    <li>
                      <FaChevronRight />
                      <Link to="/products">Product</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 p-5">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <FaChevronRight /> <Link to="/">Equipment</Link>
                    </li>
                    <li>
                      <FaChevronRight /> <Link to="/">Maintenance</Link>
                    </li>
                    <li>
                      <FaChevronRight /> <Link to="/">Inspection</Link>
                    </li>
                    <li>
                      <FaChevronRight /> <Link to="/">Solution</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 p-5">
                  <h4>Contact Us</h4>
                  <p>123 Street, Baku Azerbaijan</p>
                  <p>+994 12 345 67 89</p>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      className="form-control"
                    />
                    <button className="btn">
                      <TbSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
