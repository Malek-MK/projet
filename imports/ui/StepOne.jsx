import React from 'react'
import { useForm } from 'react-hook-form';
import Schema1 from '../Validation/YupStep1';
import { yupResolver } from '@hookform/resolvers/yup';

const StepOne = ({setData,setStep,data }) => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema1),
    defaultValues: {
      vousA:data.vousA,
      nomsoc:data.nomsoc,
      formjurid:data.formjurid,
      numid:data.numid, 
      prerepleg:data.prerepleg,
      nomrepleg:data.nomrepleg,
      adresse:data.adresse,
      codepos:data.codepos,
      ville:data.ville,
      email:data.email,
      tel:data.tel,
    }
  });
  const onSubmit = (data1) => {
    setData(old => ({ ...old, ...data1 }));
    setStep(1)
  }
  
  return (
    <div className="mt-5">
      <form  onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group mb-2 mt-5">
          <h2 className="text mb-5">Part A contact details</h2>
          <h5>Information about you: :</h5>
          <label >Country</label>
          <select name="infoA" ref={register} className="form-control" >
            <option value="tun" >Tunisia</option>
            <option value="alg" >Algeria</option>
            <option value="mar" >Morocco</option>
            <option value="fra" >France</option>
            <option value="ita" >Italy</option>
          </select>
          <p className="text-danger">{errors.infoA?.message}</p>
        </div>
        <div className="form-group mb-2">
          <label >You are</label>
          <select name="vousA" ref={register} className="form-control" >
            <option value="soccom" >A commercial company</option>
            <option value="entind" >An individual entrepreneur</option>
            <option value="socciv" >A civil society</option>
            <option value="proflib" >A liberal profession</option>
            <option value="part" >A particular</option>
          </select>
          <p className="text-danger">{errors.vousA?.message}</p>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label>Company Name</label>
            <input type="text" className="form-control" name="nomsoc" ref={register} placeholder="First name" ></input>
            <p className="text-danger">{errors.nomsoc?.message}</p>
          </div>
          <div className="col">
            <label>Legal form</label>
            <select name="formjurid" ref={register} className="form-control" >
              <option value="choix" >To choose</option>
              <option value="sas" >SAS</option>
              <option value="sarl" >SARL</option>
              <option value="sa" >SA</option>
              <option value="snc" >SNC</option>
              <option value="gie" >GIE</option>
            </select>
            <p className="text-danger">{errors.formjurid?.message}</p>
          </div>
        </div>
        <label >ID number</label>
        <input type="number" name="numid" ref={register} className="form-control mb-2"  placeholder="Example input"></input>
        <p className="text-danger">{errors.numid?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>First name of the legal representative</label>
            <input type="text" name="prerepleg" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.prerepleg?.message}</p>
          </div>
          <div className="col">
            <label>Name of legal representative</label>
            <input type="text" name="nomrepleg" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.nomrepleg?.message}</p>
          </div>
        </div>
        <label >Registered Address</label>
        <input type="text" name="adresse" ref={register} className="form-control mb-2" placeholder="Example input"></input>
        <p className="text-danger">{errors.adresse?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>Postal code</label>
            <input type="number" name="codepos" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.codepos?.message}</p>
          </div>
          <div className="col">
            <label>City</label>
            <input type="text" name="ville" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.ville?.message}</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label>E-mail</label>
            <input type="email" name="email" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="col">
            <label>Phone</label>
            <input type="number" name="tel" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.tel?.message}</p>
          </div>
        </div>
        <button type="submit" name='next' className="btn btn-primary btn-lg pull-right">Next</button>
      
       
      </form>
      <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute',bottom:'50px',left: '1000px' }} href="#" role="button"><h5> <i class="fa fa-arrow-up"></i></h5></a>
    </div>
  )
}

export default StepOne
