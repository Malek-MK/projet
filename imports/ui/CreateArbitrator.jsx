import React, { useState } from 'react'
import HeaderAdmin from '../ui/HeaderAdmin';
import Form from 'react-bootstrap/Form';
import Schema from '../Validation/YupRegister';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom'
import Recaptcha from 'react-recaptcha';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    }
  })

const CreateArbitrator = () => {
    const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
  });
const [verif,setVerif]=useState(false);
  const onSubmit = (data) => {
    if(verif){
      Meteor.call('insertArbitrator', data, (err) => {
        if (err) {
          console.log('Inserted Failed', err)
          notyf.error("Inserted Failed")
        }
        else {
          console.log('Inserted arbitrator with succes')
          history.push('/manageArbitrators');
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
          <HeaderAdmin/>  
          <div className="card text border-primary mb-3" style={{ maxWidth: '50%', margin: '0 auto' }}>
        <div className="card-header text-center">
          <h2>Register Arbitrator</h2>
        </div>
        <div>
         

        </div>

        <div className="card-body">
        
          <Form onSubmit={handleSubmit(onSubmit)} id="register" noValidate>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required">UserName:</h5></Form.Label>
              <Form.Control type="text"  placeholder="Tap your UserName..." name="name" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.name?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required">Email:</h5></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.email?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required">Password:</h5></Form.Label>
              <Form.Control type="password" placeholder="Tap your Password..." name="password" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.password?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required">Verify Password:</h5></Form.Label>
              <Form.Control type="password" placeholder="Tap your Password..." name="password1" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.password1?.message}</p>
            </Form.Group>
            <div className="form-group mb-2">
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
          <br></br>
              If you already have an account ? <Link to="/signin">Signin</Link>
        </div>

        <div className="card-footer text-muted text-center">
          © {new Date().getFullYear()} - All rights reserved
  </div>
      </div>
        </div>
    )
}

export default CreateArbitrator