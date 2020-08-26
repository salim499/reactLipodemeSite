import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import styled from 'styled-components';
//import '../App.css';
function Cliniques() {
  return (
    <FooterContainer>
    <div className="container">
    <div className="row">
      <ReactBootStrap.Card style={{ width: '1035px', }}>
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title><h3>CLINIQUES PARIS DE CHIRURGIE ESTHÉTIQUE</h3></ReactBootStrap.Card.Title><br/>
          <img className="imgs" src="./Clinique_Introduction.jpg"/><br/><br/>
  {/*<ReactBootStrap.Button variant="outline-info">Savoir plus ...</ReactBootStrap.Button>*/}

          <ReactBootStrap.Card.Title>CHOIX DES CLINIQUES PAR LE DR NICOLAS ZWILLINGER</ReactBootStrap.Card.Title>
          <ReactBootStrap.Card.Text>
          <label>Le Dr Nicolas Zwillinger chirurgien plasticien vous accueille et vous opère dans deux cliniques 
          Paris de grande réputation.</label><br/>
          <label>Le Chirurgien esthetique les a sélectionnées pour leur confort, leur sécurité, leur discrétion et 
          leur accueil professionnel.</label><br/>
          <label>Elles possèdent une accréditation pour la Chirurgie esthétique, délivrée par la haute 
          administration de santé (H.A.S.).</label>
          </ReactBootStrap.Card.Text>
       </ReactBootStrap.Card.Body>   
       <ReactBootStrap.Card.Body>
          <ReactBootStrap.Card.Title>DEUX CLINIQUES PARIS :</ReactBootStrap.Card.Title><br/>
          <ul>
            <li><ReactBootStrap.Card.Title><label>LA CLINIQUE DU TROCADÉRO</label></ReactBootStrap.Card.Title><br/>
            <img className="imgs" src="Clinique_trocadero.png" style={{ width: '300', height: '400px' }}></img><br/>
            <ReactBootStrap.Card.Text>
            <label>Elle se trouve dans Paris 16ème arrondissement, proche de la place du  
              Trocadéro et des métro Passy, Trocadéro et La Muette.</label><br></br>
            <label>C’est une clinique conventionnée avec la sécurité sociale.</label><br></br>
            <label><a href="https://www.trocadero-cliniques-paris.fr/">trocadero.cliniques-blt-paris.fr</a></label><br></br>              
            </ReactBootStrap.Card.Text>
            </li><br/><br/><br/>

            <li><ReactBootStrap.Card.Title><label>LA CLINIQUE DE TURIN</label></ReactBootStrap.Card.Title><br/>
            <img className="imgs" src="Clinique_Turain.png" style={{ width: '300', height: '400px' }}></img><br/>
            <ReactBootStrap.Card.Text>
            <label>Elle est située dans Paris 8ème arrondissement, près de la gare St lazare et des métros Gare 
              St-Lazare, Liège.</label><br></br>
            <label>C’est une clinique conventionnée avec la sécurité sociale.</label><br></br>
            <label><a href="http://www.clinique-turin.fr/">clinique-turin.fr</a></label><br></br>              
            </ReactBootStrap.Card.Text>
            </li>
          </ul>
       </ReactBootStrap.Card.Body> 
     </ReactBootStrap.Card>
     </div>  
     </div>
     </FooterContainer>
  );
}
export default Cliniques;

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