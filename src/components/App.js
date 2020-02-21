import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HelloWorld";

class App extends Component {

  state = {
    hogs: hogs
  }

  handleGreasedHogs = (e) => {
    const greasedHogs = hogs.filter(hog => hog.greased)
    console.log(greasedHogs)
    
    this.setState({
      hogs: greasedHogs
    })
  }

  handleHogName = (e) => {
    const updatedHogs = hogs.sort((a, b) => a.name.localeCompare(b.name))
    // console.log(updatedHogs)

    this.setState({
      hogs: updatedHogs
    })
  }

  handleHogWeight = (e) => {
    const updatedHogsByWeight = hogs.sort((a, b) => b.weight - a.weight)
    // console.log(updatedHogsByWeight)

    this.setState({
      hogs: updatedHogsByWeight
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogsContainer 
        hogs={this.state.hogs} 
        handleGreasedHogs={this.handleGreasedHogs}
        handleHogName={this.handleHogName}
        handleHogWeight={this.handleHogWeight}/>
      </div>
    );
  }
}

export default App;
