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
      x: 'center',
      y: 'center',
    }
  })
const ListLegalProf = ({ legprof, fetch}) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [mail,setMail]=useState([]);

    const UpdateLegalProf = data => {
    Meteor.call('UpdateUser', { id: legprof._id, data }, (err) => {
      if (err) {
        console.log('Updated failed')
        notyf.error("Updated failed")
      }
      else {
        console.log('Updated with success')
        setShow(false);
        notyf.success("Updated with success")
        fetch();
      }
    });
  };

  const Delete = () => {
    Meteor.call('DeleteUser', legprof._id, (err) => {
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
        setMail(legprof.emails)
        fetch(); 
      }, []); 
    return (
        <>
        <tr key={legprof._id}>
           <td key={legprof._id}>{legprof.username}</td>
           {mail.map(e=>{
               return <td key={legprof._id}>{e.address}</td>
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
             <i className="fa fa-trash-o fa-lg"></i>  Delete
             </Button>        </td>
         </tr>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update this Legal Professional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(UpdateLegalProf)} id="update">
            <label>Username :</label>
            <input
              type="text"
              name="name"
              ref={register}
              placeholder="Legal Professional Name"
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
              type="password"
              name="password"
              ref={register}
              placeholder="Password"
              className="form-control"
            />
            <p className="text-danger">{errors.password?.message}</p>
            <label htmlFor="Role">Verify Password :</label>
            <input
              type="password"
              name="password1"
              ref={register}
              placeholder="Verify Password"
              className="form-control"
            />
            <p className="text-danger">{errors.password1?.message}</p>
          </form>
        </Modal.Body> 
        <Modal.Footer>
          <Button className="btn btn-primary" form="update" type="submit">
            Save Update
          </Button>
        </Modal.Footer>
      </Modal>
       </>
    )
}

export default ListLegalProf
