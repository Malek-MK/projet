import React, { useState } from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const Blog = () => {
    const [show,setShow]=useState(true);
    return (
        <div>
            <NavBar/>
            <br></br>
            <div className="card bg-dark text-white mt-3" >
                <img src="./images/image.jpeg" className="card-img" alt="..." style={{ height: "400px" }} />
                <div className="card-img-overlay">
                    <div className="card-body text-center">
                        <br></br><br></br><br></br><br></br><br></br>
                        <h1 className="text mt-4 mb-4">BLOG</h1>
                        <h3>All the news on Dispute Prevention and Resolution Methods</h3>
                    </div>
                </div>
            </div>
            {!show? 
            <div className="container mt-5 mb-5">
            <div className="row ">
            <div className="col-sm-3">
              <div className="card mt-5">
                <img src="./images/img8.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">L’impact environnemental de la médiation en ligne</h5>
                  <p className="card-text text-secondary">Revue à partir de l’année 2008, la répartition géographique des tribunaux en France n’avait pas été significativement modifiée depuis 1958. Celle-ci était par conséquent considérée comme inadaptée au regard de l’évolution démographique et économique des régions. Avec...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-5">
                <img src="./images/img9.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Conflits entre actionnaires et dirigeants : ils sont plus nombreux que jamais !</h5>
                  <p className="card-text text-secondary">L’affectio Sociétatis constitue la base d’une aventure entrepreneuriale réussie.Néanmoins, chemin faisant il n’est pas rare que les retalions aboutissent à des conflits, litiges ou différends structurels et conjoncturels pour lesquels les relations humaines ne sont...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-5">
                <img src="./images/img10.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Le règlement intérieur national de la profession d’avocat intègre désormais la médiation comme préalable à une action en justice</h5>
                  <p className="card-text text-secondary">Le 18 décembre 2020, une décision portant modification du règlement intérieur national (RIN) de la profession d’avocat a été publiée au Journal officiel du 17 janvier 2021 ;  En effet, le texte fait référence à un nouvel alinéa à l’article 6.1 du RIN. Ce...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-5">
                <img src="./images/img11.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Tout savoir sur le médiateur</h5>
                  <p className="card-text text-secondary">Depuis une dizaine d’années maintenant, la médiation est une pratique qui devient de plus en plus utilisée que ce soit pour des petits litiges ou des dossiers à grands enjeux. Cette pratique connaît une évolution notamment depuis la crise sanitaire. La médiation...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-3">
                <img src="./images/img12.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Les 7 différences entre un procès et une médiation</h5>
                  <p className="card-text text-secondary">Aujourd’hui, la culture du procès fait de plus en plus place à la culture de l’entente. L’un des règlements amiables les plus courants est la médiation. C’est un des modes les plus utilisés, mais il existe aussi l’arbitrage ou encore la conciliation. Il est important...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-3">
                <img src="./images/img16.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Le processus de médiation : Pourquoi, quand, comment ?</h5>
                  <p className="card-text text-secondary">Parmi les modes amiables de résolution des conflits, la médiation est la plus satisfaisante, car elle possède un attribut que les autres modes n’ont pas, celui de permettre aux parties de poursuivre une relation.   Qu’est-ce que la médiation ?   Le...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-3">
                <img src="./images/img13.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Médiation (MARD) : En quoi la crise sanitaire a-t-elle eu un impact sur le système judiciaire ?</h5>
                  <p className="card-text text-secondary">Au début de la crise sanitaire, Nicole Belloubet affirmait : "seuls les contentieux essentiels seront traités devant les tribunaux". Six mois plus tard, avec Dupont Moretti, nouveau ministre de la justice, quelle est la situation dans les tribunaux ? Dans le but de...</p>
                </div>
              </div>
            </div>
          </div>
          <a  className="text text-decoration-none text-success" style={{cursor:"pointer"}} onClick={()=>setShow(true)}><b>« ENTRÉES PRÉCÉDENTES</b></a>
            </div>
            :null}
            {show? 
            <div className="container mt-5 mb-5">
            <div className="row ">
            <div className="col-sm-3">
              <div className="card mt-3">
                <img src="./images/img14.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Le recours à la médiation une opportunité pour régler les différends en matière de droit du travail</h5>
                  <p className="card-text text-secondary"> Régler de manière amiable un différend en matière de droit du travail, qui ne le souhaite pas ?  En matière de relations relations sociales et humaines c’est le droit social qui régit l’ensemble des règles en application d’un code dont...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-3">
                <img src="./images/img15.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">La crise sanitaire Covid 19 et l’accès à la Justice</h5>
                  <p className="card-text text-secondary">Cette crise sanitaire dans laquelle nous sommes tous plongés met en lumière les nombreuses lacunes de notre société. Longtemps refusée par les praticiens et les administrations la télémédecine démontre aujourd’hui tout son intérêt. Il est désormais stratégique de...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-3">
                <img src="./images/img16.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Le développement des modes de prévention et de règlement des différends</h5>
                  <p className="card-text text-secondary">L’engorgement des tribunaux rend la justice peu accessible, les coûts et les délais s’envolent dans la plupart des pays dans le monde. Les pouvoirs publics cherchent désormais à réduire l’accès aux tribunaux traditionnels au profit des modes alternatifs de règlement...</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mt-3 mb-5">
                <img src="./images/img17.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Les chiffres de la justice traditionnelle en France</h5>
                  <p className="card-text text-secondary">L’accès à la justice est coûteux et la durée de traitement des affaires est extrêmement longue. Une heure moyenne de travail d’un avocat est de 250€ et le coût moyen d’un procès et de 5000€ (Conseil National des Barreaux). Selon Les chiffres clés de la justice 2018,...</p>
                </div>
              </div>
            </div>
            </div>
            <a  className="text text-decoration-none text-success pull-right" style={{cursor:"pointer"}} onClick={()=>setShow(false)}><b>ENTRÉES SUIVANTES »</b></a>
            </div>    
            :null}
            <Footer/>
        </div>
    )
}

export default Blog
