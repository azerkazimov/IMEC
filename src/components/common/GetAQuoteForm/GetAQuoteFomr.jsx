// GetAQuoteForm.js

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageHeader from "../../layout/PageHeader/PageHeader";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
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
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" placeholder="Your name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Your message"
            />
            <ErrorMessage name="message" component="div" />
          </div>

          <button type="submit">Get a Quote</button>
        </Form>
      </Formik>
    </div>
  </div>
);

export default GetAQuoteForm;
