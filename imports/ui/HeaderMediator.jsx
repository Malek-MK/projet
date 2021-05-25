import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom'
import { useTracker } from "meteor/react-meteor-data";

const HeaderMediator = () => {
    const user = useTracker(() => Meteor.user()?.username);
    const history = useHistory();
    const onLogout = () => {
        Meteor.logout();
        history.replace('/signin');
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
        <Link className="h3 text-decoration-none" to="/mediator"><i className="fa fa-home"></i>Dashboard</Link>
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
                <li className="nav-item ">
                    <NavDropdown title="Médiation" >
                        <NavDropdown.Item ><Link to="/mediator/mediations" className="text-dark text-decoration-none"><i class="fa fa-crosshairs text-secondary" aria-hidden="true"></i> My Mediations</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/mediations" className="text-dark text-decoration-none"><i class="fa fa-th-large text-secondary" aria-hidden="true"></i> Cabinet mediations</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/mediations" className="text-dark text-decoration-none"><i class="fa fa-tty text-secondary" aria-hidden="true"></i> Community mediations</Link></NavDropdown.Item>
                        <NavDropdown.Item ><i class="fa fa-folder-o text-secondary" aria-hidden="true"></i> My disputes</NavDropdown.Item>
                        <NavDropdown.Item ><Link to="mediator/create_mediation" className="text-dark text-decoration-none">
                        <i class="fa fa-plus-square text-secondary" aria-hidden="true"></i> Add mediation</Link></NavDropdown.Item>
                    </NavDropdown>
                </li>
                <li className="nav-item">
                    <NavDropdown title="Arbitrage" >
                        <NavDropdown.Item ><Link className="text-dark text-decoration-none">
                        <i class="fa fa-gavel text-secondary" aria-hidden="true"></i> Arbitration <span class="badge badge-danger bg-danger">Comming Soon</span></Link></NavDropdown.Item>
                    </NavDropdown>
                </li>

            </ul>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                                        <button type="button" className="btn">
                                            Notifications <span className="badge bg-green ms-2">4</span>
                                        </button>
                    </li> 
                    <li className="nav-item">
                    <Link type="button" className="btn btn-light" to="/profile_mediator"><i className="fa fa-connectdevelop text-primary"></i> Hello Mediator, <b className="text-dark">{user}</b></Link>
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

export default HeaderMediator
