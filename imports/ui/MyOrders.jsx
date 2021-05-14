import React from 'react'

const MyOrders = () => {
    return (
        <div class="col-sm-9">
            <div className="card h-100">
            <div class="d-flex align-items-center">
               <div className="container mt-3">
               <div>
                <b>My orders</b>
                <br></br>
                <small className="text-secondary">List of all orders</small>
                </div> 
               </div>
            </div>
            <div className="card-body">
            <p>No orders have been placed.</p>
            </div>
            <div className="card-footer">

            </div>
            </div>
        </div>
    )
}

export default MyOrders
