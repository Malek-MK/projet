import React, { useState } from 'react'
import { useEffect } from 'react'
import Moment from 'react-moment';
import { Meteor } from 'meteor/meteor';
import { Notyf } from 'notyf';


const notyf = new Notyf({
    duration: 2000,
    position: {
        x: 'center',
        y: 'top',
    }
  })

const NotifLegalPro = ({not,fetch}) => {
    const [idnotif,setIdNotif]=useState()
    console.log("idnotif :",idnotif);
    if(idnotif){
        Meteor.call('DeleteNotif',idnotif,(err)=>{
            if(err){
                notyf.error("Deleted Notification failed");
                console.log('Deleted Notification failed');
            }else{
                notyf.success("Deleted Notification with success");
                console.log('Deleted Notification with success');
                fetch()
                setIdNotif()
            }
        })
       }
    
    useEffect(()=>{
        fetch()
    },[])
    return (
       <>
        {not.result? <li><div className="card">
            <small className="bg-warning"><button type="button" className="btn-close pull-right" aria-label="Close" onClick={()=>{setIdNotif(not._id)}}></button><b>notif :</b> {not.result} 😉<br></br>
        <b>createdAt :</b> <Moment format="D MMM YYYY" withTitle>{not.dateAddUser}</Moment></small>
            </div></li>:null}
            {not.mediation? <li><div className="card">
            <small className="bg-warning"><button type="button" className="btn-close pull-right" aria-label="Close" onClick={()=>{setIdNotif(not._id)}}></button><b>notif :</b> {not.mediation} 😉<br></br>
        <b>createdAt :</b> <Moment format="D MMM YYYY" withTitle>{not.dateAddAdmin}</Moment></small>
            </div></li>:null}
       </> 
    )
}

export default NotifLegalPro
