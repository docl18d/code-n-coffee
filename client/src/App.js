import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Addfido from "./pages/Addfido";
import Browse from "./pages/Browse";
import Like from "./pages/Like";
import Homepage from "./pages/Homepage";
import Updatefido from "./pages/Updatefido";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";
import Logout from "./components/Logout";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/addFido" component={Addfido} />
          <Route exact path="/like" component={Like} />
          <Route exact path="/updatefido" component={Updatefido} />
          <Route exact path="/Browse" component={Browse} />
          <Route exact path="/List" component={List} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Card" component={Card} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Logout" component={Logout}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;