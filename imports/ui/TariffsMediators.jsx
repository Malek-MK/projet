import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const TariffsMediators = () => {
    return (
        <div>
            <NavBar/>
            <div className="container text-center">
            <div className="row mt-5">
            <div className="col-sm-6 mt-3">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img9.png" alt="" /> 
      </div>
    </div>
  </div>
            <div className="col-sm-6 mt-5">
    <div className="card border-0">
      <div className="card-body mt-5">
        <h2>Discover the new mediator version</h2>
        <h4 className="card-text text-secondary mt-3">You wish to use our platform for the purpose of carrying out your own mediations. To do this, all you need to do is choose one of our packages and add your own files directly to our mediation management interface.</h4>
      </div>
    </div>
  </div>
  
            </div>
            <h3 className="text mt-5 text-secondary">Our mediator subscriptions</h3>
            <small className="text text-secondary mb-5">Nos tarifs mensuels</small>
            <div className="row mt-3">
  <div className="col-sm-4">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img10.png" alt="" /> 
      <div>
          <button className="btn btn-primary btn-lg mt-3 mb-4">TO CHOOSE</button>
      </div>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img11.png" alt="" /> 
      <button className="btn btn-primary btn-lg mt-3 mb-4">TO CHOOSE</button>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img12.png" alt="" /> 
      <button className="btn btn-primary btn-lg mt-3 mb-4">TO CHOOSE</button>
      </div>
    </div>
  </div>
</div>
<h3 className="text mt-5 text-secondary">Our mediator subscriptions</h3>
            <small className="text text-secondary mb-5">Nos tarifs annuals</small>
            <div className="row mt-3">
  <div className="col-sm-4">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img13.png" alt="" /> 
      <div>
          <button className="btn btn-primary btn-lg mt-5 mb-4">TO CHOOSE</button>
      </div>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img14.png" alt="" /> 
      <button className="btn btn-primary btn-lg mt-2 mb-4">TO CHOOSE</button>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card border-0">
      <div className="card-body">
      <img src="../images/img15.png" alt="" /> 
      <button className="btn btn-primary btn-lg mt-5 mb-4">TO CHOOSE</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <Footer/>
        </div> 
    )
}

export default TariffsMediators
