import React, { Component } from 'react';
import './App.css';
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navpills from "./components/Navpills";
import Card from "./components/Card";

let curScore = 0;
let hiScore = 0;
let message = "Click to start!"
class App extends Component {

  state = {
    characters,
    curScore,
    hiScore,
    message
  };

  setClicked = id => {

    // Copy the array to compare
    const characters = this.state.characters;

    const clickedChar = characters.filter(character => character.id === id);

    // Game Over
    if (clickedChar[0].clicked) {

      curScore = 0;
      message = "Woops! Start over.";

      // Reset
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }
      this.setState({ curScore });
      this.setState({ message });
      this.setState({ characters });

      // Click Again
    } else if (curScore < 12) {

      clickedChar[0].clicked = true;
      curScore++;
      message = "Correct! Guess again.";

      //updating high score
      if (curScore > hiScore) {
        hiScore = curScore;
        this.setState({ hiScore });
      }
      // Shuffle
      characters.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ characters });
      this.setState({ curScore });
      this.setState({ message });

      // Win Condition
    } else {
      clickedChar[0].clicked = true;

      curScore = 0;
      message = 'You win!';

      if (curScore > hiScore) {
        hiScore = curScore;
        this.setState({ hiScore });
      }

      // Reset
      for (let i = 0; i < characters.length; i++) {
        characters[i].clicked = false;
      }

      characters.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ characters });
      this.setState({ curScore });
      this.setState({ message });
    }
  };

  render() {
    return (
      <Wrapper>
        <Navpills>
          <ul className="nav nav-pills nav-justified">
            <li className="brand"><a href="/">Fortnite Clicky Game</a></li>
            <li> {this.state.message} </li>
            <li> Current Score: {this.state.curScore} | High Score: {this.state.hiScore} </li>
          </ul>
        </Navpills>
        <Title />
        {this.state.characters.map(character => (
          <Card
            setClicked={this.setClicked}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
