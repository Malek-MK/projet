import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const Features = () => {
    return (
        <div>
            <NavBar/>
            <div className="container text-center">
            <div className="row mt-5">
  <div className="col-sm-6 mt-5">
    <div className="card border-0">
      <div className="card-body">
        <h2>Settling a dispute becomes easier</h2>
        <h4 className="card-text text-secondary mt-3">Our platform is specifically designed to support you in all stages of the resolution of your dispute. From the creation of the file and the validation of your request to the signing of the memorandum of understanding, everything takes place 100% online without travel ...</h4>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <div className="card border-0">
      <div className="card-body">
      <img src="./images/img7.png" alt="Logo" /> 
      </div>
    </div>
  </div>
            </div>
            <div className="card border-0 mt-5 mb-4">
            <div className="card body border-0">
            <h3 className="text mb-3">A simple and complete platform</h3>
            <p>Community offers you a multitude of features allowing you to settle your disputes amicably,<br></br> avoiding endless processing delays through the usual channels. The entire process is done online with a simple and efficient tool.</p>
            </div>
            </div>
            <div class="row">
  <div class="col-sm-4">
    <div class="card mt-5 border-0">
      <div class="card-body border-0">
      <i class="fa fa-file-text-o fa-5x text-primary" aria-hidden="true"></i>
        <h3 className="text mt-5">ENTRY FORM</h3>
        <p className="text mt-3">The first step is to complete a form allowing you to provide all the information necessary to process your dispute: Your contact details, the contact details of the other party and finally the subject of your dispute.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card mt-5 border-0">
      <div class="card-body border-0">
      <i class="fa fa-pie-chart fa-5x text-primary" aria-hidden="true"></i>
      <h3 className="text mt-5">COST SHARING</h3>
        <p className="text mt-3">The party proposing mediation has the option of asking the party who receives the request to share the costs. The latter has the choice to accept or not this proposal. All payments are made online on a secure interface.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card mt-5 border-0">
      <div class="card-body border-0">
      <i class="fa fa-calendar fa-5x text-primary" aria-hidden="true"></i>
      <h3 className="text mt-5">DATE PLANNING</h3>
        <p className="text mt-3">You have the option of choosing up to 10 availability dates which will be submitted to the party receiving the mediation request. The latter can in turn choose one or more dates from the pre-selected dates.</p>
      </div>
    </div>
  </div>





  <div class="col-sm-4">
    <div class="card mt-5 border-0">
      <div class="card-body">
      <i class="fa fa-pencil-square-o fa-5x text-primary" aria-hidden="true"></i>
        <h3 className="text mt-5">SIGNATURE OF DOCUMENTS</h3>
        <p className="text mt-3">Before any intervention by one of our mediators, the parties are invited to sign a mediation agreement which will govern the entire process and protect the parties by ensuring total confidentiality. At the end of the mediation, each party will have to sign a transaction that will seal the agreement.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card mt-5 border-0">
      <div class="card-body">
      <i class="fa fa-male fa-5x text-primary" aria-hidden="true"></i>
      <h3 className="text mt-5">ASSIGNMENT OF A MEDIATOR</h3>
        <p className="text mt-3">Once the agreement has been signed, JustiCity will select a mediator from the list of professionals available on the dates chosen. This will be assigned to the mediation file and will contact the parties for validation of the date finally selected.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card mt-5 border-0">
      <div class="card-body">
      <i class="fa fa-television fa-5x text-primary" aria-hidden="true"></i>
      <h3 className="text mt-5">MEDIATION BY VISIOCONFERENCE</h3>
        <p className="text mt-3">Both parties receive an email invitation to the online mediation session. On the selected day, they participate, in the presence of the mediator, in the mediation session by videoconference. Depending on the package chosen, the sessions can extend over several days, be shortened or extended.</p>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="card border-0 bg-primary mt-3">
            <div class="row">
  <div class="col-sm-6">
    <div class="card text-center border-0 bg-primary">
      <div class="card-body">
        <h2 className="text-white mt-5 mb-5">Ready to request mediation?</h2>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-center border-0 bg-primary">
      <div class="card-body">
        <button className="btn btn-success btn-lg mt-5 mb-5">Access the platform</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Features
