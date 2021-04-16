import React from 'react'

const Payment = ({setVerifff,verifff,id}) => {
    return (
        <div className="container">
            {!verifff? <div class="alert alert-warning mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-exclamation-triangle"></i>
      Please proceed to the signing of the mediation agreement.</div>
     
    </div>
  </div>
</div>:null}

{verifff?<div class="alert alert-success mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "><i class="fa fa-thumbs-up" aria-hidden="true"></i>
      Congratulations! your information has been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}

<div class="row row-deck mt-5">
  <div class="col-md-4">
    <div class="card">
      <div class="card-body"><i class="fa fa-biohazard"></i>Short content</div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">Short content</div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Payment
