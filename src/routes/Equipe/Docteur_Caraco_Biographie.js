import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function BiographieDocteur() {
  return (
    <FooterContainer>
    <div className="container">
      <div className="row">
      <ReactBootStrap.Card style={{ width: '1035px', }}>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title><h3>Dr Jean-Jacques Caraco</h3></ReactBootStrap.Card.Title><br/>
          <ReactBootStrap.Card.Text>
           <h5 className="simple">Médecin anesthésiste-réanimateur.  |  Clinique du Trocadéro 75016 Paris  
           |  Tel :  06.07.83.75.02</h5>
          </ReactBootStrap.Card.Text><br></br>
  {/*<ReactBootStrap.Button variant="outline-info">Savoir plus ...</ReactBootStrap.Button>*/}
       </ReactBootStrap.Card.Body>
       <div className="container">
       <ReactBootStrap.Carousel>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./caraco.jpeg"
      style={{ width: 'auto', height: '690px' }}
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./caraco2.jpeg"
      style={{ width: 'auto', height: '690px' }}
      alt="Second slide"
    />

    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./caraco3.jpg"
      style={{ width: 'auto', height: '690px' }}
      alt="Last slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>
       </div>
       <br/>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>en cas d’anesthésie générale</ReactBootStrap.Card.Title><br/>
          <ReactBootStrap.Card.Text>
          <label>Vous prendrez un rendez-vous avec lui.</label><br/>
          <label>48 h minimum, avant l’opération programmée.</label><br/>
          <label>L’anesthésiste prescrira un bilan sanguin pré-opératoire.</label><br/>
          <label>Il a parfois besoin d’examens complémentaires.</label><br/>
          <label>Le médecin-anesthésiste assurera votre sortie de la clinique après l’opération dans de bonnes 
            conditions.</label><br/>
          <label>Les Anesthésistes sont joignables en cas de problème post-opératoire.</label>
          <label>Notre clinique travail avec avec deux médecins Anesthésistes, Docteur Caraco et  
            <Link to="/Docteur_Aldea"> Docteur Aldea</Link></label>
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body>   
     </ReactBootStrap.Card>
     </div>  
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