import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Home = () => {

    return (

        <div>
            <div>
	
	
	<nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#"><i className="fa fa-home"></i>Community</a>
       
        <div className="collapse navbar-collapse ml-2" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto topnav">
                <li className="nav-item active">
                    <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Shop Pre-Owned</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Shop New Cars</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Clearence Event</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Resources
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item " href="#">Carfax</a>
                        <a className="dropdown-item" href="#">Carproof</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Omnivic</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                </li>
                <div className="position-absolute top-5 end-0">
                <ul className="navbar-nav topnav">
                <li className="nav-item mr-2">
                <Link to="/signin" className="text-primary text-decoration-none"><b><i className="fa fa-user"></i>Sign In</b></Link>                 
                </li>
                <li className="nav-item text-white">/</li>
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

export default Home;
