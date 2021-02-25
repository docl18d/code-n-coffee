import React, { Component } from "react";
import FidoCard from "./components/FidoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import fidos from "./fidos.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    fidos
  };

  removeFido = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const fidos = this.state.fidos.filter(fido => fido.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ fidos });
  };

  // Map over this.state.fidos and render a FidoCard component for each fido object
  render() {
    return (
      <Wrapper>
        <Title>Fido List</Title>
        {this.state.fidos.map(fido => (
          <FidoCard
            removeFido={this.removeFido}
            id={fido.id}
            key={fido.id}
            name={fido.name}
            image={fido.image}
            sex={fido.sex}
            age={fido.age}
            city={fido.city}
            park={fido.park}
            beverage={fido.beverage}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
