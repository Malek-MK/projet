import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
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

                    <Link className="navbar-brand text-dark " to="/"><i className="fa fa-balance-scale"></i>Community</Link>

                    <div className="collapse navbar-collapse ml-2" >
                        <ul className="navbar-nav ml-auto topnav">

                            <li className="nav-item">
                                <Link className="nav-link text-dark " to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our offers
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item " to="/details-business-offer">Offer details</Link>
                                    <Link className="dropdown-item" to="/features">Features</Link>
                                    <Link className="dropdown-item" to="/prices">Prices</Link>
                                    <Link className="dropdown-item" to="/faq">FAQ</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Our mediator offers
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item " to="/details-offer-mediators">Offer details</Link>
                                    <Link className="dropdown-item" to="/mediator-functionalities">Features</Link>
                                    <Link className="dropdown-item" to="/tariffs-mediators">Prices</Link>
                                </div>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/mediations" className="nav-link text-dark ">My Account <span className="sr-only">(current)</span></Link>
                            </li>
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
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
