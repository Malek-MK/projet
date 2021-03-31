import React, { useState } from 'react';

const NavSteps = ({ setShow }) => {
  const [view,setView]=useState('step-item text-decoration-none active')
  const [view1,setView1]=useState('step-item text-decoration-none active')
  const [view2,setView2]=useState('step-item text-decoration-none active')

  const handleClick1 = () => {
    setShow('step1')
    setView('step-item text-decoration-none ')
    setView1('step-item text-decoration-none active')
    setView2('step-item text-decoration-none active')

  }
  const handleClick2 = () => {
    setShow('step2')
    setView('step-item text-decoration-none ')
    setView1('step-item text-decoration-none ')
    setView2('step-item text-decoration-none active')
  }
  const handleClick3 = () => {
    setShow('step3')
    setView2('step-item text-decoration-none ')
    setView2('step-item text-decoration-none ')
    setView2('step-item text-decoration-none ')
  }


  return (
    <div className="steps mb-5">
      <a className={view1} onClick={handleClick1}>
        Step 1
    </a>
      <a className={view2} onClick={handleClick2}>
        Step 2
    </a>
      <a className={view2} onClick={handleClick3}>
        Step 3
    </a>

    </div>
  )
}

export default NavSteps
