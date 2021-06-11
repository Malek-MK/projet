import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import ListLegalProf from './ListLegalProf';
import Button from "react-bootstrap/Button";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Meteor } from 'meteor/meteor';
 import Modal from "react-bootstrap/Modal";
 import Schema from '../Validation/YupRegister';
 import Footerr from './Footerr';

 const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })

const ManageLegalProf = () => {
    const [legalprof,setLegalProf]=useState([]);
    const renderLegalProf=()=>{
        Meteor.call('showLegalProf',(err,res)=>{
            console.log("res :",res)
            setLegalProf(res);
        })
    }
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
      });
     const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
        const InsertLegalProf = data => {
         Meteor.call('insertLegalProf', data, (err) => {
        if (err) {
          console.log('Inserted Legal Prof Failed', err)
          notyf.error("Inserted legal professional Failed")
        }
        else {
          console.log('Inserted Legal Professional with success')
          notyf.success("Inserted legal professional with success")
        } 
       
      });
      };
    useEffect(()=>{
        renderLegalProf();
    },[])

    return (
        <div>
           <HeaderAdmin/> 
           <br></br><br></br><br></br>
           <div className="container mt-5">
           <div>
                <div className="d-flex pull-right">
                            <div className="btn-list">

                                <Button className="btn btn-primary d-none d-sm-inline-block" onClick={handleShow} form="update">Create new legal professional</Button>
                                
                            </div>
                        </div> 
                </div>
                <div className="card-title mb-5"><h3 className="card-label">
                List of Legal professionals
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Legal professionals</span></div>
                        <table className="table table-bordered text-center">
                        <thead className="thead-dark">
                        <tr>
                        <th><b>Name</b></th>
                        <th><b>Email</b></th>
                        <th><b>Update</b></th>
                        <th><b>Delete</b></th>
                        </tr>
                         </thead>
                         <tbody>
                         {legalprof.map((legprof)=>{
                        return (
                            <ListLegalProf 
                                key={legprof._id}
                                legprof={legprof}
                                fetch={renderLegalProf}
                            />
                        );
                        })}
                        </tbody>
                         </table> 
                         <br></br><br></br><br></br><br></br><br></br>
                         <Footerr/>
           </div>
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Insert New Legal Professional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(InsertLegalProf)} id="update">
            <label>Username :</label>
            <input
              type="text"
              name="name"
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
          <Button className="btn btn-success" form="update" type="submit" onClick={handleClose}>
            Save Legal Professional
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ManageLegalProf
