import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Addfido from "./pages/Addfido";
import Browse from "./pages/Browse";
import Like from "./pages/Like";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
// import List from "../../client/src/pages/List/List"
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
          {/* <Route exact path="/updatefido" component={Updatefido} /> */}
          <Route exact path="./pages/Browse" component={Browse} />
          {/* <Route exact path="/List" component={List} /> */}
          {/* <Route exact path="../../client/src/pages/List/List" component={List} /> */}
          {/* <Route exact path="/Register" component={Register} /> */}
          {/* <Route exact path="/Card" component={Card} /> */}
          {/* <Route exact path="/Login" component={Login}/> */}
        </Wrapper>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;