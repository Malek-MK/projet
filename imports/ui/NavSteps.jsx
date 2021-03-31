import React, { useState } from 'react';

const NavSteps = ({ setShow,show}) => {
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
    setView('step-item text-decoration-none ')
    setView1('step-item text-decoration-none ')
    setView2('step-item text-decoration-none ')
  }


  return (
    <div className="steps mb-5">
      <a className={show==='step1'?view1:view} onClick={handleClick1}>
        Step 1
    </a>
      <a className={show==='step2'?view2:view} onClick={handleClick2}>
        Step 2
    </a>
      <a className={show==='step3'?view2:view} onClick={handleClick3}>
        Step 3
    </a>

    </div>
  )
}

export default NavSteps
