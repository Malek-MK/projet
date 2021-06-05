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

const Litige = ({ media, fetch}) => {
  const [show,setShow]=useState(false);
  
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
        <td ><span className="text-success">Saved</span></td>
        <td >{media.time}</td>
        <td>  
    <Link className="btn btn-info text-decoration-none" to={`/mediations/update/${media._id}`} onClick={()=>setShow(true)}> Update</Link>
        </td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={Delete}
          >
          <i className="fa fa-trash-o fa-lg"></i>  Delete
          </Button>        </td>
      </tr>
    </>
  )
}

export default Litige
