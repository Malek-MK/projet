import * as yup from "yup";
export default Schema = yup.object().shape({
    firstname: yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9]*$/, "Only alphabets are allowed for this field ")
    .required(),
    lastname: yup.string()
    .trim()
    .matches(/^[a-zA-Z0-9]*$/, "Only alphabets are allowed for this field ")
    .required(),
    tel: yup
        .number("check your number phone format")
        .required("Phone is required")  
        .positive()
        .test('len', 'Phone needs to be excatly 8 digits', val => val.toString().length === 8),
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
    adresse: yup
        .string("check your adresse")
        .required("Registered Address is required"),  
    codepos: yup
        .number("check your code postal format")
        .required("Postal code is required")
        .positive()
        .test('len', 'Zip code needs to be excatly 4 digits', val => val.toString().length === 4),       
    ville: yup
        .string("check your City")
        .required("City is required"),      
    country: yup
        .string("check your Country")
        .oneOf(['Tunisa', 'France'])
        .required("Is required"), 


})