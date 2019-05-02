import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./App.css";

const App = ({ values, errors, touched, isSubmitting }) => {
  return (
    <main>
      <div className="App">
        <Form>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <Field component="select" name="plan">
            <option value="one">one</option>
            <option value="two">two</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      </div>
    </main>
  );
};
const AppForm = withFormik({
  mapPropsToValues({ email, password, plan }) {
    return {
      email: email || "",
      password: password || "",
      plan: plan || "one"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid.")
      .required("Email is required."),
    password: Yup.string()
      .min(9, "Password must be 9 characters.")
      .required("Password is required.")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "prabhat5172992@gmail.com") {
        setErrors({ email: "That email is already taken." });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  }
})(App);
export default AppForm;
