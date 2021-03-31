import React from 'react'
import { useForm } from 'react-hook-form';
import Schema2 from '../Validation/YupStep2';
import { yupResolver } from '@hookform/resolvers/yup';

const StepTwo = ({ setData }) => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema2)
  });

  const onSubmit = (data2) => setData(old => ({ ...old, ...data2 }));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group mb-2 mt-3">
          <h2 className="text mb-5">Coordonnées de la partie B
          </h2>
          <h5>Informations concernant l'autre partie:</h5>
          <label >Pays</label>
          <select name="infoB" ref={register} className="form-control" >
            <option value="tun1" >Tunisie</option>
            <option value="alg1" >Algerie</option>
            <option value="mar1" >Maroc</option>
            <option value="fra1" >France</option>
            <option value="ita1" >Iatalie</option>
          </select>
          <p className="text-danger">{errors.infoB?.message}</p>
        </div>
        <div className="form-group mb-2">
          <label >Vous êtes</label>
          <select name="vousB" ref={register} className="form-control" id="exampleFormControlSelect1">
            <option value="soccom1" >Une sociéte commerciale</option>
            <option value="entind1" >Un entrepreneur individuel</option>
            <option value="socciv1" >Une sociéte civile</option>
            <option value="proflib1" >Une profession libérale</option>
            <option value="part1" >Un particulier</option>
          </select>
          <p className="text-danger">{errors.vousB?.message}</p>
        </div>
        <div className="row mb-2">
          <div className="col">
            <label>Nom de la société</label>
            <input type="text" className="form-control" name="nomsoc1" ref={register} placeholder="First name"></input>
            <p className="text-danger">{errors.nomsoc1?.message}</p>
          </div>
          <div className="col">
            <label>Forme juridique</label>
            <select name="formjurid1" ref={register} className="form-control" id="exampleFormControlSelect1">
              <option value="choix1" >Choisir</option>
              <option value="sas1" >SAS</option>
              <option value="sarl1" >SARL</option>
              <option value="sa1" >SA</option>
              <option value="snc1" >SNC</option>
              <option value="gie1" >GIE</option>
            </select>
            <p className="text-danger">{errors.formjurid1?.message}</p>
          </div>
        </div>
        <label >Numéro d'identification</label>
        <input type="text" name="numid1" ref={register} className="form-control mb-2" id="formGroupExampleInput" placeholder="Example input"></input>
        <p className="text-danger">{errors.numid1?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>Prénom du représentant légal</label>
            <input type="text" name="prerepleg1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.prerepleg1?.message}</p>
          </div>
          <div className="col">
            <label>Nom du représentant légal</label>
            <input type="text" name="nomrepleg1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.nomrepleg1?.message}</p>
          </div>
        </div>
        <label >Adresse du siège social</label>
        <input type="text" name="adresse1" ref={register} className="form-control mb-2" id="formGroupExampleInput" placeholder="Example input"></input>
        <p className="text-danger">{errors.adresse1?.message}</p>
        <div className="row mb-2">
          <div className="col">
            <label>Code postal</label>
            <input type="number" name="codepos1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.codepos1?.message}</p>
          </div>
          <div className="col">
            <label>Ville</label>
            <input type="text" name="ville1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.ville1?.message}</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label>Email</label>
            <input type="email" name="email1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.email1?.message}</p>
          </div>
          <div className="col">
            <label>Telephone</label>
            <input type="number" name="tel1" ref={register} className="form-control" placeholder="First name"></input>
            <p className="text-danger">{errors.tel1?.message}</p>
          </div>
        </div>

      </form>
    </div>
  )
}

export default StepTwo
