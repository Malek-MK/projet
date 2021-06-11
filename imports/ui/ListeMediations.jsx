import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useForm } from 'react-hook-form';
import { Meteor } from 'meteor/meteor';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
})

const ListeMediations = ({data,renderMediationsPayment}) => {
    const { register, handleSubmit, errors } = useForm();
    const [id,setId]=useState();
    
    const onSubmit=(data)=>{
        Meteor.call('insertResult',{id,data},(err,res)=>{
            if(err){
                console.log("Insert result failed")
                notyf.success("Arbitration failed")  
            }
            else{
                console.log("Insert result with success")
                notyf.success("Arbitration with success")  
            }
        })
    }
    useEffect(()=>{
        renderMediationsPayment()
    },[])
    return (
            <tr key={data._id}> 
           <td ><b>{data.nomsoc}</b><br></br>{data.email}</td>
           <td ><b>{data.nomsoc1}</b><br></br>{data.email1}</td>
           <td >
               <form key={data._id} id={`${data._id}`} onSubmit={handleSubmit(onSubmit)}></form>
               <select className="form-select" name="judgement" form={`${data._id}`} ref={register}>
                   <option value="submitted">Submitted ✅</option>
                   <option value="inprogress">In progress ⌛</option>
                   <option value="judjed">Judged ⚡️</option> 
               </select>
           </td>
           
           <td>{data.time}</td>
           <td>  
       <Link className="btn btn-info text-decoration-none" to={`mediation/show/${data._id}`} target="_blank"> Show</Link>
           </td>
           <td>
           <select key={data._id} className="form-select" name="result" form={`${data._id}`} ref={register}>
                   <option value="wait_please" defaultValue>Put your judgment ✍️</option>
                   <option value="Part_A_Winner">Part A is winner 🏆</option>
                   <option value="Part_B_Winner">Part B is winner 🏆</option>
                   <option value="equality">Equality ⚖</option>
           </select>
           </td>
           <td><Button key={data._id} className="btn btn-primary" type="submit" form={`${data._id}`} onClick={()=>setId(data._id)}>Send</Button></td>          
         </tr>
    )
}

export default ListeMediations
