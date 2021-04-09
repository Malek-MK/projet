import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { Meteor } from 'meteor/meteor';
import Modal from "react-bootstrap/Modal";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Mediation from './Mediation';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'left',
    y: 'top',
  }
})

const Litige = ({ media, fetch ,setShow1}) => {
  console.log(media)
  const { register, handleSubmit, errors } = useForm({
    //resolver: yupResolver(schema)
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  

  const UpdateMediation = data => {
    Meteor.call('updateMediation', { id: media._id, data }, (err) => {
      if (err) {
        console.log('Updated failed')
        notyf.error("Updated failed")
      }
      else {
        notyf.success("Updated with success")
        console.log('Updated with success')
        setShow(false);
        fetch();
      }
      
    });
  };

  useEffect(() => {
    fetch();
  }, []);
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
        <td scope="row" ><b>{media.nomsoc}</b><br></br>{media.email}</td>
        <td ><b>{media.nomsoc1}</b><br></br>{media.email1}</td>
        <td ><span className="text-success">Validated</span></td>
        <td >{media.time}</td>

        <td>
        
    <Link className="btn btn-info text-decoration-none" to="/admin/mediation"> Update</Link>
    
    

        </td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={Delete}
          >
            Delete
          </Button>        </td>

      </tr>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Update this player</Modal.Title>
        </Modal.Header >
        <Modal.Body >
          <form onSubmit={handleSubmit(UpdateMediation)} id="update">
            <Mediation />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" form="update" type="submit">
            Save Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Litige
