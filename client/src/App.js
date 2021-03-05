import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addfido from "./pages/Addfido";
import Browse from "./pages/Browse";
import Like from "./pages/Like";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
function App() {
  return (
    // <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="./pages/Homepage" component={Homepage} />
          <Route exact path="./pages/Addfido" component={Addfido} />
          <Route exact path="./pages/Like" component={Like} />
          <Route exact path="./pages/Browse" component={Browse} />
        </Wrapper>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;