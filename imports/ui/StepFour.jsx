import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import jsPDF from 'jspdf';
import { useHistory } from 'react-router-dom';

const notyf = new Notyf({
    duration: 2000,
    position: {
        x: 'center',
        y: 'center',
    }
})

const StepFour = ({ setStep, data}) => {
    const [res,setRes]=useState();
    const generatePDF=()=>{
        var doc=new jsPDF('p', 'mm', [650, 680]);
        doc.html(document.querySelector("#content"),{
          callback:function(pdf){
              pdf.save("Mediation.pdf");
          }   
        });
    }
    const [data1, setData1] = useState({
        mediator:data.mediator,
        infoA:data.infoA,
        vousA: data.vousA,
        nomsoc: data.nomsoc,
        formjurid: data.formjurid,
        numid: data.numid,
        prerepleg: data.prerepleg,
        nomrepleg: data.nomrepleg,
        adresse: data.adresse,
        codepos: data.codepos,
        ville: data.ville,
        email: data.email,
        tel: data.tel,
        infoB:data.infoB,
        vousB: data.vousB,
        nomsoc1: data.nomsoc1,
        formjurid1: data.formjurid1,
        numid1: data.numid1,
        prerepleg1: data.prerepleg1,
        nomrepleg1: data.nomrepleg1,
        adresse1: data.adresse1,
        codepos1: data.codepos1,
        ville1: data.ville1,
        email1: data.email1,
        tel1: data.tel1,
        objlitige: data.objlitige,
        desc: data.desc,
        other:data.other,
        namelawyer: data.namelawyer,
        firstnamelawyer: data.firstnamelawyer,
        adresslawyer: data.adresslawyer,
        emaillawyer: data.emaillawyer,
        tellawyer: data.tellawyer,
        namelawyer1: data.namelawyer1,
        firstnamelawyer1: data.firstnamelawyer1,
        adresslawyer1: data.adresslawyer1,
        emaillawyer1: data.emaillawyer1,
        tellawyer1: data.tellawyer1
    })
    const onclickprev = (e) => {
        e.preventDefault
        setStep(2)
    }
    const router = useHistory();
    const [namemed,setNamemed]=useState()
    Meteor.call('showMediator',data1.mediator,(err,res)=>{
        setNamemed(res.username);
        
    })
    const message="have a new dispute";
    const onclick = () => { 
        Meteor.call(
            'insertMediation', data, (err,res) => {
                if (err) {
                    notyf.error("Inserted Failed")
                } else {
                    notyf.success("Inserted with success")
                    setRes(res)
                    router.push(`/mediations/update/${res}`)
                }
            }
        );
        Meteor.call('addDispute',data1.mediator,message,(err,res)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Send notification with success");
            }
        })
    }
   
    useEffect(() => {
        setData1(data)
    }, [])

    return (
        <div id="content">

            <h2 className="text mb-5">Summary of the dispute file</h2>
            <h5>Information about the dispute requester</h5><br></br>
            <table className="table table-bordered " >
                <tbody>
                    <tr>
                        <th className="w-25">Mediator responsable<br></br> with your dispute</th>
                        <td className="w-75"> {namemed}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Country</th>
                        <td className="w-75"> {data1.infoA}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Type</th>
                        <td className="w-75">a society :{data1.vousA}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Company Name	</th>
                        <td className="w-75">{data1.nomsoc}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Legal form	</th>
                        <td className="w-75">{data1.formjurid}</td>
                    </tr>
                    <tr>
                        <th className="w-25">ID number	</th>
                        <td className="w-75">{data1.numid}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Legal representative	</th>
                        <td className="w-75">{data1.prerepleg}{' '}{data1.nomrepleg}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Address	</th>
                        <td className="w-75">{data1.adresse},{data1.codepos},{data1.ville}</td>
                    </tr>
                    <tr>
                        <th className="w-25">E-mail</th>
                        <td className="w-75">{data1.email}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Phone	</th>
                        <td className="w-75">{data1.tel}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Lawyer Phone</th>
                        <td className="w-75">{data1.tellawyer}</td>
                    </tr>
                </tbody>
            </table>

            <h5>Information about the other party</h5>
            <table className="table table-bordered ">
                <tbody>
                <tr>
                        <th className="w-25">Country</th>
                        <td className="w-75"> {data1.infoB}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Type</th>
                        <td className="w-75">a society :{data1.vousB}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Company Name	</th>
                        <td className="w-75">{data1.nomsoc1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Legal form	</th>
                        <td className="w-75">{data1.formjurid1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">ID number	</th>
                        <td className="w-75">{data1.numid1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Legal representative	</th>
                        <td className="w-75">{data1.prerepleg1}{' '}{data1.nomrepleg1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Address	</th>
                        <td className="w-75">{data1.adresse},{data1.codepos1},{data1.ville1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">E-mail</th>
                        <td className="w-75">{data1.email1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Phone	</th>
                        <td className="w-75">{data1.tel1}</td>
                    </tr>
                    <tr>
                        <th className="w-25">Lawyer Phone</th>
                        <td className="w-75">{data1.tellawyer1}</td>
                    </tr>
                </tbody>
            </table>

            <h5>Subject of the dispute</h5>
            <table className="table table-bordered ">
                <tbody>
                    <tr>
                        <th className="w-25">Type of dispute	</th>
                        {data1.objlitige==="Other"?
                        <td className="w-75">{data1.other}</td>
                        :<td className="w-75">{data1.objlitige}</td>}
                        
                    </tr>
                    <tr>
                        <th className="w-25">Description of the dispute </th>
                        <td className="w-75">{data1.desc}</td>
                    </tr>

                </tbody>
            </table>
            <div className="div mt-4">
            <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={onclickprev} >Previous</button>
            <button className="btn btn-success btn-lg pull-right" onClick={onclick}>Save</button>
            <button type="submit" className="btn btn-info btn-lg  pull-right" style={{marginRight:"10px"}} onClick={generatePDF}>  <i className="fa fa-download" aria-hidden="true"></i>
        Download in pdf </button>
            </div>
            <a id="Button-1" className="btn btn-outline-primary pull-right" style={{ position: 'absolute', bottom: '50px', left: '1140px' }} href="#" role="button"><h5><i className="fa fa-arrow-up"></i></h5></a>

        </div>
    )
}

export default StepFour
