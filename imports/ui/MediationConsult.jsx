import React, {  useState,useEffect } from 'react'
import { useParams } from 'react-router';
import { Meteor } from 'meteor/meteor';
import Consult from '../ui/Consult';
const MediationConsult = () => {
    const {id} = useParams();
    const [data,setData]=useState();
    const fetchMedia=()=>{
        Meteor.call('fetchMedia',id,(err,res)=>{
          setData(res);
        })
      }
      
      useEffect(()=>{
        fetchMedia()
      },[])

    return ( 
        <>
        {data?
        
       <Consult
       data={data}
       fetchMedia={fetchMedia}
       />
    
        :null}
           
       </>
    )
}

export default MediationConsult
