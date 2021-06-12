import React from 'react'
import HeaderLegalProf from '../ui/HeaderLegalProf';
import { Link } from 'react-router-dom';
import Footerr from './Footerr';

const LegalProfessional = () => {
    return (
        <div>
            <HeaderLegalProf/> 
            <br></br><br></br><br></br>
            <div className="container mt-5 mb-3 text-center">
            <div className="row">
            <div className="col-sm-3">
            <div className="card">
            <div className="card-body">
            <i className="fa fa-folder-open-o fa-3x text-info" aria-hidden="true"></i>
                <h4 className="text-success mt-3">Consult disputes</h4><br></br>
                <p>see and settle the dispute and defend a vice</p>
                <Link className="btn btn-primary" to="/consult-disputes">Take control</Link>
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

export default LegalProfessional
