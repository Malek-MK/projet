import React,{useState} from 'react'
import HeaderMediator from '../ui/HeaderMediator';
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


const Subscription = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
    const [click1,setClick1]=useState({
        class:"btn btn-primary text-white btn-lg",
        show:true,     
    });
    const [click2,setClick2]=useState({
        class:"btn btn-light text-secondary btn-lg",
        show:false   
    });
    const onclick1=()=>{
        setClick1({
        class:"btn btn-primary text-white btn-lg",
        show:true,  
        })
        setClick2({
        class:"btn btn-light text-secondary btn-lg",
        show:false,  
        })
    }
    const onclick2=()=>{
        setClick2({
            class:"btn btn-primary text-white btn-lg",
            show:true,  
            })
            setClick1({
            class:"btn btn-light text-secondary btn-lg",
            show:false,  
            })
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
    const [show,setShow]=useState(false)
    const [choix,setChoix]=useState()

    const onClick1=()=>{
      setShow(true);
      setChoix(1);
    }
    const onClick2=()=>{
      setShow(true);
      setChoix(2);
    }
    const onClick3=()=>{
      setShow(true);
      setChoix(3);
    }
    const onClick4=()=>{
      setShow(true);
      setChoix(4);
    }
    const onClick5=()=>{
      setShow(true);
      setChoix(5);
    }
    const onClick6=()=>{
      setShow(true);
      setChoix(6);
    }
    return (
        <div>
            <HeaderMediator/>
            <br></br><br></br><br></br>
           <div className="container mt-5">
           <div className="card-title mb-5">
                    <h3 className="card-label">Mediator subscriptions</h3>
                    <span className="d-block text-muted pt-2 font-size-sm">
                    Create or modify your subscription</span>
            </div>
            {!show? 
            <>
            <div className="card bg-info">
                <h4 className="text-white text-center mt-4">Our subscription plans</h4>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button className={click1.class} onClick={onclick1} style={{marginRight:10}}>Monthly</button>
                    <button className={click2.class} onClick={onclick2}>Annuals</button>
                </div>
            </div>
            {click1.show? 
            <div class="row bg-info mb-3 text-center">
            <div class="col-sm-4">
              <div class="card border-0 mb-3">
                <div class="card-body">
                <img src="../images/img10.png" alt="" /> 
                <div>
                    <button className="btn btn-primary btn-lg mt-3 mb-4" onClick={onClick1}>TO CHOOSE</button>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img11.png" alt="" /> 
                <button className="btn btn-primary btn-lg mt-3 mb-4" onClick={onClick2}>TO CHOOSE</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img12.png" alt="" /> 
                <button className="btn btn-primary btn-lg mt-3 mb-4" onClick={onClick3}>TO CHOOSE</button>
                </div>
              </div>
            </div>
          </div>
            :null}
            {click2.show? 
            <div class="row bg-info mb-3 text-center">
            <div class="col-sm-4">
              <div class="card border-0 mb-3">
                <div class="card-body">
                <img src="../images/img13.png" alt="" /> 
                <div>
                    <button className="btn btn-primary btn-lg mt-5 mb-3" onClick={onClick4}>TO CHOOSE</button>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img14.png" alt="" /> 
                <button className="btn btn-primary btn-lg  mb-3" onClick={onClick5}>TO CHOOSE</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img15.png" alt="" /> 
                <button className="btn btn-primary btn-lg mt-5 mb-3" onClick={onClick6}>TO CHOOSE</button>
                </div>
              </div>
            </div>
          </div>
            :null}
            </>
            :null}
            {show? 
      <div>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row row-deck mt-5 mb-5" >
  <div className="col-md-6 ">
    <div className="card border-0 ">
      <div className="card-body border-end">
      {choix==1? 
      <div>
      <br></br>

      
        <h5 class="text-uppercase">Standard Formula</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <span> Unlimited access to the mediation tool</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Standard features</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> 3 mediations per month</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> 1 mediator 🧑</span>
          </li>
        </ul>
     
        <h5 className="mt-4">Summary of your order :</h5>
        <p className="text-primary">
        30 day free trial!<br></br>
        Your credit card will only be debited from<br></br>
        06/23/2021. Until then you can cancel your<br></br>
        subscription at any time directly in<br></br>
        your customer area.
        </p>
        <br></br>
      <div className="d-flex justify-content-between">
        <p>"Standard Monthly" subscription<br></br>(1 user)</p>
        <p>49.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>9.80€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>58.80€</p>
      </div>
    </div>
      :null}
      {choix==2? 
      <div>
      <br></br>

      
        <h5 class="text-uppercase">Premium Formula</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <span> Unlimited access to the mediation tool</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Advanced features ⚡</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Unlimited number of mediations ∞</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> 1 mediator 🧑</span>
          </li>
        </ul>
     
        <h5 className="mt-4">Summary of your order :</h5>
        <p className="text-primary">
        30 day free trial!<br></br>
        Your credit card will only be debited from<br></br>
        06/23/2021. Until then you can cancel your<br></br>
        subscription at any time directly in<br></br>
        your customer area.
        </p>
        <br></br>
      <div className="d-flex justify-content-between">
        <p>"Standard Monthly" subscription<br></br>(1 user)</p>
        <p>99.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>19.80€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>118.80€</p>
      </div>
    </div>
      :null}       
      {choix==3? 
      <div>
      <br></br>

      
        <h5 class="text-uppercase">Corporate Formula</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <span> Unlimited access to the mediation tool</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Advanced features ⚡</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Unlimited number of mediations ∞</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> delegated mediator spaces 🧑🧑🧑</span>
          </li>
        </ul>
     
        <h5 className="mt-4">Summary of your order :</h5>
        <p className="text-primary">
        30 day free trial!<br></br>
        Your credit card will only be debited from<br></br>
        06/23/2021. Until then you can cancel your<br></br>
        subscription at any time directly in<br></br>
        your customer area.
        </p>
        <br></br>
      <div className="d-flex justify-content-between">
        <p>"Standard Monthly" subscription<br></br>(3 user)</p>
        <p>199.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>39.80€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>238.80€</p>
      </div>
    </div>
      :null}
      {choix==4? 
      <div>
      <br></br>

      
        <h5 class="text-uppercase">Standard Formula</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <span> Unlimited access to the mediation tool</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Standard features</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> 3 mediations per month</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> 1 mediator 🧑</span>
          </li>
        </ul>
     
        <h5 className="mt-4">Summary of your order :</h5>
        <p className="text-primary">
        30 day free trial!<br></br>
        Your credit card will only be debited from<br></br>
        06/23/2021. Until then you can cancel your<br></br>
        subscription at any time directly in<br></br>
        your customer area.
        </p>
        <br></br>
      <div className="d-flex justify-content-between">
        <p>"Annual Standard" subscription<br></br>(1 user)</p>
        <p>490.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>98.00€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>588.00€</p>
      </div>
    </div>
      :null} 
      {choix==5? 
      <div>
      <br></br>

      
        <h5 class="text-uppercase">Premium Formula</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <span> Unlimited access to the mediation tool</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Advanced features ⚡</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Unlimited number of mediations ∞</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> 1 mediator 🧑</span>
          </li>
        </ul>
     
        <h5 className="mt-4">Summary of your order :</h5>
        <p className="text-primary">
        30 day free trial!<br></br>
        Your credit card will only be debited from<br></br>
        06/23/2021. Until then you can cancel your<br></br>
        subscription at any time directly in<br></br>
        your customer area.
        </p>
        <br></br>
      <div className="d-flex justify-content-between">
        <p>"Annual Premium" subscription<br></br>(1 user)</p>
        <p>990.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>198.00€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>1188.00€</p>
      </div>
    </div>
      :null}  
      {choix==6? 
      <div>
      <br></br>

      
        <h5 class="text-uppercase">Corporate Formula</h5>

        <ul class="list-unstyled mb-0">
          <li>
          <b><span>&#8226;</span></b>
            <span> Unlimited access to the mediation tool</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Advanced features ⚡</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> Unlimited number of mediations ∞</span>
          </li>
          <li>
          <b><span>&#8226;</span></b>
          <span> delegated mediator spaces 🧑🧑🧑</span>
          </li>
        </ul>
     
        <h5 className="mt-4">Summary of your order :</h5>
        <p className="text-primary">
        30 day free trial!<br></br>
        Your credit card will only be debited from<br></br>
        06/23/2021. Until then you can cancel your<br></br>
        subscription at any time directly in<br></br>
        your customer area.
        </p>
        <br></br>
      <div className="d-flex justify-content-between">
        <p>"Annual Corporate" subscription<br></br>(3 user)</p>
        <p>1190.00€</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>TVA 20%</p>
        <p>398.00€</p>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-between">
        <p><b>Total TTC</b></p>
        <p>2388.80€</p>
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
      <small className="text-primary">Your name or the name of your organization for invoicing *</small>
      <div className="input-group mb-2 mt-2">
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
      <input type="number" className="form-control" placeholder="Zip code" maxlength="5" name="codepos" ref={register}></input>
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
<div className="d-flex justify-content-center">
{choix==1? <button type="submit" className="btn btn-primary mt-4 mb-5" style={{marginRight:15}}>Pay 58.80 €</button>:null}
{choix==2? <button type="submit" className="btn btn-primary mt-4 mb-5" style={{marginRight:15}}>Pay 118.80 €</button>:null}
{choix==3? <button type="submit" className="btn btn-primary mt-4 mb-5" style={{marginRight:15}}>Pay 238.80 €</button>:null}
{choix==4? <button type="submit" className="btn btn-primary mt-4 mb-5" style={{marginRight:15}}>Pay 588.00 €</button>:null}
{choix==5? <button type="submit" className="btn btn-primary mt-4 mb-5" style={{marginRight:15}}>Pay 1188.00 €</button>:null}
{choix==6? <button type="submit" className="btn btn-primary mt-4 mb-5" style={{marginRight:15}}>Pay 2388.00 €</button>:null}
<button className="btn btn-secondary mt-4 mb-5" onClick={()=>setShow(false)}>CHOOSE ONE OTHER PACKAGE</button>
</div>
</div>
    </div>
  </div>
</div>  
      
       <div>
       <hr></hr>
        
       </div>
       </form>
      </div>
      </div>
      :null}
      <Footerr/>
            </div> 
        </div>
    )
}

export default Subscription
