import React from 'react';
import {Link} from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import styled from 'styled-components';
export function NavBar(){
    return <FooterContainer>
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
  <ReactBootStrap.Navbar.Brand href="home"><Link to="/">Acceuil</Link></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Form inline>
      <label><ReactBootStrap.FormControl type="text" placeholder="Chercher dans le site" className="mr-sm-2" /></label>
      <ReactBootStrap.Button variant="outline-primary">Chercher</ReactBootStrap.Button>
    </ReactBootStrap.Form>

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    {/*<ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>*/}
    <ReactBootStrap.Nav>
      <ReactBootStrap.NavDropdown title="Dr Nicolas Zwillinger" id="collasible-nav-dropdown">
      <ReactBootStrap.NavDropdown.Item><Link to="/A_propos_de_nous">A propos de nous</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Equipe">L’Equipe</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Paris_aesthetic_surgery_institute">Paris aesthetic surgery institute</Link></ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item><Link to="/Cliniques">Les Cliniques</Link></ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item><Link to="/Interventions">Les Interventions</Link></ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Visage" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Blépharoplastie – La chirurgie des paupières</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Chirurgie esthétique des joues – Bichectomie</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique des Lèvres</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Liftings du visage</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Lipofilling du visage</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique du nez</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique du cou</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique des oreilles</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthetique des Grains De Beauté</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Lipofilling des cernes</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Diminution des lèvres</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Implant de lèvres</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Le Lifting de lèvre supérieure-Liplift</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Seins" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Augmentation mammaire par prothèses</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Lipofilling mammaire</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Ptose mammaire</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Réduction mammaire</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Reconstruction des seins après cancer</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Malformations des seins</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Mamelon ombiliqué</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Corps" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Chirurgie esthétique des bras</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Chirurgie esthétique du Ventre</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique des cuisses</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique des Fesses</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Liposuccion des genoux</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique des mollets</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Liposuccion des chevilles</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Liposuccion du ventre</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Lipofilling des fessiers</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Implants de fesses</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Liposuccion des mollets</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Implants de mollets</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Lipofilling des mollets</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Chirurgie Homme" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Chirurgie des joues</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Rhinoplastie Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Lifting Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie du Torse Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Liposuccion du ventre Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Implants de fesses Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie esthétique dos Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Implants mollets Homme</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Gynécomastie</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Implants De Pectoraux</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Chirurgie intime" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Hyménoplastie</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Nymphoplastie – Réduction des petites lèvres</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Augmentation du point G</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Chirurgie du mont de Vénus</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Pénoplastie</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Médecine Esthétique" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Tarifs" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Injections acide hyaluronique</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Injections botox</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Peeling visage et cou</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Pommettes saillantes par Acide Hyaluronique</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Injections Lèvres Par Acide Hyaluronique</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Transpiration des aisselles</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <ReactBootStrap.NavDropdown title="Avant/Après" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Photos avant-après Chirurgie esthétique</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Videos</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    </FooterContainer>
}
const FooterContainer = styled.footer`
  
`