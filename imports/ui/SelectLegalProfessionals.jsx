import React, {useEffect } from 'react'

const SelectLegalProfessionals =({legalprof,fetch}) => {
    useEffect(()=>{
        fetch()
    },[])
    return (
    <>
    <option key={legalprof._id} value={legalprof._id}>{legalprof.username}</option>
    </>
)
}

export default SelectLegalProfessionals
