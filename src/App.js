import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navpills from "./components/Navpills";
import Card from "./components/Card";


class App extends Component {

  state = {
    characters
  };

  // shuffle = array => {
  //   for (let i = 0; i < array.length; i++) {

  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Navpills />
        <Title />
        {this.state.characters.map(character => (
          <Card
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
