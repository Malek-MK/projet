import React, { useState } from 'react'

const Payment = ({setVerifff,verifff,id}) => {
  var num=1.5;
  var tot=1800;
  const [show,setShow]=useState(false);
  const [count,setCount]=useState(num);
  const [total,setTotal]=useState(tot);
  const increment=()=>{
    setCount(count+1)
    setTotal(total+600);
  }
  const desincrement=()=>{
    if(count>=2.5){
      setCount(count-1)
      setTotal(total-600);
    }
  }
    return (
        <div className="container text-center mt-2 mb-5">
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

      {!show? 
      <div class="row row-deck mt-5 mb-5">
      <div class="col-md-4">
        <div class="card">
        <div className="mt-5">
        <i class="fa fa-houzz fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>750<sup>€ HT</sup></h3>
        <p className="text-secondary">1/2 journée</p> <br></br><br></br> <br></br>  
    <p><b>Idéal pour les petits litiges<br></br>
    de moins de 5 000 €</b></p>
    <p>De 9h à 12h ou de 14h à 17h​<br></br>
    1/2h de pré-médiation par partie​​<br></br>
    Etude du dossier par le médiateur<br></br>
    Rédaction de la transaction</p><br></br>
    <div>
        <br></br>
    <div class="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
      
      <label class="form-check form-switch">
        
        <span class="form-check-label"><input class="form-check-input" type="checkbox"></input>Je souhaite <br></br>partager les<br></br> frais avec</span>
      </label>
    </div>
    </div>
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={()=>setShow(true)}>CHOISIR</button>
        </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
        <div className="mt-5">
        <i class="fa fa-rebel fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>1200<sup>€ HT</sup></h3>
        <p className="text-secondary">1 journée</p> <br></br><br></br>   <br></br>
    <p><b>Idéal pour les petits litiges<br></br>
    de 5 000 à 15 000 K€</b></p>
    <p>De 9h à 12h ou de 14h à 17h​<br></br>
    1h de pré-médiation par partie​​<br></br>
    Etude du dossier par le médiateur<br></br>
    Rédaction de la transaction</p><br></br>
    <div>
        <br></br>
    <div class="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
      
      <label class="form-check form-switch">
        
        <span class="form-check-label"><input class="form-check-input" type="checkbox"></input>Je souhaite <br></br>partager les<br></br> frais avec</span>
      </label>
    </div>
    </div>
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={()=>setShow(true)}>CHOISIR</button>
        </div>
        
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
        <div className="mt-5">
        <i class="fa fa-diamond fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>{total}<sup>€ HT</sup></h3>
        <p className="text-secondary">Plus d’un jour<br></br><small>+ 600€ HT par 1/2 journée supplémentaire</small></p>   
    
    <input type="number" min="1.5" max="100" defaultValue={num} value={count}></input>
    <button className="btn bg-light border btn-sm">jour(s)</button>
    <button className="btn btn-info btn-sm border" onClick={desincrement}><b>-</b></button>
    <button type="submit" className="btn btn-info btn-sm border" onClick={increment}><b>+</b></button>
    <br></br><br></br><p><b>Idéal pour les litiges<br></br>
    supérieurs à 15 000 K€</b></p>
    <p>De 9h à 12h ou de 14h à 17h​<br></br>
    Horaires variables selon les 1/2 journées<br></br>
    1h de pré-médiation par partie​​<br></br>
    Etude du dossier par le médiateur<br></br>
    Rédaction de la transaction</p><br></br>
    <div>
        
    <div class="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
      
      <label class="form-check form-switch">
        
        <span class="form-check-label"><input class="form-check-input" type="checkbox"></input>Je souhaite <br></br>partager les<br></br> frais avec</span>
      </label>
    </div>
    </div>
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={()=>setShow(true)}>CHOISIR</button>
        </div>
    
         
        </div>
      </div>
    </div>
      :null}
      {show? 
      <div>
      <div className="container">
      <div class="row row-deck mt-5 mb-5" >
  <div class="col-md-6 ">
    <div class="card border-0">
      <div class="card-body">
      Vous avez décidé de prendre la totalité des frais de médiation à<br></br>
      votre seule charge. Veuillez noter que vous ne serez débité du<br></br>
      montant ci-dessous que lorsque<b>Herrera and Curry Co </b>aura<br></br>
      accepté la médiation.       
      </div><br></br>
      <div>
        <h5><b>Récapitulatif de votre commande :</b></h5><br></br>
        <div className="d-flex justify-content-between">
          <p>Plus d’un jour(HT)</p>
          <p>2400.00€</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>TVA 20%</p>
          <p>480.00€</p>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <p><b>Total TTC</b></p>
          <p>2880.00€</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card border-0">
      <div class="card-body">
        <h5><b><i class="fa fa-lock text-secondary" aria-hidden="true"></i> Pré-autorisation sécurisée par carte bancaire</b></h5>
        <div>
        <i class="fa fa-cc-mastercard text-danger fa-3x " style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-credit-card text-primary fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-cc-paypal text-info fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-cc-visa text-warning fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-cc-amex text-success fa-3x" aria-hidden="true"></i>

        </div>
      </div>
      <form>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Example input"></input>
    <br></br>
    <input type="text" class="form-control" placeholder="Example input"></input>
  </div>
  <br></br>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <br></br>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"></input>
    </div>
  </div>
  <br></br>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Another input"></input>
  </div>
  <br></br>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"></input>
    </div>
    <br></br>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"></input>
    </div>
  </div>
  
</form>
    </div>
  </div>
</div>  
      </div>
       <div>
       <hr></hr>
        <button className="btn btn-light text-secondary  pull-left mt-3 mb-5">COISIR UN <br></br> AUTRE FORFAIT</button>
        <button className="btn btn-primary  pull-right mt-3 mb-5">VALIDER LA PRE-AUTORISATION</button>
       </div>
      </div>
      :null}
        </div>
    )
}

export default Payment
