import React, { useEffect, useState } from 'react'
import FullCalendar, { identity } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import clsx from 'clsx';


const notyf = new Notyf({
  duration: 2000,
  position: {
      x: 'center',
      y: 'top',
  }
})

const PrefDate = ({setVerif,verif,id}) => {
  console.log(id)
    const[data,setData]=useState([]);
    const [dates,setDates]=useState([]);
    console.log("dates :",dates);
    const handleDateClick = (arg) => {
      console.log('date :',arg.dateStr)
        if((data.length-data.length)<10){
          setData(v=>[...v,arg.dateStr]); 
        }else{
          notyf.error("Vous avez atteint le nombre maximum de possibilité de sélection!")
        }
      }
     const fetch=()=>{
        Meteor.call('showDate',id,(err,res) => {
           setDates(res.Time)
        });
      }

      const click=()=>{
        if(data.length<10){
        Meteor.call(
          'insertDate',{id,data}, (err) => { 
            if (err) {
                  notyf.error("Inserted Failed")
                  console.log(err)
              } else {
                  notyf.success("Inserted with success")
                  setVerif(true)
                  setData(data)
                  console.log(data)
              }
          }
      );
        }else{
          notyf.error("Vous avez atteint le nombre maximum de possibilité de sélection!")
        }
      }
      

     useEffect(()=>{
        fetch()
      },[])

      handleEventClick = (clickInfo) => {
        console.log('date 1',clickInfo.event.start)
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
         {/* const indexToRemove = data.findIndex(date => date.dateStr === clickInfo.event.start);
          const result = [...data.slice(0, indexToRemove), ...data.slice(indexToRemove + 1)];
         setData(result)*/}
        }
      }
     
    return (
       <div>
         <div className="container">
            {!verif?<div class="alert alert-warning mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-exclamation-triangle fa-2x"></i>Please choose a maximum of 10 dates on which you can make yourself available for the mediation process.</div>
     
    </div>
  </div>
</div>:null}

{verif?<div class="alert alert-success mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
      Congratulations! your mediation date preferences have been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}

   <div>
   Vos disponbilités :
   <br></br>
   {data.map((e)=>{ return <button className="btn btn-primary btn-sm mr-2 ml-2 mt-2 mb-5" style={{margin:"3px"}}>{e}</button>})}
   {dates.map((e)=>{ return <button className="btn btn-success btn-sm mr-2 ml-2 mt-2 mb-5" style={{margin:"3px"}}>{e}</button>})}

   </div>
       <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin ]}
       dateClick={handleDateClick}
       eventClick={handleEventClick}
       weekends={false}
      selectable={true}
      events={data.map(e=>({title:"Partie A",date:e,allDaySlot: false}))}
          />
          <div  className="d-flex pull-right ">
          <button  className={clsx("btn btn-primary  btn-lg mt-3 mb-5")} onClick={click}>VALIDER MES DATES</button>
          </div>
        </div>
       </div>

    )
   
}

export default PrefDate
