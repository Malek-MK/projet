import React from 'react'
import { useForm, useFieldArray} from "react-hook-form";
import Schema from '../Validation/YupProfile';
import { yupResolver } from '@hookform/resolvers/yup';

const Training = () => {
    const {  register, control, handleSubmit, errors} = useForm({
        resolver: yupResolver(Schema),
        defaultValues: {
          test: [{ titleExp: "Tap your title", startdateExp: "jj/mm/aaaa", enddateEp: "jj/mm/aaaa", description: "Tap your description" }],
        }
    })
    const { fields, append, remove,fields1 } = useFieldArray(
        {
          control,
          name: "test",
        }
      );
    return (
        <div className="mt-5">
        <h5>Training</h5>
        {fields.map((item, index) => {
              return (
                <div key={item.id}>
                   <label className="mt-4">Title</label>
                 <div className="input-group mb-3">
      <input type="text" className="form-control bg-light" name={`test[${index}].titleTrain`} ref={register} placeholder="Tap your title"></input>
      <button className="btn btn-outline-danger" type="button" style={{marginLeft:10}} onClick={() => remove(index)}>Delete</button>
    </div>
    <div className="row">
      <div className="col">
          <label>Start date</label>
        <input type="date" className="form-control bg-light" name={`test[${index}].startdateTrain`} ref={register} placeholder="YY/MM" />
      </div>
      <div className="col">
      <label>End date</label>
        <input type="date" className="form-control bg-light" placeholder="YY/MM" name={`test[${index}].enddateTrain`} ref={register}/>
      </div>
    </div>
    <label className="mt-3">Description</label>
        <div className="form-floating">
      <textarea className="form-control bg-light" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} name={`test[${index}].descriptionTrain`}></textarea>
      <label htmlFor="floatingTextarea2">Tap your Description</label>
        </div>
        </div>
              );
            })}
    <button className="btn btn-primary mt-4" type="button"
              onClick={() => {
                append({ titleTrain: "", startdateTrain: "",enddateTrain: "",descriptionTrain:""});
              }}>Add Training</button>    
              </div>
    )
}

export default Training
