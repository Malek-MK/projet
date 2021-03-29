import React, { useState }  from 'react'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import NavSteps from '../ui/NavSteps';
const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'left',
      y: 'top',
    }
  })


const Mediation = () => {

  const  [data,setData] = useState({});
      
    const steps = [
        { name: 'StepOne',component: <StepOne setData={setData}/> },
        { name: 'StepTwo',component: <StepTwo setData={setData}/> },
        { name: 'StepThree',component: <StepThree setData={setData}/> },
        
      ]
      const onSave=()=>{
        Meteor.call(
          "insertMediation", data, (err) => {
            console.log(data)
            if (err) {
              notyf.error("Inserted Failed")
            } else {
              notyf.success("Inscription with success")
            }
          }
        );
      }
  

    return (
        <div  className="d-flex justify-content-center ">
        <div className="card w-75 ml-5" >
        <div className="card-body text-center">
          <NavSteps/>
       <StepOne/>
      </div>
      </div>
      </div>
    )
}

export default Mediation;
