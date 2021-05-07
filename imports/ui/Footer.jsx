import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
           <footer class="bg-dark text-center text-lg-start mt-5 text-white">
  <div class="container p-4 ">
    <div class="row">
   
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Services</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/features"> Features</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/details-business-offer"> Our offer</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/prices"> Prices</Link>
          </li>
         
        </ul>
      </div>
   
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase ">About</h5>

        <ul class="list-unstyled">
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/about"> About</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/privacy-policy"> Privacy Policy</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none"> Terms and conditions</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none"> Legal Notice</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none"> Our code of ethics</Link>
          </li>
        </ul>
      </div>
  
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Resources</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/contact"> Phone : 0 806 07 96 96</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/what-is-mediation"> What is mediation?</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/what-is-arbitration"> What is arbitration?</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/clauses-mediation-arbitration"> Mediation and arbitration<br></br> clauses</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/blog"> Blog</Link>
          </li>
        </ul>
      </div>
    
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase ">Contact</h5>

        <ul class="list-unstyled">
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/contact"> Contact</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/mediators"> Mediators Access</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/signup"> Create an account</Link>
          </li>
          <li>
          <b><span>&#8226;</span></b>
            <Link class="text-white text-decoration-none" to="/signin"> To log in</Link>
          </li>
        </ul>
      </div>
     
    </div>
    
  </div>
 


  <div class="text-center p-3 text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © {new Date().getFullYear()} - All rights reserved
  </div>
  
</footer> 
        </div>
    )
}

export default Footer
