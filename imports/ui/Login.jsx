import React from 'react'
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import Button from 'react-bootstrap/Button';
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
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const Login = () => {

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    Meteor.loginWithPassword(data.email, data.password, (err) => {
      if (err) {
        console.log("Loginin failed");
        notyf.error("Email or password incorrect")
      }
      else {
        var loggedInUser = Meteor.userId();
        if (Roles.userIsInRole(loggedInUser, 'admin')) {
          history.push('/admin');
          console.log('admin login');
        }
        else if (Roles.userIsInRole(loggedInUser, 'user')) {
          history.push('/mediations');
          console.log('user login');
        }
        else if (Roles.userIsInRole(loggedInUser, 'arbitrator')) {
          history.push('/arbitrator');
          console.log('arbitrator login');
        }
      }
    });
  }


  return (
    <div>

<div class="card text-center">
  <div class="row no-gutters">
    <div class="col-md-5">
    
      <div class="card-body">
        
        <div className="card-body">
        <h2>Sign In</h2>
          <Form onSubmit={handleSubmit(onSubmit)} id="register" noValidate>
         
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required" >Email:</h5></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" ref={register} className="form-control" autoComplete="off" />
              <p className="text-danger">{errors.email?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required">Password:</h5></Form.Label>
              <Form.Control type="password" placeholder="Tap your Password..." name="password" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.password?.message}</p>
            </Form.Group>
            
            
            <br></br>
            <div><Button type="submit" form="register">Login</Button></div>
            <br></br>
            <Link to="/signup">You have an account?</Link>
            
          </Form>
        </div>

        <div className="text-muted">
          © {new Date().getFullYear()} - All rights reserved
        </div>
      
      </div>
      
    </div>
    <div class="col-md-7">
      <img src="./images/login.jpg" class="card-img" alt="..."/>
    </div>
  </div>
    </div>

      
    </div>
  )
}

export default Login;