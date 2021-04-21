import React, { useEffect, useState } from 'react'
import PrefDate from '../ui/PrefDate';
import ConvMedia from '../ui/ConvMedia';
import clsx from 'clsx';
import UpMediation from '../ui/UpMediation';
import Header from '../ui/Header';
import Payment from '../ui/Payment';
import { useParams } from 'react-router';
import { Meteor } from 'meteor/meteor';
const NavCheck = () => {
  const [dates,setDates]=useState([]);
  const [verif,setVerif]=useState(false);
  const [veriff,setVeriff]=useState(false);
  const [verifff,setVerifff]=useState(false);
  const [data,setData]=useState()
  const [showw,setShow]=useState()
  console.log("data :",data)
  const {id} = useParams()
  const fetchDate=()=>{
    Meteor.call('showDate',id,(err,res) => {
       setDates(res.Time)
    });
  }
 
  const fetchConv=()=>{
    Meteor.call('showConvMed',id,(err,res)=>{
        setShow(res.verif)
    })
}
  const fetchMedia=()=>{
    console.log("hello")
    Meteor.call('showMedia',id,(err,res)=>{
      console.log("res :",res)
      setData(res);
    })
  }
  useEffect(() => {
   fetchDate()
  }, []);
  useEffect(() => {
   fetchMedia()
  }, []);
  useEffect(() => {
    fetchConv
  }, []);
    const [click,setClick]=useState({
        class1:"card bg-light",
        class2:"card-title",
        show:true   
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
    const [click3,setClick3]=useState({
      class1:"card bg-light",
      class2:"card-title",
      show:false   
         
  });
    const onclick=()=>{
        setClick({class1:"card",show:true,
        class2:"card-title text-primary"})
        setClick1({class1:"card bg-light",
        class2:"card-title" ,show:false})
        setClick2({class1:"card bg-light",
        class2:"card-title" ,show:false})
        setClick3({class1:"card bg-light",
        class2:"card-title" ,show:false})
    }
    const onclick1=()=>{
        setClick1({class1:"card",
        class2:"card-title text-primary",show:true})
        setClick({class1:"card bg-light",
        class2:"card-title",show:false})
        setClick2({class1:"card bg-light",
        class2:"card-title" ,show:false})
        setClick3({class1:"card bg-light",
        class2:"card-title" ,show:false})
    }
    const onclick2=()=>{
        setClick2({class1:"card",
        class2:"card-title text-primary",show:true})
        setClick1({class1:"card bg-light",
        class2:"card-title ",show:false})
        setClick({class1:"card bg-light",
        class2:"card-title ",show:false})
        setClick3({class1:"card bg-light",
        class2:"card-title" ,show:false})
    }

    const onclick3=()=>{
      setClick3({class1:"card",
      class2:"card-title text-primary",show:true})
      setClick1({class1:"card bg-light",
      class2:"card-title ",show:false})
      setClick({class1:"card bg-light",
      class2:"card-title ",show:false})
      setClick2({class1:"card bg-light",
      class2:"card-title" ,show:false})
  }
  
    return (
        <div>
          <Header/>
            <div className="container text-center  mt-2">
       <div class="row ">
  <div class="col-sm-3 text-success  bg-success">
    <div class={click.class1} onClick={onclick}>
      <div class="card-body">
      <h3><i class="fa fa-check" ></i></h3>
        <h5 class={click.class2}>Personal informations</h5>
        <p class="card-text">Verified Information!</p>
      </div>
    </div> 
  </div>
  <div class={clsx(verifff?"col-sm-3 text-success  bg-success":"col-sm-3")} >
    <div class={click3.class1} onClick={onclick3}>
      <div class="card-body ">
      <h3><i class={clsx(verifff?"fa fa-check":"fa fa-exclamation-triangle")} ></i></h3>
        <h5 class={click3.class2}>Mediation payment</h5>
        <p class="card-text">Choose the package</p>
      </div>
    </div> 
  </div>
  <div class={clsx(dates||verif?"col-sm-3 text-success  bg-success":"col-sm-3")}>
    <div class={click1.class1} onClick={onclick1}>
      <div class="card-body">
      <h3><i class={clsx(dates||verif?"fa fa-check":"fa fa-exclamation-triangle")}></i></h3>
        <h5 class={click1.class2}>Date preferences</h5>
        <p class="card-text">Choose your dates</p>
      </div>
    </div>
  </div>
  <div class={clsx(showw?"col-sm-3 text-success  bg-success":"col-sm-3")} >
    <div class={click2.class1} onClick={onclick2}>
      <div class="card-body ">
      <h3><i class={clsx(showw?"fa fa-check":"fa fa-exclamation-triangle")} ></i></h3>
        <h5 class={click2.class2}>Mediation agreement</h5>
        <p class="card-text">Sign the convention</p>
      </div>
    </div>
  </div>
</div>
       </div>
       {click1.show? <PrefDate setVerif={setVerif} verif={verif} dates={dates} id={id} fetch={fetchDate}/>:null}
       {click2.show?<ConvMedia showw={showw} id={id} fetch={fetchConv}/> :null}
        {click.show && data? <UpMediation datta={data} show={click.show}/>:null}
        {click3.show?<Payment setVerifff={setVerifff} id={id}/> :null}
        </div>
    )
}

export default NavCheck
