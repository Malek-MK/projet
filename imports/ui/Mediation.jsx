import React, { useState} from 'react'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import StepFour from '../ui/StepFour';
import NavSteps from '../ui/NavSteps';
import Header from '../ui/Header';


const Components = [StepOne, StepTwo, StepThree, StepFour];

const Mediation = ({datta,show,fetch}) => {

  const [data, setData] = useState({});
  const [step, setStep] = useState(0);
  const Component = Components[step];


  return (
    <div>
    <Header/>
      <div className="container mt-5">
      {show? <div className="alert alert-success mt-3" role="alert">
  <div className="d-flex">
    <div>
    
    </div>
    <div>
      <div className="alert-title "> <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
      Congratulations! your mediation date preferences have been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}
      <div className="card-title mb-3 text-center"><h3 className="card-label">
        Mediation </h3><span className="d-block text-muted pt-2 font-size-sm">Create your file in less than 5 minutes!</span></div>
      <div className="d-flex justify-content-center ">
        <div className="card w-100 ml-5" >
          <div className="card-body text-center">
            <NavSteps step={step} />
            <Component setStep={setStep} setData={setData} data={data} datta={datta} fetch={fetch}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mediation;
