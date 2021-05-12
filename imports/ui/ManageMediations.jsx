import React,{useState,useEffect} from 'react'
import HeaderArbitrator from '../ui/HeaderArbitrator';
import { Meteor } from 'meteor/meteor';

const ManageMediations = () => {
    const [users,setUsers]=useState([]);
    console.log("users :",users)
    const renderUsers=()=>{
        Meteor.call('showUsers',(err,res)=>{
            setUsers(res);
        })
    }
    useEffect(()=>{
        renderUsers();
    },[])
    
    return (
        <div>
            <HeaderArbitrator/>
            <br></br><br></br>
            <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                List of Mediations
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Mediations</span></div>
        </div>
        </div>
    )
}

export default ManageMediations
