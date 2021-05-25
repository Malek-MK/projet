import * as yup from "yup";
export default Schema = yup.object().shape({
specialty: yup
    .string("check your Specialty")
    .required("City is required"), 
description: yup
    .string("check your Description")
    .required("City is required"), 
iban: yup
    .string("check your Description")
    .required("City is required"), 
swift: yup
    .string("check your Description")
    .required("City is required"), 
namebank: yup
    .string("check your Description")
    .required("City is required"), 
nameorganisation: yup
    .string("check your Description")
    .required("City is required"),  
sirensiret: yup
    .number("check your Siren/Siret format")
    .required("Siren/Siret is required")
    .positive(),
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
        tel: yup
        .number("check your number phone format")
        .required("Phone is required")  
        .positive()
        .test('len', 'Phone needs to be excatly 8 digits', val => val.toString().length === 8),
    email: yup.string().required().email(),
    country: yup
        .string("check your Country")
        .oneOf(['Tunisa', 'France'])
        .required("Is required"),    
        website: yup
        .string("check your WebSite")
        .required("WebSite is required"),   
})