import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Link } from 'react-router-dom';
import ListArbitrators from './ListArbitrators';

const ManageArbitrators = () => {
    const [arbitrators,setArbitrators]=useState([]);
    const renderArbitrator=()=>{
        Meteor.call('showArbitrators',(err,res)=>{
            console.log("res :",res)
            setArbitrators(res);
        })
    }
    useEffect(()=>{
        renderArbitrator();
    },[])

    return (
        <div>
           <HeaderAdmin/> 
           <div className="container mt-5">
           <div>
                <div className="d-flex pull-right">
                            <div className="btn-list">

                                <Link to="/createArbitrator" className="btn btn-primary d-none d-sm-inline-block text-decoration-none" >
                                    Create new Arbitrator</Link>
                                
                            </div>
                        </div> 
                </div>
                <div className="card-title mb-5"><h3 className="card-label">
                List of Arbitrators
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Arbitrators</span></div>
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
                         {arbitrators.map((arbitrator)=>{
                        return (
                            <ListArbitrators 
                                key={arbitrator._id}
                                arbitrator={arbitrator}
                                fetch={renderArbitrator}
                            />
                        );
                        })}
                        </tbody>
                         </table> 
           </div>
        </div>
    )
}

export default ManageArbitrators
