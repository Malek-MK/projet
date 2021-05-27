import React from 'react'
import NavBar from './NavBar';
import Footer from '../ui/Footer';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
const WhatIsMediation = () => {
  const history = useHistory();
  const verif=()=>{
    var loggedInUser = Meteor.userId();
    if (Roles.userIsInRole(loggedInUser, 'admin')) {
      history.push('/admin');
    }
    else if (Roles.userIsInRole(loggedInUser, 'user')) {
      history.push('/mediations');
    }
    else if (Roles.userIsInRole(loggedInUser, 'arbitrator')) {
      history.push('/arbitrator');
    }
    else if (Roles.userIsInRole(loggedInUser, 'mediator')) {
      history.push('/mediator');
    }
    else{
        history.push('/create-mediation');
    }
}
    return (
        <div>
            <NavBar/>
            <br></br>
            <div className="container mt-5 ">
                <h3 className="text mt-5 text-center mb-5">What is Mediation ?</h3> 
                <h1 className="text mb-3"><b>The principle</b></h1>
                <p className="text text-secondary ">
                Among the amicable modes of conflict resolution, mediation is the most satisfactory, because it has an attribute that the other modes do not have, that of allowing the parties to continue a relationship. Mediation is ideal for those who wish to maintain a professional relationship despite the occurrence of a dispute.

This is the case, for example, for partners, business relations, employers and employees, co-owners, etc. <br></br>The talent of our mediators makes it possible to reach an amicable agreement which satisfies all the parties and which can be approved in court. Mediation uses complex communication techniques to allow the parties to express their real needs which, once identified, can be met by solutions that the parties themselves have suggested.

Successful mediation will result in an agreement being reached which can be approved by the court and the lawyer will have to oversee its drafting.

Mediation is a voluntary process, all parties must agree to it. Each party can be assisted by a lawyer if they wish.
                </p>
                <h1><b>The stages of a mediation</b></h1>
                <h3><b>1. Acceptance of mediation</b></h3>
                <p className="text text-secondary">Mediation is a voluntary process, all parties must agree to it. Each party can be assisted by a lawyer if they wish.</p>
                <h3><b>2. Signature of the mediation agreement</b></h3>
                <p className="text text-secondary">To be able to start the process, each of the parties should sign the mediation agreement that frames it, set its limits and objectives. Mediation is strictly confidential.</p>
                <h3><b>3. Payment of mediation fees</b></h3>
                <p className="text text-secondary">Our prices are clear and known in advance. You have the option of stopping the mediation or extending it if you wish. You can share these costs or leave them to the claimant.</p>
                <h3><b>4. The choice of the date of mediation</b></h3>
                <p className="text text-secondary">Experience shows that the closer a mediation is in time, the more likely it is to be successful. However, it will be necessary to find a date common to the parties and to the mediator. Avoid non-contiguous dates as much as possible, this harms the process.</p>
                <h3><b>5. Premediation</b></h3>
                <p className="text text-secondary">At the start of mediation, the mediator will speak alone with each of the parties. During this period, you can clearly express your needs in a confidential manner.</p>
                <h3><b>6. Mediation</b></h3>
                <p className="text text-secondary">C'est la période la plus importante, le médiateur n'est pas un juge, il écoutera et dirigera votre négociation afin d'éliminer les points d'achoppement et dégager des points communs pour finaliser l'accord. Le médiateur pourra vous entendre seul pour un moment s'il l'estime nécessaire. Cela aidera le médiateur à comprendre le contexte.

Voici le déroulement des différentes phases de la médiation :

Les quatre phases de la médiation selon les étapes de la négociation raisonnée Fisher et Ury, 1982</p>
          <h3><b>7. The signing of an agreement</b></h3>
          <p className="text text-secondary">A written agreement setting out the elements of the transaction will be signed by the parties and will be given to you. Remember that this agreement will guarantee the continuation of the joint relationship.</p>
          <h3><b>8. Approval</b></h3>
          <p className="text text-secondary mb-5">You have the option of having your agreement approved by the court, at an additional cost. This procedure will allow you to enforce the agreement in the event of non-compliance with it.</p>
          
            </div>
            <div className="card border-0 bg-primary">
            <div class="row">
  <div class="col-sm-6">
    <div class="card text-center border-0 bg-primary">
      <div class="card-body">
        <h2 className="text-white mt-5 mb-5">Ready to create your file?</h2>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-center border-0 bg-primary">
      <div class="card-body">
        <button className="btn btn-success btn-lg mt-5 mb-5" onClick={verif}>Access the platform</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default WhatIsMediation
