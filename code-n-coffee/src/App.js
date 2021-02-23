import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from "./pages/Login";
import Addfido from "./pages/Addfido";
import Bio from "./pages/Bio";
import Like from "./pages/Like";
import Logout from "./pages/Logout";
import Updatefido from "./pages/Updatefido";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={} />
          <Route exact path="/about" component={About} />
          <Route exact path="/book" component={Book} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;