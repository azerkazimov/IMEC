// GetAQuoteForm.js

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../../layout/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
  position: Yup.string().required("Position is required"),
  company: Yup.string().required("Company is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
  company: "",
  position: "",
};

const handleSubmit = (values, { resetForm }) => {
  console.log("Form Submitted", values);
  alert("Quote request sent successfully!");
  resetForm();
};

const GetAQuoteForm = () => (
  <div>
    <PageHeader name="Get a Quote" />
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group p-5 my-10">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="form-control"
                />
                <ErrorMessage
                  className="form-error"
                  name="name"
                  component="div"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <label htmlFor="company">Comnapy name</label>
                <Field
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  className="form-control"
                />
                <ErrorMessage
                  className="form-error"
                  name="company"
                  component="div"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <label htmlFor="position">Position</label>
                <Field
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Your position"
                  className="form-control"
                />
                <ErrorMessage
                  className="form-error"
                  name="position"
                  component="div"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="form-error"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="10"
                  className="form-control"
                  style={{ minWidth: "100%", maxWidth: "100%" }}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="form-error"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 offset-md-3">
                <Link to="">
                  <button type="submit" className="btn">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  </div>
);

export default GetAQuoteForm;
