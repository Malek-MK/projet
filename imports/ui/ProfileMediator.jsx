import React, { useState } from 'react'
import HeaderMediator from '../ui/HeaderMediator';
import PersonalInformation from '../ui/PersonalInformation';
import AccessParameter from '../ui/AccessParameter';
import MyOrders from '../ui/MyOrders';
import ProfessionalInformation from '../ui/ProfessionalInformation';
import CompanyInformation from '../ui/CompanyInformation';
import SubscriptionInformation from '../ui/SubscriptionInformation';
import BankInformation from '../ui/BankInformation';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from "meteor/react-meteor-data";

const ProfileMediator = () => { 
  const user = useTracker(() => Meteor.user()?.username);
  const address=useTracker(() =>Meteor.user()?.emails[0].address);
  const [click1,setClick1]=useState({
    class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false   
});
const [click2,setClick2]=useState({
  class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false   
});
const [click3,setClick3]=useState({
  class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false   
});
const [click4,setClick4]=useState({
    class1:"btn btn-light mt-2 text-primary",
    class2:"fa fa-list text-primary",
    show:true   
  });
  const [click5,setClick5]=useState({
    class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false   
  });
  const [click6,setClick6]=useState({
    class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false   
  });
  const [click7,setClick7]=useState({
    class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false   
  });
  const onclick1=()=>{
    setClick1({
      class1:"btn btn-light mt-1 text-primary",
    class2:"fa fa-user text-primary",
    show:true 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
    setClick4({
      class1:"btn btn-light mt-2",
      class2:"fa fa-list text-success",
      show:false  
    })
    setClick5({
      class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false  
    })
    setClick6({
      class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false  
    })
    setClick7({
      class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false  
    })
  }
  const onclick2=()=>{
    setClick1({
      class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2 text-primary",
  class2:"fa fa-shield text-primary",
  show:true 
    })
    setClick3({
      class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
    setClick4({
      class1:"btn btn-light mt-2",
      class2:"fa fa-list text-success",
      show:false  
    })
    setClick5({
      class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false  
    })
    setClick6({
      class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false  
    })
    setClick7({
      class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false  
    })
  }
  const onclick3=()=>{
    setClick1({
      class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2 text-primary",
  class2:"fa fa-file-text-o text-primary",
  show:true 
    })
    setClick4({
      class1:"btn btn-light mt-2",
      class2:"fa fa-list text-success",
      show:false  
    })
    setClick5({
      class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false  
    })
    setClick6({
      class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false  
    })
    setClick7({
      class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false  
    })
  }

  const onclick4=()=>{
    setClick1({
      class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
    setClick4({
      class1:"btn btn-light mt-2 text-primary",
      class2:"fa fa-list text-primary",
      show:true  
    })
    setClick5({
      class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false  
    })
    setClick6({
      class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false  
    })
    setClick7({
      class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false  
    })
  }
  const onclick5=()=>{
    setClick1({
      class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
    setClick4({
      class1:"btn btn-light mt-2",
      class2:"fa fa-list text-success",
      show:false  
    })
    setClick5({
      class1:"btn btn-light mt-2 text-primary",
    class2:"fa fa-indent text-primary",
    show:true  
    })
    setClick6({
      class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false  
    })
    setClick7({
      class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false  
    })
  }
  const onclick6=()=>{
    setClick1({
      class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
    setClick4({
      class1:"btn btn-light mt-2",
      class2:"fa fa-list text-success",
      show:false  
    })
    setClick5({
      class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false  
    })
    setClick6({
      class1:"btn btn-light mt-2 text-primary",
    class2:"fa fa-envelope-o text-primary",
    show:true  
    })
    setClick7({
      class1:"btn btn-light mt-2",
    class2:"fa fa-credit-card text-success",
    show:false  
    })
  }
  const onclick7=()=>{
    setClick1({
      class1:"btn btn-light mt-1",
    class2:"fa fa-user text-success",
    show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
    setClick4({
      class1:"btn btn-light mt-2",
      class2:"fa fa-list text-success",
      show:false  
    })
    setClick5({
      class1:"btn btn-light mt-2",
    class2:"fa fa-indent text-success",
    show:false  
    })
    setClick6({
      class1:"btn btn-light mt-2",
    class2:"fa fa-envelope-o text-success",
    show:false  
    })
    setClick7({
      class1:"btn btn-light mt-2 text-primary",
    class2:"fa fa-credit-card text-primary",
    show:true  
    })
  }
    return (
        <div>
            <HeaderMediator/>
            <br></br><br></br><br></br>
             <div className="container mt-3">
                <div className="card-title mb-3">
                <div className="d-flex justify-content-between align-items-center">
                 <div>
                 <h3 className="card-label">Profile</h3>
                  <span className="d-block text-muted pt-2 font-size-sm">Consult and edit Mediator</span>
                 </div>
               <div>
               <Link className="btn btn-primary" to="mediator/create_mediation">
               Add mediation
              </Link>
              <button className="btn btn-success" style={{marginLeft:"15px"}}>
              Submit an application
              </button>
               </div>
                </div>
                </div>
                <div className="row mb-5">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="text-capitalize mb-4"><b>{user}</b></h5>
        <button className="btn btn-secondary btn-lg mb-2">No candidacy</button>
        <p className="text mb-1 mt-2">Email: {address}</p>
        <p className="text mb-1">Phone:</p>
        <p>Country :</p>
        
        <button className={click1.class1} onClick={onclick1}>
        <i className={click1.class2}></i> Personal information
        </button>
        <button className={click4.class1} onClick={onclick4}>
        <i className={click4.class2}></i> Professional information
        </button>
        <button className={click5.class1} onClick={onclick5}>
        <i className={click5.class2}></i> Organization contact details
        </button>
        <button className={click2.class1} onClick={onclick2}>
        <i className={click2.class2}></i> Access parameter
        </button>
        <button className={click6.class1} onClick={onclick6}>
        <i className={click6.class2}></i> Subscription <span className="badge badge-secondary bg-info text-danger"> New</span>
        </button>
        <button className={click3.class1} onClick={onclick3}>
        <i className={click3.class2}></i> My orders 
        </button>
        <button className={click7.class1} onClick={onclick7}>
        <i className={click7.class2}></i> Bank details
        </button>
      </div>
    </div>
  </div>
 {click1.show?<PersonalInformation/>:null}
 {click2.show?<AccessParameter/>:null}
 {click3.show?<MyOrders/>:null}
 {click4.show?<ProfessionalInformation/>:null}
 {click5.show?<CompanyInformation/>:null}
 {click6.show?<SubscriptionInformation/>:null}
 {click7.show?<BankInformation/>:null}
 
</div>
        </div>
        </div>
    )
}

export default ProfileMediator
