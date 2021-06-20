import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupPayment';
import { Link } from 'react-router-dom';
import Footerr from './Footerr';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top', 
  }
})

const Payment = ({setVerifff,verifff,id,paym,datta}) => {
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
      Meteor.call('insertPayment',{data,payee:true,id},(err)=>{
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
            {!verifff&&!paym? <div className="alert alert-warning mt-5" role="alert">
  <div className="d-flex">
    <div>
    
    </div>
    <div>
      <div className="alert-title "> <i className="fa fa-exclamation-triangle fa-2x"></i> Now please choose the dispute package that best suits your situation.</div>
     
    </div>
  </div>
</div>:null}

{verifff||paym?<div className="alert alert-success mt-5" role="alert">
  <div className="d-flex">
    <div>
    
    </div>
    <div>
      <div className="alert-title "><i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
      Congratulations! your information has been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}

      {!show? 
      <div className="row row-deck mt-5 mb-5">
      <div className="col-md-4">
        <div className="card">
        <div className="mt-5">
        <i className="fa fa-houzz fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>750<sup>€ HT</sup></h3>
        <p className="text-secondary">1/2 day</p> <br></br><br></br> <br></br>  
    <p><b>Ideal for small disputes<br></br>
    less than 5,000 €</b></p>
    <p>9 a.m. to 12 p.m. or 2 p.m. to 5 p.m.<br></br>
    1/2h of pre-mediation per game<br></br>
    Study of the case by the mediator<br></br>
    Drafting of the transaction</p><br></br>
    <div>
        <br></br>
    <div className="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
      
      <label className="form-check form-switch">
        
        <span className="form-check-label"><input className="form-check-input" type="checkbox"></input>I wish <br></br>share them<br></br> fresh with</span>
      </label>
    </div>
    </div>
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={click1}>TO CHOOSE</button>
        </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card ">
        <div className="mt-5 ">
        <i className="fa fa-rebel fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>1200<sup>€ HT</sup></h3>
        <p className="text-secondary">1 day</p> <br></br><br></br>   <br></br>
    <p><b>Ideal for medium disputes<br></br>
    from 5,000 to 15,000 K €</b></p>
    <p>9 a.m. to 12 p.m. or 2 p.m. to 5 p.m.<br></br>
    1 hour of pre-mediation per game<br></br>
    Study of the case by the mediator<br></br>
    Drafting of the transaction</p><br></br>
    <div>
        <br></br>
    <div className="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
      
      <label className="form-check form-switch">
        
        <span className="form-check-label"><input className="form-check-input" type="checkbox"></input>I wish <br></br>share them<br></br> fresh with</span>
      </label>
    </div>
    </div>
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={click2}>TO CHOOSE</button>
        </div>
        
        </div>
      </div>
      <div className="col-md-4">
        <div className="card ">
        <div className="mt-5 ">
        <i className="fa fa-diamond fa-5x text-primary" aria-hidden="true" ></i>
        <br></br><br></br><br></br>
        <h3>{total}<sup>€ HT</sup></h3>
        <p className="text-secondary">More than a day<br></br><small>+ 600 € HT per additional 1/2 day</small></p>   
    
    <input type="number" min="1.5" max="100" value={count}></input>
    <button className="btn bg-light border btn-sm">day(s)</button>
    <button className="btn btn-info btn-sm border" onClick={desincrement}><b>-</b></button>
    <button type="submit" className="btn btn-info btn-sm border" onClick={increment}><b>+</b></button>
    <br></br><br></br><p><b>Ideal for large disputes<br></br>
    over 15,000 K €</b></p>
    <p>9 a.m. to 12 p.m. or 2 p.m. to 5 p.m.<br></br>
    Variable hours according to the 1/2 days<br></br>
    1 hour of pre-mediation per game<br></br>
    Study of the case by the mediator<br></br>
    Drafting of the transaction</p><br></br>
    <div>
        
    <div className="d-flex justify-content-center mb-3 mt-2 " style={{display:"flex"}}>
      
      <label className="form-check form-switch">
        
        <span className="form-check-label"><input className="form-check-input" type="checkbox"></input>I wish <br></br>share them<br></br> fresh with</span>
      </label>
    </div>
    </div>
    <button className="btn btn-primary pull-center mb-5 mt-2" onClick={click3}>TO CHOOSE</button>
        </div>
    
         
        </div>
      </div>
    </div>
      :null}
      {show? 
      <div>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row row-deck mt-5 mb-5" >
  <div className="col-md-6 ">
    <div className="card border-0 ">
      <div className="card-body border-end">
      You have decided to take all of the mediation costs at<br></br>
      your only charge. Please note that you will not be<br></br> charged for the
      amount below that when <br></br><b>" {datta.prerepleg} "</b> and <b>" {datta.prerepleg1} "</b>  <br></br>
      will have accepted mediation.
      {choix==1? 
      <div>
      <br></br><br></br>
      <h5><b>Summary of your order :</b></h5><br></br>
      <div className="d-flex justify-content-between">
        <p>1/2 day(HT)</p>
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
      <h5><b>Summary of your order :</b></h5><br></br>
      <div className="d-flex justify-content-between">
        <p>1 day(HT)</p>
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
      <h5><b>Summary of your order :</b></h5><br></br>
      <div className="d-flex justify-content-between">
        <p>More than a day(HT)</p>
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
  <div className="col-md-6">
    <div className="card border-0">
      <div className="card-body border-start">
        <h5><b><i className="fa fa-lock text-secondary" aria-hidden="true"></i> Secure pre-authorization by credit card</b></h5>
        <div>
        <i className="fa fa-cc-mastercard text-danger fa-3x " style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i className="fa fa-credit-card text-primary fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i className="fa fa-cc-paypal text-info fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i className="fa fa-cc-visa text-warning fa-3x" style={{marginRight:"5px"}} aria-hidden="true"></i>
        <i className="fa fa-cc-amex text-success fa-3x" aria-hidden="true"></i>
        </div>
      
      <br></br>
      <div className="form-group">
      <label className="sr-only">Organization name for billing :</label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">@</div>
        </div>
        <input type="text" className="form-control" placeholder="Your name or the name of your organization for invoicing" name="nom" ref={register}></input>
        <p className="text-danger">{errors.nom?.message}</p>
      </div>
    </div>
  <div className="form-group">
    <label>Address :</label>
    <input type="text" className="form-control" placeholder="Address" name="adresse" ref={register}></input>
    <p className="text-danger">{errors.adresse?.message}</p>    
  </div>
 
  <div className="row">
    <div className="col">
      <label>Zip Code :</label>
      <input type="number" className="form-control" placeholder="Zip code" name="codepos" ref={register}></input>
      <p className="text-danger">{errors.codepos?.message}</p>    
    </div>
    
    <div className="col">
      <label>City :</label>
      <input type="text" className="form-control" placeholder="City" name="ville" ref={register}></input>
      <p className="text-danger">{errors.ville?.message}</p>    
    </div>
  </div>
  
  <div className="form-group">
    <label>Cart number :</label>
    <input type="number" className="form-control" placeholder="1234 1234 1234 1234" name="numcart" ref={register}></input>
    <p className="text-danger">{errors.numcart?.message}</p>    
  </div>
  
  <div className="row">
    <div className="col">
      <label>Expiry :</label>
      <input type="text" className="form-control" placeholder="Expiry" name="exp" ref={register}></input>
      <p className="text-danger">{errors.exp?.message}</p>    
    </div>
    
    <div className="col">
      <label>CVC :</label>
      <input type="number" className="form-control" placeholder="CVC"  name="cvc" ref={register}></input>
      <p className="text-danger">{errors.cvc?.message}</p>    
    </div>
  </div>
  <br></br>
  <div className="d-flex justify-content-left">
  <input className="form-check-input" type="checkbox"  id="flexCheckDefault" name="condgen" ref={register}></input>
  <label className="form-check-label" htmlFor="flexCheckDefault"> I have read and I accept <span className="text-primary">
  <Link className="text-decoration-none" to="/terms-and-conditions" target="_blank"> general conditions</Link>
    </span>.
  </label>
</div>
<p className="text-danger">{errors.condgen?.message}</p>    
<div className="d-flex justify-content-left">
  <input className="form-check-input" type="checkbox"  id="flexCheckChecked" name="cartconf" ref={register}></input>
  <label className="form-check-label" htmlFor="flexCheckChecked"> I have read and I accept <span className="text-primary"> 
  <Link className="text-decoration-none" to="/privacy-policy" target="_blank"> the confidentiality charter</Link></span>.
  </label>
</div>
<p className="text-danger">{errors.cartconf?.message}</p>    
</div>
    </div>
  </div>
</div>  
       <div>
       <hr></hr>
        <button className="btn btn-secondary  pull-left mt-3 mb-5" onClick={()=>setShow(false)}>CHOOSE ONE <br></br> OTHER PACKAGE</button>
        {!paym?<button type="submit" className="btn btn-primary  pull-right mt-3 mb-5">VALIDATE THE PRE-AUTHORIZATION</button>:null}
       </div>
       </form>
      </div>
      </div>
      :null}
            <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute', bottom: '50px', left: '1220px' }} href="#" role="button"><h5> <i className="fa fa-arrow-up"></i></h5></a>
        </div>
       
    )
}

export default Payment
