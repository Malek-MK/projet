import React, { useEffect } from 'react'

const ListeMediations = ({doc}) => {
    console.log("doc :",doc.mediations);
    return (
        <div>
            {doc.mediations.map((e)=>{
               if(e.isPayment===true){
                return (
                    <div key={e._id}>
                        {e.mediator}
                    </div>
                )
               }
            })}
        </div>
    )
}

export default ListeMediations
