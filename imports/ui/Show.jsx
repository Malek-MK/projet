import React, {  useState,useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import jsPDF from 'jspdf';
import Footerr from '../ui/Footerr';

const Show = ({data,fetchMedia}) => {
    const [namemediator,setNameMediator]=useState()
      const renderNameMediator=()=>{ 
        Meteor.call('showMediator',data.mediator,(err,res)=>{
            setNameMediator(res.username);
          }) 
     }
     const [namelegalpro,setNameLegalPro]=useState()
      const renderNameLegalPro=()=>{
        Meteor.call('showLegalPro',data.legalprof,(err,res)=>{
            setNameLegalPro(res.username);
          }) 
     }
     const [namelegalpro1,setNameLegalPro1]=useState()
     const renderNameLegalPro1=()=>{
       Meteor.call('showLegalPro1',data.legalprof1,(err,res)=>{
           setNameLegalPro1(res.username);
         }) 
    }
     const generatePDF=()=>{
        var doc=new jsPDF('p', 'mm', [650, 680]);
        doc.html(document.querySelector("#content"),{
          callback:function(pdf){
              pdf.save("Mediation.pdf");
          }   
        });
    }
    useEffect(()=>{
        fetchMedia()
        renderNameMediator()
        renderNameLegalPro()
        renderNameLegalPro1() 
      },[])
    return (
        <div className="container text-center mt-5 mb-5" id="content">
        <h2 className="text-primary mb-5 mt-5">Summary of the dispute file</h2>
        <h5>Information about the dispute requester</h5><br></br>
        <table className="table table-bordered " >
            <tbody>
                <tr>
                    <th className="w-25">Mediator responsable<br></br> with your dispute</th>
                    <td className="w-75">{namemediator}</td>
                </tr>
                <tr>
                    <th className="w-25">Country</th>
                    <td className="w-75"> {data.infoA}</td>
                </tr>
                <tr>
                    <th className="w-25">Type</th>
                    <td className="w-75">a society :{data.vousA}</td>
                </tr>
                <tr>
                    <th className="w-25">Company Name	</th>
                    <td className="w-75">{data.nomsoc}</td>
                </tr>
                <tr>
                    <th className="w-25">Legal form	</th>
                    <td className="w-75">{data.formjurid}</td>
                </tr>
                <tr>
                    <th className="w-25">ID number	</th>
                    <td className="w-75">{data.numid}</td>
                </tr>
                <tr>
                    <th className="w-25">Legal representative	</th>
                    <td className="w-75">{data.prerepleg}{' '}{data.nomrepleg}</td>
                </tr>
                <tr>
                    <th className="w-25">Addresse	</th>
                    <td className="w-75">{data.adresse},{data.codepos},{data.ville}</td>
                </tr>
                <tr>
                    <th className="w-25">E-mail</th>
                    <td className="w-75">{data.email}</td>
                </tr>
                <tr>
                    <th className="w-25">Phone	</th>
                    <td className="w-75">{data.tel}</td>
                </tr>
                <tr>
                    <th className="w-25">Lawyer Name</th>
                    <td className="w-75">{namelegalpro}</td>
                </tr>
                <tr>
                    <th className="w-25">Lawyer Phone</th>
                    <td className="w-75">{data.tellawyer}</td>
                </tr>
            </tbody>
        </table>

        <h5>Information about the other party</h5>
        <table className="table table-bordered ">
            <tbody>
            <tr>
                    <th className="w-25">Country</th>
                    <td className="w-75"> {data.infoB}</td>
                </tr>
                <tr>
                    <th className="w-25">Type</th>
                    <td className="w-75">a society :{data.vousB}</td>
                </tr>
                <tr>
                    <th className="w-25">Company Name	</th>
                    <td className="w-75">{data.nomsoc1}</td>
                </tr>
                <tr>
                    <th className="w-25">Legal form	</th>
                    <td className="w-75">{data.formjurid1}</td>
                </tr>
                <tr>
                    <th className="w-25">ID number	</th>
                    <td className="w-75">{data.numid1}</td>
                </tr>
                <tr>
                    <th className="w-25">Legal representative	</th>
                    <td className="w-75">{data.prerepleg1}{' '}{data.nomrepleg1}</td>
                </tr>
                <tr>
                    <th className="w-25">Addresse	</th>
                    <td className="w-75">{data.adresse},{data.codepos1},{data.ville1}</td>
                </tr>
                <tr>
                    <th className="w-25">E-mail</th>
                    <td className="w-75">{data.email1}</td>
                </tr>
                <tr>
                    <th className="w-25">Phone	</th>
                    <td className="w-75">{data.tel1}</td>
                </tr>
                <tr>
                    <th className="w-25">Lawyer Name</th>
                    <td className="w-75">{namelegalpro1}</td>
                </tr>
                <tr>
                    <th className="w-25">Lawyer Phone</th>
                    <td className="w-75">{data.tellawyer1}</td>
                </tr>
            </tbody>
        </table>

        <h5>Subject of the dispute</h5>
        <table className="table table-bordered ">
            <tbody>
                <tr>
                    <th className="w-25">Type of dispute	</th>
                    {data.objlitige==="Other"?
                    <td className="w-75">{data.other}</td>
                    :<td className="w-75">{data.objlitige}</td>}
                    
                </tr>
                <tr>
                    <th className="w-25">Description of the dispute </th>
                    <td className="w-75">{data.desc}</td>
                </tr>

            </tbody>
        </table>
        <div className="div mt-4">
    
        <button className="btn btn-info btn-lg  pull-right mb-5" style={{marginRight:"10px"}} onClick={generatePDF}>  <i className="fa fa-download" aria-hidden="true"></i>
    Download in pdf </button>
        </div>
        <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute', bottom: '70px', left: '1240px' }} href="#" role="button"><h5><i className="fa fa-arrow-up"></i></h5></a>
       <br></br><br></br>
       <Footerr/>
    </div>
    )
}

export default Show
