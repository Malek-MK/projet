import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from 'meteor/meteor';

const ListeMedia = ({doc,renderMedia}) => {
    const user = useTracker(() => Meteor.user()?.username);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    useEffect(() => {
        renderMedia() 
    }, [])
    return (
        <>
        <tr key={doc._id}>
        <td scope="row" ><b>{doc.nomsoc}</b><br></br>{doc.email}</td>
        <td ><b>{doc.nomsoc1}</b><br></br>{doc.email1}</td>
        <td ><span className="text-success">Saved</span></td>
        <td >{doc.time}</td>
        <td>{doc.isPayment?<span className="text-primary">Yes</span>:<span className="text-danger">No</span>}</td>
        <td><Link className="btn btn-info text-decoration-none" to={`/mediator/mediation/adjust/${doc._id}`} target="_blank">Adjust</Link></td>
        <td><button className="btn btn-success" onClick={handleShow}>Show</button></td>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        key={doc._id}
      >
        <Modal.Header closeButton>
          <Modal.Title>Show the result of your dispute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Hello mediator<b className="text-dark text-capitalize"> {user},</b></p>
         <p>Number ID for this dispute <b className="text-danger">{doc._id}</b></p>
         <h5 className="text-success">Dispute :</h5>
          {doc.result?<div>
          {doc.result.judgement==="submitted"?<p>State of arbitration : <b>Submitted ✅</b></p>:null}
          {doc.result.judgement==="inprogress"? <p>State of arbitration : <b>In progress ⌛</b></p>:null}
          {doc.result.judgement==="judjed"? <p>State of arbitration : <b>Judged ⚡️</b></p>:null}
          {doc.result.result==="wait_please"?<p>Result arbitration : <b>Wait please <i class="fa fa-smile-o" aria-hidden="true"></i></b></p>:null}
          {doc.result.result==="Part_A_Winner"? <p>Result arbitration : <b>Part A is winner 🏆</b></p>:null}
          {doc.result.result==="Part_B_Winner"? <p>Result arbitration : <b>Part B is winner 🏆</b></p>:null}
          {doc.result.result==="equality"? <p>Result arbitration : <b>Equality ⚖</b></p>:null}
         </div>:<p>During arbitration <i class="fa fa-refresh fa-pulse fa-fw" aria-hidden="true"></i></p>}
        </Modal.Body> 
        <Modal.Footer>
          <Button className="btn btn-primary" type="button" onClick={handleClose}>
            See the result
          </Button>
        </Modal.Footer>
      </Modal>
        </tr>
        </>
    )
}

export default ListeMedia
