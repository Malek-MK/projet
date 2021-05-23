import React,{useState} from 'react'
import HeaderMediator from '../ui/HeaderMediator';
const Subscription = () => {
    const [click1,setClick1]=useState({
        class:"btn btn-primary text-white btn-lg",
        show:true,     
    });
    const [click2,setClick2]=useState({
        class:"btn btn-light text-secondary btn-lg",
        show:false   
    });
    const onclick1=()=>{
        setClick1({
        class:"btn btn-primary text-white btn-lg",
        show:true,  
        })
        setClick2({
        class:"btn btn-light text-secondary btn-lg",
        show:false,  
        })
    }
    const onclick2=()=>{
        setClick2({
            class:"btn btn-primary text-white btn-lg",
            show:true,  
            })
            setClick1({
            class:"btn btn-light text-secondary btn-lg",
            show:false,  
            })
    }
    return (
        <div>
            <HeaderMediator/>
           <div className="container mt-5">
           <div className="card-title mb-5">
                    <h3 className="card-label">List of mediation files</h3>
                    <span className="d-block text-muted pt-2 font-size-sm">
                        Consult and edit my mediation files</span>
            </div>
            <div className="card bg-info">
                <h4 className="text-white text-center mt-4">Our subscription plans</h4>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button className={click1.class} onClick={onclick1} style={{marginRight:10}}>Monthly</button>
                    <button className={click2.class} onClick={onclick2}>Annuals</button>
                </div>
            </div>
            {click1.show? 
            <div class="row bg-info mb-3">
            <div class="col-sm-4">
              <div class="card border-0 mb-3">
                <div class="card-body">
                <img src="../images/img10.png" alt="" /> 
                <div>
                    <button className="btn btn-primary btn-lg mt-3 mb-4">TO CHOOSE</button>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img11.png" alt="" /> 
                <button className="btn btn-primary btn-lg mt-3 mb-4">TO CHOOSE</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img12.png" alt="" /> 
                <button className="btn btn-primary btn-lg mt-3 mb-4">TO CHOOSE</button>
                </div>
              </div>
            </div>
          </div>
            :null}
            {click2.show? 
            <div class="row bg-info mb-3">
            <div class="col-sm-4">
              <div class="card border-0 mb-3">
                <div class="card-body">
                <img src="../images/img13.png" alt="" /> 
                <div>
                    <button className="btn btn-primary btn-lg mt-5 mb-3">TO CHOOSE</button>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img14.png" alt="" /> 
                <button className="btn btn-primary btn-lg  mb-3">TO CHOOSE</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card border-0">
                <div class="card-body">
                <img src="../images/img15.png" alt="" /> 
                <button className="btn btn-primary btn-lg mt-5 mb-3">TO CHOOSE</button>
                </div>
              </div>
            </div>
          </div>
            :null}
            </div> 
        </div>
    )
}

export default Subscription
