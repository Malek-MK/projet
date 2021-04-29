import React from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
const User = () => {
   
    return (
        <div>
            <HeaderAdmin/> 
            <div className="container mt-5 mb-3 text-center">
            <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-users fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage users</h4><br></br>
        <p>you can add, modify, see and delete all users.</p>
        <a href="#" class="btn btn-primary">Take control</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-map-o fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage mediations</h4><br></br>
        <p>you can add, modify, see and delete all mediations.</p>
        <a href="#" class="btn btn-primary">Take control</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <i class="fa fa-gavel fa-3x text-info" aria-hidden="true"></i>
        <h4 class="text-success mt-3">Manage arbitrators</h4><br></br>
        <p>you can add, modify, see and delete all arbitrators.</p>
        <a href="#" class="btn btn-primary">Take control</a>
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
