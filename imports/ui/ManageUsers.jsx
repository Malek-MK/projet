import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Meteor } from 'meteor/meteor';

const ManageUsers = () => {
    const [users,setUsers]=useState([]);
    const renderUsers=()=>{
        Meteor.call('showUsers',(err,res)=>{
            console.log("res :",res)
            setUsers(res);
        })
    }
    useEffect(()=>{
        renderUsers();
    },[])
    console.log("users :",users)
    return (
        <div>
           <HeaderAdmin/> 
           <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                List of Users
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Arbitrators</span></div>
           {users.map((user)=>{
               return <p key={user._id}>{user.username}</p>
           })}
           </div>
        </div>
    )
}

export default ManageUsers
