import * as yup from "yup";


export default Step2 = yup.object().shape({
    infoB: yup
        .string("check your info")
        .oneOf(['Tunisia', 'Algeria','Marocco','France','Italy'])
        .required("Info is required"),
    vousB: yup
        .string("check your field")
        .oneOf(['CommercialCompany', 'IndividualEntrepreneu','CivilSociety','proLiberalProfessionflib1','Particular'])
        .required("Is required"),
    nomsoc1: yup
    .string("check your name societe")
    .required("name societe is required"), 
    formjurid1: yup
        .string("check your form")
        .oneOf(['Choose', 'SAS','SARL','SA','SNC','GIE'])
        .required("Forme Juridique is required"), 
    numid1:yup.number().required().positive().integer(),
    prerepleg1: yup
        .string("check your username")
        .required("Prénom is required"),     
    nomrepleg1: yup
        .string("check your name")
        .required("Name is required"),
    adresse1: yup
        .string("check your adresse")
        .required("Adresse is required"),  
    codepos1:yup.number().required().positive().integer(),        
    ville1: yup
        .string("check your ville")
        .required("Ville is required"),  
    email1:yup
        .string()
        .email("check your email format")
        .required("Email is required"), 
    tel1 :yup
        .number().required().positive().integer(), 
    /* 
    firstnamelawyer1: yup
        .string("check your name societe")
        .required("name societe is required"),
    namelawyer1: yup
        .string("check your name societe")
        .required("name societe is required"),   
    adresslawyer1: yup
        .string("check your name societe")
        .required("name societe is required"),   
    emaillawyer1: yup
        .string()
        .email("check your email format")
        .required("Email is required"),
    tellawyer1: yup
        .number("check your number phone format")
        .required("Phone is required"),
    test: yup
        .string()
        .required("A radio option is required")    
    */

  });