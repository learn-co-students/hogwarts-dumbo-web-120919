import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigPen from "./PigPen";

class App extends Component {

  state = {
    hogs: hogs,
    showGreased: false,
    sortByName: false,
    sortByWeight: false
  }

  // these are some functions to sort the piggies
  handleGreasedBtnClick = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }
  handleSortNameClick = () => {

  }
  handleSortWeightClick = () => {

  }
  // end sorting

  render() {
    return (
      <div className="App">
        <Nav
          handleGreasedBtnClick={this.handleGreasedBtnClick}
          handleSortNameClick={this.handleSortNameClick}
          handleSortWeightClick={this.handleSortWeightClick}
        />
      <PigPen hogs={this.state.showGreased ? this.state.hogs.filter( hog => hog.greased ) : this.state.hogs} />
      </div>
    );
  }
}

export default App;
