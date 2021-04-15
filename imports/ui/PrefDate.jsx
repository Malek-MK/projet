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
    const[data,setData]=useState([]);

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
           console.log('res ',res)
           console.log('id ',id)
        });
      }

      const click=()=>{
        if(data.length<10){
        Meteor.call(
          'insertDate', { id, data }, (err) => { 
            if (err) {
                  notyf.error("Inserted Failed")
              } else {
                  notyf.success("Inserted with success")
                  setVerif(true)
                  setData(data)
                 
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
            {!verif?<div className="text-dark text-center bg-warning w-75 ml-2 mr-2 mt-5 mb-3"><i className="fa fa-exclamation-triangle"></i>
Please choose a maximum of 10 dates on which you can make yourself available for the mediation process.</div>:null}

{verif?<div className="text-dark text-center bg-success w-75 ml-2 mr-2 mt-5 mb-3"><i className="fa fa-thumbs-up" aria-hidden="true"></i>
Félicitations ! vos préférences de date de médiation ont bien été enregistrées et notre équipe en a été averti.
</div>:null}
   <div>
   Vos disponbilités :
   <br></br>
   {data.map((e)=>{ return <button className="btn btn-success btn-sm mr-2 ml-2 mt-2 mb-5" style={{margin:"3px"}}>{e}</button>})}
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
