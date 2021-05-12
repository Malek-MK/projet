import React from 'react'
import Header from '../ui/Header';
import PersonalInformation from '../ui/PersonalInformation';
import AccessParameter from '../ui/AccessParameter';
import MyOrders from '../ui/MyOrders';
const Profile = () => {
    return (
        <div>
            <Header/>
             <div className="container mt-5">
                <div className="card-title mb-5"><h3 className="card-label">
                Profile
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Users</span>
                </div>
                <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 className="text mb-3"><b>ALkhatib Malek</b></h5>
        <span>
            Email :
        </span><br></br>
        <span>
            Phone :
        </span><br></br>
        <span>
            Country :
        </span>
        <button className="btn btn-light mt-3">
        <i className="fa fa-user"></i> Personal information
        </button>
        <button className="btn btn-light mt-2">
        <i className="fa fa-shield"></i> Access parameter
        </button>
        <button className="btn btn-light mt-2">
        <i className="fa fa-file-text-o"></i> My orders
        </button>
      </div>
    </div>
  </div>
  
</div>
        </div>
        </div>
    )
}

export default Profile
