import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfile';
import { Meteor } from 'meteor/meteor';
import { useTracker } from "meteor/react-meteor-data";

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
const address=useTracker(() =>Meteor.user()?.emails[0].address);
const id = useTracker(() => Meteor.user()?._id);
const usr = useTracker(() => Meteor.user());

    const onSubmit=(data)=>{
        if(data){
            Meteor.call('UpdateUserProfile',{id,data,usr}, (err) => {
                if (err) {
                  console.log('Updated failed')
                  notyf.error("Updated failed")
                }
                else {
                  console.log('Updated with success')
                  notyf.success("Updated with success")
                }
              });
        }
      }
      
    return (
        <div className="col-sm-9">
            <div className="card">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>Access settings</b>
                <br></br>
                <small className="text-secondary">Update your login information</small>
                <button type="submit" className="btn btn-info pull-right">Save</button>
                </div> 
               </div>
            </div>
            <div className="card-body">
        <label >Email</label>
        <input type="email" name="email" defaultValue={address} ref={register} className="form-control bg-light" placeholder="Tap your E-mail"></input>
        <p className="text-danger">{errors.email?.message}</p>
        <div className="row mb-4 ">
          <div className="col">
            <label>Password</label>
            <input type="password" name="password" ref={register} className="form-control bg-light" placeholder="Tap your password"></input>
            <p className="text-danger">{errors.password?.message}</p>
          </div>
          <div className="col">
            <label>Confirm password</label> 
            <input type="password" name="password1" ref={register} className="form-control bg-light" placeholder="Verify your password"></input>
             <p className="text-danger">{errors.password1?.message}</p>
          </div>
        </div> 
            </div>
            <div className="card-footer">
            <button type="submit" className="btn btn-info pull-right mt-3 mb-3">Save</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default AccessParameter
