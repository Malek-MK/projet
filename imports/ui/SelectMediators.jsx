import React, { useEffect } from 'react'

const SelectMediators = ({mediator,fetch}) => {
    useEffect(()=>{
        fetch()
    },[])
    return (
    <div>
    <select key={mediator._id} name="mediator" className="form-control" >
    <option>{mediator.username}</option>
    </select>
    </div>
)
}

export default SelectMediators
