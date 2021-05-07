import React from 'react'
import NavBar from '../ui/NavBar';
const OfferDetailsMed = () => {
    return (
        <div>
            <NavBar/>
            <div class="card mt-0 border-0 text-center mt-5 mb-5" >
            <div className="card body bg-info text-white">
                <h1 className="text mt-5 mb-4">An innovative tool to carry out your<br></br> mediations</h1>
                <p className="p mb-5">
                After almost 1 year of existence, we are pleased to announce the release of the brand new version of our 100% online mediation service.<br></br>
                 It was a joy but also extremely instructive to accompany you in the implementation and the follow-up of the first experiments of our platform.<br></br>
<br></br>
Indeed, these first months have enabled us to bring to market a brand new concept responding to an increasingly significant need: the need for alternative justice <br></br>
facilitated by the establishment of a mediation and arbitration platform by videoconference ensuring maximum security, all hosted 100% in France 🇫🇷 and Canada 🇨🇦
                </p>
             </div>
            </div>
            <div className="container text-center">
            <div className="row mt-5">
            <div className="col-sm-6 mt-0">
    <div className="card border-0">
      <div className="card-body">
      <img src="./images/img11.jpg" alt="Logo" /> 
      </div>
    </div>
  </div><br></br>
  <div className="col-sm-6 mt-3">
    <div className="card border-0">
      <div className="card-body">
      <br></br><br></br>
        <h2>Vous êtes médiateurs ? Rejoignez-nous !</h2>
        <h4 className="card-text text-secondary mt-3">You want to be part of a community of mediators committed to improving access to justice. Do you want to use JustiCity to carry out your own online mediations?

You are in the right place ! To join us, fill out our online form.</h4>
      </div>
    </div>
  </div>
            </div>
            <div class="card bg-light mt-5">
  <div class="card-body">
    <h1 className="text mt-3">Sign up and discover our<br></br> subscriptions</h1>
    <h3 className="text-secondary mt-3">The Justicity platform makes it easy for mediators to organize<br></br> online mediation sessions. To achieve this, Justicity offers an<br></br> easy-to-use productivity tool with significant functional benefits.</h3>
  <div>
      <button className="btn btn-secondary mt-4 mb-3">SUBSCRIBE</button>
  </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default OfferDetailsMed
