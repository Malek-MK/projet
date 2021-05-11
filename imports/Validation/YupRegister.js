import * as yup from "yup";

export default Schema = yup.object().shape({
  name: yup.string()
  .trim()
  .matches(/^[a-zA-Z0-9]*$/, "Only alphabets are allowed for this field ")
  .required(),
  email: yup.string().required().email(),
  password: yup
      .string()
      .required()
      .min(6)
      .oneOf([yup.ref("password"), null], "password dont match"),
  password1: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "password dont match"),
  verif: yup
      .boolean()
      .oneOf([true], 'Must Accept Terms and Conditions'),    
});