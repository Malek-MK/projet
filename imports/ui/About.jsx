import React from 'react'
import Home from '../ui/Home';
//import img1 from '../assets/images/img1.png'
const About = () => {
    return (
        <div> 
            <Home/>
            <div className="container text-center">
                <h1 className="text mt-5">About community</h1>
                <h5 className="text mt-4">La Culture de l’Entente est notre Priorité</h5>
                <h5 className="text mt-4">JustiCity est une Plateforme de Médiation et d’Arbitrage qui rend la justice accessible à tous.</h5>
                <div class="row mt-5">
  <div class="col-sm-6 mt-5">
    <div class="card border-0">
      <div class="card-body">
       
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-5">
    <div class="card border-0">
      <div class="card-body">
        <h2>Le Constat</h2>
        <p class="card-text text-secondary mt-3">The Finding
The traditional justice system is slow and expensive which generates a lot of dissatisfaction. Court processing times have increased considerably in recent years. To remedy this, it would be necessary to devote a budget that the states do not have. Governments are now promoting the use of Alternative Dispute Resolution, which allows for a faster solution than a trial.</p>
        
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    )
}

export default About
