import React,{ useState,useEffect }  from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom'
import { useTracker } from "meteor/react-meteor-data";

const HeaderAdmin = () => {
  Meteor.subscribe("notifications");
    const history = useHistory();
    const user = useTracker(() => Meteor.user()?.username);
    const address=useTracker(() =>Meteor.user()?.emails[0].address);
    const onLogout = () => {
        Meteor.logout();
        history.replace('/signin');
    }
    return (
        <div>
            <header className="navbar fixed-top navbar-expand-md navbar-light d-print-none">

<div className="container-xl">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span className="navbar-toggler-icon"></span>
    </button>
    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a className="nav-link decoration-none">
            <Link className="h3 text-decoration-none" to="/admin"><i className="fa fa-home"></i>Dashboard</Link>
        </a>
    </h1>




    <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav">
                <li className="nav-item active ">
                    <Link to="/home" className="nav-link decoration-none">

                        Go_Home
                    </Link>
                </li>
               

            </ul>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                                        <button type="button" className="btn">
                                        <span className="spinner-grow spinner-grow-sm text-warning" role="status" aria-hidden="true"></span>
                                            Notifications <span className="badge bg-green ms-2">0</span>
                                        </button>
                    </li> 
                    <li className="nav-item">
                    <Button type="button" className="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa fa-user-secret text-primary"></i> Hello Admin, <b className="text-capitalize">{user}</b></Button>
                    </li>
                   
                    <li className="nav-item">
                        <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 " style={{marginLeft:10}}>
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                        </Button>
                    </li>
                      
                </ul>
            </div>
        </div>

    </div>
</div>
</header>
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="container" style={{padding:15}}>
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel" className="text mt-1">Admin profile</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div className="card mb-3 border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/assets/modify.png" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-capitalize">{user}</h5>
        <p className="card-text text-secondary"><i className="fa fa-envelope text-primary" aria-hidden="true"></i> {address}</p>
        <button className="btn btn-outline-danger btn-sm" onClick={onLogout} data-bs-dismiss="offcanvas" aria-label="Close">disconnection</button>
      </div>
    </div>
  </div>
</div>
<div className="row mb-5">
  <div className="col-sm-12">
    <div className="card border-0">
      <div className="card-body">
         <div className="d-flex align-items-start flex-column mb-3">
         <Link className="d-flex  align-items-center text-decoration-none" to="/profile_admin" target="_blank">
          <button className="btn btn-light btn-sm" style={{padding:10}}><i className="fa fa-user text-success fa-2x"></i></button>
          <button className="btn btn-white bg-white border-0" style={{textAlign:"left"}}> Personal information<br></br><span className="text-secondary">Update your information</span></button>
          </Link>
          
          <Link className="d-flex align-items-center text-decoration-none" to="/profile_admin" target="_blank">
          <button className="btn btn-light btn-sm" style={{padding:10}}><i className="fa fa-shield text-danger fa-2x"></i></button>
          <button className="btn btn-white bg-white border-0" style={{textAlign:"left"}}> Access parameter<br></br><span className="text-secondary">Update your access</span></button>
          </Link>
          
          <Link className="d-flex align-items-center text-decoration-none" to="/profile_admin" target="_blank">
          <button className="btn btn-light btn-sm" style={{padding:10}}><i className="fa fa-file-text-o text-secondary fa-2x"></i></button>
          <button className="btn btn-white bg-white border-0" style={{textAlign:"left"}}> My orders<br></br><span className="text-secondary">List of all orders</span></button>
          </Link>
         </div>
       
      </div>
    </div>
  </div>    
  </div>
  </div>
  </div>
</div>
        </div>
    )
}

export default HeaderAdmin;
