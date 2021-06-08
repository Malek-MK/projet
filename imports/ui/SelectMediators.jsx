import React, {useEffect } from 'react'

const SelectMediators =({mediator,fetch}) => {
    useEffect(()=>{
        fetch()
    },[])
    return (
    <>
    <option key={mediator._id} value={mediator._id}>{mediator.username}</option>
    </>
)
}

export default SelectMediators
