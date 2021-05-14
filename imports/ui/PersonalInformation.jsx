import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const PersonalInformation = () => {
    const { register, handleSubmit, errors } = useForm({})
    return (
        <div class="col-sm-9">
            <div className="card">
            
            <div class="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>Personal informations</b>
                <br></br>
                <small className="text-secondary">Mettez à jour vos informations personnelles</small>
                <button className="btn btn-info pull-right">Save</button>
                </div> 
               </div>
            </div>
            
            <div class="card-body">
                <form>
                <div className="row mb-4">
          <div className="col">
            <label>First name</label>
            <input type="text" name="firstname" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/* <p className="text-danger">{errors.email?.message}</p>*/}
          </div>
          <div className="col">
            <label>last name</label>
            <input type="text" name="lastname" ref={register} className="form-control bg-light" placeholder="Last name"></input>
            {/* <p className="text-danger">{errors.tel?.message}</p>*/}
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label>E-mail</label>
            <input type="email" name="email" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/* <p className="text-danger">{errors.email?.message}</p>*/}
          </div>
          <div className="col">
            <label>Phone</label>
            <input type="number" name="tel" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/*<p className="text-danger">{errors.tel?.message}</p>*/}
          </div>
        </div>
        <label >Registered Address</label>
        <input type="text" name="adresse" ref={register} className="form-control mb-4 bg-light" placeholder="Example input"></input>
        {/*<p className="text-danger">{errors.adresse?.message}</p>*/}
        <div className="row mb-4 ">
          <div className="col">
            <label>Postal code</label>
            <input type="number" name="codepos" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/*<p className="text-danger">{errors.codepos?.message}</p>*/}
          </div>
          <div className="col">
            <label>City</label>
            <input type="text" name="ville" ref={register} className="form-control bg-light" placeholder="First name"></input>
            {/* <p className="text-danger">{errors.ville?.message}</p>*/}
          </div>
        </div>
        <div className="form-group mb-5">
          <label >Country</label>
          <select name="country" ref={register} className="form-control bg-light" >
            <option value="Tunisia" >Tunisia</option>
            <option value="France" >France</option>
          </select>
          {/*<p className="text-danger">{errors.country?.message}</p>*/}
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

export default PersonalInformation
