import Carousel from 'react-bootstrap/Carousel';
import {Link}  from "react-router-dom"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <Link to="/items?q=mens">
      <img
          className="d-block w-100 img-fluid "
          src="https://img.freepik.com/free-psd/man-fashion-sale-banner-template_23-2148961822.jpg?w=2000"
          alt="First slide"
          height="10px"
        />
      </Link>

        
        
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/items?q=womens"> <img
          className="d-block w-100 img-fluid"
          src="https://img.freepik.com/free-psd/fashion-store-template-banner_23-2148707242.jpg?w=2000"
          alt="Second slide"
        /></Link>
       

      
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/items?q=electronics"> <img
          className="d-block w-100 img-fluid"
          src="https://img.freepik.com/free-psd/gadget-concept-banner-template_23-2148626926.jpg?w=2000"
          alt="Third slide"
        /></Link>
       

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;