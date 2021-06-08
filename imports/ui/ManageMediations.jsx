import React,{useState,useEffect} from 'react'
import HeaderArbitrator from '../ui/HeaderArbitrator';
import { Meteor } from 'meteor/meteor';
import Footerr from './Footerr';
import ListeMediations from '../ui/ListeMediations';
const ManageMediations = () => {
    const [docs,setDocs]=useState([]);
    console.log("docs :",docs)
    const renderUsersWithMediations=()=>{
        Meteor.call('findUsersWithMediations',(err,res)=>{
            setDocs(res);
        })
    }
    useEffect(() => {
        renderUsersWithMediations()
    }, [])
    return (
        <div>
            <HeaderArbitrator/>
            <br></br><br></br>
            <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                List of Mediations
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Mediations</span></div>
        {docs.map((doc)=>{
            return (
                <ListeMediations
                key={doc._id}
                doc={doc}
                />
            )
        })}
                     
        <Footerr/>
        </div>
        </div>
    )
}

export default ManageMediations
