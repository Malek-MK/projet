import React from 'react'

const Payment = ({setVerifff,verifff,id}) => {
    return (
        <div className="container text-center">
            {!verifff? <div class="alert alert-warning mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-exclamation-triangle fa-2x"></i>
      
Félicitations! votre dossier a bien été créé et notre équipe en a été averti.
Veuillez à présent choisir le forfait de médiation le plus adapté à votre situation.</div>
     
    </div>
  </div>
</div>:null}

{verifff?<div class="alert alert-success mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "><i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i>
      Congratulations! your information has been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}

<div class="row row-deck mt-5 mb-5">
  <div class="col-md-4">
    <div class="card">
    <div className="mt-5">
    <i class="fa fa-diamond fa-5x text-primary" aria-hidden="true" ></i>
    <br></br><br></br><br></br>
    <h3>1800€ HT</h3>
    <p>Plus d’un jour
+ 600€ HT par 1/2 journée supplémentaire</p>    
<p><b>Idéal pour les litiges
supérieurs à 15 000 K€</b></p>
<p>De 9h à 12h ou de 14h à 17h​
Horaires variables selon les 1/2 journées
1h de pré-médiation par partie​​
Etude du dossier par le médiateur
Rédaction de la transaction​</p>
<div>
    <br></br>
<div class="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
  
  <label class="form-check form-switch">
    
    <span class="form-check-label"><input class="form-check-input" type="checkbox"></input>Je souhaite <br></br>partager les<br></br> frais avec</span>
  </label>
</div>
</div>
<button className="btn btn-primary pull-center mb-5 mt-2">CHOISIR</button>
    </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
    <div className="mt-5">
    <i class="fa fa-diamond fa-5x text-primary" aria-hidden="true" ></i>
    <br></br><br></br><br></br>
    <h3>1800€ HT</h3>
    <p>Plus d’un jour
+ 600€ HT par 1/2 journée supplémentaire</p>    
<p><b>Idéal pour les litiges
supérieurs à 15 000 K€</b></p>
<p>De 9h à 12h ou de 14h à 17h​
Horaires variables selon les 1/2 journées
1h de pré-médiation par partie​​
Etude du dossier par le médiateur
Rédaction de la transaction​</p>
<div>
    <br></br>
<div class="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
  
  <label class="form-check form-switch">
    
    <span class="form-check-label"><input class="form-check-input" type="checkbox"></input>Je souhaite <br></br>partager les<br></br> frais avec</span>
  </label>
</div>
</div>
<button className="btn btn-primary pull-center mb-5 mt-2">CHOISIR</button>
    </div>
    
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
    <div className="mt-5">
    <i class="fa fa-diamond fa-5x text-primary" aria-hidden="true" ></i>
    <br></br><br></br><br></br>
    <h3>1800€ HT</h3>
    <p>Plus d’un jour
+ 600€ HT par 1/2 journée supplémentaire</p>    
<p><b>Idéal pour les litiges
supérieurs à 15 000 K€</b></p>
<p>De 9h à 12h ou de 14h à 17h​
Horaires variables selon les 1/2 journées
1h de pré-médiation par partie​​
Etude du dossier par le médiateur
Rédaction de la transaction​</p>
<div>
    <br></br>
<div class="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
  
  <label class="form-check form-switch">
    
    <span class="form-check-label"><input class="form-check-input" type="checkbox"></input>Je souhaite <br></br>partager les<br></br> frais avec</span>
  </label>
</div>
</div>
<button className="btn btn-primary pull-center mb-5 mt-2">CHOISIR</button>
    </div>

     
    </div>
  </div>
</div>
        </div>
    )
}

export default Payment
