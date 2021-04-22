import * as yup from "yup";

export default Schema = yup.object().shape({
  nom: yup
  .string()
  .trim()
  .matches(/^[a-zA-Z]*$/, "Only alphabets are allowed for this field ")
  .required(),
  adresse: yup
  .string()
  .required(),
  codepos: yup
  .number()
  .required("Postal code is required")
  .positive()
  .test('len', 'Zip code needs to be excatly 4 digits', val => val.toString().length === 4)
  ,
  ville: yup
  .string()
  .matches(/^[a-zA-Z0-9]*$/, "Only alphabets are allowed for this field ")
  .required(),
  numcart: yup
  .number("check your number cart format")
  .required("number cart is required")
  .positive()
  .integer()
  .test('len', 'number cart needs to be excatly 16 digits', val => val.toString().length === 16),
  cvc: yup
  .number()
  .required()
  .positive()
  .test('len', 'Zip code needs to be excatly 4 digits', val => val.toString().length === 4),  
  exp: yup
  .string()
  .required(),
  condgen: yup
    .boolean()
    .oneOf([true], 'Must Accept Conditions Génerale'),
  cartconf: yup
    .boolean()
    .oneOf([true], 'Must Accept la Charte de confidentialités'),
});