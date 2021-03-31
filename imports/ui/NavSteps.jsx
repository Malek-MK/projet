import React from 'react';

const NavSteps = ({ setShow }) => {
  const handleClick1 = () => {
    setShow('step1')
  }
  const handleClick2 = () => {
    setShow('step2')
  }
  const handleClick3 = () => {
    setShow('step3')
  }


  return (
    <div className="steps mb-5">
      <a className="step-item text-decoration-none" onClick={handleClick1}>
        Step 1
    </a>
      <a className="step-item text-decoration-none" onClick={handleClick2}>
        Step 2
    </a>
      <a className="step-item text-decoration-none" onClick={handleClick3}>
        Step 3
    </a>

    </div>
  )
}

export default NavSteps
