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
        else if (Roles.userIsInRole(loggedInUser, 'mediator')) {
          history.push('/mediator');
          console.log('mediator login');
        }
      }
    });
  }


  return (
    <div>

<div class="card text-center">
  <div class="row no-gutters">
    <div class="col-md-5">
        <div className="card-body bg-info h-100"><br></br>
        <Link className="h1 mt-5 mb-5 text-decoration-none text-dark" to="/home"><i className="fa fa-balance-scale"></i>Community</Link>
          <br></br><br></br><br></br>
        <h2 className="mt-5 mb-2">Log in</h2>
        <p><span className="mb-5">No account yet?</span><Link className="text-decoration-none text-success" to="/register"><b> Register!</b></Link></p>

          <Form onSubmit={handleSubmit(onSubmit)} id="register" noValidate>
         
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required mt-4" style={{textAlign:"left"}}>Email:</h5></Form.Label>
              <Form.Control type="email" placeholder="name@example.com" name="email" ref={register} className="form-control" autoComplete="off" />
              <p className="text-danger">{errors.email?.message}</p>
            </Form.Group>
            <Form.Group md="3" >
              <Form.Label><h5 className="form-label required" style={{textAlign:"left"}}>Password:</h5></Form.Label>
              <Form.Control type="password" placeholder="Tap your Password..." name="password" ref={register} className="form-control"  autoComplete="off"/>
              <p className="text-danger">{errors.password?.message}</p>
            </Form.Group>
            
            <div className="form-group mt-2" style={{textAlign:"left"}}>
                    <input
                        type="checkbox"
                        name="verif"
                        ref={register} 
                        defaultChecked={false}
                    /><label> Remember me</label>
                <p className="text-danger">{errors.verif?.message}</p>
                </div>
            <br></br>
            <div><Button type="submit" form="register">Login</Button></div>
            
            
          </Form>
          <div className="d-flex justify-content-around mt-5">
           <span>{new Date().getFullYear()} © <b>Community </b> </span>
           <Link className="text-decoration-none text-dark" to="/about"> About</Link>
           <Link className="text-decoration-none text-dark" to="/about"> CGV</Link>
           <Link className="text-decoration-none text-dark" to="/terms-and-conditions"> Contact</Link>
        </div>
        </div>

       
      
    
      
    </div>
    <div class="col-md-7">
      <div className="card-body text-center">
      <h3 className="mt-3">Welcome to Community</h3>
    <p className="text-secondary mt-2">100% online mediation and arbitration platform
allowing to solve quickly and economically
all your disputes, conflicts or disputes</p>
      <img src="./images/login.jpg" class="card-img" alt="..."/>
      </div>
     
    </div>
  </div>
    </div>

      
    </div>
  )
}

export default Login;