import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfile';
import { Meteor } from 'meteor/meteor';

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top', 
    }
  })

const BankInformation = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
})

    const onSubmit=(data)=>{
        if(data){
            Meteor.call('InsertBankInfo', {data}, (err) => {
                if (err) {
                  console.log('Insert bank details failed')
                  notyf.error("Insert bank details failed")
                }
                else {
                  console.log('Insert bank details with success')
                  setShow(false);
                  notyf.success("Insert bank details with success")
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
            <b>Bank details</b>
            <br></br>
            <small className="text-secondary">Update your bank details</small>
            <button type="submit" className="btn btn-info pull-right">Save</button>
            </div> 
           </div>
        </div>
        <div className="card-body">
    <label >Name of the bank</label>
    <input type="text" name="namebank" ref={register} className="form-control mb-4 bg-light"></input>
    <p className="text-danger">{errors.namebank?.message}</p>
    <div className="row g-4 mb-5">
  <div className="col-sm-9">
      <label>IBAN</label>
    <input type="text" name="iban" className="form-control bg-light"></input>
    <p className="text-danger">{errors.iban?.message}</p>
  </div>
  <div className="col-sm">
  <label>Swift</label>
    <input type="text" name="swift" className="form-control bg-light"></input>
    <p className="text-danger">{errors.swift?.message}</p>
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

export default BankInformation
