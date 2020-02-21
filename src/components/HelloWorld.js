import React, { Component } from "react";
import Hog from "./Hog.js"

class HogsContainer extends Component {

  
  
  render() {
    return (
      <div className="ui grid container">
        <span>
        <button className="ui button" onClick={this.props.handleGreasedHogs}>Show Only Greased Hogs</button>
        <button className="ui button" onClick={this.props.handleHogName}>Sort Hogs by Name</button>
        <button className="ui button" onClick={this.props.handleHogWeight}>Sort Hogs by Weight</button>
        </span>
        {this.props.hogs.map(hog => <Hog hog={hog} key={hog.id}/>)}
      </div>
    );
  }
}

export default HogsContainer;
