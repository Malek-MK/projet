import * as yup from "yup";


export default UserSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("check your email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    password1: yup
      .string()
      .required("confirm password required ")
      .oneOf([yup.ref("password"), null], "password dont match"),
  });