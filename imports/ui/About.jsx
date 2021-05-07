import React from 'react'
import NavBar from '../ui/NavBar';
const About = () => {
    return (
        <div>  
            <NavBar/>
            <br></br><br></br><br></br>
            <div className="container text-center">
                <h1 className="text mt-5">About community</h1>
                <h5 className="text mt-4">The Culture of Understanding is our Priority</h5>
                <h5 className="text mt-4">Community is a Mediation and Arbitration Platform that makes justice accessible to everyone.</h5>
                <div className="row mt-5">
  <div className="col-sm-6 mt-3">
    <div className="card border-0">
      <div className="card-body">
      <img src="./images/img1.png" alt="Logo" /> 
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5">
    <div className="card border-0">
      <div className="card-body">
        <h2>The finding</h2>
        <h4 className="card-text text-secondary mt-3">The Finding
The traditional justice system is slow and expensive which generates a lot of dissatisfaction. Court processing times have increased considerably in recent years. To remedy this, it would be necessary to devote a budget that the states do not have. Governments are now promoting the use of Alternative Dispute Resolution, which allows for a faster solution than a trial.</h4>
        
      </div>
    </div>
  </div>
  
  <div className="col-sm-6 mt-5">
    <div className="card border-0">
      <div className="card-body">
        <h2>The need</h2>
        <h4 className="card-text text-secondary mt-3">Legal professionals, businesses, but also individuals all need to find a simple, fast and economical alternative to traditional legal remedies that are too often slow and expensive. Choosing a mediator or an arbitrator remains too complicated a process. The need is to find a simple, accessible and technological solution at a predictable and controlled cost.</h4>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-1">
    <div className="card border-0">
      <div className="card-body">
      <img src="./images/img2.png" alt="Logo" /> 
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5">
    <div className="card border-0">
      <div className="card-body">
      <img src="./images/img3.png" alt="Logo" /> 
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-5">
    <div className="card border-0">
      <div className="card-body">
        <h2>Our Solution</h2>
        <h4 className="card-text text-secondary mt-3">Community provides litigants with a videoconferencing Mediation and Arbitration platform allowing them to deal with all the stages of the process in a completely digital way, with the aim of finding a quick solution in the resolution of their disputes. JustiCity is a 100% online solution that guarantees the resolution of your disputes in a minimum of time thanks to a network of accredited mediators and arbitrators.</h4>
      </div>
    </div>
  </div>
</div>
            </div>
            <div class="card mt-5 border-0 text-center" style={{backgroundColor:"LightGray",alignItems:"center"}}>
            <div class="row" >
  <div class="col-sm-6">
    <div class="card" style={{backgroundColor:"LightGray"}}>
      <div class="card-body">
        <h2>Our mission</h2>
        <h5>Our mission is to offer you a simple, comprehensive solution at the best price as well as to support you throughout the Mediation and Arbitration process in order to obtain an amicable agreement or an arbitration award.</h5>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{backgroundColor:"LightGray"}}>
      <div class="card-body">
        <h2>Our ambition</h2>
        <h5>Our ambition is simple: Make justice accessible to all. We want to modernize Alternative Dispute Resolution Methods and transform the culture of trial into a culture of understanding.</h5>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    )
}

export default About
