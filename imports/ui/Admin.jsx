import React,{useState} from 'react'
import { Meteor } from 'meteor/meteor';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mediation from './Mediation';
import { useHistory } from 'react-router-dom'

const User = () => {
    const history = useHistory();
    const onLogout = () => {
        Meteor.logout();
        history.replace('/');
      }
    const [show,setShow]=useState(false);
   
    return (
        <div>
            <header className="navbar navbar-expand-md navbar-light d-print-none">
                <div className="container-xl">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                        Dashboard
    </h1>
                    <div className="navbar-nav flex-row order-md-last">

                        
                        <div className="nav-item ">
                            <a>
                                <div >
                                    <div>Hello,<b>{Meteor.user().username}</b> </div>
                                </div>
                            </a>
                            
                        </div>
                        <div className="nav-item">
                        <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 ">
                        <i className="fa fa-power-off" aria-hidden="true"></i>
                         </Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className="navbar-expand-md">
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="navbar navbar-light">
                        <div className="container-xl">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="./index.html">
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="5 12 3 12 12 3 21 12 19 12" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                                        </span>
                                        <span className="nav-link-title">
                                            Home
              </span>
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <NavDropdown title="Médiation" >
                                        <NavDropdown.Item href="#action/3.1">Mes Médiations</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Mes Litiges</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Ajouter une médiation</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li className="nav-item">
                                    <NavDropdown title="Arbitrage" >
                                        <NavDropdown.Item href="#action/3.1">Arbitrages</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wrapeer">
                    <div className="container-xl">
                        <div className="page-header d-print-none">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="page-pretitle">
                                        Overview
        </div>
                                    <h2 className="page-title">
                                        Dashboard
        </h2>
                                </div>
                                {!show? <div className="col-auto ms-auto d-print-none">
                                    <div className="btn-list">
                                        
                                        <a onClick={()=>setShow(true)} className="btn btn-primary d-none d-sm-inline-block" >
            Create new Mediation
          </a>
                                        <a href="#" className="btn btn-primary d-sm-none btn-icon"  aria-label="Create new report">
                                        </a>
                                    </div>
                                </div>:null}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        {show ?<Mediation/> :null }
        </div>
    )
}

export default User;
