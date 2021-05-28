import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const Contact = () => {
    return (
        <div>
            <NavBar/>
            <div className="container text-center mt-5">
            <div class="row mt-5 border-0">
  <div class="col-sm-6">
    <div class="card mt-5">
      <div class="card-body">
        <h1 className="text mt-5">Contact us</h1>
        <h5 className="text mt-3 text-secondary">Your satisfaction is at the heart of our concerns. If you have any questions or if you have a specific request, we are at your disposal to answer them. Fill out the contact form and we will get back to you as soon as possible. </h5>
        <div className="div bg-primary rounded mt-4 text-white mb-4">
        <div>
        
        <h3><i class="fa fa-envelope-square  mt-4" aria-hidden="true"></i> E-mail :<br></br>info@SpeedSolution.com</h3>
       
        <h3> <i class="fa fa-map-marker mt-4" aria-hidden="true"></i>ADRESSE :<br></br>
113 rue de la République<br></br>
13002 Marseille<br></br>
</h3>

<h3><i class="fa fa-phone-square mt-4" aria-hidden="true"></i>Tel : <br></br>0 806 07 96 96</h3><br></br>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-5">
    <div class="card mt-5">
      <div class="card-body mt-5">
       <form>
           <input type="text" placeholder="Name and UserName" className="form-control w-100 form-control-lg mt-4"></input>
           <input type="text" placeholder="Mail address" className="form-control w-100 mt-4 form-control-lg"></input>
           <input type="text" placeholder="Phone" className="form-control w-100 mt-4 form-control-lg"></input>
           <textarea class="form-control mt-4 form-control-lg" placeholder="Message" rows="5"></textarea>
            <button className="btn btn-success pull-right btn-lg mt-5">SENDING</button>
       </form>
      </div>
    </div>
  </div>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
