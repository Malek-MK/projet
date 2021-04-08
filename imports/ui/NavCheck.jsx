import React, { useState } from 'react'
import PrefDate from '../ui/PrefDate';
import ConvMedia from '../ui/ConvMedia';
const NavCheck = () => {
    const [click,setClick]=useState({
        class1:"card bg-light",
        show:false   
    });
    const [click1,setClick1]=useState({
        class1:"card bg-light",
        class2:"card-title",
        show:false      
    });
    const [click2,setClick2]=useState({
        class1:"card bg-light",
        class2:"card-title",
        show:false   
           
    });
    const onclick=()=>{
        setClick({class1:"card",show:true})
        setClick1({class1:"card bg-light",
        class2:"card-title" ,show:false})
        setClick2({class1:"card bg-light",
        class2:"card-title" ,show:false})

    }
    const onclick1=()=>{
        setClick1({class1:"card",
        class2:"card-title text-primary",show:true})
        setClick({class1:"card bg-light",show:false})
        setClick2({class1:"card bg-light",
        class2:"card-title" ,show:false})
    }
    const onclick2=()=>{
        setClick2({class1:"card",
        class2:"card-title text-primary",show:true})
        setClick1({class1:"card bg-light",
        class2:"card-title ",show:false})
        setClick({class1:"card bg-light",show:false})
    }
  
    return (
        <div>
            <div className="container text-center  mt-2">
       <div class="row ">
  <div class="col-sm-4 text-success  bg-success">
    <div class={click.class1} onClick={onclick}>
      <div class="card-body">
      <h3><i class="fa fa-check" aria-hidden="true"></i></h3>
        <h5 class="card-title">Personal informations</h5>
        <p class="card-text">Verified Information!</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class={click1.class1} onClick={onclick1}>
      <div class="card-body">
      <h3><i class="fa fa-exclamation-triangle"></i></h3>
        <h5 class={click1.class2}>Date preferences</h5>
        <p class="card-text">Choose your dates</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class={click2.class1} onClick={onclick2}>
      <div class="card-body ">
      <h3><i class="fa fa-exclamation-triangle"></i></h3>
        <h5 class={click2.class2}>Mediation agreement</h5>
        <p class="card-text">Sign the convention</p>
      </div>
    </div>
  </div>
</div>
       </div>
       {click1.show? <PrefDate/>:null}
       {click2.show?<ConvMedia/> :null}
        </div>
    )
}

export default NavCheck
