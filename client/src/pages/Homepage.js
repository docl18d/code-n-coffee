import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Homepage() {
  return (
    <div>
      <section>
        <Carousel style={{"margin":"auto"}}> 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Life Strategies</h3>
              <p >Handle every situation like a dog. If you can't eat or play, just pee on it and walk away!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Self Assurance</h3>
              <p>The only person who understands me is my dog!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing3.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Absolute Certainty</h3>
              <p style={{color:'black'}}>I would 100% rather be with my dog!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing4.png"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Without Limits</h3>
              <p>A dog will teach you unconditional love. If you can have that in your life, things won't be too bad!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing5.png"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h4 style={{ color: 'black', fontWeight: 'bold' }}>LIFE IS BETTER WITH DOGS 🐶</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>

  )
}
export default Homepage;