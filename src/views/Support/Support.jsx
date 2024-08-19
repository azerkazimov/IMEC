import PageHeader from "../../components/layout/PageHeader/PageHeader";
import SectionHeader from "../../components/layout/SectionHeader/SectionHeader";

function Support() {
  return (
    <>
      <PageHeader name="We love to talk" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <SectionHeader
              span="sales"
              head="IMEC Customer Sales Support"
              content="At IMEC, our Customer Sales Support team is dedicated to providing exceptional service and tailored solutions to meet your industrial needs. We offer expert advice, prompt assistance, and comprehensive support throughout the sales process, ensuring you find the right products and services for your operations. Our team is committed to delivering excellence and building long-term partnerships with our customers, helping you achieve optimal efficiency and performance in your industry."
              btn="Sales"
              link="/support/sales"
            />
          </div>
          <div className="col-12 col-md-6">
            <SectionHeader
              span="Service"
              head="IMEC Customer Service Support"
              content="At IMEC, our Customer Service Support team is dedicated to ensuring your complete satisfaction. We provide expert guidance, prompt responses, and reliable assistance for all your needs. From troubleshooting technical issues to offering product information and support, our team is here to help you every step of the way. We prioritize building strong relationships with our clients and are committed to delivering exceptional service to enhance your overall experience with IMEC."
              btn="Support"
              link="/support/service"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
