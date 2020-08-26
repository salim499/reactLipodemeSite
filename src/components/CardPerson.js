import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
function CardPerson(props){
    return(
        <ReactBootStrap.Card style={{ width: '20rem'  }} collapseOnSelect >
         <ReactBootStrap.Carousel>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src={props.src1}
      style={{ width: 'auto', height: '310px' }}
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src={props.src2}
      style={{ width: 'auto', height: '310px' }}
      alt="Second slide"
    />

    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src={props.src3}
      style={{ width: 'auto', height: '310px' }}
      alt="Third slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>
       
         <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title>{props.title}</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text>
             {props.bio}
            </ReactBootStrap.Card.Text>
        <Link to={props.link}>Savoir plus ...</Link>
         </ReactBootStrap.Card.Body>
       </ReactBootStrap.Card>

      )
    }

export default CardPerson;