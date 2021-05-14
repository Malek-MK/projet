import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Meteor } from 'meteor/meteor';
import ListUsers from './ListUsers';

const ManageUsers = () => {
    const [users,setUsers]=useState([]);
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
           <HeaderAdmin/> 
           <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                List of Users
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Users</span></div>
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
                         {users.map((user)=>{
                        return (
                            <ListUsers
                                key={user._id}
                                user={user}
                                fetch={renderUsers}
                            />
                        );
                        })}
                        </tbody>
                         </table>   
           </div>
        </div>
    )
}

export default ManageUsers