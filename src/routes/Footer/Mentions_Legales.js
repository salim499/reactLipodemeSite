import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
function Mentions_Legales() {
  return (
    <FooterContainer className="main-footer">
    <div className="container">
      <div className="row">
      <ReactBootStrap.Card style={{ width: '1035px', }}>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title><h3>Dr Nicolas Zwillinger</h3></ReactBootStrap.Card.Title><br/><br/>
           <p className="feu">MENTIONS LÉGALES</p>
  {/*<ReactBootStrap.Button variant="outline-info">Savoir plus ...</ReactBootStrap.Button>*/}
       </ReactBootStrap.Card.Body>
       <div className="container">
       <ReactBootStrap.Carousel>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./docteur-nicolas-zwillinger-10-615x410.jpg"
      style={{ width: 'auto', height: '550px' }}
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./Dr_Zwillinger.jpeg"
      style={{ width: 'auto', height: '550px' }}
      alt="Second slide"
    />

    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./102963448_3175530212499376_5471271786858869558_o.jpg"
      style={{ width: 'auto', height: '550px' }}
      alt="Third slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./docteur-photo1.jpg"
      style={{ width: 'auto', height: '550px' }}
      alt="Last slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>
       </div>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>INFORMATIONS LÉGALES</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Le site docteur-zwillinger.com est la propriété du docteur Nicolas Zwillinger dont le siège social est situé :
<br></br>42 avenue Mozart, 75016 Paris
<br></br><label>Tél</label> : 01 45 74 12 25
<br></br><label>N° SIRET :</label>
<label>Directeur de publication :</label> Nicolas Zwillinger.
 <label>Hébergement :</label> OVH, 140 quai du Sartel, 59100 Roubaix – Tél : 0899 701 761.
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body>   
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>DROIT D’AUTEUR – COPYRIGHT ©</ReactBootStrap.Card.Title>
          <br></br>
          <ReactBootStrap.Card.Text>
          <h6>LA REPRODUCTION SUR SUPPORT PAPIER</h6>
La reproduction de tout ou partie de ce site sur un support papier n’est pas autorisée.<br></br><br></br>

<h6>LA REPRODUCTION SUR SUPPORT ÉLECTRONIQUE</h6>
La reproduction de tout ou partie de ce site sur un support électronique n’est pas autorisée.
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body> 
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>PROTECTION DES DONNÉES PERSONNELLES</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Aucune information personnelle n’est collectée à votre insu.
Aucune information personnelle n’est cédée à des tiers.
Les informations recueillies font l’objet d’un traitement informatique destiné à l’étude et contact des personnes intéressées par les services du docteur Nicolas Zwillinger. Les destinataires des données sont le docteur Nicolas Zwillinger et son équipe.
Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à “Docteur Nicolas Zwillinger, 13 rue de Turin 8e, 75008 Paris”.
Les données collectées ne seront en aucun cas cédées à des tiers ou partenaires.
Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body> 
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>COOKIES</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <label>L’utilisateur est informé, que lors de ses visites sur le site, un cookie peut s’installer automatiquement 
          sur son logiciel de navigation.</label>
Le cookie est un bloc de données qui ne permet pas d’identifier l’utilisateur mais sert à enregistrer des 
informations relatives à la navigation de celui-ci sur le site. L’utilisation de ces cookies a pour finalité de 
procéder à des analyses de fréquentation, mesures d’audience… afin d’améliorer la qualité du site.
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body>    
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>RESPONSABILITÉ QUANT AU CONTENU</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <label>Tous les informations de ce site sont à titre informatif et non contractuel.</label>    
Les fonctionnalités de Google Analytics pour les annonceurs display sont activées pour sur ce site (Remarketing).
Google utilise des cookies pour diffuser nos annonces sur les sites de son réseau Display.
Grâce au cookie DoubleClick, Google adapte les annonces diffusées aux utilisateurs en fonction de leur navigation sur notre site.
<Link to="">Vous pouvez désactiver l’utilisation de cette fonctionnalité en vous rendant sur le gestionnaire de préférences pour les annonces.</Link>
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body>      
     </ReactBootStrap.Card>
     </div>
     </div>   
     </FooterContainer>
  );
}
export default Mentions_Legales;

const FooterContainer = styled.footer`
p {

  }
.feu {
    /* basic font setting */
    font: bold 3em Impact, sans-serif;
    text-align: center;
    letter-spacing: 2px
  color: var(--blue);
  text-shadow: 0    0   2px #fefcc9,
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
`