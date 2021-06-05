import React, { useState ,useEffect} from 'react'
import One from '../ui/One';
import Two from '../ui/Two';
import Three from '../ui/Three';
import Four from '../ui/Four';
import NavSteps from '../ui/NavSteps';
import Header from '../ui/Header';
import Footerr from './Footerr';


const Components = [One, Two, Three, Four];

const UpMediation = ({ setShow1 ,datta,show,fetch,id}) => {
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
            <NavSteps setStep={setStep} step={step} />
            <Component setStep={setStep} setData={setData} setShow1={setShow1} data={data} datta={datta} fetch={fetch} id={id}/>
          </div>
        </div>
      </div>
      <Footerr/>
    </div>
    </div>
  )
}

export default UpMediation;
