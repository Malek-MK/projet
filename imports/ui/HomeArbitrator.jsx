import React from 'react';
import { Link } from 'react-router-dom';


const HomeArbitrator = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
                    <Link className="navbar-brand text-dark decoration-none" to="/"><i className="fa fa-balance-scale"></i>Community</Link>

                    <div className="collapse navbar-collapse ml-2" >
                        <ul className="navbar-nav ml-auto topnav">

                            <li className="nav-item">
                                <Link className="nav-link text-dark decoration-none" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our offers
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item " to="/offerDetails">Offer details</Link>
                                    <Link className="dropdown-item" to="/features">Features</Link>
                                    <Link className="dropdown-item" to="/prices">Prices</Link>
                                    <a className="dropdown-item" href="#">FAQ</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our mediator offers
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item " href="#">Offer details</a>
                                    <Link className="dropdown-item" >Features</Link>
                                    <a className="dropdown-item" href="#">Prices</a>
                                </div>
                            </li>

  
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contact</a>
                            </li>
                            <li className="nav-item active">
                                <Link to="/arbitrator" className="nav-link text-dark decoration-none">My Account <span className="sr-only">(current)</span></Link>
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
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default HomeArbitrator;
