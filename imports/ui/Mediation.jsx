import React, { useState } from 'react'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import NavSteps from '../ui/NavSteps';
import ButtonSteps from '../ui/ButtonSteps';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'left',
    y: 'top',
  }
})


const Mediation = () => {

  const [data, setData] = useState({});

  const onSave = () => {
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
  const [show, setShow] = useState('step1');

  return (
    <div className="d-flex justify-content-center ">
      <div className="card w-75 ml-5" >
        <div className="card-body text-center">
          <NavSteps setShow={setShow} show={show} />
          {show === 'step1' ? <StepOne setData={setData} /> : null}
          {show === 'step2' ? <StepTwo setData={setData} /> : null}
          {show === 'step3' ? <><StepThree setData={setData} />
            <button type="submit" name='valide' className="btn btn-success btn-lg pull-right" onClick={onSave}>Valider</button></> : null}
          <ButtonSteps show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  )
}

export default Mediation;
