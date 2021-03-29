import React, { useState }  from 'react'
import MultiStep from 'react-multistep'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';


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
      const prevStyle = {'background': '#33c3f0', 'borderWidth': '2px','marginRight':'50px'}
      const nextStyle = {'background': '#33c3f0',  'borderWidth': '2px','marginLeft':'50px'}

    return (
        <div  className="d-flex justify-content-center ">
        <div className="card w-75 ml-5" >
        <div className="card-body text-center">
        <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
        {steps.name==='StepThree'?<button className="btn btn-primary" onClick={onSave}>SAVE</button>:null}
        <button className="btn btn-primary" onClick={onSave}>SAVE</button>
      </div>
      </div>
      </div>
    )
}

export default Mediation;
