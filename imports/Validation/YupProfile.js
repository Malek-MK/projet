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
email: yup
    .string().required().email(),
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
    .number()
    .required("Postal code is required")
    .positive()
    .test('len', 'Zip code needs to be excatly 4 digits', val => val.toString().length === 4),       
ville: yup
    .string("check your City")
    .required("City is required"),      
country: yup
    .string("check your Country")
    .oneOf(['Tunisia', 'France'])
    .required("Is required"), 
specialty: yup
    .string("check your Specialty")
    .required("City is required"), 
description: yup
    .string("check your Description")
    .required("City is required"), 
iban: yup
    .string("check your IBAN")
    .required("IBAN is required"), 
swift: yup
    .string("check your Swift")
    .required("Swift is required"), 
namebank: yup
    .string("check your Name bank")
    .required("Name bank is required"), 
nameorganisation: yup
    .string("check your Name of organisation")
    .required("Name of organisation is required"),  
sirensiret: yup
    .number("check your Siren/Siret format")
    .required("Siren/Siret is required")
    .positive(),
website: yup
    .string("check your WebSite")
    .required("WebSite is required"), 
})