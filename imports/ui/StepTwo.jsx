import React from 'react'
import { useForm } from 'react-hook-form';
import Schema2 from '../Validation/YupStep2';
import { yupResolver } from '@hookform/resolvers/yup';

const StepTwo = ({ setData,setStep,data }) => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema2),
    defaultValues: {
      vousB:data.vousB,
        nomsoc1:data.nomsoc1,
        formjurid1:data.formjurid1,
        numid1:data.numid1,
        prerepleg1:data.prerepleg1,
        nomrepleg1:data.nomrepleg1,
        adresse1:data.adresse1,
        codepos1:data.codepos1,
        ville1:data.ville1,
        email1:data.email1,
        tel1:data.tel1,
    }
  });
const onclickprev=(e)=>{
  e.preventDefault
  setStep(0)
}

  const onSubmit = (data2) => {
    setData(old => ({ ...old, ...data2 }));
    setStep(2)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group mb-2 mt-3">
          <h2 className="text mb-5">Part B contact details
          </h2>
          <h5>Information about the other party :</h5>
          <label >Pays</label>
          <select name="infoB" ref={register} className="form-control" >
            <option value="tun1" >Tunisia</option>
            <option value="alg1" >Algeria</option>
            <option value="mar1" >Marocco</option>
            <option value="fra1" >France</option>
            <option value="ita1" >Iataly</option>
          </select>
          <p className="text-danger">{errors.infoB?.message}</p>
        </div>
        <div className="form-group mb-2">
          <label >You are</label>
          <select name="vousB" ref={register} className="form-control" >
            <option value="soccom1" >A commercial company</option>
            <option value="entind1" >An individual entrepreneur</option>
            <option value="socciv1" >A civil society</option>
            <option value="proflib1" >A liberal profession</option>
            <option value="part1" >A particular</option>
          </select>
          <p className="text-danger">{errors.vousB?.message}</p>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label>Company Name</label>
            <input type="text" className="form-control" name="nomsoc1" ref={register} placeholder="First name"></input>
            <p className="text-danger">{errors.nomsoc1?.message}</p>
          </div>
          <div className="col">
            <label>Legal form</label>
            <select name="formjurid1" ref={register} className="form-control" >
              <option value="choix1" >To choose</option>
              <option value="sas1" >SAS</option>
              <option value="sarl1" >SARL</option>
              <option value="sa1" >SA</option>
              <option value="snc1" >SNC</option>
              <option value="gie1" >GIE</option>
            </select>
            <p className="text-danger">{errors.formjurid1?.message}</p>
          </div>
        </div>
        <label >ID number</label>
        <input type="number" name="numid1" ref={register} className="form-control mb-2"  placeholder="Example input"></input>
        <p className="text-danger">{errors.numid1?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>First name of legal representative</label>
            <input type="text" name="prerepleg1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.prerepleg1?.message}</p>
          </div>
          <div className="col">
            <label>Name of legal representative</label>
            <input type="text" name="nomrepleg1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.nomrepleg1?.message}</p>
          </div>
        </div>
        <label >Registered Address</label>
        <input type="text" name="adresse1" ref={register} className="form-control mb-2"  placeholder="Example input"></input>
        <p className="text-danger">{errors.adresse1?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>Postal code</label>
            <input type="number" name="codepos1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.codepos1?.message}</p>
          </div>
          <div className="col">
            <label>City</label>
            <input type="text" name="ville1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.ville1?.message}</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label>E-mail</label>
            <input type="email" name="email1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.email1?.message}</p>
          </div>
          <div className="col">
            <label>Phone</label>
            <input type="number" name="tel1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.tel1?.message}</p>
          </div>
        </div>
        <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={onclickprev} >Previous</button>
        <button type="submit" name='next' className="btn btn-primary btn-lg pull-right" >Next</button>
      </form>
      <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute',bottom:'50px',left: '1000px' }} href="#" role="button"><h5> <i class="fa fa-arrow-up"></i></h5></a>
    </div>
  )
}

export default StepTwo
