import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const ListeMedia = ({doc,renderMedia}) => {
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
            <td><button className="btn btn-primary">Adjust</button></td>
        </tr>
        </>
    )
}

export default ListeMedia
