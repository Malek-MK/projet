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
            <Link class="text-white text-decoration-none">Link 1</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 2</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 3</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 4</Link>
          </li>
        </ul>
      </div>
   
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Links</h5>

        <ul class="list-unstyled">
          <li>
            <Link class="text-white text-decoration-none">Link 1</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 2</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 3</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 4</Link>
          </li>
        </ul>
      </div>
  
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <Link class="text-white text-decoration-none">Link 1</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 2</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 3</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 4</Link>
          </li>
        </ul>
      </div>
    
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Links</h5>

        <ul class="list-unstyled">
          <li>
            <Link class="text-white text-decoration-none">Link 1</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 2</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 3</Link>
          </li>
          <li>
            <Link class="text-white text-decoration-none">Link 4</Link>
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
