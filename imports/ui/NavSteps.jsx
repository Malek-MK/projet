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
      <h3>Step1 <i class="fa fa-user" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none ' >
      <h3>Step2 <i class="fa fa-users" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none ' >
       <h3> Step3 <i class="fa fa-file-text"></i></h3>

    </a>
    <a className= 'step-item text-decoration-none ' >
        <h3>Step4 <i class="fa fa-check-square"></i></h3>

    </a>

    </div>:null}
    {step == 1?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none ' >
      <h3>Step1 <i class="fa fa-user" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none active' >
      <h3>Step2 <i class="fa fa-users" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none ' >
       <h3> Step3 <i class="fa fa-file-text"></i></h3>

    </a>
    <a className= 'step-item text-decoration-none ' >
        <h3>Step4 <i class="fa fa-check-square"></i></h3>

    </a>

    </div>:null}
    {step == 2?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none ' >
      <h3>Step1 <i class="fa fa-user" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none ' >
      <h3>Step2 <i class="fa fa-users" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none active' >
       <h3> Step3 <i class="fa fa-file-text"></i></h3>

    </a>
    <a className= 'step-item text-decoration-none ' >
        <h3>Step4 <i class="fa fa-check-square"></i></h3>

    </a>

    </div>:null}
    {step == 3?<div className="steps mb-5">
      <a className= 'step-item text-decoration-none ' >
      <h3>Step1 <i class="fa fa-user" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none ' >
      <h3>Step2 <i class="fa fa-users" ></i></h3>
    </a>
      <a className= 'step-item text-decoration-none ' >
       <h3> Step3 <i class="fa fa-file-text"></i></h3>

    </a>
    <a className= 'step-item text-decoration-none active' >
        <h3>Step4 <i class="fa fa-check-square"></i></h3>

    </a>

    </div>:null}
    </div>
    )
}

export default NavSteps
