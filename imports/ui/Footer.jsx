import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
           <footer className="bg-dark text-center text-lg-start text-white">
  <div className="container p-4 ">
    <div className="row">
   
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Services</h5>

        <ul className="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/features"> Features</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/details-business-offer"> Our offer</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/prices"> Prices</Link>
          </li>
         
        </ul>
      </div>
   
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase ">About</h5>

        <ul className="list-unstyled">
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/about"> About</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/privacy-policy"> Privacy Policy</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/terms-and-conditions"> Terms and conditions</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/legal-notice"> Legal Notice</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/our-code-of-ethics"> Our code of ethics</Link>
          </li>
        </ul>
      </div>
  
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Resources</h5>

        <ul className="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/contact"> Phone : 0 806 07 96 96</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/what-is-mediation"> What is mediation?</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/what-is-arbitration"> What is arbitration?</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/clauses-mediation-arbitration"> Mediation and arbitration<br></br> clauses</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/blog"> Blog</Link>
          </li>
        </ul>
      </div>
    
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase ">Contact</h5>

        <ul className="list-unstyled">
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/contact"> Contact</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/mediators"> Mediators Access</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/signup"> Create an account</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link className="text-white text-decoration-none" to="/signin"> To log in</Link>
          </li>
        </ul>
      </div>
     
    </div>
    
  </div>
 
  <a id="Button-1" className="btn pull-right bg-white" style={{ position: 'absolute', bottom: '70px', left: '1220px' }} href="#" role="button"><h5><i className="fa fa-arrow-up"></i></h5></a>


  <div className="text-center p-3 text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
       {new Date().getFullYear()} © - Copyright <i>SpeedSolution</i>
  </div>
  
</footer> 
        </div>
    )
}

export default Footer
