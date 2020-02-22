import React, { Component } from "react";
import "../App.css";

import pigs from "../porkers_data";
import Nav from "./Nav";
import PigPen from "./PigPen";
import ButtonContainer from "./ButtonContainer";

class App extends Component {

  state = {
    allPigs: pigs,
    showGreased: false,
    sortByName: false,
    sortByWeight: false
  }

  handleShowGreased = () => {
    if (this.state.showGreased === false) {
      let pigsArray = this.state.allPigs.slice()
      let greasedPigs = pigsArray.filter( pig => pig.greased === true )
      this.setState({
        allPigs: greasedPigs,
        showGreased: !this.state.showGreased
      })
    } else if (this.state.showGreased === true) {
      this.setState({
        allPigs: pigs,
        showGreased: !this.state.showGreased
      })
    }
  }

  handleSortByName = () => {
    if (this.state.sortByName === false) {
      let pigsArray = this.state.allPigs.slice()
      let sortedPigs = pigsArray.sort( (a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
      this.setState({
        allPigs: sortedPigs,
        sortByName: !this.state.sortByName
      })
    } else if (this.state.sortByName === true) {
      this.setState({
        allPigs: pigs,
        sortByName: !this.state.sortByName
      })
    }
  }

  handleSortByWeight = () => {
    if (this.state.sortByWeight === false) {
      let pigsArray = this.state.allPigs.slice()
      let sortedPigs = pigsArray.sort( (a, b) => a.weight - b.weight )
      this.setState({
        allPigs: sortedPigs,
        sortByWeight: !this.state.sortByWeight
      })
    } else if (this.state.sortByWeight === true) {
      this.setState({
        allPigs: pigs,
        sortByWeight: !this.state.sortByWeight
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />

        <ButtonContainer 
          handleShowGreased={this.handleShowGreased}
          handleSortByName={this.handleSortByName}
          handleSortByWeight={this.handleSortByWeight}
        />

        <PigPen 
          allPigs={this.state.allPigs} 
        />
      </div>
    );
  }
}

export default App;
