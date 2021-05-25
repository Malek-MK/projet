import React, { useState ,useEffect} from 'react'
import StepOne from '../ui/StepOne';
import StepTwo from '../ui/StepTwo';
import StepThree from '../ui/StepThree';
import StepFour from '../ui/StepFour';
import NavSteps from '../ui/NavSteps';
import HeaderMediator from '../ui/HeaderMediator';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


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
      <Modal
        show={modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       
        <Modal.Body>
         <div>
         Vous êtes sur le point de créer un dossier de médiation en tant que partie A (le demandeur). Vous désirez utiliser notre plateforme dans le but de gérer vos propres dossiers de médiations en tant que médiateur. Pour cela il vous suffit de choisir l'une de nos formules d'abonnement.
         </div>
         <div>
           <button type="submit">aaaaa</button>
           <button onClick={()=>{setModal(false)}}>bbbbb</button>
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
    </div>
    </div>
  )
}

export default MediatorMediation;
