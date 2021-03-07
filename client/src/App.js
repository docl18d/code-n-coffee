import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addfido from "./pages/Addfido";
import Browse from "./pages/Browse";
import Like from "./pages/Like";
import Login from "./components/Login/Login";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import List from "./pages/List";
function App() {
  return (
    // <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/addfido" component={Addfido} />
          <Route exact path="/like" component={Like} />
          <Route exact path="/Browse" component={Browse} />

          <Route exact path="/List" component={List} />
          {/* <Route exact path="../../client/src/pages/List/List" component={List} /> */}
          {/* <Route exact path="/Register" component={Register} /> */}
          {/* <Route exact path="/Card" component={Card} /> */}
          <Route exact path="/Login" component={Login}/>

        </Wrapper>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;