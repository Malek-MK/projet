import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
const PrefDate = () => {
    const[data,setData]=useState([]);
    handleDateClick = (arg) => {
         setData(arg.dateStr);  
      }
      
    return (
        <div class="container">
            <div class="text-dark text-center bg-warning w-75 ml-2 mr-2 mt-3 mb-5"><i class="fa fa-exclamation-triangle"></i>
Please choose a maximum of 10 dates on which you can make yourself available for the mediation process.</div>
   
       <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin ]}
       dateClick={this.handleDateClick}
       selectable={true}
       weekends={false}
       events={[
        { title: 'event', date: data },
        { title: 'event 2', date: '2019-04-02' }
      ]}      />

        </div>
    )
   
}

export default PrefDate
