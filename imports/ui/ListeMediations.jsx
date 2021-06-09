import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import FormMediations from '../ui/FormMediations';
const ListeMediations = ({doc,renderUsersWithMediations}) => {
    console.log("doc :",doc.mediations);
    useEffect(()=>{
        renderUsersWithMediations()
    },[])
    return (
        <>
               {doc.mediations.map((e)=>{
                  if(e.isPayment===true){
                   return (
                       <>
        <tr key={e._id} name="id">
           <td ><b>{e.nomsoc}</b><br></br>{e.email}</td>
           <td ><b>{e.nomsoc1}</b><br></br>{e.email1}</td>
           <td >
               <select className="form-select" name="judgement">
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
           <select className="form-select" name="result">
                   <option value="wait_please" defaultValue>Put your judgment ✍️</option>
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
             
           </>
    )
}

export default ListeMediations
