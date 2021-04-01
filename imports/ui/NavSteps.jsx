import React, { useState } from 'react';

const NavSteps = ({setStep}) => {
  

  const handleClick1 = () => {
    setStep(0)
  }
  const handleClick2 = () => {
    setStep(1)

  }
  const handleClick3 = () => {
    setStep(2)

  }


  return (
    <div className="steps mb-5">
      <a className="step-item text-decoration-none active" onClick={handleClick1}>
        Step 1
    </a>
      <a className="step-item text-decoration-none active" onClick={handleClick2}>
        Step 2
    </a>
      <a className="step-item text-decoration-none active" onClick={handleClick3}>
        Step 3
    </a>

    </div>
  )
}

export default NavSteps
