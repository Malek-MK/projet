import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupPayment';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top', 
  }
})

const Payment = ({setVerifff,verifff,id,paym}) => {
  console.log("payment :",paym)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
  var num=1.5;
  var tot=1800;
  var tv=360;
  var tt=2160;
  const [show,setShow]=useState(false);
  const [choix,setChoix]=useState();
  const [count,setCount]=useState(num);
  const [total,setTotal]=useState(tot);
  const [tva,setTva]=useState(tv);
  const [ttc,setTtc]=useState(tt);
  const increment=()=>{
    setCount(count+1)
    setTotal(total+600);
    setTva(tva+120);
    setTtc(total+tva+720);
  }
  const desincrement=()=>{
    if(count>=2.5){
      setCount(count-1)
      setTotal(total-600);
      setTva(tva-120);
      setTtc(total+tva-720);
    }
  }
  const click1=()=>{
    setShow(true);
    setChoix(1);
  }
  const click2=()=>{
    setShow(true);
    setChoix(2);
  }
  const click3=()=>{
    setShow(true);
    setChoix(3);
  }
  const onSubmit=(data)=>{
    if(data){
      Meteor.call('insertPayment',{data,id},(err)=>{
        if(err){
          notyf.error('Payment failed')
          console.log(err)
        }else{
          notyf.success('Payment success')
          setVerifff(true)
        }
      })
    }
  }
    return (
        <div className="container text-center mt-2 mb-5">
            {!verifff&&!paym? <div class="alert alert-warning mt-5" role="alert">
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

{verifff||paym?<div class="alert alert-success mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "><i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
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
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={click1}>CHOISIR</button>
        </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card ">
        <div className="mt-5 ">
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
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={click2}>CHOISIR</button>
        </div>
        
        </div>
      </div>
      <div class="col-md-4">
        <div class="card ">
        <div className="mt-5 ">
        <i class="fa fa-diamond fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>{total}<sup>€ HT</sup></h3>
        <p className="text-secondary">Plus d’un jour<br></br><small>+ 600€ HT par 1/2 journée supplémentaire</small></p>   
    
    <input type="number" min="1.5" max="100" value={count}></input>
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
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={click3}>CHOISIR</button>
        </div>
    
         
        </div>
      </div>
    </div>
      :null}
      {show? 
      <div>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div class="row row-deck mt-5 mb-5" >
  <div class="col-md-6 ">
    <div class="card border-0 ">
      <div class="card-body border-end">
      Vous avez décidé de prendre la totalité des frais de médiation à<br></br>
      votre seule charge. Veuillez noter que vous ne serez débité du<br></br>
      montant ci-dessous que lorsque<b>Herrera and Curry Co </b>aura<br></br>
      accepté la médiation.
      {choix==1? 
      <div>
      <br></br><br></br>
      <h5><b>Récapitulatif de votre commande :</b></h5><br></br>
      <div className="d-flex justify-content-between">
        <p>1/2 journée(HT)</p>
        <p>750.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>150.00€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>900.00€</p>
      </div>
    </div>
      :null}
      {choix==2? 
      <div>
      <br></br><br></br>
      <h5><b>Récapitulatif de votre commande :</b></h5><br></br>
      <div className="d-flex justify-content-between">
        <p>1 journée(HT)</p>
        <p>1200.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>240.00€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>1440.00€</p>
      </div>
    </div>
      :null}       
      {choix==3? 
      <div>
      <br></br><br></br>
      <h5><b>Récapitulatif de votre commande :</b></h5><br></br>
      <div className="d-flex justify-content-between">
        <p>Plus d’un jour(HT)</p>
        <p>{total}.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>{tva}.00€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>{ttc}.00€</p>
      </div>
    </div>
      :null}
    </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card border-0">
      <div class="card-body border-start">
        <h5><b><i class="fa fa-lock text-secondary" aria-hidden="true"></i> Pré-autorisation sécurisée par carte bancaire</b></h5>
        <div>
        <i class="fa fa-cc-mastercard text-danger fa-3x " style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-credit-card text-primary fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-cc-paypal text-info fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-cc-visa text-warning fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i class="fa fa-cc-amex text-success fa-3x" aria-hidden="true"></i>
        </div>
      
      <br></br>
  <div class="form-group">
  <label >Nom organisation pour la facturation :</label>
    <input type="text" class="form-control" placeholder="Votre nom ou celui de votre organisation pour la facturation" name="nom" ref={register}></input>
    <p className="text-danger">{errors.nom?.message}</p>
    
    <label>Adresse :</label>
    <input type="text" class="form-control" placeholder="Adresse" name="adresse" ref={register}></input>
    <p className="text-danger">{errors.adresse?.message}</p>    
  </div>
 
  <div class="row">
    <div class="col">
      <label>Zip Code :</label>
      <input type="number" class="form-control" placeholder="Zip code" maxlength="5" name="codepos" ref={register}></input>
      <p className="text-danger">{errors.codepos?.message}</p>    
    </div>
    
    <div class="col">
      <label>City :</label>
      <input type="text" class="form-control" placeholder="Ville" name="ville" ref={register}></input>
      <p className="text-danger">{errors.ville?.message}</p>    
    </div>
  </div>
  
  <div class="form-group">
    <label>Numéro de la carte :</label>
    <input type="number" class="form-control" placeholder="1234 1234 1234 1234" name="numcart" ref={register}></input>
    <p className="text-danger">{errors.numcart?.message}</p>    
  </div>
  
  <div class="row">
    <div class="col">
      <label>Expiration :</label>
      <input type="text" class="form-control" placeholder="Expiration" name="exp" ref={register}></input>
      <p className="text-danger">{errors.exp?.message}</p>    
    </div>
    
    <div class="col">
      <label>CVC :</label>
      <input type="number" class="form-control" placeholder="CVC"  name="cvc" ref={register}></input>
      <p className="text-danger">{errors.cvc?.message}</p>    
    </div>
  </div>
  <br></br>
  <div class="d-flex justify-content-left">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault" name="condgen" ref={register}></input>
  <label class="form-check-label" htmlFor="flexCheckDefault">
  J'ai lu et j'accepte <span className="text-primary">les conditions générales</span>.
  </label>
</div>
<p className="text-danger">{errors.condgen?.message}</p>    
<div class="d-flex justify-content-left">
  <input class="form-check-input" type="checkbox"  id="flexCheckChecked" name="cartconf" ref={register}></input>
  <label class="form-check-label" htmlFor="flexCheckChecked">
  J'ai lu et j'accepte <span className="text-primary"> la charte de confidentialité</span>.
  </label>
</div>
<p className="text-danger">{errors.cartconf?.message}</p>    
</div>
    </div>
  </div>
</div>  
      
       <div>
       <hr></hr>
        <button className="btn btn-secondary  pull-left mt-3 mb-5" onClick={()=>setShow(false)}>COISIR UN <br></br> AUTRE FORFAIT</button>
        {!paym?<button type="submit" className="btn btn-primary  pull-right mt-3 mb-5">VALIDER LA PRE-AUTORISATION</button>:null}
       </div>
       </form>
      </div>
      </div>
      :null}
        </div>
    )
}

export default Payment
