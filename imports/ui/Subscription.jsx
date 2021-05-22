import React from 'react'
import HeaderMediator from '../ui/HeaderMediator';
const Subscription = () => {
    return (
        <div>
            <HeaderMediator/>
           <div className="container mt-5">
           <div className="card-title mb-5">
                    <h3 className="card-label">List of mediation files</h3>
                    <span className="d-block text-muted pt-2 font-size-sm">
                        Consult and edit my mediation files</span>
            </div>
            <div className="card bg-primary">
                <h4 className="text-white text-center mt-4">Our subscription plans</h4>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button className="btn btn-light text-secondary btn-lg" style={{marginRight:10}}>Monthly</button>
                    <button className="btn btn-light text-secondary btn-lg">Annuals</button>
                </div>
                
            </div>
            </div> 
        </div>
    )
}

export default Subscription
