import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Meteor } from 'meteor/meteor';
 import Modal from "react-bootstrap/Modal";
 import Schema from '../Validation/YupRegister';

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })
const ListArbitrators = ({ arbitrator, fetch}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [mail,setMail]=useState([])
    const UpdateArbitrator = data => {
    Meteor.call('updateArbitrator', { id: arbitrator._id, data }, (err) => {
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
    Meteor.call('deleteArbitrator', arbitrator._id, (err) => {
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
       <Button className="btn btn-info" onClick={handleShow}
            form="update" > Update</Button>
           </td>
           <td>
             <Button
               className="btn btn-danger"
               onClick={Delete}
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
          <Modal.Title>Update this Arbitrator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(UpdateArbitrator)} id="update">
            <label>Username :</label>
            <input
              type="text"
              name="username"
              ref={register}
              placeholder="Arbitrator Name"
              className="form-control"
            />
            <p className="text-danger">{errors.name?.message}</p>
            <label>Email :</label>
            <input
              type="email"
              name="email"
              ref={register}
              placeholder="Email"
              className="form-control"
            />
            <p className="text-danger">{errors.email?.message}</p>
            <label htmlFor="Role">Password :</label>
            <input
              type="text"
              name="password"
              ref={register}
              placeholder="Password"
              className="form-control"
            />
            <p className="text-danger">{errors.password?.message}</p>
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
