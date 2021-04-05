import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Schema3 from '../Validation/YupStep3';
import { yupResolver } from '@hookform/resolvers/yup';

  
const StepThree = ({ setData, setStep,data }) => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema3),
        defaultValues:{
        objlitige:data.objlitige,
        desc:data.desc,
        }
    });
    const onSubmit = (data3) => {
        setData(old => ({ ...old, ...data3 }));
        setStep(3)
    } 
   
    const onclickprev = (e) => {
        e.preventDefault
        setStep(1)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text mb-5">Subject of the dispute</h2>
                <div className="form-group mb-2 mt-3">
                    <label >Type of dispute </label>
                    <select name="objlitige" ref={register} className="form-control" >
                        <option value="contra" >Contractual</option>
                        <option value="comm" > Commercial</option>
                        <option value="vois" >Neighborhood</option>
                        <option value="copro" >Co-ownership</option>
                        <option value="conso" >Consumption</option>
                        <option value="constr" >Construction</option>
                    </select>
                    <p className="text-danger">{errors.objlitige?.message}</p>
                </div>
                <div className="form-group mb-4">
                    <label >Description of the dispute</label>
                    <textarea name="desc" ref={register} className="form-control"  rows="3"></textarea>
                    <p className="text-danger">{errors.desc?.message}</p>
                </div>
                <div className="form-group mb-4">
                    <input
                        type="checkbox"
                        name="verif"
                        ref={register} 
                        defaultChecked={false}
                    /><label>Are you sure the information you have entered is correct?</label>
                <p className="text-danger">{errors.verif?.message}</p>
                </div>
                <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={onclickprev} >Previous</button>     
                <button type="submit" name='next' className="btn btn-primary btn-lg pull-right" >Next</button>
                       </form>
        </div>
    )
}

export default StepThree
