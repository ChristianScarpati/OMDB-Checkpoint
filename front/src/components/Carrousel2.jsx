import React from "react";
import style from '../styles/carrousel.module.css'
import {  Carousel } from "react-bootstrap";
import Footer2 from "./Footer2";


const Carrousel2 = () => {
  return (
    <div>
      <Carousel className={style.container}>
        <Carousel.Item> 
          <img
            className="d-block w-100 paddingcar"
            src="https://images6.alphacoders.com/517/517273.jpg"
            alt="First slide"
            height="650px"  
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images5.alphacoders.com/114/thumb-1920-1142280.jpg"
            alt="Second slide"
            height="650px"

          />

          <Carousel.Caption>
         {/*    <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images6.alphacoders.com/102/thumb-1920-1029787.jpg"
            alt="Third slide"
            height="650px"

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
            height="650px"

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
            height="650px"

          />
          <Carousel.Caption>
          {/*   <h3>Fifth slide label</h3>
            <p>              Praesent commodo cursus magna, vel scelerisque nisl consectetur.            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Footer2 />
    </div>

    
  );
};

export default Carrousel2;
