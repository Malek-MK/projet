import React, { useState , useEffect} from 'react'
import { useForm } from 'react-hook-form';
import Schema1 from '../Validation/YupStep1';
import { yupResolver } from '@hookform/resolvers/yup';
import { Meteor } from 'meteor/meteor';
import SelectMediators from './SelectMediators';

const One = ({ setData, setStep,datta }) => {
  const [check, setCheck] = useState(false);
  const [namemed,setNamemed]=useState()
    Meteor.call('showMediator',datta.mediator,(err,res)=>{
        setNamemed(res.username);
        
    })
    const [mediators,setMediators]=useState([]);
    const renderMediators=()=>{
        Meteor.call('showMediators',(err,res)=>{
            setMediators(res);
        })
    }
    useEffect(()=>{
        renderMediators();
    },[])
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema1),
    defaultValues: {
      mediator:namemed,
      infoA: datta.infoA,
      vousA: datta.vousA ,
      nomsoc: datta.nomsoc,
      formjurid: datta.formjurid  ,
      numid: datta.numid,
      prerepleg: datta.prerepleg, 
      nomrepleg: datta.nomrepleg,
      adresse: datta.adresse,
      codepos: datta.codepos,
      ville: datta.ville,
      email: datta.email,
      tel: datta.tel,
      namelawyer: datta.namelawyer || " ",
      firstnamelawyer: datta.firstnamelawyer || " ",
      adresslawyer: datta.adresslawyer || " ",
      emaillawyer: datta.emaillawyer || "name@domaine.com",
      tellawyer: datta.tellawyer || 0,
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
          <label>Choose your mediator </label>
          <select name="mediator" ref={register} className="form-select" >
          {mediators.map((mediator)=>{
            return(
              <SelectMediators
                  key={mediator._id}
                  mediator={mediator}
                  fetch={renderMediators}
              />
          ); 
            })}
            </select>
          <h5>Information about you: :</h5>
          <label >Country</label>
          <select name="infoA" ref={register} className="form-select" >
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
          <select name="vousA" ref={register} className="form-select" >
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
            <select name="formjurid" ref={register} className="form-select" >
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
              <input type="text" name="namelawyer" ref={register} className="form-control" placeholder="Name"  required></input>
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

export default One
