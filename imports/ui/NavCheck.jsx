import React, { useState } from 'react'

const NavCheck = () => {
    const [click,setClick]=useState({
        class1:"card bg-light",
        class2:"card-title"    
    });
    const [click1,setClick1]=useState({
        class1:"card bg-light",
        class2:"card-title"    
    });
    const [click2,setClick2]=useState({
        class1:"card bg-light",
        class2:"card-title" 
           
    });
    const onclick=()=>{
        setClick({class1:"card",
        class2:"card-title text-primary"})
        setClick1({class1:"card bg-light",
        class2:"card-title" })
        setClick2({class1:"card bg-light",
        class2:"card-title" })
    }
    const onclick1=()=>{
        setClick1({class1:"card",
        class2:"card-title text-primary"})
        setClick({class1:"card bg-light",
        class2:"card-title "})
        setClick2({class1:"card bg-light",
        class2:"card-title" })
    }
    const onclick2=()=>{
        setClick2({class1:"card",
        class2:"card-title text-primary"})
        setClick1({class1:"card bg-light",
        class2:"card-title "})
        setClick({class1:"card bg-light",
        class2:"card-title "})
    }
  
    return (
        <div>
            <div className="container text-center mt-2">
       <div class="row">
  <div class="col-sm-4">
    <div class={click.class1} onClick={onclick}>
      <div class="card-body">
      <h3><i class="fa fa-exclamation-triangle"></i></h3>
        <h5 class={click.class2}>Informations personnelles</h5>
        <p class="card-text">Remplir vos Informations personnelles</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class={click1.class1} onClick={onclick1}>
      <div class="card-body bg-light">
      <h3><i class="fa fa-exclamation-triangle"></i></h3>
        <h5 class={click1.class2}>Préférences de dates</h5>
        <p class="card-text">Choisissez vos dates</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class={click2.class1} onClick={onclick2}>
      <div class="card-body bg-light">
      <h3><i class="fa fa-exclamation-triangle"></i></h3>
        <h5 class={click2.class2}>Convention de médiation</h5>
        <p class="card-text">Signez la convention</p>
      </div>
    </div>
  </div>
</div>
       </div>
        </div>
    )
}

export default NavCheck
