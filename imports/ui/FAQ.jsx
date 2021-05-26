import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const FAQ = () => {
  return (
    <div>
      <NavBar />
      <div className="card mt-0 border-0 text-center mt-5 mb-5" >
        <div className="card body bg-info text-white">
          <br></br>
          <h1 className="text mt-5 mb-4">Frequently Asked Questions</h1>
          <p className="p mb-5">
          Here you will find the most frequently asked questions to our team. Do not hesitate to ask us yours,
           <br></br> 
           we are at your disposal to answer all your questions!
           </p>
          <div>
            <button className="btn btn-success btn-lg mb-5">ASK YOUR QUESTIONS</button>
          </div>
        </div>
      </div>
      <div className="container text-center border-0 mt-5 mb-5">
      <div className="accordion" id="accordionExample">
        <div className="card mt-5 mb-5">
        <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      HOW LONG WILL MEDIATION TAKE?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The duration of a mediation depends on the complexity of your case and the willingness of the parties to settle quickly.

For example :

Half a day: If you have an unpaid bill, a rental dispute, a neighborhood problem, or a minor disagreement on a contract or in the course of your employment.
A full day: If you have a difficulty in performing or interpreting a contract, a commercial dispute, a conflict with co-owners or an employment dispute.
A day and a half: If you think that the first day will be used for mediation and the additional half day for drafting the transaction.
Two days or more: If your dispute is complex, delicate, if it involves large sums or if you wish to be assisted by a lawyer during mediation.
The mediator can tell you, if an agreement is about to be reached, to continue mediation with additional sessions.
You have no maximum time limit, and you can stop mediation at any time.

If you have any questions, contact us toll-free and we'll be happy to answer them.      </div>
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
      Can my legal expenses insurance cover the costs of mediation?      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, in accordance with Article L. 127-1 of the Insurance Code, which provides that:

“Any legal protection insurance contract explicitly stipulates that, when a lawyer or any person qualified by the legislation or regulations in force is called upon to defend, represent or serve the interests of the insured, in the circumstances provided for in Article L. 127-1, the insured has the right to choose ”

(see J. Courrouy, Reflections on some aspects of legal protection insurance, D. 1992. 169; J. Bonnard, Legal protection insurance and the scope of the principle of free choice of lawyer by the insured, D. 2000. 343)
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
      Do I have the right to refuse an offer of mediation?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Absolutely, mediation is a voluntary process, all parties must agree to mediation for it to take place. However, if you refuse mediation, the claimant may be granted a certificate of attempted mediation that can be approved before the Courts at the rate of 49 € HT.        </div>
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
      What are the cost sharing arrangements?
       </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The party proposing mediation may ask the party who receives the request to share the costs of the mediation. If the party receiving the split request accepts, the costs are divided by 2 and everyone pays their share. If the party refuses, either party can agree to pay the full cost to facilitate the mediation process. Payments are made online on the platform via our secure platform.        </div>
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
      What is a mediation agreement?
      </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      It is a contract between each of the parties and the mediator validating the rules for the conduct of the mediation and in particular its confidential nature.        </div>
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
      Can my lawyer be present during the mediation?
                </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Absolutely, on the other hand he cannot represent you alone, you must also be present.
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
    <h2 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      Does mediation interrupt the prescription?
            </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Unfortunately no, you have to make sure you protect your rights during this period.
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
    <h2 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      How long do I need to create an account?
            </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      It takes you about 5 minutes. As a first step, you only have to enter your personal information and those of the party to whom you are offering mediation.
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
    <h2 className="accordion-header" id="headingTen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
      A lawsuit has already started, can I go to mediation?
            </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, you can settle your case and have recourse to mediation at any time during the procedure.
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
    <h2 className="accordion-header" id="headingEleven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
      Is mediation confidential? 
      </button>
    </h2>
    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, the parties as well as the mediator undertake to keep the content and the discussions of the mediation confidential.
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
    <h2 className="accordion-header" id="headingTwelve">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
      Is the mediation recorded? 
      </button>
    </h2>
    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      No, each party agrees not to do so. If there is a registration, you will be notified and have the option to decline it. In any case, if there is a recording, it can only be used for the purpose of improving the quality of the service.
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
    <h2 className="accordion-header" id="headingThirteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
      Who is Community for 
      </button>
    </h2>
    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Community is for anyone facing litigation! Whether you are an individual, a professional or a company, we are at your service to settle your dispute amicably within 3 months of your request.
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
    <h2 className="accordion-header" id="headingFourteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
      What are the payment methods offered?
      </button>
    </h2>
    <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You can pay the costs of the mediation by Visa or MasterCard credit card.
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
    <h2 className="accordion-header" id="headingFifteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
      What do I need to use the platform?
      </button>
    </h2>
    <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You need a computer, smartphone or tablet connected to an internet network. You do not have to provide any documents to register, but a section is available on the platform if you wish to download some for the mediator to have access to.
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
    <h2 className="accordion-header" id="headingSixteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
      How does mediation work?
            </button>
    </h2>
    <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Mediation begins with an individual and confidential interview with the mediator (premediation) then mediation begins with the presentation of the position of each party. The talent of our mediators is to identify your needs and the solutions adopted to settle your dispute definitively.
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
    <h2 className="accordion-header" id="headingSeventeen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
      Is the agreement obtained in mediation as valid as a judgment?      </button>
    </h2>
    <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The agreement obtained at the end of the mediation is valid and constitutes a contract between the parties who must respect it. However, if one of the parties does not respect it, the agreement will have to be approved (which gives it the same value as a judgment) by the court (very fast procedure) to have the agreement executed by a bailiff, for example.
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
    <h2 className="accordion-header" id="headingEighteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
      Can I extend or stop an ongoing mediation? 
      </button>
    </h2>
    <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Yes, if at the end of a mediation session if you need more time you can add more in half-day increments.
If, on the contrary, you have paid faster or where you do not wish to continue, any half-day or day not started will be refunded to you.   
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
    <h2 className="accordion-header" id="headingNineteen">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
      What happens if the mediation request is refused? 
      </button>
    </h2>
    <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Both parties have every interest in having recourse to mediation as this will allow the dispute to be settled amicably. However, mediation remains a choice for the parties, if one of them does not wish to continue or participate in it, it is within their rights and therefore mediation will not take place.           </div>
    </div>
  </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
              <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwenty">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
      Are there any additional costs to take into account?
            </button>
    </h2>
    <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The only fees you will have to pay are the mediation fees calculated according to the duration of the mediation. If mediation fails, you will be given a certificate of failure free of charge. If mediation is successful, you have the option of having the settlement agreement approved for an additional fee.
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
    <h2 className="accordion-header" id="headingTwentyOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyOne" aria-expanded="false" aria-controls="collapseTwentyOne">
      What is the difference between mediation and arbitration?
            </button>
    </h2>
    <div id="collapseTwentyOne" className="accordion-collapse collapse" aria-labelledby="headingTwentyOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Mediation belongs to the parties, it allows an amicable agreement to be reached, the mediator does not render any decision. Arbitration is more like a traditional trial, but simpler, faster, and the arbitrator makes a final decision (the award) not subject to appeal.
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
    <h2 className="accordion-header" id="headingTwentyTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwentyTwo" aria-expanded="false" aria-controls="collapseTwentyTwo">
      How will I sign the final agreement?
      </button>
    </h2>
    <div id="collapseTwentyTwo" className="accordion-collapse collapse" aria-labelledby="headingTwentyTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      You will sign the final agreement using our fully secure electronic signature system accessible through a simple Internet connection.
              </div>
    </div>
  </div>
              </div>
            </div>
          </div>
          <h3 className="text text-secondary mt-5 mb-3">RESSOURCES</h3>
          <tr className="border-1 text-success "></tr>
          <h2 className="text mt-5 mb-5">Nos derniers articles</h2>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <img src="./images/img8.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">L’impact environnemental de la médiation en ligne</h5>
                  <p className="card-text text-secondary">Revue à partir de l’année 2008, la répartition géographique des tribunaux en France n’avait pas été significativement modifiée depuis 1958. Celle-ci était par conséquent considérée comme inadaptée au regard de l’évolution démographique et économique des régions. Avec...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img src="./images/img9.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Conflits entre actionnaires et dirigeants : ils sont plus nombreux que jamais !</h5>
                  <p className="card-text text-secondary">L’affectio Sociétatis constitue la base d’une aventure entrepreneuriale réussie.Néanmoins, chemin faisant il n’est pas rare que les retalions aboutissent à des conflits, litiges ou différends structurels et conjoncturels pour lesquels les relations humaines ne sont...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <img src="./images/img10.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Le règlement intérieur national de la profession d’avocat intègre désormais la médiation comme préalable à une action en justice</h5>
                  <p className="card-text text-secondary">Le 18 décembre 2020, une décision portant modification du règlement intérieur national (RIN) de la profession d’avocat a été publiée au Journal officiel du 17 janvier 2021 ;  En effet, le texte fait référence à un nouvel alinéa à l’article 6.1 du RIN. Ce...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FAQ
