import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import styled from 'styled-components';
//import '../App.css';
function Interventions() {
  return (
    <FooterContainer>
    <div className="container">
    <div className="row">
      <ReactBootStrap.Card style={{ width: '1035px', }}>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title><h3>LES INTERVENTIONS DE CHIRURGIE ESTHETIQUE</h3></ReactBootStrap.Card.Title><br/>
          <img className="imgs" src="./Clinique_Introduction.jpg"/><br/><br/>
  {/*<ReactBootStrap.Button variant="outline-info">Savoir plus ...</ReactBootStrap.Button>*/}

          <ReactBootStrap.Card.Title>INTERVENTIONS DE CHIRURGIE ESTHETIQUE PRATIQUÉES PAR LE DOCTEUR NICOLAS 
            ZWILLINGER, CHIRURGIEN ESTHÉTIQUE À PARIS</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Le Dr Nicolas Zwillinger, Chirurgien plasticien et esthétique pratique la chirurgie esthétique et la 
          médecine esthétique du visage et du cou, la chirurgie esthétique des seins, la chirurgie esthétique de 
          la silhouette, la chirurgie esthétique intime et la chirurgie cutanée.
          </ReactBootStrap.Card.Text><br/>
          <ReactBootStrap.Card.Text>
          Lors d’une première consultation, il vous écoute afin de connaître vos motivations et réalise un examen 
          clinique minutieux. Suite à cette consultation, le Dr Zwillinger est à même de vous conseiller et de 
          déterminer, en accord avec vous, l’intervention de chirurgie esthétique ou l’acte de médecine esthétique 
          le mieux adapté à votre situation.
          </ReactBootStrap.Card.Text><br/>
          <ReactBootStrap.Card.Text>
          Le Dr Nicolas Zwillinger vous garantit qu’il réalise lui-même l’ensemble de votre suivi et des actes 
          médicaux et / ou de chirurgie esthétique.
          </ReactBootStrap.Card.Text><br/>
          <label>CHIRURGIE ESTHÉTIQUE ET MÉDECINE ESTHÉTIQUE DU VISAGE ET DU COU</label>
          <ReactBootStrap.Card.Text>
          Il s’agit d’un vaste domaine de la chirurgie esthétique et réparatrice et de la médecine esthétique. 
          Le Dr Nicolas Zwillinger s’applique à vous proposer un suivi personnalisé, pour un résultat naturel et 
          harmonieux. La chirurgie du visage et du cou permet de rajeunir votre visage ou de l’embellir, grâce à 
          la correction de disgrâces physiques.
          </ReactBootStrap.Card.Text><br/>  
          <ReactBootStrap.Card.Title>Lifting facial</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Lifting Cervico-Facial, rajeunissement facial</a></li>
            <li>Mini-lifting du visage et/ou du cou</li>
            <li>Lifting temporal non endoscopique</li>
          </ul>
          </ReactBootStrap.Card.Text><br/>   
          <ReactBootStrap.Card.Title>Retrait de la boule de Bichat</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Bichectomie ou chirurgie des joues</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>                
          <ReactBootStrap.Card.Title>Blépharoplastie</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Blépharoplastie rajeunissement des paupières</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>       
          <ReactBootStrap.Card.Title>Lipofilling visage</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Lipofilling, lipomodelage facial</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>    
          <ReactBootStrap.Card.Title>Rhinoplastie</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Rhinoplastie, Rhinoplastie ethnique</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/> 
          <ReactBootStrap.Card.Title>Otoplastie</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Correction d’oreilles décollées (otoplastie), de Lobe d’oreille fendu</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/> 
          <ReactBootStrap.Card.Title>Peelings du visage</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Peeling du visage</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/> 
          <ReactBootStrap.Card.Title>Botox</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Botox ou toxine botulique pour correction de ride du lion, de la « patte d’oie ».</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>
          <ReactBootStrap.Card.Title>Injections d’Acide Hyaluronique</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Comblement facial, acide Hyaluronique</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>
          <ReactBootStrap.Card.Title>Chirurgie esthétique des lèvres</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Augmentation ou diminution du volume des lèvres</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>
       </ReactBootStrap.Card.Body>   
       <ReactBootStrap.Card.Body>
       <label><h6>CHIRURGIE ESTHÉTIQUE DES SEINS</h6></label>
          <ReactBootStrap.Card.Text>
          La chirurgie mammaire regroupe des opérations de chirurgie esthétique et de chirurgie reconstructrice. 
          Elle permet de corriger différentes problématiques liées au sein, des malformations ou encore l’asymétrie 
          des seins. La chirurgie reconstructrice intervient également suite à un cancer et participe pleinement au 
          mieux-être des patientes.
          </ReactBootStrap.Card.Text><br/>  
          <ReactBootStrap.Card.Title>Augmentation mammaire</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Prothèses mammaires ou implants mammaires, augmentation du volume des seins</a></li>
            <li><a href="#">Augmentation des seins par injection de graisse autologue ou lipofilling des seins</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          <ReactBootStrap.Card.Title>Lifting mammaire</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
        <li><a href="#">Correction des « seins qui tombent » : cure de ptose mammaire ou lifting des seins</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          <ReactBootStrap.Card.Title>Réduction mammaire</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Réduction de volume des seins : chirurgie de réduction mammaire</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          <ReactBootStrap.Card.Title>Reconstruction des seins</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Malformations des seins : agénésie, seins tubéreux, asymétrie mammaire, mamelons 
            invaginés ou ombiliqués (non sortis)</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          <ReactBootStrap.Card.Title>Reconstruction des seins</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <ul>
            <li><a href="#">Malformations des seins : agénésie, seins tubéreux, asymétrie mammaire, mamelons 
            invaginés ou ombiliqués (non sortis)</a></li>
            <li>Reconstruction du sein après mastectomie (ablation du sein)</li>
            <li>Reconstruction du sein par prothèse ou lambeaux (Grand Dorsal ou DIEP)</li>
            <li>Lipostructure des seins reconstruits après mastectomie</li>
            <li>Réparation des séquelles de chirurgie du sein pour cancer (tumorectomie,…)</li>
            <li>Reconstruction de la plaque aréolo-mamelonnaire</li>
          </ul>
          </ReactBootStrap.Card.Text><br/> 
       </ReactBootStrap.Card.Body> 
       <ReactBootStrap.Card.Body>
       <label><h6>CHIRURGIE ESTHÉTIQUE DE LA SILHOUETTE</h6></label>
          <ReactBootStrap.Card.Text>
          La chirurgie esthétique de la silhouette est destinée aux femmes et aux hommes souhaitant améliorer leur 
          plastique. Elle comprend le lifting, la liposuccion, le lipofilling et les implants, afin de corriger 
          les imperfections du corps.
          <ul>
            <li><a href="#">Abdominoplastie ou chirurgie de la paroi abdominale, lifting ou minilifting de l’abdomen
            </a></li>
            <li><a href="#">Lifting de cuisse</a></li>
            <li><a href="#">Lifting de bras</a></li>
            <li><a href="#">Implants de Mollet</a></li>
            <li><a href="#">Implants fessiers</a></li>
            <li><a href="#">Lipostructure ou lipomodelage ou lipofiling des fesses</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          </ReactBootStrap.Card.Body> 
          <ReactBootStrap.Card.Body>
       <label><h6>CHIRURGIE CUTANÉE</h6></label>
          <ReactBootStrap.Card.Text>
          Le Dr Nicolas Zwillinger propose de traiter l’hyperhidrose par injection de Botox, un acte de médecine 
          esthétique éprouvé et efficace. La dermato-chirurgie concerne également des opérations à visée corrective 
          pour les peaux ayant subi un traumatisme et présentant des cicatrices inesthétiques.
          <ul>
            <li><a href="#">Tumeurs cutanées et correction des cicatrices</a></li>
            <li><a href="#">Chirurgie de la transpiration excessive au niveau des aisselles</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          </ReactBootStrap.Card.Body> 
          <ReactBootStrap.Card.Body>
       <label><h6>CHIRURGIE ESTHÉTIQUE INTIME</h6></label>
          <ReactBootStrap.Card.Text>
          Le Dr Nicolas Zwillinger réalise trois types d’interventions de chirurgie intime destinée aux femmes. La 
          chirurgie intime concerne des femmes présentant une anomalie morphologique, des douleurs, ou souhaitant 
          reconstruire un hymen déchiré. La chirurgie plastique des organes génitaux peut aussi répondre à un souhait 
          esthétique.
          <ul>
            <li><a href="#">Nymphoplastie (réduction de la taille des petites lèvres)</a></li>
            <li><a href="#">Hyménoplastie (reconstruction de l’hymen)</a></li>
            <li><a href="#">Lipoaspiration du mont de Vénus ou du pubis</a></li>
          </ul>
          </ReactBootStrap.Card.Text><br/>  
          </ReactBootStrap.Card.Body> 
     </ReactBootStrap.Card>
     </div>  
     </div>
     </FooterContainer>
  );
}
export default Interventions;

const FooterContainer = styled.footer`
p {

  }
.feu {
    /* basic font setting */
    font:  1.5em Impact, sans-serif;
    text-align: center;
    letter-spacing: 1px
  color: var(--blue);
  text-shadow: 0    0   1px #fefcc9,
              1px -1px 3px #f65c85,
             -2px -2px 4px #ffae34,
              2px -4px 5px #bbbbbb,
             -2px -6px 6px #cccccc,
              0   -8px 7px black,
              1px -9px 8px gray;
  }
  h3
  {
    font-size: 30px;
    text-shadow: -1px -1px #0c0, 1px 1px #060, -3px 0 4px #000;
    font-family:Arial, Helvetica, sans-serif;
    color: #1c9;
    padding:16px;
    font-weight:lighter;
    -moz-box-shadow: 1px 1px 3px #446;  
    -webkit-box-shadow: 1px 1px 3px #446;  
    box-shadow:1px 1px 3px #446;  
    text-align:center;
    display:block;
    margin:8px;
    background-image:url(images/background-h1-wood.jpg);  
  }
.imgs{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
h5{
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
.simple {
    text-shadow: 2px 3px 5px rgba(240,240,45,0.5);
    text-align: center;
  }
`