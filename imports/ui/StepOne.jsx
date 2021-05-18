import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Schema1 from '../Validation/YupStep1';
import { yupResolver } from '@hookform/resolvers/yup';
import FileUploadComponent from '../ui/FileUpload';
const StepOne = ({ setData, setStep, data,datta }) => {
  const [check, setCheck] = useState(false);
  
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema1),
    defaultValues: {
      infoA: data.infoA,
      vousA: data.vousA ,
      nomsoc: data.nomsoc,
      formjurid: data.formjurid  ,
      numid: data.numid,
      prerepleg: data.prerepleg, 
      nomrepleg: data.nomrepleg,
      adresse: data.adresse,
      codepos: data.codepos,
      ville: data.ville,
      email: data.email,
      tel: data.tel,
      namelawyer: data.namelawyer || " ",
      firstnamelawyer: data.firstnamelawyer || " ",
      adresslawyer: data.adresslawyer || " ",
      emaillawyer: data.emaillawyer || "name@domaine.com",
      tellawyer: data.tellawyer || 0,
    }
  });
  const onSubmit = (data1) => {
    setData(old => ({ ...old, ...data1 }));
    setStep(1)
  }

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group mb-2 mt-5">
          <h2 className="text mb-5">Part A contact details</h2>
          <h5>Information about you: :</h5>
          <label >Country</label>
          <select name="infoA" ref={register} className="form-control" >
            <option value="Tunisia" >Tunisia</option>
            <option value="Algeria" >Algeria</option>
            <option value="Marocco" >Morocco</option>
            <option value="France" >France</option>
            <option value="Italy" >Italy</option>
          </select>
          <p className="text-danger">{errors.infoA?.message}</p>
        </div>
        
        <div className="form-group mb-2">
          <label >You are</label>
          <select name="vousA" ref={register} className="form-control" >
            <option value="CommercialCompany" >A commercial company</option>
            <option value="IndividualEntrepreneur" >An individual entrepreneur</option>
            <option value="CivilSociety" >A civil society</option>
            <option value="LiberalProfession" >A liberal profession</option>
            <option value="Particular" >A particular</option>
          </select>
          <p className="text-danger">{errors.vousA?.message}</p>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label>Company Name</label>
            <input type="text" className="form-control" name="nomsoc" ref={register} placeholder="Company Name" ></input>
            <p className="text-danger">{errors.nomsoc?.message}</p>
          </div>
          <div className="col">
            <label>Legal form</label>
            <select name="formjurid" ref={register} className="form-control" >
              <option value="Choose" >To choose</option>
              <option value="SAS" >SAS</option>
              <option value="SARL" >SARL</option>
              <option value="SA" >SA</option>
              <option value="SNC" >SNC</option>
              <option value="GIE" >GIE</option>
            </select>
            <p className="text-danger">{errors.formjurid?.message}</p>
          </div>
        </div>
        <label >ID number</label>
        <input type="number" name="numid" ref={register} className="form-control mb-2" placeholder="ID number"></input>
        <p className="text-danger">{errors.numid?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>First name of the legal representative</label>
            <input type="text" name="prerepleg" ref={register} className="form-control" placeholder="First name of the legal representative"></input>
            <p className="text-danger">{errors.prerepleg?.message}</p>
          </div>
          <div className="col">
            <label>Name of legal representative</label>
            <input type="text" name="nomrepleg" ref={register} className="form-control" placeholder="Name of legal representative"></input>
            <p className="text-danger">{errors.nomrepleg?.message}</p>
          </div>
        </div>
        <label >Registered Address</label>
        <input type="text" name="adresse" ref={register} className="form-control mb-2" placeholder="Registered Address"></input>
        <p className="text-danger">{errors.adresse?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>Postal code</label>
            <input type="number" name="codepos" ref={register} className="form-control" placeholder="Postal code"></input>
            <p className="text-danger">{errors.codepos?.message}</p>
          </div>
          <div className="col">
            <label>City</label>
            <input type="text" name="ville" ref={register} className="form-control" placeholder="City"></input>
            <p className="text-danger">{errors.ville?.message}</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label>E-mail</label>
            <input type="email" name="email" ref={register} className="form-control" placeholder="name@domaine.com"></input>
            <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="col">
            <label>Phone</label>
            <input type="number" name="tel" ref={register} className="form-control" placeholder="Phone number"></input>
            <p className="text-danger">{errors.tel?.message}</p>
          </div>
        </div>
        <div className="form-group mb-4">
          <FileUploadComponent/>
        </div>
        <div className="form-group mb-4">
          <div>
            <label>Do you want to add the contact details of a lawyer?</label>
            <input type="radio" name="test" value="yes" onClick={() => setCheck(true)}></input>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="test" value="no" onClick={() => setCheck(false)} ></input>
            <label htmlFor="no" >No</label>
          </div>
        </div>
        {check ? <>
          <div className="row mb-2">
            <div className="col">
              <label>First name </label>
              <input type="text" name="firstnamelawyer" ref={register} className="form-control" placeholder="First name"  required></input>
              <p className="text-danger">{errors.firstnamelawyer?.message}</p>
            </div>
            <div className="col">
              <label>Name </label>
              <input type="text" name="namelawyer" ref={register} className="form-control" placeholder="First name"  required></input>
              <p className="text-danger">{errors.namelawyer?.message}</p>
            </div>
          </div>
          <label >Address</label>
          <input type="text" name="adresslawyer" ref={register} className="form-control mb-2" placeholder="Adresse"  required></input>
          <p className="text-danger">{errors.adresslawyer?.message}</p>
          <div className="row mb-4">
            <div className="col">
              <label>E-mail</label>
              <input type="email" name="emaillawyer" ref={register} className="form-control" placeholder="name@domaine.com"  required></input>
              <p className="text-danger">{errors.emaillawyer?.message}</p>
            </div>
            <div className="col">
              <label>Phone</label>
              <input type="number" name="tellawyer" ref={register} className="form-control" placeholder="Phone number"  ></input>
              <p className="text-danger">{errors.tellawyer?.message}</p>
            </div>
          </div>
        </> : null}
        <button type="submit" name='next' className="btn btn-primary btn-lg pull-right">Next</button>


      </form>
      <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute', bottom: '50px', left: '1140px' }} href="#" role="button"><h5> <i className="fa fa-arrow-up"></i></h5></a>
    </div>
  )
}

export default StepOne
