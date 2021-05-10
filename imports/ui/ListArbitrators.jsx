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
 
const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })
const ListArbitrators = ({ arbitrator, fetch}) => {
    const [mail,setMail]=useState([])
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
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Arbitrator</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 
      Show a second modal and hide this one with the button below.

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       </>
    )
}

export default ListArbitrators
