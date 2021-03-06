import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from 'react-bootstrap/Carousel'


function Homepage() {
  return (
    <div>
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing2.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing3.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing4.png"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/dogs-playing5.png"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='login-btn'>
          <button href="/login.js" type="submit">Login</button>
        </div>
        <div>
          <Footer /> </div>

      </section>
    </div>

  )
}
export default Homepage;