import React from "react";
import {
  Carousel,   /* Jumbotron,  Button,  Container,  Image,  Card, */
} from "react-bootstrap";

const Carrousel2 = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item> 
          <img
            className="d-block w-100 paddingcar"
            src="https://images2.alphacoders.com/591/59190.jpg"
            alt="First slide"
            height="700px"
          />
          <Carousel.Caption>
           {/*  <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images5.alphacoders.com/114/thumb-1920-1142280.jpg"
            alt="Second slide"
            height="700px"

          />

          <Carousel.Caption>
         {/*    <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images6.alphacoders.com/517/517273.jpg"
            alt="Third slide"
            height="700px"

          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>              Praesent commodo cursus magna, vel scelerisque nisl consectetur.            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images8.alphacoders.com/570/570875.png"
            alt="Fourth slide"
            height="700px"

          />
          <Carousel.Caption>
          {/*   <h3>Fourth slide label</h3>
            <p>              Praesent commodo cursus magna, vel scelerisque nisl consectetur.            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images3.alphacoders.com/273/273765.jpg"
            alt="Fifth slide"
            height="700px"

          />
          <Carousel.Caption>
          {/*   <h3>Fifth slide label</h3>
            <p>              Praesent commodo cursus magna, vel scelerisque nisl consectetur.            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel2;
