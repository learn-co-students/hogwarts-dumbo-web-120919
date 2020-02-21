import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import pigs from "../porkers_data";
import PigPen from "./PigPen";
import ButtonContainer from "./ButtonContainer";


class App extends Component {

  state = {
    allPigs: pigs
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <ButtonContainer />
        <PigPen allPigs={this.state.allPigs}/>
      </div>
    );
  }
}

export default App;
