import React  from 'react'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import jsPDF from 'jspdf';
import { Meteor } from 'meteor/meteor';
const notyf = new Notyf({
    duration: 2000,
    position: {
        x: 'center',
        y: 'top',
    }
}) 

const ConvMedia = ({showw,id,setVeriff,veriff,datta}) => {
    const onclick=()=>{
        Meteor.call('insertConvMedia',{id,valid:true},(err)=>{
            if(err){
                notyf.error("Convention Failed")
                console.log(err)
            }else{
                notyf.success("Convention with success")
                setVeriff(true)
            }
        })
    }
   
    const generatePDF=()=>{
        var doc=new jsPDF('p', 'mm', [900, 900]);
        doc.html(document.querySelector("#content"),{
          callback:function(pdf){
              pdf.save("Convention.pdf");
          }  
        });
    }
   

    return (
        <div>
           <div class="container ">
          {!showw&&!veriff? <div class="alert alert-warning mt-5" role="alert">
  <div class="d-flex">
    <div>
     
    </div>
    <div>
      <div class="alert-title "> <i class="fa fa-exclamation-triangle fa-2x"></i>
      Please proceed to the signing of the mediation agreement.</div>
     
    </div>
  </div>
</div>:null}

{showw||veriff?<div class="alert alert-success mt-5" role="alert">
  <div class="d-flex">
    <div>
    
    </div>
    <div>
      <div class="alert-title "><i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
      Congratulations! your information has been saved and our team has been notified.</div>
     
    </div>
  </div>
</div>:null}

               <div class="kt-forfait kt-portlet text-align-justify " style={{height: "842px",
        overflow: "auto",
        border: "1px solid grey",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
        width: "900px",
        marginTop: "20px"}}>
                   <div class="kt-portlet__body" id="content">
                      
                       <div class="kt-section">
                       <div class="kt-section__content">
                           <div class="form-group form-group-last " >
                               <div class="row">
                                   <div class="col-lg-12 text-center">
                                   <p className="text pull-right "><strong className="text-primary">Id Mediation: </strong> {datta._id}</p>
                                      <br></br><br></br>
                                       <h2>MEDIATION AGREEMENT</h2>
                                       </div>
                                       </div>
                                       <br></br><br></br>
                                       <div class="row">
                                           <div class="col-lg-12">
                                               
                                           <p><strong>BETWEEN</strong></p>
                                                <p >{datta.nomsoc}, {datta.adresse}, {datta.codepos} {' '} {datta.ville} {' '} {datta.infoA}.</p> 
                                                <p><strong>AND</strong></p> 
                                                <p>{datta.nomsoc1}, {datta.adresse1}, {datta.codepos1} {' '} {datta.ville1} {' '} {datta.infoB}</p> 
                                                <p class="text-right">(hereinafter referred to as "The Parties")</p>
                                                 <p><strong>AND</strong></p>
                                                  <p >Community, Khezama Sousse</p> 
                                                  <p class="text-right">(hereinafter referred to as "The Mediation Platform")</p>
                                                   <p><strong>ET</strong></p> <p >THE MEDIATOR, designated in Annex A.</p>
                                                    <p class="text-right">(hereinafter referred to as "The Mediator")</p>
                                                    
                                                     <p>The undersigned parties hereby initiate a mediation process through the Community Remote Mediation Platform. The Community mediation platform will provide technical support for it. Community designates the mediator who will sign this agreement in Appendix A. This mediation process is governed by the following rules:</p>
                                                      
                                                      <h5> 1. ROLE, RESPONSIBILITIES AND POWERS OF THE MEDIATOR</h5><br></br>
                                                       <ul class="convention">
                                                           <li> a) The mediator is an impartial third party who does not represent any of the parties involved in the conflict, he only has an obligation of means.</li>
                                                            <li> b) The role of the mediator is to help the parties to negotiate a voluntary settlement of the dispute by creating conditions which allow them (i) to convey their vision of the situation, (ii) to communicate with each other on their respective difficulties and their expectations, (iii) to seek a range of solutions to the disclosed expectations and difficulties, (iv) to negotiate effectively, honestly and fairly, (v) to reach an agreement that meets their needs and expectations</li> 
                                                            <li> c) The mediator does not give legal advice and is not obliged to assert or protect the legal rights of either party, to raise issues that the parties do not themselves raise or to decide who should participate in the mediation provided for by this request. The mediator is not bound to ensure the execution or the validity of any settlement agreement that may be reached by the parties.</li> 
                                                            <li> d) The mediator is responsible for the conduct of the mediation process. As such, he may, if and when he deems it appropriate, conduct an interview involving all the parties (plenary) and / or through individual interviews with the parties (caucus or aside). He can also end the mediation at any time if he considers that no agreement can be reached. He manages and organizes the meeting agenda.</li></ul> 
                                                             <h5> 2. ROLES, RESPONSIBILITIES AND POWERS OF THE PARTIES</h5><br></br>
                                                              <ul class="convention">
                                                                  <li> a) The parties voluntarily agree to mediation with a view to settling their dispute. The signing of this request demonstrates the intention of the parties to conduct the mediation in a frank and honest manner and to give serious attention to the resolution of the dispute.</li> 
                                                                  <li> b) The parties acknowledge that they have the capacity and all power to enter into and conclude an agreement on their own behalf or on behalf of the entity that the signatories represent.</li>
                                                                   <li> c) The parties recognize that the primary responsibility for resolving the dispute rests with the parties and not with the mediator.</li> 
                                                            <li> d) The parties agree to disclose any relevant or necessary financial information regarding the matters being mediated, as well as to have the capacity to reach an agreement.</li> 
                                                           <li> e) The parties can ask the mediator for a private meeting (caucus or private party). The information then transmitted will be treated confidentially by the mediator, unless the party who disclosed it expressly allows the mediator to communicate it to the other parties.</li>
                                                            <li> f) The parties undertake to register and create an account on the Community.com platform and to carry out the mediation in a private, calm place which can ensure the confidentiality of the exchanges, have a correct outfit and have an internet connection. stable, non-public and with a sufficient speed of at least 8Mb / s to ensure exchanges by videoconference. As such, the parties undertake to use video conferencing and have a webcam of at least 720p.</li>
                                                            </ul> 
                                                            
                                                            <h5> 3. CONFIDENTIALITY</h5> <br></br>
                                                            <ul class="convention">
                                                                <li> a) Meetings between the mediator and the Parties remain confidential and without prejudice to the rights of the Parties. The parties undertake not to record them by any means whatsoever.</li>
                                                                 <li> b) The mediator, the Parties, their representatives and advisers, the experts and any other Persons present at the mediation shall not disclose to third parties any information or any documents which they obtain during the mediation, except when required by law.</li> 
                                                                 <li> c) The mediator may not be called as a witness and the Parties agree not to compel the mediator to disclose any records, reports or other documents or to testify about mediation in arbitration or court proceedings, except where required by law.</li> 
                                                                 <li> d) The mediator will not report on discussions between the Parties. All oral or written statements made and all settlement discussions conducted during the mediation will be deemed to be without prejudice to the rights of the Parties and may not be disclosed except where required by law.</li> 
                                                                 <li> e) Anyone who is not a signatory to this agreement who attends the mediation must sign a confidentiality agreement</li>
                                                                 </ul> 
                                                                
                                                                 <h5> 4. LIMITATION PERIODS</h5><br></br>
                                                                  <p>The limitation periods are in no way suspended or interrupted by mediation. If the legal process has been initiated, it is incumbent on the parties to suspend certain time limits in order to complete the mediation process and obtain the necessary authorizations from the court, if necessary.</p> 
                                                                  
                                                                   <h5> 5. FEES AND EXPENSES</h5><br></br>
                                                                    <p>The price of mediation is 750 € plus taxes for a ½ day, 1200 € for a day and 600 € for an additional ½ day. Mediation hours are 9 a.m. to 12 p.m. and 2 p.m. to 5 p.m. This rate is only for videoconference mediation. Each ½ day started is invoiced. For in-person mediation, this rate is increased by 50%. This rate does not take into account any disbursements and fees that may be required.</p>
                                                                     <p>It is agreed between the parties that the payment of these fees and costs are the responsibility of Party A unless Party B agrees to pay half of them.</p> 
                                                               
                                                                     <h5>6. AGREEMENT</h5><br></br>
                                                                     
                                                                 <p>If the Parties succeed in settling their dispute during mediation, a document setting out the terms of the agreement will be drawn up and signed by the Parties or may be drawn up by the mediator, or their lawyers at their request.</p>
                                                                 
                                                                  </div>
                                                                  </div> 
                                                                  <div class="row">
                                                                      <div class="col-lg-12">
                                                                          <h5>IN WITNESS WHEREOF the parties have signed this agreement,</h5> 
                                                                        
                                                                          <div class="row">
                                                                              <div class="col-lg-6"></div> 
                                                                              <div class="col-lg-6"></div>
                                                                              </div>
                                                                               
                                                                               <div class="row">
                                                                                   <div class="col-lg-6">
                                                                                       
										Community
                                    								</div>
                                                                    </div></div></div>
                                                                     <hr></hr>
                                                                     <div class="row">
                                                                         <div class="col-lg-12 text-center">
                                                                             <h3>ANNEX A</h3>
                                                                             </div></div>
                                                                             <br></br>
                                                                              <div class="row">
                                                                                  <div class="col-lg-12">
                                                                                      <h5>The mediator appointed for this mediation is:</h5>
                                                                                       
                                                                                        <h5>First name : </h5> 
                                                                                        <h5>Last name : </h5>
                                                                                         <h5>Address : </h5>
                                                                                         
                                                                                          <h5>Who accepts the mediation mandate as well as its terms of application set out above.</h5>
                                                                                          
                                ........, Mediator
                            						</div></div></div></div></div></div></div></div> 
     <div class="d-flex justify-content-center mt-3 mb-5">
        <button onClick={generatePDF} class="btn btn-info  font-weight-bold btn-lg" style={{marginRight:"10px"}}> 
        <i class="fa fa-download" aria-hidden="true"></i>
        Download in pdf
        </button>
        {!showw?<button type="submit" class="btn btn-primary  font-weight-bold btn-lg"  onClick={onclick}> Validate the agreement</button>:null}
        </div>
        <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute', bottom: '50px', left: '1220px' }} href="#" role="button"><h5> <i className="fa fa-arrow-up"></i></h5></a>
        </div>
    )
}

export default ConvMedia
