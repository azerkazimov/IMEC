import PageHeader from "../../components/layout/PageHeader/PageHeader.jsx";

function Company() {
  return (
    <div className="company-page">
      <PageHeader name="About IMEC" />
      <div className="company-content container">
        <p>
          IMEC is a reliable partner in the field of consulting and maintenance
          of industrial equipment, offering a wide range of professional
          services to optimize and maintain production processes.
        </p>
        <h2>Our main activities include:</h2>
        <ul>
          <li>
            <p>
              <strong>Consulting and equipment supply:</strong> We assist in the
              selection and delivery of equipment and spare parts, ensuring that
              your production processes meet the requirements and guarantee the
              high quality of the solutions supplied.
            </p>
          </li>
          <li>
            <p>
              <strong>Commissioning and Preventive Maintenance:</strong> Our
              team performs commissioning and also offers regular preventative
              maintenance services to keep equipment in perfect working order
              and prevent potential breakdowns.
            </p>
          </li>
          <li>
            <p>
              <strong>Diagnostics and Maintenance:</strong> We perform vibration
              measurements, coupler alignments and equipment balancing, and use
              advanced artificial intelligence technology to accurately identify
              and correct problems.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Implementation of unscheduled projects and equipment repairs:
              </strong>{" "}
              We take on the tasks of implementing unscheduled projects and
              equipment repairs, providing effective solutions to complex
              technical challenges.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Installation of monitoring systems and online tracking of
                equipment condition:
              </strong>{" "}
              We install periodic vibration measurement systems and provide
              online monitoring of equipment condition, which allows you to
              quickly respond to changes and maintain it in working condition.
            </p>
          </li>
          <li>
            <p>
              <strong>Design and installation of mining plants:</strong> We
              offer complete turnkey solutions for the design and installation
              of mining plants and other industrial facilities, providing a full
              cycle from concept to implementation.
            </p>
          </li>
          <li>
            <p>
              <strong>Mining Plant Process Management:</strong> Our experts
              manage mining plant processes to ensure efficient operation and
              high quality standards.
            </p>
          </li>
        </ul>
        <p>
          IMEC combines professionalism, innovation, and reliability, striving
          for continuous improvement and meeting the needs of our customers in
          the field of industrial equipment.
        </p>
      </div>
    </div>
  );
}

export default Company;
