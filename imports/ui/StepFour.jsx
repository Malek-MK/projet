import React,{useState,useEffect} from 'react'
import { Meteor } from 'meteor/meteor';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';


const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'center',
      y: 'center',
    }
  })

const StepFour = ({ setStep, data ,setShow}) => {
    const [data1,setData1]=useState({
        vousA:data.vousA,
        nomsoc:data.nomsoc,
        formjurid:data.formjurid,
        numid:data.numid, 
        prerepleg:data.prerepleg,
        nomrepleg:data.nomrepleg,
        adresse:data.adresse,
        codepos:data.codepos,
        ville:data.ville,
        email:data.email,
        tel:data.tel,
        vousB:data.vousB,
        nomsoc1:data.nomsoc1,
        formjurid1:data.formjurid1,
        numid1:data.numid1,
        prerepleg1:data.prerepleg1,
        nomrepleg1:data.nomrepleg1,
        adresse1:data.adresse1,
        codepos1:data.codepos1,
        ville1:data.ville1,
        email1:data.email1,
        tel1:data.tel1,
        objlitige:data.objlitige,
        desc:data.desc,
    })
    const onclickprev = (e) => {
        e.preventDefault
        setStep(2)
    }
    const onclick=()=>{
        Meteor.call(
            'insertMediation', data, (err) => {
                if (err) {
                    notyf.error("Inserted Failed")
                  } else {
                    notyf.success("Inserted with success")
                    setShow(false)
                  }
            }
          );
    }
    useEffect(()=>{
        setData1(data)
    },[])

    return (
        <div>
          
            <h2 className="text mb-5">Récapitulatif du dossier de médiation</h2>
            <h5>Informations concernant le demandeur de la médiation</h5>
                <table className="table table-bordered " >
                    <tbody>
                        <tr>
                            <th className="w-25">Type</th>
                            <td className="w-75">une sociéte :{data1.vousA}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Nom de la société	</th>
                            <td className="w-75">{data1.nomsoc}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Forme juridique	</th>
                            <td className="w-75">{data1.formjurid}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Numéro d'identification	</th>
                            <td className="w-75">{data1.numid}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Représentant légal	</th>
                            <td className="w-75">{data1.prerepleg}{' '}{data1.nomrepleg}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Adresse	</th>
                            <td className="w-75">{data1.adresse},{data1.codepos},{data1.ville}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Email</th>
                            <td className="w-75">{data1.email}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Téléphone	</th> 
                            <td className="w-75">{data1.tel}</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text mb-5">Récapitulatif du dossier de médiation</h2>
                <h5>Informations concernant l'autre partie</h5>
                <table className="table table-bordered ">
                    <tbody>
                        <tr>
                            <th className="w-25">Type</th>
                            <td className="w-75">une sociéte :{data1.vousB}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Nom de la société	</th>
                            <td className="w-75">{data1.nomsoc1}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Forme juridique	</th>
                            <td className="w-75">{data1.formjurid1}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Numéro d'identification	</th>
                            <td className="w-75">{data1.numid1}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Représentant légal	</th>
                            <td className="w-75">{data1.prerepleg1}{' '}{data1.nomrepleg1}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Adresse	</th>
                            <td className="w-75">{data1.adresse},{data1.codepos1},{data1.ville1}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Email</th>
                            <td className="w-75">{data1.email1}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Téléphone	</th> 
                            <td className="w-75">{data1.tel1}</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Objet du litige</h5>
                <table className="table table-bordered ">
                    <tbody>
                        <tr>
                            <th className="w-25">Type de litige	</th>
                            <td className="w-75">{data1.objlitige}</td>
                        </tr>
                        <tr>
                            <th className="w-25">Description du litige </th>
                            <td className="w-75">{data1.desc}</td>
                        </tr>
                       
                    </tbody>
                </table>
                <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={onclickprev} >Précedent</button>
                <button type="button" name='soumettre' className="btn btn-success btn-lg pull-right" onClick={onclick}>Soumettre</button>
         
        </div>
    )
}

export default StepFour
