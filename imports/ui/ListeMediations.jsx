import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useForm } from 'react-hook-form';
import { Meteor } from 'meteor/meteor';
import { useTracker } from "meteor/react-meteor-data";
import Modal from "react-bootstrap/Modal";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
})

const ListeMediations = ({datta,renderMediationsArbitrator}) => {
    const { register, handleSubmit, errors } = useForm(); 
    const [id,setId]=useState();
    const user = useTracker(() => Meteor.user()?.username);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const message="have a new result arbitration"
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
        });
        Meteor.call('addResult',datta.mediator,datta.userId,datta.legalprof,datta.legalprof1,message,(err,res)=>{
          if(err){
              console.log(err);
          }
          else{
              console.log("Send notification with success");
          }
      })
    }
    useEffect(() => {
        renderMediationsArbitrator()
    }, [])
    return (
            <tr key={datta._id}> 
           <td ><b>{datta.nomsoc}</b><br></br>{datta.email}</td>
           <td ><b>{datta.nomsoc1}</b><br></br>{datta.email1}</td>
           <td> 
               <form key={datta._id} id={`${datta._id}`} onSubmit={handleSubmit(onSubmit)}></form>
               <select className="form-select" name="judgement" form={`${datta._id}`} ref={register}>
                   <option value="submitted">Submitted ✅</option>
                   <option value="inprogress">In progress ⌛</option>
                   <option value="judjed">Judged ⚡️</option> 
               </select>
           </td>
           
           <td>{datta.time}</td>
           <td>  
       <Link className="btn btn-info text-decoration-none" to={`mediation/show/${datta._id}`} target="_blank"> Show</Link>
           </td>
           <td><button className="btn btn-success" onClick={handleShow}>View</button></td>
           <td>
           <select key={datta._id} className="form-select" name="result" form={`${datta._id}`} ref={register}>
                   <option value="wait_please" defaultValue>Put your judgment ✍️</option>
                   <option value="Part_A_Winner">Part A is winner 🏆</option>
                   <option value="Part_B_Winner">Part B is winner 🏆</option>
                   <option value="equality">Equality ⚖</option>
           </select>
           </td>
           <td><Button key={datta._id} className="btn btn-primary" type="submit" form={`${datta._id}`} onClick={()=>setId(datta._id)}>Send</Button></td>          
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Show the defend of this dispute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Hello <b className="text-dark text-capitalize"> {user},</b></p>
         <p>Your number ID for this dispute <b className="text-danger">{datta._id}</b></p>
         <h5 className="text-success">This Dispute :</h5>
          {datta.defend?<div>
            {datta.defend.radio1==="yes"?<p>The report :{datta.defend.report}</p>:null}
          </div> :<p>He still hasn't defended you yet <i className="fa fa-circle-o-notch fa-pulse fa-fw" aria-hidden="true"></i></p>}
        </Modal.Body> 
        <Modal.Footer>
          <Button className="btn btn-primary" type="button" onClick={handleClose}>
            I see the defend
          </Button>
        </Modal.Footer>
      </Modal>
         </tr>
    ) 
}

export default ListeMediations
