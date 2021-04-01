import * as yup from "yup";


export default Step2 = yup.object().shape({
    infoB: yup
        .string("check your info")
        .oneOf(['tun1', 'alg1','mar1','fra1','ita1'])
        .required("Info is required"),
    vousB: yup
        .string("check your field")
        .oneOf(['soccom1', 'entind1','socciv1','proflib1','part1'])
        .required("Is required"),
    nomsoc1: yup
    .string("check your name societe")
    .required("name societe is required"), 
    formjurid1: yup
        .string("check your form")
        .oneOf(['choix1', 'sas1','sarl1','sa1','snc1','gie1'])
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
    tel1 :yup.number().required().positive().integer(), 

  });