import React from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Link } from 'react-router-dom';
import Footerr from './Footerr';

const User = () => {
   
    return (
        <div>
            <HeaderAdmin/> 
            <br></br><br></br><br></br>
            <div className="container mt-5 mb-3 text-center">
            <div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
      <i className="fa fa-users fa-3x text-info" aria-hidden="true"></i>
        <h4 className="text-success mt-3">Manage users</h4><br></br>
        <p>you can add, modify, see and delete all users.</p>
        <Link className="btn btn-primary" to="/manageUsers">Take control</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
      <i className="fa fa-hourglass-half fa-3x text-info" aria-hidden="true"></i>
        <h4 className="text-success mt-3">Manage mediators</h4><br></br>
        <p>you can add, modify, see and delete all mediators.</p>
        <Link className="btn btn-primary" to="/manageMediators">Take control</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
      <i className="fa fa-gavel fa-3x text-info" aria-hidden="true"></i>
        <h4 className="text-success mt-3">Manage arbitrators</h4><br></br>
        <p>you can add, modify, see and delete all arbitrators.</p>
        <Link to="/manageArbitrators" className="btn btn-primary">Take control</Link>
      </div>
    </div>
  </div>
  
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
      <i className="fa fa-graduation-cap fa-3x text-info" aria-hidden="true"></i>
        <h4 className="text-success mt-3">Manage legal professionals</h4>
        <p>you can add, modify, see and delete all legal professionals.</p>
        <a href="#" className="btn btn-primary">Take control</a>
      </div>
    </div>
  </div>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<Footerr/>
            </div>
        </div>
    )
}

export default User;
