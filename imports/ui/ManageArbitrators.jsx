import React from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import { Link } from 'react-router-dom';

const ManageArbitrators = () => {
    return (
        <div>
           <HeaderAdmin/> 
           <div className="container mt-5">
           <div>
                <div className="d-flex pull-right">
                            <div className="btn-list">

                                <Link to="/createArbitrator" className="btn btn-primary d-none d-sm-inline-block text-decoration-none" >
                                    Create new Arbitrator</Link>
                                
                            </div>
                        </div> 
                </div>
                <div className="card-title mb-5"><h3 className="card-label">
                List of Arbitrators
                        </h3><span className="d-block text-muted pt-2 font-size-sm">Consult and edit Arbitrators</span></div>
           </div>
        </div>
    )
}

export default ManageArbitrators
