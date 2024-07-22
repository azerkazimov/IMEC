import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";
import contact from "../../../public/images/contact-us.jpg";
import PropTypes from "prop-types";

function SingleSupport({ header, number, content }) {
  return (
    <>
      <PageHeader name="Sales" />
      <div className="support">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 support-contact">
              <SectionHeader
                head={`${header} info contact`}
                content={content}
              />
              <div className="container">
                <h3>Call us</h3>
                <h4>{number}</h4>
              </div>
            </div>
            <div className="col-12 col-md-4 p-5 my-5 support-info">
              <img src={contact} alt="" />
              <div className="support-adress">
                <h4>Adress</h4>
                <ul>
                  <li>Baku, Azerbaijan</li>
                  <li>Narimanov District, Alasgar Gayibov St., Dernegul</li>
                </ul>
                <h4>Email</h4>
                <ul>
                  <li>info@imec.az</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SingleSupport.propTypes = {
  header: PropTypes.string,
  number: PropTypes.string,
  content: PropTypes.string,
};

export default SingleSupport;
