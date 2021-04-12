import * as yup from "yup";


export default UserSchema = yup.object().shape({
    name: yup.string().required("Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup
      .string()
      .email("check your email format")
      .required("Email is required"),
    password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
    password1: yup
      .string()
      .required("confirm password required ")
      .oneOf([yup.ref("password"), null], "password dont match"),
  });