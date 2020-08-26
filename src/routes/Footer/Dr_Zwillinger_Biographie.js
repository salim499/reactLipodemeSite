import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import styled from 'styled-components';

function BiographieDocteur() {
  return (
    <FooterContainer>
    <div className="container">
      <ReactBootStrap.Card style={{ width: '1035px', }}>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title><h3>Dr Nicolas Zwillinger</h3></ReactBootStrap.Card.Title><br/>
          <ReactBootStrap.Card.Text>
           <h5 className="simple">Chirurgien esthétique Paris  |  Médecine esthétique Paris  |  Microchirurgie Paris</h5>
          </ReactBootStrap.Card.Text><br></br>
          <ReactBootStrap.Card.Title><h2 className="feu">Affiliation</h2></ReactBootStrap.Card.Title>
          <img className="imgs" src="./ISAPSLogo.png"/>
  {/*<ReactBootStrap.Button variant="outline-info">Savoir plus ...</ReactBootStrap.Button>*/}
       </ReactBootStrap.Card.Body>
       <div className="container">
       <ReactBootStrap.Carousel>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./Dr_Zwillinger.jpeg"
      style={{ width: 'auto', height: '550px' }}
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./docteur-nicolas-zwillinger-10-615x410.jpg"
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
          <ReactBootStrap.Card.Title>Mots d´accueil</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Le Docteur Nicolas Zwillinger est spécialisé dans le domaine de la chirurgie plastique,
          reconstructrice et esthétique. Il a fait ses études à la faculté de médecine Paris V – Hôpital Necker. 
          Il a exercé dans des hôpitaux renommés de Paris : l’hôpital Saint-Louis et l’hôpital Rotschild. 
          Il a suivi également des formations à l’étranger dans l’objectif d’optimiser ses techniques 
          (au Brésil et aux États-Unis). Il possède plusieurs diplômes : Doctorat en médecine, DES de Chirurgie 
          Générale, DIU d’Anatomie appliquée à la Chirurgie Plastique, DIU d’Anatomie chirurgicale de la tête et 
          du cou…
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body>   
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>Spécialisations et procédures préférées</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Ce professionnel met à la disposition de ses patients de nombreuses techniques chirurgicales. 
          Il intervient notamment sur le visage, la poitrine et la silhouette. Pour les patients qui ont un regard 
          fatigué, il propose la blépharoplastie. L’acte peut concerner les paupières inférieures ou supérieures, 
          il permet d’embellir le regard en lui donnant un véritable coup de jeune. Pour corriger les oreilles 
          décollées, il pratique l’otoplastie, permettant ainsi aux oreilles de retrouver un aspect normal. 
          Il pratique aussi la rhinoplastie ou chirurgie du nez pour traiter des problèmes fonctionnels ou 
          esthétiques. Pour supprimer les traces de vieillissement sur le visage, il a recours au lifting 
          cervico-facial. Parmi les actes qu’il effectue dans le domaine de la chirurgie des seins, on peut citer : 
          l’augmentation mammaire par implants, la réduction mammaire, la correction des malformations des seins, 
          la reconstruction mammaire… La liposuccion, l’abdominoplastie, la pose d’implants fessiers et le lifting 
          des membres font partie des interventions qu’il propose pour l’embellissement de la silhouette.
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body> 
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>Cabinet médical</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Le Docteur Nicolas Zwillinger reçoit ses patients dans son cabinet situé à Paris. Il exerce au sein de 
          deux cliniques parisiennes : la Clinique du Trocadéro et la Clinique de Turin. Ces établissements 
          possèdent une accréditation pour la chirurgie esthétique (délivrée par la H.A.S ou haute administration 
          de santé) ; votre médecin les a sélectionnés pour leur sécurité, leur confort et leur discrétion. 
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body> 
       <ReactBootStrap.Card.Body> 
       <ReactBootStrap.Card.Title>C’est l’intervenant principal de votre opération</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          Il pratique l’examen médical esthétique pré-opératoire dans l’Institut.<br></br>

Le chirurgien esthétique vous expliquera l’opération en détails.<br></br>

Il vous dira si elle peut être pratiquée sous anesthésie locale ou générale.<br></br>

Le Dr Nicolas Zwillinger pratique lui-même tous ses actes chirurgicaux opératoires.<br></br>

Il s’occupe aussi du suivi médical et chirurgical au cabinet.<br></br>

Le Chirurgien est joignable pour toute question sur son téléphone ou par mail 24h/24, 7j/7.<br></br>

Il s’assure de la bonne évolution post-opératoire.
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body> 

     </ReactBootStrap.Card>
     </div>  
     </FooterContainer>
  );
}
export default BiographieDocteur;

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