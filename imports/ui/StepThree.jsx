import React from 'react'
import { useForm } from 'react-hook-form';
import Schema3 from '../Validation/YupStep3';
import { yupResolver } from '@hookform/resolvers/yup';

  
const StepThree = ({ setData, setStep,data}) => {

    
    const { register, handleSubmit,watch, errors} = useForm({
        resolver: yupResolver(Schema3),
        defaultValues:{
        objlitige:data.objlitige,
        desc:data.desc,
        other:data.other || "Other",
        }
    });
    const objlitige = watch("objlitige");
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
                        <option value="Contractual" >Contractual</option>
                        <option value="Commercial" > Commercial</option>
                        <option value="Neighborhood" >Neighborhood</option>
                        <option value="Coownership" >Co-ownership</option>
                        <option value="Consumption" >Consumption</option>
                        <option value="Construction" >Construction</option>
                        <option value="Other">Other</option>
                    </select>
                    <p className="text-danger">{errors.objlitige?.message}</p>
                </div>
                {objlitige == "Other" && (
                <div>
                   <label >Add your type of dispute</label>
                    <input type="text" name="other" ref={register} className="form-control mb-2" placeholder="Add your type of dispute"></input>
                    <p className="text-danger">{errors.other?.message}</p>
                </div>
                )}
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
