import React, { useState ,useEffect} from 'react'
import AdjustOne from '../ui/AdjustOne';
import AdjustTwo from '../ui/AdjustTwo';
import AdjustThree from '../ui/AdjustThree';
import AdjustFour from '../ui/AdjustFour';
import NavSteps from '../ui/NavSteps';
import HeaderMediator from '../ui/HeaderMediator';
import Footerr from './Footerr';
import { useParams } from 'react-router';
import { Meteor } from 'meteor/meteor';

const Components = [AdjustOne, AdjustTwo, AdjustThree, AdjustFour];

const MediationAdjust = () => {
    const [data, setData] = useState({});
    const [datta, setDatta] = useState();
    const {id} = useParams();
    console.log("id :",id)
     const fetchMedia=()=>{
    Meteor.call('fetchMedia',id,(err,res)=>{
      setDatta(res);
      console.log("data :",res);
    })
  }
 useEffect(()=>{
fetchMedia()
 },[])
  const [step, setStep] = useState(0);
  const Component = Components[step];
    
 
  return (
      <>
    {datta? 
        <div>
      <HeaderMediator/>
      <br></br><br></br><br></br>
      <div className="container mt-5">
      <div className="alert alert-success mt-3" role="alert">
  <div className="d-flex">
    <div>
    
    </div>
    <div>
      <div className="alert-title "> <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
      Congratulations! your mediation date preferences have been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>
      <div className="card-title mb-3 text-center"><h3 className="card-label">
        Mediation </h3><span className="d-block text-muted pt-2 font-size-sm">Adjust this file in less than 5 minutes!</span></div>
      <div className="d-flex justify-content-center ">
        <div className="card w-100 ml-5" >
          <div className="card-body text-center">
            <NavSteps setStep={setStep} step={step} />
            <Component setStep={setStep} setData={setData} data={data} datta={datta} fetch={fetchMedia} id={id}/>
          </div>
        </div>
      </div>
      <Footerr/>
    </div>
    </div>
        :null}
        </>
  )
}

export default MediationAdjust;
