import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { Meteor } from 'meteor/meteor';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { useTracker } from "meteor/react-meteor-data";

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'left',
    y: 'top',
  }
})

const Litige = ({ media, fetch}) => {
  console.log("media defend :",media.defend);
  const user = useTracker(() => Meteor.user()?.username);
  useEffect(() => {
    fetch();
  }, []);  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true); 
  const Delete = () => {
    Meteor.call('deleteMediation', media._id, (err) => {
      if (err) {
        notyf.error("Deleted failed");
        console.log('Deleted failed');
      }
      else {
        notyf.success("Deleted with success");
        console.log('Deleted with success');
        fetch();
      }
    });
  }

  return (
    <>
     <tr key={media._id}>
        <td ><b>{media.nomsoc}</b><br></br>{media.email}</td>
        <td ><b>{media.nomsoc1}</b><br></br>{media.email1}</td>
        <td ><span className="text-success">Saved</span></td>
        <td >{media.time}</td>
        <td>  
    <Link className="btn btn-info text-decoration-none" to={`/mediations/update/${media._id}`} target="_blank"> Update</Link>
        </td>
        <td><Button className="btn btn-danger" onClick={Delete}><i className="fa fa-trash-o fa-lg"></i>Delete </Button></td>
          <td><Button className="btn btn-success" onClick={handleShow1}>Show</Button></td>
          <td><Button className="btn btn-primary" onClick={handleShow}>Result</Button></td>
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
         <p>Hello <b className="text-dark text-capitalize"> {user},</b></p>
         <p>Your number ID for your dispute <b className="text-danger">{media._id}</b></p>
         <h5 className="text-success">Your Dispute :</h5>
          {media.result?<div>
          {media.result.judgement==="submitted"?<p>State of arbitration : <b>Submitted ✅</b></p>:null}
          {media.result.judgement==="inprogress"? <p>State of arbitration : <b>In progress ⌛</b></p>:null}
          {media.result.judgement==="judjed"? <p>State of arbitration : <b>Judged ⚡️</b></p>:null}
          {media.result.result==="wait_please"?<p>Result arbitration : <b>Wait please <i class="fa fa-smile-o" aria-hidden="true"></i></b></p>:null}
          {media.result.result==="Part_A_Winner"? <p>Result arbitration : <b>Part A is winner 🏆</b></p>:null}
          {media.result.result==="Part_B_Winner"? <p>Result arbitration : <b>Part B is winner 🏆</b></p>:null}
          {media.result.result==="equality"? <p>Result arbitration : <b>Equality ⚖</b></p>:null}
         </div>:<p>During arbitration <i class="fa fa-refresh fa-pulse fa-fw" aria-hidden="true"></i></p>}
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
          <Modal.Title>Show the defend of your dispute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Hello <b className="text-dark text-capitalize"> {user},</b></p>
         <p>Your number ID for your dispute <b className="text-danger">{media._id}</b></p>
         <h5 className="text-success">Your Dispute :</h5>
          {media.defend?<div>
            {media.defend.radio2==="yes"?<p>The report :{media.defend.report}</p>:null}
          </div> :<p>He still hasn't defended you yet <i className="fa fa-circle-o-notch fa-pulse fa-fw" aria-hidden="true"></i></p>}
        </Modal.Body> 
        <Modal.Footer>
          <Button className="btn btn-primary" type="button" onClick={handleClose1}>
            I see the defend
          </Button>
        </Modal.Footer>
      </Modal>
      </tr>
      
    </>
  )
}

export default Litige
