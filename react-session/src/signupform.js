import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      names: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      names: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label href="names">Names</label>
      <input
        id="names"
        name="names"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.names}
      />
      {formik.errors.names ? <div>{formik.errors.names}</div> : null}
      <label href="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <label href="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
