import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Home = () => {

    return (

        <div>
            <div>
	
	
	<nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white " href="#"><i class="fa fa-balance-scale"></i>Community</a>
       
        <div className="collapse navbar-collapse ml-2" >
            <ul className="navbar-nav ml-auto topnav">
               
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Our offers
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item " href="#">Offer details</a>
                        <a className="dropdown-item" href="#">Features</a>
                        <a className="dropdown-item" href="#">FAQ</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Our mediator offers
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item " href="#">Offer details</a>
                        <a className="dropdown-item" href="#">Features</a>
                    </div>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                </li>
                <li className="nav-item active">
                <Link to="/admin" className="nav-link text-white decoration-none">My Account <span className="sr-only">(current)</span></Link>
                </li>
                <div className="position-absolute top-5 end-0">
                <ul className="navbar-nav topnav">
                <li className="nav-item mr-2">
                <Link to="/signin" className="text-success text-decoration-none"><b><i className="fa fa-user"></i>Sign In</b></Link>                 
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
