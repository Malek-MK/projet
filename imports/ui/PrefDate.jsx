import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
const PrefDate = () => {
    const[data,setData]=useState([]);

    const handleDateClick = (arg) => {
         setData(v=>[...v,arg.dateStr]);  
      }
      const [show,setShow]=useState(false);
    return (
        <div class="container">
            {!show?<div class="text-dark text-center bg-warning w-75 ml-2 mr-2 mt-3 mb-5"><i class="fa fa-exclamation-triangle"></i>
Please choose a maximum of 10 dates on which you can make yourself available for the mediation process.</div>:null}

{show?<div class="text-dark text-center bg-success w-75 ml-2 mr-2 mt-3 mb-5"><i class="fa fa-thumbs-up" aria-hidden="true"></i>
Félicitations ! vos préférences de date de médiation ont bien été enregistrées et notre équipe en a été averti.
</div>:null}
   <div>
   Vos disponbilités :
   <br></br>
   {data.map((e)=>{ return <button class="btn btn-primary btn-sm mr-2 ml-2 mt-2 mb-5" style={{margin:"3px"}}>{e}</button>})}
   
   </div>
       <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin ]}
       dateClick={handleDateClick}
       weekends={false}
       events={data.map(e=>({title:"Partie A",date:e}))}  
          />
         <button className="btn btn-primary pull-right btn-lg mt-5 mb-5" onClick={()=>setShow(true)}>VALIDER MES DATES</button>
        </div>
    )
   
}

export default PrefDate
