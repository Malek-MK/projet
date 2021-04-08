import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
const PrefDate = () => {
    const[data,setData]=useState([]);
    const handleDateClick = (arg) => {
         setData(v=>[...v,arg.dateStr]);  
      }
      
    return (
        <div class="container">
            <div class="text-dark text-center bg-warning w-75 ml-2 mr-2 mt-3 mb-5"><i class="fa fa-exclamation-triangle"></i>
Please choose a maximum of 10 dates on which you can make yourself available for the mediation process.</div>
   <div>
   Vos disponbilités :
   <br></br>
   {data.map((e)=>{ return <button class="btn btn-primary btn-sm mr-2 ml-2 mt-2 mb-5">{e}</button>})}
   
   </div>
       <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin ]}
       dateClick={handleDateClick}
       weekends={false}
       events={data.map(e=>({title:"Partie A",date:e}))}  
          />
         
        </div>
    )
   
}

export default PrefDate
