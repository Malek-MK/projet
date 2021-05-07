import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import { Link } from 'react-router-dom';

const Mediators = () => {
    return (
        <div>
            <NavBar/>
            <div className="container ">
            <div className="row mt-5">
            <div className="col-sm-6 mt-5">
    <div className="card border-0 mt-5">
      <div className="card-body">
        <h2>Are you a mediator?<br></br> Join us</h2>
        <h4 className="card-text text-secondary mt-3">You want to be part of a community of mediators committed to improving access to justice. Do you want to use JustiCity to carry out your own online mediations? You are in the right place ! To join us, fill out our online form. <b>WARNING ! The JustiCity subscription will soon be available to perform your own mediations!</b></h4>
        <Link className="btn btn-primary btn-lg mt-3" to="/new-version-of-community">See all new features</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <div className="card border-0 mt-5">
      <div className="card-body">
      <img src="./images/img2.png" alt="Logo" /> 
      </div>
    </div>
  </div>
  
  </div>
  <div class="card bg-light mt-5 text-center">
  <div class="card-body">
    <h1 className="text mt-3">Your online mediation platform</h1>
    <h3 className="text-secondary mt-3">The Justicity platform makes it easy for mediators to organize online mediation sessions. To achieve this, Justicity offers an easy-to-use productivity tool with significant functional benefits.</h3>
  <div>
      <button className="btn btn-secondary mt-4 mb-3">ACCESS THE PLATFORM</button>
  </div>
  </div>
</div>
<div className="row">
            <div className="col-sm-6 mt-4">
    <div className="card border-0 mt-5 text-center">
      <div className="card-body">
      <i class="fa fa-pencil-square-o text-primary fa-5x mt-3 mb-3" aria-hidden="true"></i>
      <p>SIGNATURE OF DOCUMENTS</p>
      <p className="text-secondary">Justicity provides you with a SaaS platform allowing you to dematerialize the signing of documents such as the mediation agreement, contracts, memorandum of understanding or the mediation attempt certificate.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <div className="card border-0 mt-5 text-center">
      <div className="card-body">
      <i class="fa fa-television text-primary fa-5x mt-3 mb-3" aria-hidden="true"></i>
        <p className="text mb-3 mt-2">MEDIATION BY VISIOCONFERENCE</p>
        <p className="text-secondary">Do not move any more! Both parties receive an email invitation to the online mediation session. On the chosen day, they participate in the mediation session by videoconference in your presence. Depending on the package chosen, the sessions can extend over several days, be shortened or extended.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-4">
    <div className="card border-0  text-center">
      <div className="card-body">
      <i class="fa fa-pencil-square text-primary fa-5x mt-3 mb-2" aria-hidden="true"></i>
        <p className="text mb-3 mt-1">NOTE TAKING</p>
        <p className="text-secondary">Our software assists you in taking notes. These are saved in each folder and you can access them at any time. You can choose to share these notes with the parties as a visual aid for the mediation.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <div className="card border-0  text-center">
      <div className="card-body">
      <i class="fa fa-clipboard text-primary fa-5x mt-4 mb-2" aria-hidden="true"></i>
        <p className="text mb-3 mt-2">EDITORIAL ASSISTANCE</p>
        <p className="text-secondary">Our software simplifies the drafting of the transaction. The management of recorded data as well as during note taking fits into our transaction model which will be submitted for signature electronically.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <div className="card border-0 text-center">
      <div className="card-body">
      <i class="fa fa-floppy-o text-primary fa-5x mt-3" aria-hidden="true"></i>
        <p className="text mb-3 mt-2">SHARING DOCUMENTS</p>
        <p className="text-secondary">The management of documents provided by the Parties as well as their sharing is carried out via a dedicated cloud. These documents are directly available online in your interface and are stored securely.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3">
    <div className="card border-0 mt-3 text-center">
      <div className="card-body">
      <i class="fa fa-comments-o text-primary fa-5x mt-1 " aria-hidden="true"></i>
        <p className="text mb-3 mt-2">MESSAGING AND CHAT</p>
        <p className="text-secondary">You have the opportunity to chat with the parties online through dedicated messaging in a secure and confidential manner during mediation or in the case of bilateral discussions.</p>
      </div>
    </div>
  </div>
  </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Mediators
