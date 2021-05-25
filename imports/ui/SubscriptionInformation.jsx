import React from 'react'
import { Link } from 'react-router-dom';

const SubscriptionInformation = () => {
    return (
        <div class="col-sm-9">
            <div className="card">
            
            <div className="d-flex align-items-center">
               <div className="container mt-3">
               <p className="text-secondary">Subscribe !</p>
               </div>
            </div>
            <div className="card-body">
            <div className="card">
      <div className="card-body bg-info" style={{padding:"70px",height:450}}>
        <h3 className="mb-3">Start now</h3>
        <p class="card-text">You wish to use our platform in order to carry out your own mediations. To do this, all you need to do is choose one of our packages and add your own files directly to our mediation management interface.</p>
        <Link className="btn btn-danger" to="/subscriptions/pricing">Subscribe !</Link>
      </div>
    </div>
            </div>
            </div>
            </div>
    )
}

export default SubscriptionInformation
