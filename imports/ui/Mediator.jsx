import React from 'react'
import { Link } from 'react-router-dom';
import HeaderMediator from '../ui/HeaderMediator';

const Mediator = () => {
    return (
        <div>
            <HeaderMediator/>
            <div className="container">
            <div className="row mt-5">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body bg-info" style={{padding:"70px",height:450}}>
        <h3 className="mb-3">Start now</h3>
        <p class="card-text">You wish to use our platform in order to carry out your own mediations. To do this, all you need to do is choose one of our packages and add your own files directly to our mediation management interface.</p>
        <Link className="btn btn-danger" to="/subscriptions/pricing">Subscribe !</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
    <div className="card-body bg-info" style={{padding:"70px",height:450}}>
        <h3 className="mb-3">Become a Community Mediator</h3>
        <p className="card-text">Do you want to be part of our accredited mediators on our platform and receive mediation requests from our clients? To do this, simply complete our application form by clicking below.</p>
        <Link className="btn btn-danger" to="/profile_mediator">Apply !</Link>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default Mediator
