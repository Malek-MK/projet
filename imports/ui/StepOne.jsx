import React from 'react'
import { useForm } from 'react-hook-form';
import Schema1 from '../Validation/YupStep1';
import { yupResolver } from '@hookform/resolvers/yup'; 
import ButtonSteps from '../ui/ButtonSteps';

const StepOne = ({setData}) => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema1)
      }); 
      const onSubmit = (data1)=>{
          console.log(data1);
        setData(old=>({...old,...data1}));
      }
    const show=true;
        return (
            <div className="mt-5">
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="form-group mb-2 mt-5">
          <h2 className="text mb-5">Coordonnées de la partie A
          </h2>
          <h5>Informations vous concernant :</h5>
        <label >Pays</label>
        <select name="infoA" ref={register} className="form-control" required>
          <option value="tun" >Tunisie</option>
          <option value="alg" >Algerie</option>
          <option value="mar" >Maroc</option>
          <option value="fra" >France</option>
          <option value="ita" >Iatalie</option>
        </select>
        <p className="text-danger">{errors.infoA?.message}</p>
      </div>
      <div className="form-group mb-2">
        <label >Vous êtes</label>
        <select name="vousA" ref={register} className="form-control" id="exampleFormControlSelect1">
          <option value="soccom" >Une sociéte commerciale</option>
          <option value="entind" >Un entrepreneur individuel</option>
          <option value="socciv" >Une sociéte civile</option>
          <option value="proflib" >Une profession libérale</option>
          <option value="part" >Un particulier</option>
        </select>
        <p className="text-danger">{errors.vousA?.message}</p>
      </div>
      <div className="row mb-2">
        <div className="col">
            <label>Nom de la société</label>
          <input type="text" className="form-control" name="nomsoc" ref={register} placeholder="First name" required></input>
          <p className="text-danger">{errors.nomsoc?.message}</p>
        </div>
        <div className="col">
            <label>Forme juridique</label>
            <select name="formjurid" ref={register} className="form-control" id="exampleFormControlSelect1">
          <option value="choix" >Choisir</option>
          <option value="sas" >SAS</option>
          <option value="sarl" >SARL</option>
          <option value="sa" >SA</option>
          <option value="snc" >SNC</option>
          <option value="gie" >GIE</option>
        </select> 
        <p className="text-danger">{errors.formjurid?.message}</p>
           </div>
      </div>
      <label >Numéro d'identification</label>
        <input type="text" name="numid" ref={register} className="form-control mb-2" id="formGroupExampleInput" placeholder="Example input"></input>
        <p className="text-danger">{errors.numid?.message}</p>
        <div className="row mb-2">
        <div className="col">
            <label>Prénom du représentant légal</label>
          <input type="text" name="prerepleg" ref={register} className="form-control" placeholder="First name"></input>
          <p className="text-danger">{errors.prerepleg?.message}</p>
        </div>
        <div className="col">
            <label>Nom du représentant légal</label>
          <input type="text" name="nomrepleg" ref={register} className="form-control" placeholder="First name"></input>
          <p className="text-danger">{errors.nomrepleg?.message}</p>
        </div>
        </div>
        <label >Adresse du siège social</label>
        <input type="text" name="adresse" ref={register} className="form-control mb-2" id="formGroupExampleInput" placeholder="Example input"></input>
        <p className="text-danger">{errors.adresse?.message}</p>
        <div className="row mb-2">
        <div className="col">
            <label>Code postal</label>
          <input type="number" name="codepos" ref={register} className="form-control" placeholder="First name"></input>
          <p className="text-danger">{errors.codepos?.message}</p>
        </div>
        <div className="col">
            <label>Ville</label>
          <input type="text" name="ville" ref={register} className="form-control" placeholder="First name"></input>
          <p className="text-danger">{errors.ville?.message}</p>
        </div>
        </div>
        <div className="row mb-4">
        <div className="col">
            <label>Email</label>
          <input type="email" name="email" ref={register} className="form-control" placeholder="First name"></input>
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="col">
            <label>Telephone</label>
          <input type="number" name="tel" ref={register} className="form-control" placeholder="First name"></input>
          <p className="text-danger">{errors.tel?.message}</p>
        </div>
        </div>
        <ButtonSteps show={show}/>

    </form>
            </div>
        )
}

export default StepOne
