import React from 'react'
import Home from '../ui/Home';
const Prices = () => {
    return (
        <div>
            <Home/>
            <div class="card mt-0 border-0 text-center mt-5" >
            <div className="card body" style={{backgroundColor:"rgba(50, 115, 220, 0.3)",alignItems:"center"}}>
                <h1 className="text mt-5 mb-4">Our mediation rates</h1>
                <h3 className="p mb-5">
                Submit your mediation file for free on our platform. Depending on the response from the defendant, you have two choices: continue the mediation process if it is accepted or receive a certificate of attempted mediation if it is refused.               </h3>
             </div>
            </div>
        </div>
    )
}

export default Prices;
