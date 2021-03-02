import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/dogs-playing.png'})` }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hello Fidos!</h1>
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/dogs-playing.png'})` }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1></h1>
                        <h2></h2>
                        <p><a className="btn btn-primary btn-learn"></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Footer></Footer>
      </section>
    </div>
  )
}
export default Homepage;