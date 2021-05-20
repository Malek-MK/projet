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

const Signup = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
const [verif,setVerif]=useState(false);
  const onSubmit = (data) => {
    if(verif){
      Meteor.call('insertAccount', data, (err) => {
        if (err) {
          console.log('Inserted Failed', err)
          notyf.error("Inserted Failed")
        }
        else {
          console.log('Inserted user with succes')
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
      <div class="card text-center">
  <div class="row no-gutters">
    <div class="col-md-5">
        <div className="card-body bg-info h-100">
        <Link className="h1 mt-4 mb-5 text-decoration-none text-dark" to="/home"><i className="fa fa-balance-scale"></i>Community</Link>
          <br></br><br></br>
        <h2 className="mt-2 mb-2">Register</h2>
        <p><span className="mb-5">If you already have an account ?</span><Link to="/signin">Log In!</Link></p>

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
            <div className="form-group mb-2 mt-2">
                    <input
                        type="checkbox"
                        name="verif"
                        ref={register} 
                        defaultChecked={false}
                    /><label> I agree to the Terms & Conditions</label>
                <p className="text-danger">{errors.verif?.message}</p>
                </div>

            <Recaptcha
              sitekey="6LfO46YaAAAAAFjOeItzZwanytiACcJJI3Mwzrs4"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={verifyCallback}

            />
            

            <br></br>
            <div><Button type="submit" form="register">Create Account</Button>
            </div>
          </Form>
          <br></br><br></br><br></br><br></br>
          <div className="mt-5">
          © {new Date().getFullYear()} - All rights reserved
        </div>
        </div>

       
      
    
      
    </div>
    <div class="col-md-7">
      <div className="card-body ">
      <h3 className="mt-3">Welcome to Community</h3>
    <p className="text-secondary mt-2">100% online mediation and arbitration platform
allowing to solve quickly and economically
all your disputes, conflicts or disputes</p>
      <img src="./images/register.jpg" class="card-img" alt="..."/>
      </div>
     
    </div>
  </div>
    </div>
    </div>
  )
}

export default Signup;

