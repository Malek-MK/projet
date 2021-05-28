import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Meteor } from 'meteor/meteor';
import ListMediators from './ListMediators';
import Footerr from './Footerr';

const ManageMediators = () => {
    const [mediators,setMediators]=useState([]);
    const renderMediators=()=>{
        Meteor.call('showMediators',(err,res)=>{
            setMediators(res);
        })
    }
    useEffect(()=>{
        renderMediators();
    },[])
    return (
        <div>
            <HeaderAdmin/>
            <br></br><br></br><br></br>
            <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                List of Mediators
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Mediators</span></div>
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
                         {mediators.map((mediator)=>{
                        return (
                            <ListMediators
                                key={mediator._id}
                                mediator={mediator}
                                fetch={renderMediators}
                            />
                        );
                        })}
                        </tbody>
                         </table>  
                         <br></br><br></br><br></br><br></br><br></br><br></br>
                         <Footerr/> 
           </div>
        </div>
    )
}

export default ManageMediators
