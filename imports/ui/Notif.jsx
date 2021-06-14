import React from 'react'
import { useEffect } from 'react'
import Moment from 'react-moment';
import { Meteor } from 'meteor/meteor';

const Notif = ({not,fetch}) => {
    console.log("not :",not);
    const Delete=()=>{
        Meteor.call('DeleteNotif',not._id,(err)=>{
            if(err){
                notyf.error("Deleted Notification failed");
                console.log('Deleted Notification failed');
            }else{
                notyf.success("Deleted Notification with success");
                console.log('Deleted Notification with success');
            }
        })
    }
    useEffect(()=>{
        fetch()
    },[])
    return (
        <li key={not._id}><div className="card">
            <small className="bg-warning"><button type="button" className="btn-close pull-right" aria-label="Close" onClick={Delete}></button><b>notif :</b> {not.dispute} 😉<br></br>
        <b>createdAt :</b> <Moment format="D MMM YYYY" withTitle>{not.creatAt}</Moment></small>
            </div></li> 
    )
}

export default Notif
