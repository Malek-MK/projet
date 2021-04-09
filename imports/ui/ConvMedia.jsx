import React, { useState } from 'react'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 2000,
    position: {
        x: 'center',
        y: 'top',
    }
})

const ConvMedia = ({setVeriff,veriff}) => {
    const onclick=()=>{
        notyf.success("Validation with success")
        setVeriff(true)
    }
    return (
        <div>
           <div class="container">
          {!veriff? <div class="text-dark text-center bg-warning w-50 ml-2 mr-2 mt-5 mb-3"><i class="fa fa-exclamation-triangle"></i>
           Veuillez à présent procéder à la signature de la convention de médiation.
</div>:null}
{veriff?<div class="text-dark text-center bg-success w-75 ml-2 mr-2 mt-5 mb-3"><i class="fa fa-thumbs-up" aria-hidden="true"></i>
Félicitations ! la convention de médiation a bien été validée.
</div>:null}
               <div class="kt-forfait kt-portlet text-align-justify" style={{height: "600px",
        overflow: "auto",
        border: "1px solid grey",
        padding: "20px",
        width: "100%",
        marginTop: "20px"}}>
                   <div class="kt-portlet__body"><div class="kt-section">
                       <div class="kt-section__content">
                           <div class="form-group form-group-last " >
                               <div class="row">
                                   <div class="col-lg-12 text-center">
                                       <h2>CONVENTION DE MÉDIATION</h2>
                                       </div>
                                       </div>
                                       <div class="row">
                                           <div class="col-lg-12">
                                               
                                               <p><strong>ENTRE</strong></p>
                                                <p >Matthew Maddox, Omnis odio beatae ap, 86531 Voluptas in reiciend France.</p> 
                                                <p><strong>ET</strong></p> 
                                                <p>Herrera and Curry Co, Aliquid sapiente vel, 74775 Id provident et vo Canada</p> 
                                                <p class="text-right">(ci-après désignés « Les parties »)</p>
                                                 <p><strong>ET</strong></p>
                                                  <p >JustiCity, 113, rue de la République 13002 Marseille</p> 
                                                  <p class="text-right">(ci-après désigné « La Plateforme de médiation »)</p>
                                                   <p><strong>ET</strong></p> <p >LE MÉDIATEUR, désigné en Annexe A.</p>
                                                    <p class="text-right">(ci-aprés désigné « Le Médiateur »)</p>
                                                    
                                                     <p>Les parties soussignées engagent, par les présentes, un processus de médiation par l’intermédiaire de la plateforme de médiation à distance JustiCity. La plateforme de médiation JustiCity assura le support technique de celle-ci. JustiCity désigne le médiateur qui signera la présente convention en annexe A.  Ce processus de médiation est régi par les règles suivantes :</p>
                                                      
                                                      <h5> 1.	RÔLE, RESPONSABILITÉS ET POUVOIRS DU MÉDIATEUR</h5>
                                                       <ul class="convention">
                                                           <li> a)	Le médiateur est une tierce partie impartiale qui ne représente aucune des parties impliquées au conflit,il n’a qu’une obligation de moyen.</li>
                                                            <li> b)	Le rôle du médiateur est d'aider les parties à négocier un règlement volontaire du différend en créant des conditions qui leur permettent (i) de transmettre leur vision de la situation, (ii) de communiquer entre elles sur leurs difficultés respectives et leurs attentes, (iii) de rechercher une gamme de solutions aux attentes et difficultés divulguées, (iv) de négocier efficacement, honnêtement et équitablement, (v) de conclure à une entente qui répond à leurs besoins et attentes</li> <li> c)	Le médiateur ne donne pas d'avis juridique et n’est pas tenu de faire valoir ou de protéger les droits juridiques de l'une ou l'autre des parties, de soulever des questions que les parties ne soulèvent pas elles-mêmes ou de décider qui devrait participer à la médiation prévue par la présente demande. Le médiateur n'est pas tenu d'assurer l’exécution ou la validité de l’entente de règlement qui pourrait être conclue par les parties.</li> <li> d)	Le médiateur est responsable du déroulement du processus de médiation. À ce titre, il peut, si et lorsqu’il le juge approprié, procéder à un entretien impliquant l’ensemble des parties (plénière) et/ou par voie d’entretiens individuels avec les parties (caucus ou aparté). Il peut également mettre fin à tout moment à la médiation s’il estime qu’aucun accord ne peut être trouvé. Il gère et organise l’agenda des réunions.</li></ul>  <h5> 2.	RÔLES, RESPONSABILITÉS ET POUVOIRS DES PARTIES</h5> <ul class="convention"><li> a)	Les parties acceptent volontairement la médiation en vue de régler leur différend. La signature de la présente demande témoigne de l’intention des parties de mener la médiation d'une manière franche et honnête et de s’attarder sérieusement à la résolution du différend.</li> <li> b)	Les parties reconnaissent avoir la capacité ainsi que tout pouvoir pour s’engager et conclure une entente en leur nom ou au nom de l’entité que les personnes signataires représentent.</li> <li> c)	Les parties reconnaissent que la responsabilité première en ce qui a trait à la résolution du différend incombe aux parties et non pas au médiateur.</li> <li> d)	Les parties s'engagent à divulguer tout renseignement pertinent ou informations financières nécessaires concernant les questions faisant l’objet de la médiation, ainsi que d’avoir la capacité de conclure une entente.</li> 
                                                           <li> e)	Les parties peuvent demander au médiateur un entretien en privé (caucus ou apparté). Les informations alors transmises seront traitées confidentiellement par le médiateur, à moins que la partie qui les a divulguées permette expressément au médiateur de les communiquer aux autres parties.</li>
                                                            <li> f)	Les parties s’engagent à s’inscrire et créer un compte sur la plateforme justicity.com et à effectuer la médiation dans un lieu privé, calme et pouvant assurer la confidentialité des échanges avoir une tenue correcte et disposer d’une connection internet stable, non publique et d’un débit suffisant d’au moins 8Mb/s pour assurer des échanges par visioconférence. À ce titre les parties s’engagent à utiliser la visioconférence et disposer d’ine webcam d’au moins 720p.</li>
                                                            </ul> 
                                                            
                                                            <h5> 3.	CONFIDENTIALITÉ</h5> 
                                                            <ul class="convention">
                                                                <li> a)	Les réunions entre le médiateur et les Parties demeurent confidentielles et sans préjudice des droits des Parties. Les parties s’engagent à ne procéder à aucun enregistrement de celles-ci par quelque moyen que ce soit.</li>
                                                                 <li> b)	Le médiateur, les Parties, leurs représentants et conseillers, les experts et toutes autres Personnes présentes à la médiation ne divulgueront à des tiers aucune des informations ou aucun des documents qu’ils obtiennent lors de la médiation, sauf lorsque la loi le requiert.</li> 
                                                                 <li> c)	Le médiateur ne peut être cité comme témoin et les Parties conviennent de ne pas contraindre le médiateur à divulguer des dossiers, rapports ou autres documents ou à témoigner au sujet de la médiation dans une procédure arbitrale ou judiciaire, sauf lorsque la loi le requiert.</li> 
                                                                 <li> d)	Le médiateur ne dressera pas de rapport sur les discussions tenues entre les Parties. Toutes les déclarations orales ou écrites formulées et toutes les discussions de règlement menées au cours de la médiation seront réputées être sans préjudice des droits des Parties et ne peuvent être divulguées, sauf lorsque la loi le requiert.</li> 
                                                                 <li> e)	Toute personne non-signataire de la présente convention qui assiste à la médiation devra signer un engagement de confidentialité.</li>
                                                                 </ul> 
                                                                
                                                                 <h5> 4.	DÉLAIS DE PRESCRIPTION</h5>
                                                                  <p>Les délais de prescription ne sont aucunement suspendus ni interrompus par la médiation. Si le processus judiciaire a été enclenché, il incombe aux parties de suspendre certains délais dans le but de compléter le processus de médiation et d’obtenir les autorisations nécessaires du tribunal, s’il y a lieu.</p> 
                                                                  
                                                                   <h5> 5.	HONORAIRES ET FRAIS</h5>
                                                                    <p>Le tarif de la médiation est de 750€ plus taxes pour une ½ journée, 1200€  pour une journée et 600€  par ½ journée supplémentaire. Les horaires de la médiation sont 9h-12h et 14h17h. Ce tarif ne concerne qu’une médiation par visioconférence. Chaque ½ journée démarrée est facturée. Pour une médiation en personne ce tarif est majoré de 50%. Ce tarif ne tient pas compte des déboursés et frais qui pourraient être requis.</p>
                                                                     <p>Il est convenu entre les parties que le paiement de ces honoraires et frais sont à la charge de la partie A sauf si la partie B accepte d’en prendre la moitié à sa charge.</p> 
                                                               
                                                                     <h5> 6.	ENTENTE</h5>
                                                                     
                                                                 <p>Si les Parties parviennent à régler leur différend lors de la médiation, un document faisant état des conditions de l’entente sera rédigé et signé par les Parties ou pourra être rédigé par le médiateur, ou leurs avocats à leur demande.</p>
                                                                 
                                                                  </div>
                                                                  </div> 
                                                                  <div class="row">
                                                                      <div class="col-lg-12">
                                                                          <h5>EN FOI DE QUOI, les parties ont signé la présente convention,</h5> 
                                                                        
                                                                          <div class="row">
                                                                              <div class="col-lg-6"></div> 
                                                                              <div class="col-lg-6"></div>
                                                                              </div>
                                                                               
                                                                               <div class="row">
                                                                                   <div class="col-lg-6">
                                                                                       
										JustiCity
                                    								</div>
                                                                    </div></div></div>
                                                                     
                                                                     <div class="row">
                                                                         <div class="col-lg-12 text-center">
                                                                             <h3>ANNEXE A</h3>
                                                                             </div></div>
                                                                             
                                                                              <div class="row">
                                                                                  <div class="col-lg-12">
                                                                                      <h5>Le médiateur désigné pour cette médiation est :</h5>
                                                                                       
                                                                                        <h5>Prénom : </h5> 
                                                                                        <h5>Nom : </h5>
                                                                                         <h5>Adresse : </h5>
                                                                                         
                                                                                          <h5>Qui accepte le mandat de médiation ainsi que ses modalités d’application exposées ci-dessus.</h5>
                                                                                          
                                ........, Médiateur
                            						</div></div></div></div></div></div></div></div> 
                                                    <div class="d-flex justify-content-center mt-3 mb-5"><button type="submit" class="btn btn-primary  font-weight-bold btn-lg" style={{marginRight:"10px"}} onClick={onclick}>
            Valider la convention
        </button> <button type="submit" class="btn btn-info  font-weight-bold btn-lg"> 
            Télécharger en pdf
        </button></div>
        </div>
    )
}

export default ConvMedia
