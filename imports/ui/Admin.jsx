import React from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Link } from 'react-router-dom';

const User = () => {
   
    return (
        <div>
            <HeaderAdmin/> 
            <br></br><br></br><br></br>
            <div className="container mt-5 mb-3 text-center">
            <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-users fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage users</h4><br></br>
        <p>you can add, modify, see and delete all users.</p>
        <Link class="btn btn-primary" to="/manageUsers">Take control</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-hourglass-half fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage mediators</h4><br></br>
        <p>you can add, modify, see and delete all mediators.</p>
        <Link class="btn btn-primary" to="/manageMediators">Take control</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-gavel fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage arbitrators</h4><br></br>
        <p>you can add, modify, see and delete all arbitrators.</p>
        <Link to="/manageArbitrators" class="btn btn-primary">Take control</Link>
      </div>
    </div>
  </div>
  
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-graduation-cap fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage legal professionals</h4>
        <p>you can add, modify, see and delete all legal professionals.</p>
        <a href="#" class="btn btn-primary">Take control</a>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default User;
