import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const AccessParameter = () => {
    const { register, handleSubmit, errors } = useForm({})

    return (
        <div class="col-sm-9">
            <div className="card">
            
            <div class="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>Access settings</b>
                <br></br>
                <small className="text-secondary">Update your login information</small>
                <button className="btn btn-info pull-right">Save</button>
                </div> 
               </div>
            </div>
            
            <div class="card-body">
                <form>
       
        <label >Email</label>
        <input type="email" name="email" ref={register} className="form-control mb-4 bg-light" placeholder="example@example.com"></input>
        {/*<p className="text-danger">{errors.adresse?.message}</p>*/}
        <div className="row mb-4 ">
          <div className="col">
            <label>Password</label>
            <input type="password" name="password" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/*<p className="text-danger">{errors.codepos?.message}</p>*/}
          </div>
          <div className="col">
            <label>Confirm password</label>
            <input type="password" name="password1" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/* <p className="text-danger">{errors.ville?.message}</p>*/}
          </div>
        </div>
        
                </form>
            </div>
            <div class="card-footer">
            <button className="btn btn-info pull-right mt-3 mb-3">Save</button>
            </div>
            </div>
        </div>
    )
}

export default AccessParameter
