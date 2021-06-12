import React from 'react'
import HeaderArbitrator from '../ui/HeaderArbitrator';
import { Link } from 'react-router-dom';
import Footerr from './Footerr';

const Arbitrator = () => {
    return (
        <div>
            <HeaderArbitrator/> 
            <br></br><br></br><br></br>
            <div className="container mt-5 mb-3 text-center">
            <div className="row">
            <div className="col-sm-3">
            <div className="card">
            <div className="card-body">
            <i className="fa fa-map-o fa-3x text-info" aria-hidden="true"></i>
                <h4 className="text-success mt-3">Arbitration mediation</h4><br></br>
                <p>You can insert, modify the arbitration and set the state.</p>
                <Link className="btn btn-primary" to="/arbitrate-disputes">Take control</Link>
            </div>
            </div>
            </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <Footerr/>
            </div>
        </div>
    )
}

export default Arbitrator
