import * as yup from "yup";


export default Step2 = yup.object().shape({
    objlitige: yup
    .string("check your litige")
    .oneOf(['Contractual', 'Commercial','Neighborhood','Coownership','Consumption','Construction','Other'])
    .required("Must Select One of all"),  
    desc: yup
    .string("check your description")
    .required("description is required"),
    verif: yup
    .boolean()
    .oneOf([true], 'Must Accept Terms and Conditions'),
});
