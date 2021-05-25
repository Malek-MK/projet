import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfileMediator';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top', 
  }
})
const CompanyInformation = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
    })
    const onSubmit=(data)=>{
        if(data){
            Meteor.call('insertCompInfo', { id: user._id, data,usr }, (err) => {
                if (err) {
                  console.log('Updated failed')
                  notyf.error("Updated failed")
                }
                else {
                  console.log('Updated with success')
                  setShow(false);
                  notyf.success("Updated with success")
                  fetch();
                }
              });
        }
      }
    return (
        <div class="col-sm-9">
            <div className="card">
            
            <div className="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>Organization contact details</b>
                <br></br>
                <small className="text-secondary">Update your organization's contact details</small>
                <button type="submit" className="btn btn-info pull-right">Save</button>
                </div> 
               </div>
            </div>

            
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
       
        <label >Name of the organization :</label>
        <input type="text" name="nameorganisation" ref={register} className="form-control mb-4 bg-light"></input>
        <p className="text-danger">{errors.nameorganisation?.message}</p>
        <label >Siren / Siret :</label>
        <input type="number" name="sirensiret" ref={register} className="form-control mb-4 bg-light" ></input>
        <p className="text-danger">{errors.sirensiret?.message}</p>
        <div className="row mb-4 ">
          <div className="col">
            <label>Address :</label>
            <input type="text" name="adresse" ref={register} className="form-control bg-light"></input>
            <p className="text-danger">{errors.adresse?.message}</p>
          </div>
          <div className="col">
            <label>Postal code :</label>
            <input type="text" name="codepos" ref={register} className="form-control bg-light"></input>
             <p className="text-danger">{errors.codepos?.message}</p>
          </div>
          <div className="col">
            <label>City :</label>
            <input type="text" name="ville" ref={register} className="form-control bg-light" ></input>
             <p className="text-danger">{errors.ville?.message}</p>
          </div>
        </div>
        <div className="row mb-4 ">
          <div className="col">
            <label>Phone :</label>
            <input type="number" name="tel" ref={register} className="form-control bg-light"></input>
            <p className="text-danger">{errors.tel?.message}</p>
          </div>
          <div className="col">
            <label>E-mail :</label>
            <input type="email" name="email" ref={register} className="form-control bg-light"></input>
             <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="col">
            <label>Website :</label>
            <input type="text" name="website" ref={register} className="form-control bg-light" ></input>
             <p className="text-danger">{errors.website?.message}</p>
          </div>
        </div>
        <div className="form-group mb-4">
          <label >Country :</label>
          <select name="country" ref={register} className="form-control bg-light" >
            <option value="Tunisia" >Tunisia</option>
            <option value="France" >France</option>
          </select>
          <p className="text-danger">{errors.country?.message}</p>
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

export default CompanyInformation
