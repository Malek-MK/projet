import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import { useTracker } from "meteor/react-meteor-data";
import Button from "react-bootstrap/Button";

const NavBar = () => {
    const user = useTracker(() => Meteor.user()?.username);
    const history = useHistory();
    const onLogout = () => {
        Meteor.logout();
        history.replace('/signin');
    }
    const [num,setNum]=useState();
    var loggedInUser = Meteor.userId();
    const verif=()=>{  
            if (Roles.userIsInRole(loggedInUser, 'admin')) {
              history.push('/homeAdmin');
            }
            else if (Roles.userIsInRole(loggedInUser, 'user')) {
              history.push('/homeUser');
            }
            else if (Roles.userIsInRole(loggedInUser, 'arbitrator')) {
              history.push('/homeArbitrator');
            }
            else{
                history.push('/home');
            }
        }
        useEffect(()=>{
            if (Roles.userIsInRole(loggedInUser, 'admin')) {
                setNum(1)
              }
              else if (Roles.userIsInRole(loggedInUser, 'user')) {
                setNum(2)
              }
              else if (Roles.userIsInRole(loggedInUser, 'arbitrator')) {
                setNum(3)
              }
              else{
                  setNum(0)
              }
        },[])
    return (
        <div className="div mb-5">
            <div className="div fixed-top">
                <div className="d-flex justify-content-center bg-secondary text-white text-center" >
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/contact" >Tel : 1122334455</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/what-is-mediation">What is mediation?</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/what-is-arbitration">What is arbitration?</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/clauses-mediation-arbitration">Mediation and arbitration clauses</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/blog">Blog</Link>

                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light  ">

                    <Link className="navbar-brand text-dark " onClick={verif}><i className="fa fa-balance-scale"></i>Community</Link>

                    <div className="collapse navbar-collapse ml-2" >
                        <ul className="navbar-nav ml-auto topnav">

                            <li className="nav-item">
                                <Link className="nav-link text-dark " to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Dropdown>
                            <Dropdown.Toggle className="btn btn-light text-dark">
                            Our offers
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link className="dropdown-item " to="/details-business-offer">Offer details</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/features">Features</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/prices">Prices</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/faq">FAQ</Link></Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                           
                            </li>
                            <li className="nav-item dropdown">
                            <Dropdown>
                            <Dropdown.Toggle className="btn btn-light text-dark">
                            Our mediator offers
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link className="dropdown-item " to="/details-offer-mediators">Offer details</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/mediator-functionalities">Features</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/tariffs-mediators">Prices</Link></Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                               
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/contact">Contact</Link>
                            </li>
                           {num===2? 
                            <li className="nav-item active">
                            <Link to="/mediations" className="nav-link text-dark ">My Account <span className="sr-only">(current)</span></Link>
                            </li>
                           :null}
                           {num===1? 
                            <li className="nav-item active">
                            <Link to="/admin" className="nav-link text-dark ">My Account <span className="sr-only">(current)</span></Link>
                            </li>
                           :null}
                           {num===3? 
                            <li className="nav-item active">
                            <Link to="/arbitrator" className="nav-link text-dark ">My Account <span className="sr-only">(current)</span></Link>
                            </li>
                           :null}
                           {num===0? 
                            <>
                            <li className="nav-item" >
                            <div class="input-group" >

                                <input id="search-focus" type="search" placeholder="Search.." class="form-control" style={{ width: "180px", marginLeft: "20px" }} />
                                <button type="button" class="btn btn-primary">
                                    <i class="fa fa-search"></i>
                                </button>


                            </div>
                        </li>
                        <div className="position-absolute top-5 end-0">
                            <ul className="navbar-nav topnav">
                                <li className="nav-item mr-2">
                                    <Link to="/signin" className="text-success text-decoration-none"><b><i className="fa fa-user"></i>Sign In</b></Link>
                                </li>
                                <li className="nav-item text-dark">/</li>
                                <li className="nav-item">
                                    <Link to="/signup" className="text-info text-decoration-none"><b><i className="fa fa-plus"></i>Sign Up</b></Link>
                                </li>
                            </ul>
                        </div>
                            </>
                           :null}

                        </ul>
                        {num===1? 
                         <ul className="navbar-nav ms-auto">
                         <li className="nav-item">
                                             <button type="button" class="btn">
                                                 Notifications <span class="badge bg-green ms-2">4</span>
                                             </button>
                         </li> 
                         <li className="nav-item">
                         <button type="button" class="btn btn-light" ><i className="fa fa-user-secret text-primary"></i>Hello Admin, <b className="text-dark">{user}</b></button>
                         </li>
                        
                         <li className="nav-item">
                             <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 ">
                                 <i className="fa fa-power-off" aria-hidden="true"></i>
                             </Button>
                         </li>
                           
                     </ul>
                        :null}
                        {num===2? 
                         <ul className="navbar-nav ms-auto">
                         <li className="nav-item">
                                             <button type="button" class="btn">
                                                 Notifications <span class="badge bg-green ms-2">4</span>
                                             </button>
                         </li> 
                         <li className="nav-item">
                         <button type="button" class="btn btn-light" ><i className="fa fa-user text-primary"></i>Hello, <b className="text-dark">{user}</b></button>
                         </li>
                        
                         <li className="nav-item">
                             <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 ">
                                 <i className="fa fa-power-off" aria-hidden="true"></i>
                             </Button>
                         </li>
                           
                     </ul>
                        :null}
                        {num===3? 
                         <ul className="navbar-nav ms-auto">
                         <li className="nav-item">
                                             <button type="button" class="btn">
                                                 Notifications <span class="badge bg-green ms-2">4</span>
                                             </button>
                         </li> 
                         <li className="nav-item">
                         <button type="button" class="btn btn-light" ><i className="fa fa-black-tie text-primary"></i>Hello Arbitrator, <b className="text-dark">{user}</b></button>
                         </li>
                        
                         <li className="nav-item">
                             <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 ">
                                 <i className="fa fa-power-off" aria-hidden="true"></i>
                             </Button>
                         </li>
                           
                     </ul>
                        :null}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
