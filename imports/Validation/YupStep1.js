import * as yup from "yup";


export default Step1 = yup.object().shape({
    infoA: yup
        .string("check your info")
        .oneOf(['tun', 'alg','mar','fra','ita'])
        .required("Info is required"),
    vousA: yup
        .string("check your field")
        .oneOf(['soccom', 'entind','socciv','proflib','part'])
        .required("Is required"),
    nomsoc: yup
    .string("check your name societe")
    .required("name societe is required"), 
    formjurid: yup
        .string("check your form")
        .oneOf(['choix', 'sas','sarl','sa','snc','gie'])
        .required("Forme Juridique is required"), 
    numid: yup
        .number("check your Num ID")
        .required("Num Id is required"), 
    prerepleg: yup
        .string("check your username")
        .required("Prénom is required"),     
    nomrepleg: yup
        .string("check your name")
        .required("Name is required"),
    adresse: yup
        .string("check your adresse")
        .required("Adresse is required"),  
    codepos: yup
        .number("check your code postal format")
        .required("Code Postal is required"),         
    ville: yup
    .string("check your ville")
    .required("Ville is required"),  
    email:yup
    .string()
    .email("check your email format")
    .required("Email is required"), 
    tel: yup
        .number("check your number phone format")
        .required("Phone is required"),  

  });