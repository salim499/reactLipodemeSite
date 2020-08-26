import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function Caroussel() {
  return (
    <React.Fragment>
      <ReactBootStrap.Carousel>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./Dr_Zwillinger.jpeg"
      style={{ width: '1500px', height: '290px' }}
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./docteur-nicolas-zwillinger-10-615x410.jpg"
      style={{ width: 'auto', height: '290px' }}
      alt="Second slide"
    />

    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./102963448_3175530212499376_5471271786858869558_o.jpg"
      style={{ width: 'auto', height: '290px' }}
      alt="Third slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="./docteur-photo1.jpg"
      style={{ width: 'auto', height: '290px' }}
      alt="Last slide"
    />
    <ReactBootStrap.Carousel.Caption>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>
       </React.Fragment>
  );
}
export default Caroussel;

