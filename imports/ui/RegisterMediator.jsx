import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Recaptcha from 'react-recaptcha';
import Schema from '../Validation/YupRegister';
 

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
})

const RegisterMediator = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
const [verif,setVerif]=useState(false);
  const onSubmit = (data) => {
    if(verif){
      Meteor.call('insertMediator', data, (err) => {
        if (err) {
          console.log('Inserted Failed', err)
          notyf.error("Inserted Failed")
        }
        else {
          console.log('Inserted mediator with succes')
          history.push('/signin');
          setVerif(false)
        } 
       
      });
    }else{
      notyf.error("Please verify that you are a human, Not a Robot")
    }
    
  }

  const recaptchaLoaded=()=>{
    console.log("recaptcha successfuly loaded")
  }

  const verifyCallback=(response)=>{
    if(response){
      setVerif(true);
    }
  }

  return (
    <div>
      <div className="card ">
  <div className="row no-gutters">
    <div className="col-md-5">
        <div className="card-body bg-info h-100"><br></br>
    <div className="text-center">
    <Link className="h1 mt-4 text-decoration-none text-dark" to="/home"><i className="fa fa-balance-scale text-center"></i>SpeedSolution</Link>
    </div>
          <br></br><br></br>
        <h2 className="mt-2 mb-2 text-center">Register</h2>
        <p className="text-center"><span className="mb-5">If you already have an account ?</span><Link className="text-decoration-none text-success" to="/signin"><b> Log In</b></Link></p>

        <Form onSubmit={handleSubmit(onSubmit)} id="register" noValidate>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required mt-2">UserName:</h5></Form.Label>
              <Form.Control type="text"  placeholder="Tap your UserName..." name="name" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.name?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required mt-2">Email:</h5></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.email?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required mt-2">Password:</h5></Form.Label>
              <Form.Control type="password" placeholder="Tap your Password..." name="password" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.password?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required mt-2">Verify Password:</h5></Form.Label>
              <Form.Control type="password" placeholder="Tap your Password..." name="password1" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.password1?.message}</p>
            </Form.Group>
            <div className="form-group mb-2 mt-2 text-left">
                    <input
                        type="checkbox"
                        name="verif"
                        ref={register} 
                        defaultChecked={false}
                    />
                    <label> I have read and I accept 
                      <Link className="text-decoration-none" to="/terms-and-conditions" target="_blank"> general conditions</Link>
                    </label>
                <p className="text-danger">{errors.verif?.message}</p>
                <input
                        type="checkbox"
                        name="veriff"
                        ref={register} 
                        defaultChecked={false}
                    />
                    <label> I have read and I accept 
                      <Link className="text-decoration-none" to="/privacy-policy" target="_blank"> the confidentiality charter</Link>
                    </label>
                <p className="text-danger">{errors.veriff?.message}</p>
                </div>

           <div className="d-flex justify-content-center mt-4">
           <Recaptcha
              sitekey="6LfO46YaAAAAAFjOeItzZwanytiACcJJI3Mwzrs4"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifyCallback}
            />
           </div>
            

            <br></br>
            <div className="d-flex justify-content-center"><Button type="submit" form="register">Create Account</Button>
            </div>
          </Form>
          <br></br>
          <div className="d-flex justify-content-around mt-5">
          <span>{new Date().getFullYear()} © <b>SpeedSolution </b> </span>
           <Link className="text-decoration-none text-dark" to="/about"> About</Link>
           <Link className="text-decoration-none text-dark" to="/terms-and-conditions"> CGV</Link>
           <Link className="text-decoration-none text-dark" to="/contact"> Contact</Link>        </div>
        </div>

       
      
    
      
    </div>
    <div className="col-md-7">
      <div className="card-body h-100 text-center">
      <h3 className="mt-3">Welcome to SpeedSolution</h3>
    <p className="text-secondary mt-2">You are a Mediator and wish to use our platform
to carry out your own mediations online
and / or simply wish to submit your application
in order to be part of the SpeedSolution Mediators team?</p>
<p className="text-secondary"><b>Nothing could be simpler, register and let yourself be guided!</b></p>
      <img src="./images/register.jpg" className="card-img" alt="..." style={{widht:200,height:700}}/>
      </div>
     
    </div>
  </div>
    </div>
    </div>
  )
}

export default RegisterMediator;

