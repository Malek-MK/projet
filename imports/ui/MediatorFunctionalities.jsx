import React from 'react'
import Home from '../ui/Home';
import { Link } from 'react-router-dom';

const MediatorFunctionalities = () => {
    return (
        <div>
            <Home/>
            <div class="card mt-0 border-0 text-center mt-5 mb-5" >
            <div className="card body bg-info text-white">
                <h1 className="text mt-5 mb-4">Are you mediators? Join us!</h1>
                <h5 className="p mb-5">
                You want to be part of a community of mediators committed to improving access to justice.<br></br> Do you want to use JustiCity to carry out your own online mediations? <br></br>You are in the right place! To join us, fill out our online form.   </h5>
               <div>
               <Link className="btn btn-success btn-lg mb-5" to="/signup">Sign up</Link>
               </div>
             </div>
            </div>
            <div className="container text-center">
                <h1 className="text text-center mt-2 mb-5">Discover new features</h1>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-clone text-primary fa-3x" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">MEDIATOR SUBSCRIPTION</h5>
                    <p>
                    <b>Main new feature:</b> <p className="text text-secondary">you can use JustiCity for your own mediations. Once registered, you can choose one of our subscription formulas and thus manage your files in an efficient and intelligent way: invitation of the parties, payment of fees, mediation agreement, videoconference sessions and transactional agreement in one and the same. in law ! </p>                   </p>
                    </div>
                </div>
                <div className="card border-0 ">
                    <div className="card body">
                    <i class="fa fa-clone text-primary fa-3x" aria-hidden="true"></i>
                    <h5 className="text mb-3 mt-2">DELEGATED MEDIATORS</h5>
                    <p className="text text-secondary">
                    If you are a mediation and arbitration center by choosing the Corporate subscription, you will be able to manage a full team of mediators. After having been invited by email, each delegated mediator will be able to see and manage their own files without viewing those of other collaborators.</p>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediatorFunctionalities
