import React, { Component } from "react";
import logo from "./PatriotTVLogo.png";
import "./App.css";
import Button from "../Button/Button";

let lines = [
  "Bell-end socket welds on the outter farcs. ",
  "Dell Yard 50s, for thermal expansion with nickel alloys. ",
  "Cracked L quadrants and 40,000 gallons coming down the line. ",
  "Tie down the baker knots at every Lawrence crease besides the first and the last. ",
  "Open the truss underbelly and crack every uncracked quad in the line. ",
  "Donnely nut spacing and cracked system rim-riding grip configuration. ",
  "Half-seized sprats and brass fitted nickel slits. ",
  "Bracketed caps and splay-flexed brace columns vent dampers. ",
  "Dampening hatch depths of 1/2 meter from the damper crown to the spurv plinth. ",
  "Bolster 12 Husk Nuts to each girdle jerry. ",
  "Flex tandems press a task apparatus of ten vertically composited patch hamplers. ",
  "Pin flam-fastened pan traps at both maiden apexes of the Jimjoints. ",
];

let newLines = [...lines];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines
    };
  }

  resetLines = () => {
    this.setState({ lines });
    window.location.reload();
  };

  shuffleArray = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  increaseValue = () => {
    this.shuffleArray(newLines);
    let number = newLines.length + 1;
    if (number > newLines.length) {
      newLines.push(newLines[0]);
    }
    this.setState({ lines: newLines.slice(0, number) });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> <img src={logo} alt="PATRIOT logo" /> IPSUM</h1>
          <h2>"Flam packaged, thrust coupled"</h2>
          
          <nav className="App-nav">
            <Button text="Add" onclick={this.increaseValue} />
            <Button text="Reset" onclick={this.resetLines} />
          </nav>

          <div className="App-text">{this.state.lines}</div>
        </header>
      </div>
    );
  }
}

export default App;

