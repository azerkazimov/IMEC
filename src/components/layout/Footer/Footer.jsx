import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=Subject&body=Body%20Text`;
    
    window.location.href = mailtoLink;

    setEmail('');
  };

  const handleWhatsappClick = () => {
    const phoneNumber = "+994777224001";
    const message = "Welcome to IMEC! I need more information";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <section className="footer mt-10">
      <div className="container footer-contact p-10">
        <div className="row">
          <div className="col-6 flex-container flex-align-center">
            <FaWhatsapp />
            <h2 className="ml-2">Request a free quote</h2>
          </div>
          <div className="col-6 flex-container flex-align-center flex-justify-end">
            <button className="btn wp" onClick={handleWhatsappClick}>
              What&apos;s App
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3037.7609244952005!2d49.87702017524469!3d40.41414677143994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1222%20Alasgar%20Qayibov%20str.%20Narimanov%20reg.%20Baku%20%2F%20Azerbaijan!5e0!3m2!1sru!2saz!4v1723872976777!5m2!1sru!2saz"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-12 col-md-8 bg-dark p-5">
          <div className="footer-blog">
            <div className="container">
              <div className="row">
                <div className="col-md-6 p-5">
                  <h4>IMEC activities</h4>
                  <p>
                    IMEC is a reliable partner in the field of consulting and
                    maintenance of industrial equipment, offering a wide range
                    of professional services to optimize and maintain production
                    processes.
                  </p>
                </div>
                <div className="col-md-6 p-5">
                  <h4>Additional Link</h4>
                  <ul>
                    <li>
                      <FaChevronRight />
                      <Link to="/about-imec/overview">About</Link>
                    </li>
                    <li>
                      <FaChevronRight />
                      <Link to="/maintenance">Services & Solution</Link>
                    </li>
                    <li>
                      <FaChevronRight />
                      <Link to="/partner">Partnership Agreement</Link>
                    </li>
                    <li>
                      <FaChevronRight />
                      <Link to="/products">Products & System</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 p-5">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <FaChevronRight />{" "}
                      <Link to="/maintenance/service/rdi-motion-amplification">
                        RDI Motion Amplification Service
                      </Link>
                    </li>
                    <li>
                      <FaChevronRight />{" "}
                      <Link to="/maintenance/service/advances-services">
                        Advanced Services
                      </Link>
                    </li>
                    <li>
                      <FaChevronRight />{" "}
                      <Link to="/maintenance/service/compressor-services">
                        Compressor Services
                      </Link>
                    </li>
                    <li>
                      <FaChevronRight />{" "}
                      <Link to="/maintenance/service/conveyor-belt">
                        Conveyor Belt Splicing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 p-5">
                  <h4>Contact Us</h4>
                  <p>
                    1222 Alasgar Qayibov str. Narimanov reg. Baku / Azerbaijan
                  </p>
                  <p>+994 51 240 46 50</p>
                  <p>+994 50 243 34 41</p>
                  <div className="flex-container">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    <button className="btn" onClick={sendEmail}>
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
