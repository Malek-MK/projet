import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfile';
import { Meteor } from 'meteor/meteor';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top', 
  } 
})


const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(Schema)
})
const onSubmit=(data)=>{
    if(data){
        Meteor.call('insertContact', {data}, (err) => {
            if (err) {
              console.log('Inserted failed')
              notyf.error("Inserted failed")
            }
            else {
              console.log('Inserted with success')
              setShow(false);
              notyf.success("Inserted with success")
            }
          });
    }
  }
    return (
        <div>
            <NavBar/>
            <div className="container text-center mt-5">
            <div class="row mt-5 border-0">
  <div class="col-sm-6">
    <div class="card mt-5">
      <div class="card-body">
        <h1 className="text mt-5">Contact us</h1>
        <h5 className="text mt-3 text-secondary">Your satisfaction is at the heart of our concerns. If you have any questions or if you have a specific request, we are at your disposal to answer them. Fill out the contact form and we will get back to you as soon as possible. </h5>
        <div className="div bg-primary rounded mt-4 text-white mb-4">
        <div>
        
        <h3><i class="fa fa-envelope-square  mt-4" aria-hidden="true"></i> E-mail :<br></br>info@SpeedSolution.com</h3>
       
        <h3> <i class="fa fa-map-marker mt-4" aria-hidden="true"></i>ADRESSE :<br></br>
113 rue de la République<br></br>
13002 Marseille<br></br>
</h3>

<h3><i class="fa fa-phone-square mt-4" aria-hidden="true"></i>Tel : <br></br>0 806 07 96 96</h3><br></br>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 mt-5">
    <div class="card mt-5">
      <div class="card-body mt-5">
       <form onSubmit={handleSubmit(onSubmit)}>
           <input type="text" name="firstname" placeholder="Name and UserName" className="form-control w-100 form-control-lg mt-4" ref={register}></input>
           <p className="text-danger">{errors.firstname?.message}</p>
           <input type="email" name="email" placeholder="Mail address" className="form-control w-100 mt-4 form-control-lg" ref={register}></input>
           <p className="text-danger">{errors.email?.message}</p>
           <input type="phone" name="tel" placeholder="Phone" className="form-control w-100 mt-4 form-control-lg" ref={register}></input>
           <p className="text-danger">{errors.tel?.message}</p>
           <textarea name="description" className="form-control mt-4 form-control-lg" placeholder="Message" rows="5" ref={register}></textarea>
           <p className="text-danger">{errors.description?.message}</p>
            <button className="btn btn-success pull-right btn-lg mt-5" type="submit">SENDING</button>
       </form>
      </div>
    </div>
  </div>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
