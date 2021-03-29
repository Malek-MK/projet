import * as yup from "yup";


export default Step2 = yup.object().shape({
    objlitige: yup
    .string("check your litige")
    .oneOf(['contra', 'comm','vois','copro','conso','const'])
    .required(),  
    desc: yup
    .string("check your description")
    .required("description is required"),
});