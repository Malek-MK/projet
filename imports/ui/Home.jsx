import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../ui/Footer';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'

const Home = () => {
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
            history.push('/register_mediator');
        }
}
const veriff=()=>{
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
        history.push('/signin');
    }
}
const verifff=()=>{
    var loggedInUser = Meteor.userId();
    if (Roles.userIsInRole(loggedInUser, 'admin')) {
      history.push('/admin');
    }
    else if (Roles.userIsInRole(loggedInUser, 'user')) {
      history.push('/mediations/create');
    }
    else if (Roles.userIsInRole(loggedInUser, 'arbitrator')) {
      history.push('/arbitrator');
    }
    else if (Roles.userIsInRole(loggedInUser, 'mediator')) {
        history.push('/mediator/create_mediation');
      }
    else{
        history.push('/create-mediation');
    }
}
const verif1=()=>{
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
        history.push('/signin');
    }
}
const verif2=()=>{
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
        history.push('/register');
    }
}
    return (

        <div className="div">
            <div className="div fixed-top">
                <div className="d-flex justify-content-center bg-secondary text-white text-center" >
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/contact" >Tel : 1122334455</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/what-is-mediation">What is mediation?</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/what-is-arbitration">What is arbitration?</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/clauses-mediation-arbitration">Mediation and arbitration clauses</Link>
                    <Link className="text-white text-decoration-none " style={{ marginRight: "20px" }} to="/blog">Blog</Link>

                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light  ">

                    <Link className="navbar-brand text-dark " to="/home"><i className="fa fa-balance-scale"></i>SpeedSolution</Link>

                    <div className="collapse navbar-collapse ml-2" >
                        <ul className="navbar-nav ml-auto topnav">

                            <li className="nav-item">
                                <Link className="nav-link text-dark " to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Dropdown>
                            <Dropdown.Toggle className="btn btn-light text-dark">
                            Our offers
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link className="dropdown-item " to="/details-business-offer">Offer details</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/features">Features</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/prices">Prices</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/faq">FAQ</Link></Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                           
                            </li>
                            <li className="nav-item dropdown">
                            <Dropdown>
                            <Dropdown.Toggle className="btn btn-light text-dark">
                            Our mediator offers
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><Link className="dropdown-item " to="/details-offer-mediators">Offer details</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/mediator-functionalities">Features</Link></Dropdown.Item>
                                <Dropdown.Item><Link className="dropdown-item" to="/tariffs-mediators">Prices</Link></Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                               
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-dark" onClick={veriff}>My Account <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item" >
                                <div className="input-group" >

                                    <input id="search-focus" type="search" placeholder="Search.." className="form-control" style={{ width: "180px", marginLeft: "20px" }} />
                                    <button type="button" className="btn btn-primary">
                                        <i className="fa fa-search"></i>
                                    </button>


                                </div>
                            </li>
                            <div className="position-absolute top-5 end-0">
                                <ul className="navbar-nav topnav">
                                    <li className="nav-item mr-2">
                                        <Link onClick={verif1} className="text-success text-decoration-none"><b><i className="fa fa-sign-in"></i> Sign In</b></Link>
                                    </li>
                                    <li className="nav-item text-dark">/</li>
                                    <li className="nav-item">
                                        <Link onClick={verif2} className="text-info text-decoration-none"><b><i className="fa fa-user-plus"></i>Register</b></Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </nav>

            </div>
            <div className="container mt-5 text-center ">
                <br></br>
                <Link className="btn btn-outline-info btn-lg mt-5 border-2" to="/tariffs-mediators">Are you mediators? Enjoy a 30-day free trial</Link>
                <div className="row mt-5">
                    <div className="col-sm-6 mt-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <img src="./images/img17.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card border-0" style={{textAlign:"left"}}>
                            <div className="card-body">
                                <small className="text-secondary mb-5">BUSINESS / INDIVIDUALS / LAW PROFESSIONALS OFFER</small>
                                <h2 className="text mt-3">The solution to quickly settle your disputes</h2>
                                <h4 className="card-text text-secondary mt-3">Are you an individual, a company or a self-employed person and wish to initiate a mediation file in order to settle a dispute?</h4>
                                <h4 className="card-text text-secondary mt-3">SpeedSolution is the tool for you!</h4>
                                <Link className="btn btn-success btn-lg mt-4" onClick={verifff}>ASK FOR MEDIATION</Link>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-sm-6 mt-5">
                        <div className="card border-0" style={{textAlign:"left"}}>
                            <div className="card-body">
                                <small className="text-secondary mb-5">MEDIATORS OFFER</small>
                                <h2 className="text mt-3">The solution to manage all your mediations</h2>
                                <h4 className="card-text text-secondary mt-3">Are you a mediator and would you like to use the SpeedSolution tool to carry out your own mediations or would you like to apply to become a SpeedSolution mediator?</h4>
                                <h4 className="card-text text-secondary mt-3">You are in the right place !</h4>
                                <Link className="btn btn-success btn-lg mt-4" onClick={verif}>SUBSCRIBE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <img src="./images/img18.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text mt-5">SpeedSolution, what is it?</h2>
                <div className="row mt-5">
                    <div className="col-sm-6 mt-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <img src="./images/img19.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card border-0" style={{textAlign:"left"}}>
                            <div className="card-body">
                                <h2 className="text mt-1">Mediation</h2>
                                <h4 className="card-text text-secondary mt-3">Mediation is a simple, fast and economical solution. In the context of a dispute, Mediation allows an agreement to be obtained quickly before going to court. This takes place with an independent accredited mediator.</h4>
                                <h4 className="card-text text-secondary mt-3">Mediation is an Alternative Dispute Resolution Method recognized by the State which can be approved by the Courts.</h4>
                                <Link className="btn btn-success btn-lg mt-4" to="/what-is-mediation">find out more</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 mt-5">
                        <div className="card border-0" style={{textAlign:"left"}}>
                            <div className="card-body">
                                <h2 className="text mt-1">Arbitration</h2>
                                <h4 className="card-text text-secondary mt-3">Arbitration advantageously replaces a lawsuit. It is perfectly suited to companies wishing to settle a dispute quickly, confidentially with a controlled budget. It is a solution particularly suited to commercial and / or international disputes.</h4>
                                <h4 className="card-text text-secondary mt-3">Our arbitrators render a final, non-appealable decision that is binding on all parties and can be homologated in court. Arbitration implements a much less restrictive procedure than traditional courts while respecting the adversarial principle.</h4>
                                <Link className="btn btn-success btn-lg mt-4" to="/what-is-arbitration">find out more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <img src="./images/img20.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                    </div>
                    <h2 className="text mt-5 mb-5">Who is SpeedSolution for?</h2>
                    <div className="row mt-3" style={{justifyContent:"center"}}>
            <div className="col-sm-3">
              <div className="card">
                <img src="./images/img6.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">PROFESSIONALS</h5>
                  <p className="card-text text-secondary">You are, Mediator, Lawyer, Notary, Chartered Accountant or Bailiff and you wish to support your clients towards a rapid settlement of their disputes. The SpeedSolution Platform allows you to submit a mediation file for your clients, benefit from a preferential rate and access dedicated management tools.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img src="./images/img4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">COMPANIES</h5>
                  <p className="card-text text-secondary">Vous êtes une PME, TPE ou un indépendant, la Plateforme SpeedSolution vous permet d’accéder à moindre coût aux services d’un Médiateur avant toute action judiciaire que vos différends soient internes (Ressources Humaines, harcèlement etc.) ou Externes (Relations Commerciales, Satisfaction client etc.). </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <img src="./images/img5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">INDIVIDUALS</h5>
                  <p className="card-text text-secondary">You are an individual and you want to settle a dispute quickly and inexpensively, the SpeedSolution platform will allow you to reach an amicable agreement while avoiding a lawsuit. Our accredited mediators will accompany you in this process in complete confidentiality.</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text mt-5 mb-5">Mediation with SpeedSolution is:</h1>
<div className="d-flex justify-content-center ">
<div className="d-flex justify-content-center w-75">
<div className="col-sm-6">
    <div className="card text-center border-0 bg-primary text-white">
        <br></br><br></br>
      <h1>4250€</h1>
      <br></br>
      <h3>SAVED</h3>
      <br></br><br></br>
    </div>
  </div>
  <div className="col-sm-6">
  <div className="card text-center border-0 bg-primary text-white">
        <br></br><br></br>
      <h1>7 MONTHS</h1>
      <br></br>
      <h3>OF WINNING</h3>
      <br></br><br></br>
    </div>
  </div>
</div>
</div>
<div className="text mt-5 mb-5">
<h5>The average price of a civil lawsuit in France is <b>€ 5,000</b> (Conseil National des Barreaux) while a half-day mediation at SpeedSolution costs <b>€ 750</b>, by choosing us, you save <b>€ 4,250</b>.
The average time to be heard in court is <b>8 months</b> on average (Key figures of justice 2018) while the maximum time to set a mediation at SpeedSolution is <b>1 month</b>, with us you save at least <b>7 months</b> of your time .</h5>
</div>
            </div>
            <Footer/>

        </div>

    )
}

export default Home;
