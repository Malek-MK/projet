import React,{useState,useEffect} from 'react'
import { Meteor } from 'meteor/meteor';

const StepFour = ({ setStep, data }) => {
    const [data1,setData1]=useState([])
    const onclickprev = (e) => {
        e.preventDefault
        setStep(2)
    }
    const renderMediations=()=>{
        Meteor.call('showMediations',(err,{res})=>{
            console.log('result',res)
            setData1(res)
            
        })
        
    }

    useEffect(()=>{
        renderMediations()

    },[])
    return (
        <div>
            <h2 className="text mb-5">Récapitulatif du dossier de médiation</h2>
            <h5>Informations concernant le demandeur de la médiation</h5>
            
            
                
                <table className="table table-bordered " >
                {data1.map((dat)=>{ <table><tbody><tr key={dat._id}>
                            <th className="w-25">Type</th>
                            <td className="w-75">une sociéte :{dat.adresse}</td>
                        </tr></tbody></table>})}
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
                <button type="button" name='prev' className="btn btn-primary btn-lg pull-left" onClick={onclickprev} >Previous</button>
                <button type="button" name='soumettre' className="btn btn-success btn-lg pull-right" >Soumettre</button>
            
        </div>
    )
}

export default StepFour
