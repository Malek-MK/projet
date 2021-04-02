import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })
const Litige = ({media,fetch}) => {
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
        <td ><span className="text-success">Validée</span></td>
        <td >{media.time}</td>

        <td>
          <Button
            className="btn btn-info"
          >
            Update
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-danger"
            onClick={Delete}
          >
            Delete
          </Button>        </td>

      </tr>
       </>
    )
}

export default Litige
