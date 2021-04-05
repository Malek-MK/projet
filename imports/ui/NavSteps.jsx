import React, { useState } from 'react';

const NavSteps = ({setStep,step}) => {
  const [view, setView] = useState();
  const [view1, setView1] = useState();
  const [view2, setView2] = useState();
  const [view3, setView3] = useState();

  

  return (
    <div>
      {step == 0?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none active' >
        Step 1<i class="fas fa-user-friends"></i>
    </a>
      <a className= 'step-item text-decoration-none ' >
        Step 2<i class="fad fa-user-friends"></i>
    </a>
      <a className= 'step-item text-decoration-none ' >
        Step 3
    </a>
    <a className= 'step-item text-decoration-none ' >
        Step 4
    </a>

    </div>:null}
    {step == 1?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none ' >
        Step 1
    </a>
      <a className= 'step-item text-decoration-none active' >
        Step 2
    </a>
      <a className= 'step-item text-decoration-none ' >
        Step 3
    </a>
    <a className= 'step-item text-decoration-none ' >
        Step 4
    </a>

    </div>:null}
    {step == 2?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none ' >
        Step 1
    </a>
      <a className= 'step-item text-decoration-none ' >
        Step 2
    </a>
      <a className= 'step-item text-decoration-none active' >
        Step 3
    </a>
    <a className= 'step-item text-decoration-none ' >
        Step 4
    </a>

    </div>:null}
    {step == 3?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none ' >
        Step 1
    </a>
      <a className= 'step-item text-decoration-none ' >
        Step 2
    </a>
      <a className= 'step-item text-decoration-none ' >
        Step 3
    </a>
    <a className= 'step-item text-decoration-none active' >
        Step 4
    </a>

    </div>:null}
    </div>
    )
}

export default NavSteps
