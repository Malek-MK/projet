import React from 'react'
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { useHistory } from 'react-router-dom'
import { Roles } from 'meteor/alanning:roles';
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
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const Login = () => {

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data)
    Meteor.loginWithPassword(data.email, data.password, (err) => {
      if (err) {
        console.log("Loginin failed");
        notyf.error("Email or password incorrect")
      }
      else {
        var loggedInUser = Meteor.userId();
        if (Roles.userIsInRole(loggedInUser, 'admin')) {
          history.push('/user');
          console.log('admin login');
        }
        else if (Roles.userIsInRole(loggedInUser, 'user')) {
          history.push('/admin');
          console.log('user login');
        }
      }
    });
  }


  return (
    <div>

      <Link to="/" style={{ color: "black" }}>←Go Home</Link>
      <div className="card text border-primary mb-3" style={{ maxWidth: '50%', margin: '0 auto' }}>
        <div className="card-header text-center">
          <h2>Sign In</h2>
        </div>
        <div className="card-body">

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

        <div className="card-footer text-muted text-center">
          © {new Date().getFullYear()} - All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Login;