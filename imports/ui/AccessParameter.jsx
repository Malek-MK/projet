import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfile';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top', 
  }
})
const AccessParameter = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
    })
    const onSubmit=(data)=>{
        if(data){
            Meteor.call('UpdateUser', { id: user._id, data,usr }, (err) => {
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
            
            <div class="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>Access settings</b>
                <br></br>
                <small className="text-secondary">Update your login information</small>
                <button type="submit" className="btn btn-info pull-right">Save</button>
                </div> 
               </div>
            </div>
            
            <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
       
        <label >Email</label>
        <input type="email" name="email" ref={register} className="form-control mb-4 bg-light" placeholder="example@example.com"></input>
        <p className="text-danger">{errors.email?.message}</p>
        <div className="row mb-4 ">
          <div className="col">
            <label>Password</label>
            <input type="password" name="password" ref={register} className="form-control bg-light" placeholder="First name"></input>
            <p className="text-danger">{errors.password?.message}</p>
          </div>
          <div className="col">
            <label>Confirm password</label>
            <input type="password" name="password1" ref={register} className="form-control bg-light" placeholder="First name"></input>
             <p className="text-danger">{errors.password1?.message}</p>
          </div>
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

export default AccessParameter
