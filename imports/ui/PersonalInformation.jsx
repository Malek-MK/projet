import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notyf } from 'notyf'; 
import 'notyf/notyf.min.css';
import Schema from '../Validation/YupProfileMediator';
const AvatarIcon='./assets/modify.png';
const CloseIcon='./assets/x.svg';

const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top', 
  }
})

const PersonalInformation = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(Schema)
    })
    const onSubmit=(data)=>{
        if(data){
          Meteor.call('insertPersInfo',{data,id},(err)=>{
            if(err){
              notyf.error('Inserted Personal Information Failed')
              console.log(err)
            }else{
              notyf.success('Inserted Personal Information with success')
            }
          })
        }
      }
      const [image,setImage]=useState('')
      const [isUploaded,setIsUploaded]=useState(false)
      function HandleImageChange(e){
        if(e.target.files && e.target.files[0]){
          let reader=new FileReader()
          reader.onload=function(e){
            setImage(e.target.result)
            setIsUploaded(true)
          }

          reader.readAsDataURL(e.target.files[0])
        }
      }

    return (
        <div class="col-sm-9">
            <div className="card">
            
            <div class="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>Personal informations</b>
                <br></br>
                <small className="text-secondary">Update your personal information</small>
                <button className="btn btn-info pull-right">Save</button>
                </div> 
               </div>
            </div>
            
            <div class="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p><i>Change Your Avatar</i></p>
                  <div className="image-upload mb-2" style={{display:"flex",flexWrap:"wrap"}}>
                   {
                     !isUploaded? (
                       <>
                    <label htmlFor="upload-input">
                    <img src={AvatarIcon} alt="" draggable={false} style={{width:150,height:150,cursor:"pointer"}}/> 
                  <p className="text-secondary mt-1">Click to upload your avatar 😎 :(Allowed file types: png, jpg, jpeg).</p>
                    </label>
                    <input 
                        type="file" 
                        id="upload-input" 
                        accept=".jpg,.jpeg,.png,.gif" 
                        style={{display:"none"}}
                        onChange={HandleImageChange} 
                    ></input>
                       </>
                     ):
                     (
                      <div style={{position:"relative",cursor:"pointer"}}>
                        <img 
                          src={CloseIcon}
                          alt="CloseIcon"
                          style={{position:"absolute",zIndex:"10",right:"5px",top:"10px",cursor:"pointer",backgroundColor:"#000",borderRadius:"15px"}}
                          onClick={()=>{
                            setIsUploaded(false)
                            setImage(null)
                          }}/>
                      <img src={image} alt="uploaded-img" id="uploaded-image" style={{width:150,height:150,objectFit:"cover",borderRadius:"20px"}} draggable={false}/>
                      </div>
                      )
                   }
                    
                  </div>
                <div className="row mb-3">
          <div className="col">
            <label>First name</label>
            <input type="text" name="firstname" ref={register} className="form-control bg-light" placeholder="Tap your first name"></input>
            <p className="text-danger">{errors.firstname?.message}</p>
          </div>
          <div className="col">
            <label>last name</label>
            <input type="text" name="lastname" ref={register} className="form-control bg-light" placeholder="Tap your last name"></input>
             <p className="text-danger">{errors.lastname?.message}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label>E-mail</label>
            <input type="email" name="email" ref={register} className="form-control bg-light" placeholder="Tap your E-mail"></input>
             <p className="text-danger">{errors.email?.message}</p>
          </div>
          <div className="col">
            <label>Phone</label>
            <input type="number" name="tel" ref={register} className="form-control bg-light" placeholder="Tap your phone"></input>
            <p className="text-danger">{errors.tel?.message}</p>
          </div>
        </div>
        <label >Registered Address</label>
        <input type="text" name="adresse" ref={register} className="form-control mb-4 bg-light" placeholder="Tap your registered address"></input>
        <p className="text-danger">{errors.adresse?.message}</p>
        <div className="row mb-3 ">
          <div className="col">
            <label>Postal code</label>
            <input type="number" name="codepos" ref={register} className="form-control bg-light" placeholder="Tap your postal code"></input>
            <p className="text-danger">{errors.codepos?.message}</p>
          </div>
          <div className="col">
            <label>City</label>
            <input type="text" name="ville" ref={register} className="form-control bg-light" placeholder="Tap your city"></input>
            <p className="text-danger">{errors.ville?.message}</p>
          </div>
        </div>
        <div className="form-group mb-4">
          <label >Country</label>
          <select name="country" ref={register} className="form-control bg-light" >
            <option value="Tunisia" >Tunisia</option>
            <option value="France" >France</option>
          </select>
          <p className="text-danger">{errors.country?.message}</p>
        </div>
                </form>
            </div>
            <div class="card-footer">
            <button type="submit" className="btn btn-info pull-right mt-3 mb-3">Save</button>
            </div>
            </div>
        </div>
    )
}

export default PersonalInformation
