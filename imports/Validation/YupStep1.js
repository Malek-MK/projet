import * as yup from "yup";


export default Step1 = yup.object().shape({
    infoA: yup
        .string("check your info")
        .oneOf(['Tunisia', 'Algeria','Marocco','France','Italy'])
        .required("Info is required"),
    vousA: yup
        .string("check your field")
        .oneOf(['CommercialCompany', 'IndividualEntrepreneur','CivilSociety','LiberalProfession','Particular'])
        .required("Is required"),
    nomsoc: yup
    .string("check your name societe")
    .required("Company Name is required"), 
    formjurid: yup
        .string("check your form")
        .oneOf(['Choose', 'SAS','SARL','SA','SNC','GIE'])
        .required("Forme Juridique is required"), 
    numid: yup
    .number("check your Num ID")
    .required("NumberId is required")
    .positive()
    .integer(),
    prerepleg: yup
        .string("check your username")
        .required("First name of the legal representative is required"),     
    nomrepleg: yup
        .string("check your name")
        .required("Name of legal representative is required"),
    adresse: yup
        .string("check your adresse")
        .required("Registered Address is required"),  
    codepos: yup
        .number("check your code postal format")
        .required("Postal code is required")
        .positive()
        .integer(),        
    ville: yup
    .string("check your City")
    .required("City is required"),  
    email:yup
    .string()
    .email("check your email format")
    .required("Email is required"), 
    tel: yup
        .number("check your number phone format")
        .required("Phone is required")  
        .positive()
        .integer(),
   /*

 firstnamelawyer: yup
        .string("check your name societe")
        .required("name societe is required"),
    namelawyer: yup
        .string("check your name societe")
        .required("name societe is required"),   
    adresslawyer: yup
        .string("check your name societe")
        .required("name societe is required"),   
    emaillawyer: yup
        .string()
        .email("check your email format")
        .required("Email is required"),
    tellawyer: yup
        .number("check your number phone format")
        .required("Phone is required"),  
    test: yup
        .string()
        .required("A radio option is required")
   */
  });