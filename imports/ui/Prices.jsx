import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const Prices = () => {
    return (
        <div>
            <NavBar/>
            <div className="card mt-0 border-0 text-center mt-5" >
            <div className="card body bg-info">
                <h1 className="text mt-5 mb-4">Our mediation rates</h1>
                <h3 className="p mb-5">
                Submit your mediation file for free on our platform. Depending on the response from the defendant, you have two choices: continue the mediation process if it is accepted or receive a certificate of attempted mediation if it is refused.               </h3>
             </div>
            </div>
            <div className="container border-0 mt-5 text-center mb-5">
            <div className="row">
  <div className="col-sm-4">
    <div className="card text-white bg-warning mt-5">
      <div className="card-body">
        <h4 className="text mt-4">750€ (without taxes)</h4>
        <p>900€ TTC</p>
        <h1 className="text mt-5 mb-5">1/2 day</h1>
        <p>9 a.m. to 12 p.m. or 2 p.m. to 5 p.m. </p>
        <p>1 / 2h of premeditation per game </p>
        <p>Assignment of a mediator</p>
        <p>Drafting of the transaction </p>
        <button className="btn btn-white btn-lg text-secondary bg-white mt-5 mb-3">CHOOSE THIS PACKAGE</button>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-white bg-info mt-5">
      <div className="card-body">
      <h4 className="text mt-4">1200 (without taxes)</h4>
        <p>1440€ TTC</p>
        <h1 className="text mt-5 mb-5">1 day</h1>
        <p>9 a.m. to 5 p.m. with a 2-hour break</p>
        <p>1h of premeditation per game</p>
        <p>Assignment of a mediator</p>
        <p>Drafting of the transaction </p>
        <button className="btn btn-white btn-lg text-secondary bg-white mt-5 mb-3">CHOOSE THIS PACKAGE</button>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card text-white bg-primary mt-5">
      <div className="card-body">
      <h4 className="text mt-4">Personalized rate</h4>
        <p>(sur demande)</p>
        <h1 className="text mt-5 mb-5">+ than a day</h1>
        <p>Variable number of days depending on <br></br> needs</p>
        <p>1h of premeditation per game</p>
        <p>Assignment of a mediator</p>
        <p>Drafting of the transaction </p>
        <button className="btn btn-white btn-lg text-secondary bg-white mt-4 mb-3">CHOOSE THIS PACKAGE</button>
      </div>
    </div>
  </div>
</div>
<p className="text text-secondary mt-4 mb-5">You can request the sharing of costs from the party to whom you offer mediation when you register on the platform.</p>
           <h1>Foire aux questions</h1>
           <div className="accordion" id="accordionExample">
        <div className="card mt-5 mb-5">
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      HOW TO CHOOSE MY PACKAGE?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      To keep your costs under control, Justicity offers you packages based on the estimated duration of your mediation. This duration is <br></br> calculated in half a day which is the minimum duration for a successful mediation. You have no maximum <br></br><br></br> time limit.

You can stop mediation at any time and you will not be charged for unused half-days.<br></br>

You can also extend a mediation if you need more time, we are very flexible.<br></br>

Your choice of initial term depends on your estimate of the difficulty of your dispute.<br></br>
<br></br>
For example :
<br></br>
Half a day: If you have an unpaid bill, a rental dispute, a neighborhood problem, or a minor disagreement on a contract or in the course of your employment.<br></br>
A full day: If you have a difficulty in performing or interpreting a contract, a commercial dispute, a conflict with co-owners or an employment dispute.<br></br>
A day and a half: If you think that the first day will be used for mediation and the additional half day for drafting the transaction.<br></br>
Two days or more: If your dispute is complex, delicate, if it involves large sums or if you wish to be assisted by a lawyer during mediation.<br></br>
In any case, do not hesitate to contact us free of charge so that we can help us make your choice.      
      </div>
    </div>
  </div>
        </div>
        <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Do I have the right to refuse an offer of mediation?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Absolutely, mediation is a voluntary process, all parties must agree to mediation for it to take place.
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      When will mediation take place?      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Within three months. Once your case is filed, you will have access to a calendar with ten choice of dates over the next three months, the other party as well as the mediator will choose a mediation date among those you have proposed.      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Does mediation interrupt the prescription?      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Unfortunately no, you have to make sure you protect your rights during this period.      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Is the agreement obtained in mediation as valid as a judgment?      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The agreement obtained at the end of the mediation is valid and constitutes a contract between the parties who must respect it. However, if one of the parties does not respect it, the agreement will have to be approved (which gives it the same value as a judgment) by the court (very fast procedure) to have the agreement executed by a bailiff, for example.      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      How does mediation work?      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Mediation begins with an individual and confidential interview with the mediator (premediation) then mediation begins with the presentation of the position of each party. The talent of our mediators is to identify your needs and the solutions adopted to settle your dispute definitively.      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What is a mediation agreement?
      </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      It is a contract between each of the parties and the mediator validating the rules for the conduct of the mediation and in particular its confidential nature.      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      What is the difference between mediation and arbitration?      </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Mediation belongs to the parties, it allows an amicable agreement to be reached, the mediator does not render any decision. Arbitration is more like a traditional trial, but simpler, faster, and the arbitrator makes a final decision (the award) not subject to appeal.      </div>
    </div>
  </div>
    </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      <div className="accordion-item">
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How will I sign the final agreement?      </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You will sign the final agreement using our fully secure electronic signature system accessible through a simple Internet connection.      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</div>
</div>
<button className="btn btn-success btn-lg mt-5">SEE OUR FULL FAQs</button>
            </div>
            <div className="card border-0 bg-primary">
            <div className="row">
  <div className="col-sm-6">
    <div className="card text-center border-0 bg-primary">
      <div className="card-body">
        <h2 className="text-light mt-5 mb-5">Ready to submit your case?</h2>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card text-center border-0 bg-primary">
      <div className="card-body">
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

export default Prices;
