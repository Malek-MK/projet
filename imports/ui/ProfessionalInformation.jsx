import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfile';
import FileUploadComponent from '../ui/FileUpload';

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top', 
    }
  })

  
const ProfessionalInformation = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
    })
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
        
        <div class="col-sm-9">
        <div className="card">
        
        <div class="d-flex align-items-center">
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
        
        <div class="card-body">
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
    <div class="form-floating">
  <textarea class="form-control bg-light" name="description" ref={register} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Tap your bio</label>
  <p className="text-danger">{errors.description?.message}</p>
    </div>
           
    <div className="form-group mb-3 mt-4">
    <span>Click on it to upload your CV. <small className="text-secondary">(Supported formats: pdf, doc, jpg, png ...)</small></span>
          <FileUploadComponent/>
        </div>
    <div className="d-flex justify-content-between w-50 mb-5 mt-4">
       <label>Language :</label>
       <div>
       <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="frensh" ref={register} value="frensh"></input>
  <label class="form-check-label" for="inlineCheckbox1">FR</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name="english" ref={register} value="english"></input>
  <label class="form-check-label" for="inlineCheckbox2">EN</label>
</div>
       </div>
    </div>
    <div>
    <h5>Professional experiences</h5>
    <label className="mt-2">Title</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control bg-light" name="titleExp" ref={register} placeholder="Tap your title"></input>
  <button class="btn btn-outline-danger" type="button" style={{marginLeft:10}}>Delete</button>
</div>
<div class="row">
  <div class="col">
      <label>Start date</label>
    <input type="date" class="form-control bg-light" name="startdateExp" ref={register} placeholder="YY/MM" />
  </div>
  <div class="col">
  <label>End date</label>
    <input type="date" class="form-control bg-light" placeholder="YY/MM" name="enddateEp" ref={register}/>
  </div>
</div>
<label className="mt-3">Description</label>
    <div class="form-floating">
  <textarea class="form-control bg-light" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Tap your Description</label>
    </div>
    <button className="btn btn-primary mt-4">Add experience</button>
    </div>
    <div className="mt-5">
    <h5>Training</h5>
    <label className="mt-2">Title</label>
    <div class="input-group mb-3">
  <input type="text" class="form-control bg-light" name="titleFor" ref={register} placeholder="Tap your title"></input>
  <button class="btn btn-outline-danger" type="button" style={{marginLeft:10}}>Delete</button>
</div>
<div class="row">
  <div class="col">
      <label>Start date</label>
    <input type="date" class="form-control bg-light" placeholder="YY/MM" name="startdateFor" ref={register}/>
  </div>
  <div class="col">
  <label>End date</label>
    <input type="date" class="form-control bg-light" placeholder="YY/MM" name="enddateFor" ref={register}/>
  </div>
</div>
<label className="mt-3">Description</label>
    <div class="form-floating">
  <textarea class="form-control bg-light" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Tap your Description</label>
    </div>
    <button className="btn btn-primary mt-4">Add training</button>
    </div>

            </form>
        </div>
        <div class="card-footer">
        <button type="submit" className="btn btn-info pull-right mt-3 mb-3">Save</button>
        </div>
        </div>
    </div>
        
    )
}

export default ProfessionalInformation
