import React, { useState } from 'react'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import StepFour from '../ui/StepFour';
import NavSteps from '../ui/NavSteps';


const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'center',
    y: 'top',
  }
})

const Components = [StepOne, StepTwo, StepThree, StepFour];

const Mediation = ({ setShow1 }) => {

  const [data, setData] = useState({});
  const [step, setStep] = useState(0);
  const Component = Components[step];



  return (
    <div className="container ">
      <div className="card-title mb-3 text-center"><h3 className="card-label">
        Mediation </h3><span className="d-block text-muted pt-2 font-size-sm">Create your file in less than 5 minutes!</span></div>
      <div className="d-flex justify-content-center ">
        <div className="card w-100 ml-5" >
          <div className="card-body text-center">
            <NavSteps setStep={setStep} step={step} />
            <Component setStep={setStep} setData={setData} setShow1={setShow1} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mediation;
