import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link } from 'react-router-dom';
import Recaptcha from 'react-recaptcha';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Schema from '../Validation/YupRegister';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Meteor } from 'meteor/meteor';
 import Modal from "react-bootstrap/Modal";

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })
const ListArbitrators = ({ arbitrator, fetch}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver()
  });
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [mail,setMail]=useState([])
    const UpdatePlayer = data => {
    Meteor.call('updatePlayer', { id: player._id, data }, (err) => {
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

  const Delete = () => {
    Meteor.call('deletePlayer', player._id, (err) => {
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
    useEffect(() => {
        setMail(arbitrator.emails)
        fetch(); 
      }, []); 
    return (
        <>
        <tr key={arbitrator._id}>
           <td>{arbitrator.username}</td>
           {mail.map(e=>{
               return <td>{e.address}</td>
           })}
           <td>  
       <Link className="btn btn-info text-decoration-none" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update</Link>
           </td>
           <td>
             <Button
               className="btn btn-danger"
             >
             <i class="fa fa-trash-o fa-lg"></i>  Delete
             </Button>        </td>
         </tr>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update this player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(UpdatePlayer)} id="update">
            <label>Name :</label>
            <input
              type="text"
              name="name"
              ref={register}
              placeholder="Player Name"
              className="form-control"
            />
            <p className="text-danger">{errors.name?.message}</p>
            <label>Number :</label>
            <input
              type="number"
              name="number"
              ref={register}
              placeholder="Number"
              className="form-control"
            />
            <p className="text-danger">{errors.number?.message}</p>
            <label htmlFor="Role">Role :</label>
            <input
              type="text"
              name="role"
              ref={register}
              placeholder="Role"
              className="form-control"
            />
            <p className="text-danger">{errors.role?.message}</p>
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

export default ListArbitrators
