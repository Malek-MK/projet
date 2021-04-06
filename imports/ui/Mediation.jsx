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

const Components=[StepOne,StepTwo,StepThree,StepFour];

const Mediation = ({setShow}) => {

  const [data, setData] = useState({});
  const [step,setStep]=useState(0);
  const Component=Components[step];
 
 

  return (
    <div className="container ">
       <div class="card-title mb-3 text-center"><h3 class="card-label">
            Mediation </h3><span class="d-block text-muted pt-2 font-size-sm">Create your file in less than 5 minutes!</span></div>
    <div className="d-flex justify-content-center ">
      <div className="card w-100 ml-5" >
        <div className="card-body text-center">
        <NavSteps setStep={setStep} step={step}/>
        <Component setStep={setStep} setData={setData} setShow={setShow} data={data}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mediation;
