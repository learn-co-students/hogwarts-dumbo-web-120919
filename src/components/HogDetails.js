import React, { Component } from "react";

export default class HogDetails extends Component{
    render() {
        return(
        <div className="ui eight wide column">
            <div className="image">
            <img src={this.renderHogImg()} alt={this.props.hog.name} />
          </div>
        <a className="header">{this.props.hog.name}</a>
        <div className="meta">
          <span className="date">Specialty: {this.props.hog.specialty}</span>
        </div>
        <div className="description">
          Highest medal achieved: {this.props.hog.highest_medal_achieved}
        </div>
        </div>
        )
    }
}