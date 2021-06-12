import React,{useState,useEffect} from 'react'
import HeaderLegalProf from '../ui/HeaderLegalProf';
import { Meteor } from 'meteor/meteor';
import Footerr from './Footerr';
import ListMediations from '../ui/ListMediations';
import { useTracker } from "meteor/react-meteor-data";

const ConsultMediations = () => {
    const user = useTracker(() => Meteor.user()?._id); 
    const [data,setData]=useState([]);
    const [data1,setData1]=useState([]);
    console.log("data :",data);
    const renderMediationsLegalProf=()=>{
        Meteor.call('fetchMediationsLegalProf',user,(err,res)=>{
            setData(res); 
        }) 
    }
    const renderMediationsLegalProf1=()=>{
        Meteor.call('fetchMediationsLegalProf1',user,(err,res)=>{
            setData1(res); 
        }) 
    }

    useEffect(() => {
        renderMediationsLegalProf()
        renderMediationsLegalProf1()
    }, [])
    return (
        <div>
            <HeaderLegalProf/>
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
                        
                           {data? 
                           <>
                           {data.map((datta)=>{
                            return (
                               
                             <ListMediations
                             key={datta._id}
                             datta={datta}
                             renderMediationsLegalProf={renderMediationsLegalProf}
                             />
                           
                            )
                        
                        })}
                           </>
                           :null}
                           {data1? 
                           <>
                           {data1.map((datta)=>{
                            return (
                               
                             <ListMediations
                             key={datta._id}
                             datta={datta}
                             renderMediationsLegalProf={renderMediationsLegalProf1}
                             />
                           
                            )
                        
                        })}
                           </>
                           :null}
                           
                        </tbody>
                        
                         </table>  
        
                     
        <Footerr/>
        </div>
        </div>
    )
}

export default ConsultMediations
