import React, { useState } from 'react';

const NavSteps = ({ setStep, step }) => {
  const [view, setView] = useState();
  const [view1, setView1] = useState();
  const [view2, setView2] = useState();
  const [view3, setView3] = useState();



  return (
    <div>
      {step == 0 ? <div className="steps mb-5">
        <a className='step-item text-decoration-none text-primary active' >
          <h3>Step1 <i className="fa fa-user" ></i></h3>
        </a>
        <a className='step-item text-decoration-none ' >
          <h3>Step2 <i className="fa fa-users" ></i></h3>
        </a>
        <a className='step-item text-decoration-none ' >
          <h3> Step3 <i className="fa fa-file-text"></i></h3>

        </a>
        <a className='step-item text-decoration-none ' >
          <h3>Step4 <i className="fa fa-check-square"></i></h3>

        </a>

      </div> : null}
      {step == 1 ? <div className="steps mb-5">
        <a className='step-item text-decoration-none text-primary' >
          <h3>Step1 <i className="fa fa-user" ></i></h3>
        </a>
        <a className='step-item text-decoration-none text-primary active' >
          <h3>Step2 <i className="fa fa-users" ></i></h3>
        </a>
        <a className='step-item text-decoration-none ' >
          <h3> Step3 <i className="fa fa-file-text"></i></h3>

        </a>
        <a className='step-item text-decoration-none ' >
          <h3>Step4 <i className="fa fa-check-square"></i></h3>

        </a>

      </div> : null}
      {step == 2 ? <div className="steps mb-5">
        <a className='step-item text-decoration-none text-primary' >
          <h3>Step1 <i className="fa fa-user" ></i></h3>
        </a>
        <a className='step-item text-decoration-none text-primary' >
          <h3>Step2 <i className="fa fa-users" ></i></h3>
        </a>
        <a className='step-item text-decoration-none text-primary active' >
          <h3> Step3 <i className="fa fa-file-text"></i></h3>

        </a>
        <a className='step-item text-decoration-none ' >
          <h3>Step4 <i className="fa fa-check-square"></i></h3>

        </a>

      </div> : null}
      {step == 3 ? <div className="steps mb-5">
        <a className='step-item text-decoration-none text-primary' >
          <h3>Step1 <i className="fa fa-user" ></i></h3>
        </a>
        <a className='step-item text-decoration-none text-primary' >
          <h3>Step2 <i className="fa fa-users" ></i></h3>
        </a>
        <a className='step-item text-decoration-none text-primary' >
          <h3> Step3 <i className="fa fa-file-text"></i></h3>

        </a>
        <a className='step-item text-decoration-none text-primary active' >
          <h3>Step4 <i className="fa fa-check-square"></i></h3>

        </a>

      </div> : null}
    </div>
  )
}

export default NavSteps
