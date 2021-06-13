import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useForm } from 'react-hook-form';
import { Meteor } from 'meteor/meteor';
import Modal from "react-bootstrap/Modal";
import { useTracker } from "meteor/react-meteor-data";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
})

const ListMediations = ({datta,renderMediationsLegalProf}) => {
  const { register, handleSubmit, errors } = useForm();
  const [arbit,setArbit]=useState()
  const [citoyen,setCitoyen]=useState()
    const user = useTracker(() => Meteor.user()?.username);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true); 
    useEffect(() => {
        renderMediationsLegalProf() 
    }, [])
    const [id,setId]=useState();
    const onSubmit=(data)=>{
      console.log("data defend :",data);
        Meteor.call('insertDefend',{id,data},(err,res)=>{
            if(err){
                console.log("Defend a vice failed")
                notyf.success("Defend a vice failed")  
            }
            else{
                console.log("Defend a vice with success")
                notyf.success("Defend a vice with success")  
            }
        })
    }
    const Render=()=>{
      setId(datta._id);
      handleClose1()
    }
    return (
            <tr key={datta._id}> 
           <td><b>{datta.nomsoc}</b><br></br>{datta.email}</td>
           <td><b>{datta.nomsoc1}</b><br></br>{datta.email1}</td>
           <td ><span className="text-success">Saved</span></td>           
           <td>{datta.time}</td>
           <td>  
       <Link className="btn btn-info text-decoration-none" to={`mediation/consult/${datta._id}`} target="_blank"> Consult</Link>
           </td>
           <td><button className="btn btn-success" onClick={handleShow}>Show</button></td>
           <td><Button className="btn btn-primary" onClick={handleShow1}>Perform</Button></td>          
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Show the result of your dispute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Hello legal professional<b className="text-dark text-capitalize"> {user},</b></p>
         <p>Number ID for this dispute <b className="text-danger">{datta._id}</b></p>
         <h5 className="text-success">Dispute :</h5>
          {datta.result?<div>
          {datta.result.judgement==="submitted"?<p>State of arbitration : <b>Submitted ✅</b></p>:null}
          {datta.result.judgement==="inprogress"? <p>State of arbitration : <b>In progress ⌛</b></p>:null}
          {datta.result.judgement==="judjed"? <p>State of arbitration : <b>Judged ⚡️</b></p>:null}
          {datta.result.result==="wait_please"?<p>Result arbitration : <b>Wait please <i className="fa fa-smile-o" aria-hden="true"></i></b></p>:null}
          {datta.result.result==="Part_A_Winner"? <p>Result arbitration : <b>Part A is winner 🏆</b></p>:null}
          {datta.result.result==="Part_B_Winner"? <p>Result arbitration : <b>Part B is winner 🏆</b></p>:null}
          {datta.result.result==="equality"? <p>Result arbitration : <b>Equality ⚖</b></p>:null}
         </div>:<p>During arbitration <i className="fa fa-refresh fa-pulse fa-fw" aria-hidden="true"></i></p>}
        </Modal.Body> 
        <Modal.Footer>
          <Button className="btn btn-primary" type="button" onClick={handleClose}>
            I see the result
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Defend his vice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form onSubmit={handleSubmit(onSubmit)} id="regist">
         <p>Hello legal professional<b className="text-dark text-capitalize"> {user},</b></p>
         <p>Number ID for this dispute <b className="text-info">{datta._id}</b></p>
         <div className="mb-3"> 
        <label htmlFor="formFileMultiple" className="form-label">download the necessary files</label>
        <input className="form-control" type="file" id="formFileMultiple" name="fields" multiple ref={register}/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Type your report</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" name="report" rows="3" ref={register}></textarea>
        </div>
        <div className="mb-3">
        <h5 className="mt-4">Who is to see</h5>
        <div className="d-flex justify-content-between w-50">
          <label>Arbitrator :</label> 
          <div className="form-check form-check-inline" name="ChoixArbitrator">
  <input className="form-check-input" type="radio" id="inlineCheckbox1" name="radio1" ref={register} value="yes" onClick={()=>setArbit(true)}></input>
  <label className="form-check-label" htmlFor="inlineCheckbox1"><i className="fa fa-eye text-success" aria-hidden="true"></i></label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" id="inlineCheckbox2" name="radio1" ref={register} value="no" onClick={()=>setArbit(false)}></input>
  <label className="form-check-label" htmlFor="inlineCheckbox2"><i className="fa fa-eye-slash text-danger" aria-hidden="true"></i></label>
</div>
        </div>
        <div className="d-flex justify-content-between w-50">
          <label>Citizen   :</label> 
          <div className="form-check form-check-inline" name="ChoixCitoyen">
  <input className="form-check-input" type="radio" id="inlineCheckbox3" name="radio2" ref={register} value="yes" onClick={()=>setCitoyen(true)}></input>
  <label className="form-check-label" htmlFor="inlineCheckbox3"><i className="fa fa-eye text-success" aria-hidden="true"></i></label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" id="inlineCheckbox4" name="radio2" ref={register} value="no" onClick={()=>setCitoyen(false)}></input>
  <label className="form-check-label" htmlFor="inlineCheckbox4"><i className="fa fa-eye-slash text-danger" aria-hidden="true"></i></label>
</div>
        </div>
        </div>    
         </form>
        </Modal.Body> 
        <Modal.Footer>
          <Button key={datta._id} className="btn btn-primary" type="submit" form="regist" onClick={Render}>
          Send
          </Button>
        </Modal.Footer>
      </Modal>
         </tr>
    )
}

export default ListMediations
