import React, { useState } from 'react'
import {Meteor} from 'meteor/meteor'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import NavSteps from '../ui/NavSteps';
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'center',
    y: 'center',
  }
})


const Components=[StepOne,StepTwo,StepThree];

const Mediation = ({setView}) => {

  const [data, setData] = useState({});
  const [step,setStep]=useState(0);
const Component=Components[step];

  const onSave = () => {
    Meteor.call(
      'insertMediation', data, (err) => {
        console.log(data)
        if (err) {
          notyf.error(err)
        } else {
          notyf.success("Inscription with success")
        }
      }
    );
    setView(false)
  }
  return (
    <div className="d-flex justify-content-center ">
      <div className="card w-75 ml-5" >
        <div className="card-body text-center">
        <NavSteps setStep={setStep} />
        <Component setStep={setStep} setData={setData}/>
        </div>
      </div>
    </div>
  )
}

export default Mediation;
