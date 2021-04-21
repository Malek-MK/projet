import React, { useEffect, useState } from 'react'
import FullCalendar, { identity } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import clsx from 'clsx';
import Moment from 'react-moment';

const notyf = new Notyf({
  duration: 2000,
  position: {
      x: 'center',
      y: 'top',
  }
})

const PrefDate = ({setVerif,verif,dates,id,fetch}) => {
    const[data,setData]=useState([]);
    const[date,setDate]=useState([]);
    console.log("dates :",dates)
    console.log("date :",date)
    const handleDateClick = (arg) => {
      if(data.length+(dates?.length || 0)<=9){   
      setData(v=>[...v,arg.dateStr]); 
      setDate(v=>[...v,arg.date]); 
      }else{
        notyf.error("Vous avez atteint le nombre maximum de possibilité de sélection!")
      }
      }
     
      useEffect(() => {
        fetch()
       }, [])
     
      const click=()=>{
        if(data.length+(dates?.length || 0)<=9){
        Meteor.call(
          'insertDate',{id,date}, (err) => { 
            if (err) {
                  notyf.error("Inserted Failed")
                  console.log(err)
              } else {
                  notyf.success("Inserted with success")
                  setVerif(true)
                  setDate(date)
              }
          }
      );
        }else{
          notyf.error("Vous avez atteint le nombre maximum de possibilité de sélection!")
        }
      }
      
    

      const handleEventClick = (clickInfo) => {
        console.log('date 1',clickInfo.event.start)
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
         
        const indexToRemove = data.findIndex(date => date === clickInfo.event.start);
        console.log(indexToRemove)
          {data.map(e=>console.log(e))}
          const result = [...data.slice(0, indexToRemove), ...data.slice(indexToRemove + 1)];
         setData(result)

        }
      }
    return (
       <div>
         <div className="container">
            {!dates&&!verif?<div class="alert alert-warning mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-exclamation-triangle fa-2x"></i>Please choose a maximum of 10 dates on which you can make yourself available for the mediation process.</div>
     
    </div>
  </div>
</div>:null}

{dates||verif?<div class="alert alert-success mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
      Congratulations! your mediation date preferences have been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}

   <div>
   Vos disponbilités :
   <br></br>
   {dates?dates.map((e)=>{ return <button className="btn btn-success btn-sm mr-2 ml-2 mt-2 mb-5" style={{margin:"3px"}}><Moment format="D MMM YYYY" withTitle>{e}</Moment></button>}):null}
   {data.map((e)=>{ return  <button className="btn btn-primary btn-sm mr-2 ml-2 mt-2 mb-5" style={{margin:"3px"}}><Moment format="D MMM YYYY" withTitle>{e.date}</Moment></button>})}
 
   </div>
       <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin ]} 
       dateClick={handleDateClick}
       eventClick={handleEventClick} 
       weekends={false}
       displayEventTime={false}
      events={[...dates,...data].map(e=>({title:"Partie A",date:e,allDaySlot:true}))}/>
      
          <div  className="d-flex pull-right ">
          <button  className={clsx("btn btn-primary  btn-lg mt-3 mb-5")} onClick={click}>VALIDER MES DATES</button>
          </div>
        </div>
       </div>

    )
   
}

export default PrefDate
