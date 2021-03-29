import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  }
})

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "password dont match"),
  password1: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "password dont match"),
});

const Signup = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {

    Meteor.call('insertAccount', data, (err) => {
      if (err) {
        console.log('Inserted Failed', err)
        notyf.error("Inserted Failed")

      }
      else {
        console.log('Inserted user with succes')
        history.push('/signin');
      }
      console.log(data);
    });
  }


  return (
    <div>
      <Link to="/" style={{color:"black"}}>←Go Home</Link>
      

      <div className="card text border-primary mb-3" style={{ maxWidth: '50%', margin: '0 auto' }}>
        <div className="card-header text-center">
          <h2>Sign Up</h2>
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
            <label className="form-check">
              <input type="checkbox" className="form-check-input" />
              <span className="form-check-label required">I agree to the Terms & Conditions</span>
            </label>
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

export default Signup;