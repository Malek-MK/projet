import React, {useEffect } from 'react'

const SelectArbitrators =({arbitrator,fetch}) => {
    useEffect(()=>{
        fetch()
    },[])
    return (
    <>
    <option key={arbitrator._id} value={arbitrator._id}>{arbitrator.username}</option>
    </>
)
}

export default SelectArbitrators
