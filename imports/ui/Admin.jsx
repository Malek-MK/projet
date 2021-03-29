import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Mediation from './Mediation';
const User = () => {
    const onLogout = () => {
        console.log('im logout')
        Meteor.logout();
    }
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

                        <div className="nav-item dropdown d-none d-md-flex me-3">
                            <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1} aria-label="Show notifications">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                                <span className="badge bg-red" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                                <div className="card">
                                    <div className="card-body"> 
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                                <span className="avatar avatar-sm" style={{ backgroundImage: 'url(./static/avatars/000m.jpg)' }} />
                                <div className="d-none d-xl-block ps-2">
                                    <div>Hello,<b>{Meteor.user().username}</b> </div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                <a href="#" className="dropdown-item">Set status</a>
                                <a href="#" className="dropdown-item">Profile &amp; account</a>
                                <a href="#" className="dropdown-item">Feedback</a>
                                <div className="dropdown-divider" />
                                <a href="#" className="dropdown-item">Settings</a>
                                <a href="#" className="dropdown-item">Logout</a>
                            </div>
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
                                <div className="col-auto ms-auto d-print-none">
                                    <div className="btn-list">
                                        <span className="d-none d-sm-inline">
                                            <a href="#" className="btn btn-white">
                                                New view
            </a>
                                        </span>
                                        <a href="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
            Create new Mediation
          </a>
                                        <a href="#" className="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <Mediation/> 
        </div>
    )
}

export default User;
