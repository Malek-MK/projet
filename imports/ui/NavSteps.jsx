import React, { useState } from 'react';

const NavSteps = ({setStep}) => {
const [view,setView]=useState("step-item text-decoration-none active");  
const [view1,setView1]=useState("step-item text-decoration-none ");  
const [view2,setView2]=useState("step-item text-decoration-none ");  
const [view3,setView3]=useState("step-item text-decoration-none ");  

  const handleClick1 = () => {
    setStep(0)
    setView("step-item text-decoration-none active")
    setView1("step-item text-decoration-none ")
    setView2("step-item text-decoration-none")

  }
  const handleClick2 = () => {
    setStep(1)
    setView("step-item text-decoration-none ")
    setView1("step-item text-decoration-none active")
    setView2("step-item text-decoration-none")


  }
  const handleClick3 = () => {
    setStep(2)
    setView("step-item text-decoration-none ")
    setView1("step-item text-decoration-none ")
    setView2("step-item text-decoration-none active")    
  }
  const handleClick4 = () => {
    setStep(3)
    setView("step-item text-decoration-none ")
    setView1("step-item text-decoration-none ")
    setView2("step-item text-decoration-none ")  
    setView3("step-item text-decoration-none active")    
  
  }

  return (
    <div className="steps mb-5">
      <a className={view} onClick={handleClick1}>
        Step 1
    </a>
      <a className={view1} onClick={handleClick2}>
        Step 2
    </a>
      <a className={view2} onClick={handleClick3}>
        Step 3
    </a>
    <a className={view3} onClick={handleClick4}>
        Step 4
    </a>

    </div>
  )
}

export default NavSteps
