
import React from 'react';
import { Carousel, } from 'react-bootstrap';



const Contact = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/66/78/91/6678918fb4b39e1f5660a2967789bd23.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sena CBI</h3>
      <p>BIENVENIDO MUNDO</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.empleofacil.site/wp-content/uploads/2019/01/CURSO-PROFESIONALES1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Sena CBI</h3>
      <p>BIENVENIDO MUNDO</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.elheraldo.co/sites/default/files/styles/width_860/public/articulo/2019/09/07/duque_en_sena_montelibano.jpg?itok=13lLhjDI"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Sena CBI</h3>
      <p>BIENVENIDO MUNDO</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    )
    }


export default Contact 
