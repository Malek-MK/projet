import React,{useState,useEffect} from 'react'
import HeaderArbitrator from '../ui/HeaderArbitrator';
import { Meteor } from 'meteor/meteor';
import Footerr from './Footerr';
import ListeMediations from '../ui/ListeMediations';
const ManageMediations = () => {
    const [docs,setDocs]=useState([]);
    const [data,setData]=useState([]);
    
    const renderMediationsPayment=()=>{
        Meteor.call('fetchMediationsPayment',(err,res)=>{
            setData(res);
        })
    }

    const renderUsersWithMediations=()=>{
        Meteor.call('findUsersWithMediations',(err,res)=>{
            setDocs(res);
        })
    }
    useEffect(() => {
        renderMediationsPayment()
    }, [])
    return (
        <div>
            <HeaderArbitrator/>
            <br></br><br></br>
            <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                List of Disputes
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Disputes</span></div>
                        <table className="table table-bordered text-center">
                        <thead className="thead-dark">
                        <tr>
                        <th><b>Part A</b></th>
                        <th><b>Part B</b></th>
                        <th><b>Status</b></th>
                        <th><b>Date</b></th>
                        <th><b>Action</b></th>
                        <th><b>Result</b></th>
                        <th><b>Eventually</b></th>
                        </tr>
                         </thead>
                
                         <tbody>
                        
                           {data.map((data)=>{
                               return (
                                  
                                <ListeMediations
                                key={data._id}
                                data={data}
                                renderMediationsPayment={renderMediationsPayment}
                                />
                              
                               )
                           
                           })}
                           
                        </tbody>
                        
                         </table>  
        
                     
        <Footerr/>
        </div>
        </div>
    )
}

export default ManageMediations
