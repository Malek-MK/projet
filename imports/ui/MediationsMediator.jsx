import React, { useEffect, useState } from 'react'
import HeaderMediator from './HeaderMediator';
import { Meteor } from 'meteor/meteor';
import { useTracker } from "meteor/react-meteor-data";
import ListeMedia from '../ui/ListeMedia';
const MediationsMediator = () => {
    const user = useTracker(() => Meteor.user()?._id);
    const [data,setData]=useState([]);
    console.log("media :",data)
   const renderMediations=()=>{
    Meteor.call('fetchMediations',user,(err,res)=>{
        console.log("res :",res)
        setData(res)
    })
   } 
   useEffect(()=>{
    renderMediations()
   },[])
    return (
        <div>
            <HeaderMediator/>
            <br></br><br></br><br></br>
            <div className="container mt-5">
            <div className="card-title mb-5">
                    <h3 className="card-label">List of mediation files</h3>
                    <span className="d-block text-muted pt-2 font-size-sm">
                        Consult and edit my mediation files</span>
            </div>
            <table className="table table-bordered text-center">
                        <thead className="thead-dark">
                        <tr>
                        <th><b>Part A</b></th>
                        <th><b>Part B</b></th>
                        <th><b>Status</b></th>
                        <th><b>Date</b></th>
                        <th><b>Paying</b></th>
                        <th><b>Action</b></th>
                        <th><b>Result</b></th>
                        </tr>
                         </thead>
                         <tbody>
                         {data.map((doc)=>{
                        return (
                            <>
                            <ListeMedia
                            key={doc._id}
                            doc={doc}
                            renderMedia={renderMediations}
                            />
                            </>
                        )
                        })}
                        </tbody>
                         </table>  
                         
            </div>
        </div>
    )
}

export default MediationsMediator
