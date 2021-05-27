import React, { useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import PersonalInformation from '../ui/PersonalInformation';
import AccessParameter from '../ui/AccessParameter';
import MyOrders from '../ui/MyOrders';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useTracker } from "meteor/react-meteor-data";

const ProfileAdmin = () => { 
  const user = useTracker(() => Meteor.user()?.username);
  const [click1,setClick1]=useState({
    class1:"btn btn-light mt-3 text-primary",
    class2:"fa fa-user text-primary",
    show:true   
});
const [click2,setClick2]=useState({
  class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false   
});
const [click3,setClick3]=useState({
  class1:"btn btn-light mt-2 mb-5",
  class2:"fa fa-file-text-o text-success",
  show:false   
});
  const onclick1=()=>{
    setClick1({
      class1:"btn btn-light mt-3 text-primary",
    class2:"fa fa-user text-primary",
    show:true 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2 mb-5",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
  }
  const onclick2=()=>{
    setClick2({
      class1:"btn btn-light mt-2 text-primary",
    class2:"fa fa-shield text-primary",
    show:true 
    })
    setClick1({
      class1:"btn btn-light mt-3",
  class2:"fa fa-user text-success",
  show:false 
    })
    setClick3({
      class1:"btn btn-light mt-2 mb-5",
  class2:"fa fa-file-text-o text-success",
  show:false 
    })
  }
  const onclick3=()=>{
    setClick3({
      class1:"btn btn-light mt-2 text-primary mb-5",
    class2:"fa fa-file-text-o text-primary",
    show:true 
    })
    setClick1({
      class1:"btn btn-light mt-3",
  class2:"fa fa-user text-success",
  show:false 
    })
    setClick2({
      class1:"btn btn-light mt-2",
  class2:"fa fa-shield text-success",
  show:false 
    })
  }


    return (
        <div>
            <HeaderAdmin/>
             <div className="container mt-5">
                <div className="card-title mb-3">
                <div className="d-flex justify-content-between align-items-center">
                 <div>
                 <h3 className="card-label">Profile</h3>
                  <span className="d-block text-muted pt-2 font-size-sm">Consult and edit Users</span>
                 </div>
               <div>
               <Link className="btn btn-primary" to="/mediations/create">
               Add mediation
              </Link>
              <button className="btn btn-success" style={{marginLeft:"15px"}}>
              Submit an application
              </button>
               </div>
                </div>
                </div>
                <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 className="text-capitalize mb-4"><b>{user}</b></h5>
        <p className="text mb-1">Email :</p>
        <p className="text mb-1">Phone :</p>
        <p>Country :</p>
        
        <button className={click1.class1} onClick={onclick1}>
        <i className={click1.class2}></i> Personal information
        </button>
        <button className={click2.class1} onClick={onclick2}>
        <i className={click2.class2}></i> Access parameter
        </button>
        <button className={click3.class1} onClick={onclick3}>
        <i className={click3.class2}></i> My orders
        </button>
      </div>
    </div>
  </div>
 {click1.show?<PersonalInformation/>:null}
 {click2.show?<AccessParameter/>:null}
 {click3.show?<MyOrders/>:null}
</div>
        </div>
        </div>
    )
}

export default ProfileAdmin
