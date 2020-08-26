import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import styled from 'styled-components';
//import '../App.css';
function Paris_aesthetic() {
    return (
      <FooterContainer>
      <div className="container">
        <div className="row">
        <ReactBootStrap.Card style={{ width: '1035px', }}>
         <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title><h3>Dr Nicolas Zwillinger, au service de votre beauté</h3></ReactBootStrap.Card.Title><br/>
            <ReactBootStrap.Card.Text>
             <h5 className="simple">Chirurgien esthétique Paris  |  Médecine esthétique Paris  |  Microchirurgie Paris</h5>
            </ReactBootStrap.Card.Text><br></br>
    {/*<ReactBootStrap.Button variant="outline-info">Savoir plus ...</ReactBootStrap.Button>*/}
         </ReactBootStrap.Card.Body>
         <div className="container">
         <ReactBootStrap.Carousel>
    <ReactBootStrap.Carousel.Item>
      <img
        className="d-block w-100"
        src="./docteur-nicolas-zwillinger-4-615x410.jpg"
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
        src="./docteur-nicolas-zwillinger-2-615x410.jpg"
        style={{ width: 'auto', height: '550px' }}
        alt="Third slide"
      />
      <ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Item>
    <ReactBootStrap.Carousel.Item>
      <img
        className="d-block w-100"
        src="./docteur-nicolas-zwillinger-12-615x410.jpg"
        style={{ width: 'auto', height: '550px' }}
        alt="Last slide"
      />
      <ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Item>
  </ReactBootStrap.Carousel>
         </div>
         <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>PARIS AESTHETIC SURGERY INSTITUTE, VOTRE RENDEZ-VOUS BEAUTÉ</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
<label>Dans son institut, le Dr Zwillinger reçoit ses patients en consultation et propose de nombreuses solutions de 
médecine esthétique. L’offre est vaste : soins du visage, massages bien-être et traitements médico esthétiques. 
Parmi ces traitements, on trouve la cryolipolyse, la radiofréquence, et la thérapie hydrafaciale.</label>

<label>Les soins par lumière LED ont eux des propriétés anti-âge et favorisent également la cicatrisation. Ils diffèrent 
du laser traditionnel par leur utilisation de la lumière froide rouge, jaune, ou bleue en fonction des besoins.</label>

<label>La clientèle  du Dr Zwillinger est aujourd’hui composée de patients de tous horizons, âges et sexes confondus. 
Preuve que la médecine et la chirurgie esthétique sont définitivement entrées dans les mœurs.</label>
            </ReactBootStrap.Card.Text>
         </ReactBootStrap.Card.Body>   
         <ReactBootStrap.Card.Body>

            <ReactBootStrap.Card.Text>
<label>Dr Nicolas Zwillinger</label><br/>
<label>Paris Aesthetic Surgery Institute</label><br/>
<label>42 Avenue Mozart – 75016 Paris</label><br/>
<label>01 45 74 12 25</label>
            </ReactBootStrap.Card.Text>
         </ReactBootStrap.Card.Body>          
       </ReactBootStrap.Card>
       </div>
       </div>  
       </FooterContainer>
    );
  }
  export default Paris_aesthetic;
  
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
      text-align:center;
    }
  `