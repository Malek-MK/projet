import React, { useState,useEffect } from 'react'

const SelectMediators =({mediator,fetch,setChoix}) => {
    console.log("num :",mediator._id)
    const renderChoix=()=>{
        setChoix(mediator._id)
    }
    useEffect(()=>{
        fetch()
        renderChoix()
    },[])
    return (
    <>
    <option key={mediator._id} onClick={()=>{renderChoix}}>{mediator.username}</option>
    </>
)
}

export default SelectMediators
