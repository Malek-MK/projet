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
            <div class="row">
            <div class="col-sm-3">
            <div class="card">
            <div class="card-body">
            <i class="fa fa-map-o fa-3x text-info" aria-hidden="true"></i>
                <h4 class="text-success mt-3">Manage mediations</h4><br></br>
                <p>you can add, modify, see and delete all mediations.</p>
                <Link class="btn btn-primary" to="/manageMediations">Take control</Link>
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
