import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { Meteor } from 'meteor/meteor';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link } from 'react-router-dom';

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })


const ListUsers = ({ user, fetch}) => {
    const [mail,setMail]=useState([])
    useEffect(() => {
        setMail(user.emails)
        fetch();
      }, []); 
    return (
        <>
     <tr key={user._id}>
        <td >{user.username}</td>
        {mail.map(e=>{
            return <td>{e.address}</td>
        })}
        <td>  
    <Link className="btn btn-info text-decoration-none"> Update</Link>
        </td>
        <td>
          <Button
            className="btn btn-danger"
          >
          <i class="fa fa-trash-o fa-lg"></i>  Delete
          </Button>        </td>
      </tr>
    </>
    )
}

export default ListUsers
