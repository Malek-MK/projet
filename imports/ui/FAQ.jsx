import React from 'react'
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer';

const FAQ = () => {
  return (
    <div>
      <NavBar />
      <div class="card mt-0 border-0 text-center mt-5 mb-5" >
        <div className="card body bg-info text-white">
          <h1 className="text mt-5 mb-4">Foire aux Questions</h1>
          <p className="p mb-5">
            Vous trouverez ici les questions les plus fréquemment posées à notre équipe. N’hésitez pas à nous poser la vôtre,<br></br> nous sommes à votre disposition pour répondre à toutes vos questions !               </p>
          <div>
            <button className="btn btn-success btn-lg mb-5">POSER VOTRE QUESTIONS</button>
          </div>
        </div>
      </div>
      <div className="container text-center border-0 mt-5 mb-5">
        <div className="card mt-5 mb-5">
          <p>

            <button class="btn btn-light border-0 text-dark" data-toggle="collapse" data-target="#collapseExample" aria-controls="collapseExample">
              COMBIEN DE TEMPS VA DURER LA MÉDIATION ?
  </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="text-secondary">
              La durée d’une médiation dépend de la complexité de votre dossier et de la volonté des parties de régler rapidement.

              Par exemple :

              Une demi-journée : Si vous avez une facture impayée, un litige locatif, un problème de voisinage ou un désaccord mineur sur un contrat ou dans le cadre de votre emploi.
              Une journée complète : Si vous avez une difficulté d’exécution ou d’interprétation d’un contrat, un litige commercial, un conflit avec des copropriétaires ou un litige d’emploi.
              Une journée et demie : Si vous pensez que la première journée servira à la médiation et la demijournée supplémentaire à la rédaction de la transaction.
              Deux jours et plus : Si votre litige et complexe, délicat, s’il engage des sommes importantes ou si vous souhaitez être assisté par avocat durant la médiation.
              Le médiateur pourra vous indiquer, si un accord est sur le point d’être trouvé, de continuer une médiation avec des séances supplémentaires.
              Vous n’avez pas de limite de temps maximum, et vous pouvez interrompre une médiation à tout moment.

Si vous avez des questions, contactez-nous sans frais et nous nous ferons un plaisir d’y répondre.</div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-controls="collapseExample1">
                  Est-ce que mon assurance protection juridique peut prendre en charge les frais de la médiation ?
      </button>
                <div class="collapse" id="collapseExample1">
                  <div class="text-secondary mt-3">
                    Oui, conformément à l’article L. 127-1 du code des assurances, qui prévoit que :

                    « tout contrat d’assurance de protection juridique stipule explicitement que, lorsqu’il est fait appel à un avocat ou à toute personne qualifiée par la législation ou la réglementation en vigueur pour défendre, représenter ou servir les intérêts de l’assuré, dans les circonstances prévues à l’article L. 127-1, l’assuré a le droit de le choisir »

(v. J. Courrouy, Réflexions sur quelques aspects de l’assurance de protection juridique, D. 1992. 169 ; J. Bonnard, L’assurance de protection juridique et la portée du principe du libre choix de l’avocat par l’assuré, D. 2000. 343 )  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                  Quand aura lieu la médiation ?
      </button>
                <div class="collapse" id="collapseExample2">
                  <div class="text-secondary mt-3">
                    Dans les trois mois. Une fois votre dossier déposé, vous aurez accès à un calendrier avec dix choix de dates sur les trois prochains mois, l’autre partie ainsi que le médiateur choisiront une date de médiation parmi celles que vous avez proposées.
  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                  Ai-je le droit de refuser une offre de médiation ?
      </button>
                <div class="collapse" id="collapseExample3">
                  <div class="text-secondary mt-3">
                    Absolument, la médiation est un processus volontaire, l’ensemble des parties doivent accepter la médiation pour quelle puisse avoir lieu. Toutefois, si vous refusez la médiation, la partie demanderesse peut se voir attribuer une attestation de tentative de médiation pouvant être homologuée devant les Tribunaux au tarif de 49€HT.    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
                  Quelles sont les modalités de partage des coûts ?            </button>
                <div class="collapse" id="collapseExample4">
                  <div class="text-secondary mt-3">
                    La partie proposant la médiation peut demander à la partie qui en reçoit la demande  de partager les frais de médiation. Si la partie recevant la demande de partage accepte, les coûts sont divisés par 2 et chacun paye sa part. Si la partie refuse, l’une ou l’autre des parties peut accepter de payer la totalité des frais pour favoriser le processus de médiation. Les paiements sont effectués en ligne sur la plateforme via notre plateforme sécurisée.       </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                  Qu’est-ce q'une convention de médiation ?
            </button>
                <div class="collapse" id="collapseExample5">
                  <div class="text-secondary mt-3">
                    C’est un contrat passé entre chacune des parties et le médiateur validant les règles du déroulement de la médiation et notamment son caractère confidentiel.      </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
                  Mon avocat peut-il être présent durant la médiation ?            </button>
                <div class="collapse" id="collapseExample6">
                  <div class="text-secondary mt-3">
                    Tout à fait, en revanche il ne peut vous représenter seul, vous devez aussi être présent.        </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7">
                  La médiation interrompt elle la prescription?                  </button>
                <div class="collapse" id="collapseExample7">
                  <div class="text-secondary mt-3">
                    Hélas non, il faut vous assurer de protéger vos droits durant cette période.          </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8">
                  De combien de temps ai-je besoin pour créer un compte ?                        </button>
                <div class="collapse" id="collapseExample8">
                  <div class="text-secondary mt-3">
                    Il vous faut 5 minutes environ. Dans un premier temps, vous devez seulement renseigner vos informations personnelles et celles de la partie à qui vous offrez la médiation.          </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample9">
                  Un procès est déjà engagé, est-ce que je peux avoir recours à la médiation ?                        </button>
                <div class="collapse" id="collapseExample9">
                  <div class="text-secondary mt-3">
                    Oui, vous pouvez régler votre dossier et avoir recours à la médiation à tout moment durant la procédure.          </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample10">
                  La médiation est-elle confidentielle ?                        </button>
                <div class="collapse" id="collapseExample10">
                  <div class="text-secondary mt-3">
                    Oui les parties ainsi que le médiateur s’engagent à garder confidentiels le contenu et les échanges de la médiation.          </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample11">
                  La médiation est-elle enregistrée ?                        </button>
                <div class="collapse" id="collapseExample11">
                  <div class="text-secondary mt-3">
                    Non, chacune des parties s’interdit de le faire. S’il y a enregistrement, vous en serez informé et aurez la possibilité de le refuser. Dans tous les cas s’il y a enregistrement celui-ci ne pourra servir qu’à des fins d’amélioration de la qualité du service.        </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample12">
                  A qui s'adresse Justicity                       </button>
                <div class="collapse" id="collapseExample12">
                  <div class="text-secondary mt-3">
                    Justicity s’adresse à toute personne faisant face à un litige ! Que vous soyez un particulier, un professionnel ou une entreprise, nous sommes à votre service pour régler votre litige à l’amiable dans les 3 mois suivants votre demande.      </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample13" aria-expanded="false" aria-controls="collapseExample13">
                  Quels sont les moyens de paiements offerts ?                      </button>
                <div class="collapse" id="collapseExample13">
                  <div class="text-secondary mt-3">
                    Vous pouvez payer les frais de la médiation par carte de crédit Visa ou MasterCard.     </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample14" aria-expanded="false" aria-controls="collapseExample14">
                  De quoi ai-je besoin pour utiliser la plateforme ?                     </button>
                <div class="collapse" id="collapseExample14">
                  <div class="text-secondary mt-3">
                    Vous avez besoin d’un ordinateur, smartphone ou tablette connecté à un réseau internet. Vous n’avez pas de documents à fournir pour vous inscrire mais une rubrique est proposée sur la plateforme si vous souhaitez en télécharger pour que le médiateur y ait accès.     </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample15" aria-expanded="false" aria-controls="collapseExample15">
                  Comment se passe une médiation ?                     </button>
                <div class="collapse" id="collapseExample15">
                  <div class="text-secondary mt-3">
                    La médiation débute par un entretien individuel et confidentiel avec le médiateur (la prémédiation) puis la médiation débute avec la présentation de la position de chaque partie. Le talent de nos médiateurs est de dégager vos besoins et les solutions retenues pour régler définitivement votre différend.    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample16" aria-expanded="false" aria-controls="collapseExample16">
                  L'accord obtenu lors d'une médiation est-il aussi valable qu’un jugement ?                     </button>
                <div class="collapse" id="collapseExample16">
                  <div class="text-secondary mt-3">
                    L’accord obtenu à l’issue de la médiation est valable et constitue un contrat entre les parties qui doivent le respecter. Cependant si une des parties ne le respecte pas il faudra faire homologuer l’accord (ce qui lui donne la même valeur qu’un jugement) par le tribunal (procédure très rapide) pour faire exécuter l’accord par un huissier par exemple.   </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample17" aria-expanded="false" aria-controls="collapseExample17">
                  Puis-je prolonger ou arrêter une médiation en cours ?                     </button>
                <div class="collapse" id="collapseExample17">
                  <div class="text-secondary mt-3">
                    Oui si à l’issue d’une séance de médiation si vous avez besoin de plus de temps vous pouvez en rajouter par tranche d’une demi-journée.
Si au contraire vous avez réglé plus vite où que vous ne désirez pas continuer, toute demi-journée ou journée non entamées vous seront remboursées.   </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample18" aria-expanded="false" aria-controls="collapseExample18">
                  Que ce passe-t-il en cas de refus de la demande de médiation ?                     </button>
                <div class="collapse" id="collapseExample18">
                  <div class="text-secondary mt-3">
                    Les deux parties ont tout intérêt à avoir recours à la médiation car cela permettra de régler le litige à l’amiable. Cependant, la médiation reste un choix pour les parties, si l’une d’entre elle ne souhaite pas continuer ou y participer, elle est dans son droit et la médiation n’aura donc pas lieu.  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample19" aria-expanded="false" aria-controls="collapseExample19">
                  Y'a-t-il des frais supplémentaires à prendre en compte ?                     </button>
                <div class="collapse" id="collapseExample19">
                  <div class="text-secondary mt-3">
                    Les seuls frais que vous aurez à payer sont les honoraires de médiation calculés en fonction de la durée de la médiation. En cas d’échec de la médiation, une attestation d’échec vous sera remise gratuitement. En cas de réussite de la médiation, vous avez la possibilité de faire homologuer l’accord transactionnel moyennant des frais supplémentaires.  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample20" aria-expanded="false" aria-controls="collapseExample20">
                  Quelle est la différence entre une médiation et un arbitrage ?                     </button>
                <div class="collapse" id="collapseExample20">
                  <div class="text-secondary mt-3">
                    La médiation appartient aux parties, elle permet de dégager un accord amiable, le médiateur ne rend aucune décision. L’arbitrage ressemble plus à un procès traditionnel, mais plus simple, plus rapide, et l’arbitre rend une décision finale (la sentence) insusceptible d’appel.  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <button class="btn btn-light text-dark border-0" type="button" data-toggle="collapse" data-target="#collapseExample21" aria-expanded="false" aria-controls="collapseExample21">
                  Comment vais-je signer l’accord final ?                    </button>
                <div class="collapse" id="collapseExample21">
                  <div class="text-secondary mt-3">
                    Vous signerez l’accord final grace à notre système de signature électronique totalement sécurisé et accessible à l’aide d’une simple connexion à Internet.  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text text-secondary mt-5 mb-3">RESSOURCES</h3>
          <tr className="border-1 text-success "></tr>
          <h2 className="text mt-5 mb-5">Nos derniers articles</h2>
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <img src="./images/img8.png" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">L’impact environnemental de la médiation en ligne</h5>
                  <p class="card-text text-secondary">Revue à partir de l’année 2008, la répartition géographique des tribunaux en France n’avait pas été significativement modifiée depuis 1958. Celle-ci était par conséquent considérée comme inadaptée au regard de l’évolution démographique et économique des régions. Avec...</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img src="./images/img9.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Conflits entre actionnaires et dirigeants : ils sont plus nombreux que jamais !</h5>
                  <p class="card-text text-secondary">L’affectio Sociétatis constitue la base d’une aventure entrepreneuriale réussie.Néanmoins, chemin faisant il n’est pas rare que les retalions aboutissent à des conflits, litiges ou différends structurels et conjoncturels pour lesquels les relations humaines ne sont...</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img src="./images/img10.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Le règlement intérieur national de la profession d’avocat intègre désormais la médiation comme préalable à une action en justice</h5>
                  <p class="card-text text-secondary">Le 18 décembre 2020, une décision portant modification du règlement intérieur national (RIN) de la profession d’avocat a été publiée au Journal officiel du 17 janvier 2021 ;  En effet, le texte fait référence à un nouvel alinéa à l’article 6.1 du RIN. Ce...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FAQ
