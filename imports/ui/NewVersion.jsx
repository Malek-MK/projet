import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const NewVersion = () => {
    return (
        <div>
            <NavBar/>
            <br></br><br></br><br></br>
            <div className="container mt-5">
            <h1 className="text mt-5">Relive the launch of the new version of Community</h1>
            <h5 className="text-secondary mt-3">
            After almost 1 year of existence 🎂 we are happy to announce the imminent release of the brand new version of our <b>100% online mediation service</b>. It was a joy but also extremely instructive to accompany you in the implementation and the follow-up of the first experiments of our platform.
            </h5>
            <h5 className="text-secondary">
            Indeed, these first months have enabled us to bring to the market a brand new concept responding to an increasingly significant need: the need for alternative justice facilitated by the establishment of a mediation and arbitration platform by videoconference ensuring maximum security, all hosted 100% in France 🇫🇷. and in Canada 🇨🇦
            </h5>
            <h1 className="text mt-5 mb-4">Here are the main new features:</h1>
            <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-clone text-primary fa-3x" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">MEDIATOR SUBSCRIPTION</h5>
                    
                     <p className="text text-secondary"><b>Main new feature :</b>you can use JustiCity for your own mediations. Once registered, you can choose one of our subscription formulas and thus manage your files in an efficient and intelligent way: invitation of the parties, payment of fees, mediation agreement, videoconference sessions and transactional agreement in one and the same. in law ! </p>                 
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-users text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">DELEGATED MEDIATORS</h5>
                    <p className="text text-secondary">
                    If you are a mediation and arbitration center by choosing the Corporate subscription, you will be able to manage a full team of mediators. After having been invited by email, each delegated mediator will be able to see and manage their own files without viewing those of other collaborators.</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-credit-card text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">REGULATION MANAGEMENT</h5>
                    <p className="text text-secondary">
                    By subscribing to JustiCity, you can request a deposit or the full settlement of the mediation via our secure payment platform. You can in particular propose or not the sharing of costs to the parties and choose to have them paid before or after the mediation service.</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-table text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">DATE PLANNING</h5>
                    <p className="text text-secondary">
                    All of our subscriptions offer the possibility of choosing up to 10 availability dates which will be submitted to the parties. These in turn will be able to choose one or more dates from the pre-selected dates. The choice of the final date is always the responsibility of the mediator.</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-pencil-square-o text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">SIGNATURE OF DOCUMENTS</h5>
                    <p className="text text-secondary">
                    Justicity provides you with a SaaS platform allowing you to dematerialize the signing of documents such as the mediation agreement (to come), contracts and the transactional memorandum of understanding.</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-television text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">MEDIATION BY VISIOCONFERENCE</h5>
                    <p className="text text-secondary">
                    With our brand new videoconferencing system do not move any more! Both parties receive an email invitation to the online mediation session. On the chosen day, they participate, in your presence, in the mediation session by videoconference, without downloading any software. Depending on the package chosen, sessions can extend over several days.</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-clipboard text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">EDITORIAL ASSISTANCE</h5>
                    <p className="text text-secondary">
                    Our software simplifies the drafting of the transaction. The recorded data fits into our transaction template which will be submitted for electronic signature. For Corporate and Premium subscribers, these models may be customizable (to come).</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-floppy-o text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">SHARING DOCUMENTS</h5>
                    <p className="text text-secondary">
                    The management of documents provided by the Parties as well as their sharing is carried out via a dedicated cloud. These documents are directly available online in your interface and are stored securely.</p>                   
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-comments-o text-primary fa-3x mt-3" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">CONFIDENTIAL CHAT</h5>
                    <p className="text text-secondary">
                    You have the opportunity to chat with the parties online through dedicated messaging in a secure and confidential manner during mediation or in the case of bilateral discussions.</p>                   
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NewVersion
