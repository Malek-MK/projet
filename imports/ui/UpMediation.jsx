import React, { useState ,useEffect} from 'react'
import One from '../ui/One';
import Two from '../ui/Two';
import Three from '../ui/Three';
import Four from '../ui/Four';
import NavSteps from '../ui/NavSteps';
import Header from '../ui/Header';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'center',
    y: 'top',
  }
})

const Components = [One, Two, Three, Four];

const UpMediation = ({ setShow1 ,datta,show,fetch,id}) => {
  const [data, setData] = useState({});
  const [step, setStep] = useState(0);
  const Component = Components[step];


  return (
    <div>
      {!show?<Header/>:null}
     
      <div className="container mt-5">
      {show? <div class="alert alert-success mt-3" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
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
    </div>
    </div>
  )
}

export default UpMediation;
