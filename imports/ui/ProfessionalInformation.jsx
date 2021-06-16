import React, { useState } from 'react'
import { useForm, useFieldArray} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfile';
import FileUploadComponent from '../ui/FileUpload';
import { Meteor } from 'meteor/meteor';
import Experience from '../ui/Experience';
import Training from '../ui/Training';
const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top', 
    }
  })

  
const ProfessionalInformation = () => {
    const {  register, control, handleSubmit, errors} = useForm({
        resolver: yupResolver(Schema),
        defaultValues: {
          test: [{ titleExp: "Tap your title", startdateExp: "jj/mm/aaaa", enddateEp: "jj/mm/aaaa", description: "Tap your description" }],
          test1: [{ titleExp: "Tap your title", startdateExp: "jj/mm/aaaa", enddateEp: "jj/mm/aaaa", description: "Tap your description" }]

        }
    })
    const { fields, append, remove,fields1 } = useFieldArray(
      {
        control,
        name: "test",
      }
    );
    
    const onSubmit=(data)=>{ 
        if(data){
          Meteor.call('insertProfInfo',{data,id},(err)=>{
            if(err){
              notyf.error('Inserted Professional Information Failed')
              console.log(err)
            }else{
              notyf.success('Inserted Professional Information with success')
            }
          })
        }
      }
    return (
        
        <div className="col-sm-9">
        <div className="card">
        
        <div className="d-flex align-items-center">
           <div className="container mt-3">
           <div>
            <b>Professional information</b>
            <br></br>
            <small className="text-secondary">Update your professional background</small>
            <button className="btn btn-primary pull-right" style={{marginLeft:"10px"}}>submit my application</button>
            <button className="btn btn-info pull-right">Save</button>
            </div> 
           </div>
        </div>
        
        <div className="card-body">
        <div className="alert alert-warning mt-3 mb-4" role="alert">
              <i className="fa fa-exclamation-triangle text-warning fa-2x" aria-hidden="true"></i>
              <span> Would you like to be one of the approved mediators on our platform and receive mediation requests from SpeedSolution? Please complete the form below so that we can assess your application. Once this has been validated, we will contact you to guide you in getting started with our application.
             <br></br>
             <b>In any case, this information is only used for evaluation purposes by our team. They will under no circumstances be published or distributed without your prior consent.</b>
              </span>
              </div> 
            <form onSubmit={handleSubmit(onSubmit)}>
            <label >Your Specialty</label>
    <input type="text" name="specialty" ref={register} className="form-control mb-4 bg-light" placeholder="Tap your specialty"></input>
    <p className="text-danger">{errors.specialty?.message}</p>
    <label>Your Bio in a few words</label>
    <div className="form-floating">
  <textarea className="form-control bg-light" name="description" ref={register} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label htmlFor="floatingTextarea2">Tap your bio</label>
  <p className="text-danger">{errors.description?.message}</p>
    </div>
           
    <div className="form-group mb-3 mt-4">
    <span>Click on it to upload your CV. <small className="text-secondary">(Supported formats: pdf, doc, jpg, png ...)</small></span>
          <FileUploadComponent/>
        </div>
    <div className="d-flex justify-content-between w-50 mb-5 mt-4">
       <label>Language :</label>
       <div>
       <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="frensh" ref={register} value="frensh"></input>
  <label className="form-check-label" htmlFor="inlineCheckbox1">FR</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="english" ref={register} value="english"></input>
  <label className="form-check-label" htmlFor="inlineCheckbox2">EN</label>
</div>
       </div>
    </div>
    <Experience/>
   <Training/>

            </form>
        </div>
        <div className="card-footer">
        <button type="submit" className="btn btn-info pull-right mt-3 mb-3">Save</button>
        </div>
        </div>
    </div>
        
    )
}

export default ProfessionalInformation
