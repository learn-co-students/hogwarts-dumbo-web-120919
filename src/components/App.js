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

  filterGreased = () => {
    let pigs = this.state.allPigs.filter( pig => {
      return pig.greased
    })
    this.setState({
      allPigs: pigs
    })
  }

  sortByName = () => {
    let sortedPigs = this.state.allPigs.sort( (a, b) => {
      return a.name.localeCompare(b.name)
    })
    this.setState({
      allPigs: sortedPigs
    })
  }

  sortByWeight = () => {
    let sortedPigs = this.state.allPigs.sort( (a, b) => {
      return a.weight - b.weight
    })
    this.setState({
      allPigs: sortedPigs
    })
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <ButtonContainer filterGreased={this.filterGreased} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
        <PigPen allPigs={this.state.allPigs}/>
      </div>
    );
  }
}

export default App;
