import React from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useForm } from 'react-hook-form';

const FormMediations = ({doc}) => {
    const { register, handleSubmit, errors } = useForm({
    
    });
    const onSubmit = (data) => {
        Meteor.call('InsertResult', data, (err) => {
          if (err) {
            console.log('Judged failed', err)
            notyf.error("Judged failed")
          }
          else {
            console.log('Judged with succes')
            notyf.success("Judged with succes")
            
          } 
         
        });
    }
    return (
        <>
        <Form onSubmit={handleSubmit(onSubmit)} id="judge">
               {doc.mediations.map((e)=>{
                  if(e.isPayment===true){
                   return (
                       <>
        <tr key={e._id} name="id" ref={register}>
           <td ><b>{e.nomsoc}</b><br></br>{e.email}</td>
           <td ><b>{e.nomsoc1}</b><br></br>{e.email1}</td>
           <td >
               <select className="form-select" name="judgement" ref={register}>
                   <option value="submitted">Submitted ✅</option>
                   <option value="inprogress">In progress ⌛</option>
                   <option value="judjed">Judged ⚡️</option>
               </select>
           </td>
           <td >{e.time}</td>
           <td>  
       <Link className="btn btn-info text-decoration-none" to={`/mediation/show/${e._id}`} target="_blank"> Show</Link>
           </td>
           <td>
           <select className="form-select" name="result" ref={register}>
                   <option value="wait_please" selected>Put your judgment ✍️</option>
                   <option value="Part_A_Winner">Part A is winner 🏆</option>
                   <option value="Part_B_Winner">Part B is winner 🏆</option>
                   <option value="equality">Equality ⚖</option>
           </select>
           </td>
           <td><Button className="btn btn-primary" type="submit" form="judge">Send</Button></td>
           
         </tr>
       </>
                   )
                  }
               })}
               </Form>
           </>
    )
}

export default FormMediations
