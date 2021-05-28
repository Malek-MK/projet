import React, { useState ,useEffect} from 'react'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import StepFour from '../ui/StepFour';
import NavSteps from '../ui/NavSteps';
import HeaderMediator from '../ui/HeaderMediator';
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';
import Footerr from './Footerr';


const Components = [StepOne, StepTwo, StepThree, StepFour];

const MediatorMediation = ({datta,show,fetch}) => {
  const [modal, setModal] = useState(true);
  const handleClose = () => setModal(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);
  const Component = Components[step];

  return (
    <div>
      <HeaderMediator/>
      <br></br><br></br>
      <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       
        <Modal.Body>
         <div className="div text-center">
         <i className="fa fa-question-circle fa-5x text-warning mt-4 mb-3" aria-hidden="true"></i>
         <h5>You are about to create a mediation<br></br> case as Party A (the claimant). You wish<br></br> to use our platform in order to manage <br></br>your own mediation files as a mediator.<br></br>To do this,  all you need to do ischoose<br></br>  one of our subscription packages.</h5>
         </div>
         

         <div className="div text-center">
           <Link className="btn btn-primary mt-5 mb-2" to="/subscriptions/pricing">See our formulas</Link> <br></br>
           <button className="btn btn-danger mb-5" onClick={()=>{setModal(false)}}>Continue as Part A</button>
         </div>
        </Modal.Body> 
        
      </Modal>
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
      <Footerr/>
    </div>
    </div>
  )
}

export default MediatorMediation;
