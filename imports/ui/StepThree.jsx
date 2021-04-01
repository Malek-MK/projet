import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Schema3 from '../Validation/YupStep3';
import { yupResolver } from '@hookform/resolvers/yup';

const StepThree = ({ setData, setStep }) => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema3)
    });
    const onSubmit = (data3) => {
        console.log(data3)

        setData(old => ({ ...old, ...data3 }));
    }

    const onclickprev = (e) => {
        e.preventDefault
        setStep(1)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text mb-5">Objet du litige</h2>
                <div className="form-group mb-2 mt-3">
                    <label >Type de litige </label>
                    <select name="objlitige" ref={register} className="form-control" id="exampleFormControlSelect1">
                        <option value="contra" >Contractuel</option>
                        <option value="comm" > Commerciale</option>
                        <option value="vois" >Voisinage</option>
                        <option value="copro" >Copropriéte</option>
                        <option value="conso" >Consommation</option>
                        <option value="constr" >Construction</option>
                    </select>
                    <p className="text-danger">{errors.objlitige?.message}</p>
                </div>
                <div className="form-group mb-4">
                    <label >Description du litige</label>
                    <textarea name="desc" ref={register} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <p className="text-danger">{errors.desc?.message}</p>
                </div>
                <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={onclickprev} >Previous</button>     
                <button type="submit" name='valide' className="btn btn-success btn-lg pull-right" >Valider</button>
                       </form>
        </div>
    )
}

export default StepThree
