import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
function Plan_Du_Site(){
    return(
      <FooterContainer className="main-footer">
      <div className="container">
        <div className="row">
        <ReactBootStrap.Card style={{ width: '1090px', }}>
        <div className="container">
         <ReactBootStrap.Card.Body>
         <p className="feu">PLAN DU SITE</p><br></br><br></br>
            <ReactBootStrap.Card.Title><h1>Dr Nicolas Zwillinger</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
                <ul>   
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">A propos de nous</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">L’Equipe</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Paris aesthetic surgery institute</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Les Cliniques</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Les Interventions</Link></ReactBootStrap.NavDropdown.Item>  
                </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Visage</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
              <ul>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Blépharoplastie – La chirurgie des paupières</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Lipofilling des cernes</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">Chirurgie esthétique des joues – Bichectomie</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie esthétique des Lèvres</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Diminution des lèvres</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Implant de lèvres</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Le Lifting de lèvre supérieure-Liplift</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Liftings du visage</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Lipofilling du visage</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie esthétique du nez</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">Chirurgie esthétique du cou</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Chirurgie esthétique des oreilles</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Chirurgie esthetique des Grains De Beauté</Link></ReactBootStrap.NavDropdown.Item>
        </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Seins</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
                <ul>   
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Augmentation mammaire par prothèses</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">Lipofilling mammaire</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Ptose mammaire</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Réduction mammaire</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Reconstruction des seins après cancer</Link></ReactBootStrap.NavDropdown.Item>  
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Malformations des seins</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Mamelon ombiliqué</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>        
                </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Corps</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            <ul>   
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie esthétique des bras</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie esthétique du Ventre</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Liposuccion du ventre</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>      
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">Chirurgie esthétique des cuisses</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie esthétique des Fesses</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Lipofilling des fessiers</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Implants de fesses</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Liposuccion des genoux</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie esthétique des mollets</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Liposuccion des mollets</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Implants de mollets</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Lipofilling des mollets</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Liposuccion des chevilles</Link></ReactBootStrap.NavDropdown.Item>  
                </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Chirurgie esthétique Homme</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            <ul>   
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie des joues</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">Rhinoplastie Homme</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Lifting Homme</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Chirurgie du Torse Homme</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Gynécomastie</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Implants De Pectoraux</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Liposuccion du ventre Homme</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Implants de fesses Homme</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Chirurgie esthétique dos Homme</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Implants mollets Homme</Link></ReactBootStrap.NavDropdown.Item>  
                </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Injections acide hyaluronique</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Pommettes saillantes par Acide Hyaluronique</Link>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Injections Lèvres Par Acide Hyaluronique</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Injections botox</Link>
            <ul>
              <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Transpiration des aisselles</Link>
            </ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.Card.Title><h1>Chirurgie intime</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            <ul>   
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Hyménoplastie</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">Nymphoplastie – Réduction des petites lèvres</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Augmentation du point G</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Chirurgie du mont de Vénus</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Pénoplastie</Link></ReactBootStrap.NavDropdown.Item>  
                </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Médecine Esthétique</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            <ul>   
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Peeling visage et cou</Link></ReactBootStrap.NavDropdown.Item>
                </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Tarifs</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Avant/Après</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            <ul>
            <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Photos avant-après Chirurgie esthétique</Link></ReactBootStrap.NavDropdown.Item>  
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">Videos</Link></ReactBootStrap.NavDropdown.Item>
            </ul>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Blog</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Contact</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Card.Title><h1>Plan du site</h1></ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
            </ReactBootStrap.Card.Text>
         </ReactBootStrap.Card.Body>
         </div>
       </ReactBootStrap.Card>
       </div>
      </div>
      </FooterContainer>
      )
    }

export default Plan_Du_Site;

const FooterContainer = styled.footer`

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
  h1
  {
    font-size: 32px;
    text-shadow: -1px -1px #0c0, 1px 1px #060, -3px 0 4px #000;
    font-family:Arial, Helvetica, sans-serif;
    color: #1c9;
    padding:16px;
    font-weight:lighter;
    -moz-box-shadow: 2px 2px 6px #888;  
    -webkit-box-shadow: 2px 2px 6px #888;  
    box-shadow:2px 2px 6px #888;  
    text-align:center;
    display:block;
    margin:16px;
    background-image:url(images/background-h1-wood.jpg);  
  }
`