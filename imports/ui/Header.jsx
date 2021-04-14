import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory();
    const onLogout = () => {
        Meteor.logout();
        history.replace('/');
    }
    return (
        <div>
            <header className="navbar navbar-expand-md navbar-light d-print-none">

<div className="container-xl">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span className="navbar-toggler-icon"></span>
    </button>
    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a className="nav-link decoration-none">
            <h3><i className="fa fa-home"></i>Dashboard</h3>
        </a>
    </h1>




    <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav">
                <li className="nav-item active ">
                    <Link to="/" className="nav-link decoration-none">

                        Go_Home
                    </Link>
                </li>
                <li className="nav-item ">
                    <NavDropdown title="Médiation" >
                        <NavDropdown.Item ><Link to="/mediations" className="text-dark text-decoration-none">Mes Médiations</Link></NavDropdown.Item>
                        <NavDropdown.Item >Mes Litiges</NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/mediations/create" className="text-dark text-decoration-none">Ajouter une médiation</Link></NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li className="nav-item">
                    <NavDropdown title="Arbitrage" >
                        <NavDropdown.Item >Arbitrages</NavDropdown.Item>
                    </NavDropdown>
                </li>

            </ul>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link decoration-none" >Hello, <b className="text-dark">{Meteor.user().username}</b></a>
                    </li>
                    <li className="nav-item">
                        <Button variant="outline-danger" onClick={onLogout} className="btn rounded-circle mt-1 ml-5 ">
                            <i className="fa fa-power-off" aria-hidden="true"></i>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>

</header>
        </div>
    )
}

export default Header