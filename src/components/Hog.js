import React, { Component } from "react";
// import HogDetails from "./HogDetails.js"

export default class Hog extends Component{

    state = {
        clicked: false
    }

    renderHogImg = () => {
        // if (this.props.hog.name.includes(" ")) {
            let newName = this.props.hog.name.split(" ").join("_").toLowerCase()
            return require(`../hog-imgs/${newName}.jpg`)
        // } 

        // if (!this.props.hog.name.includes(" ")) {
        //     let newName = this.props.hog.name.toLowerCase()
        //     return require(`../hog-imgs/${newName}.jpg`)
        // }

    }

    handleNameClick = (e) => {
        this.setState({
            clicked: !this.state.clicked
        })
   
    }


    render() {
        if (this.state.clicked) {
            return(        
            <div className="ui eight wide column">
            <div className="image">
            <img src={this.renderHogImg()} alt={this.props.hog.name} />
            </div>
            <a className="header">{this.props.hog.name}</a>
            <div className="meta">
                <span className="date">Specialty: {this.props.hog["specialty"]}</span>
            </div>
            <div className="description">
                Highest medal achieved: {this.props.hog['highest medal achieved']}
            </div>
            <div className="meta">
                <span className="date">Weight: {this.props.hog["weight"]}</span>
            </div>
            </div>
            )
        } 

        return(
        <div className="ui eight wide column" onClick={this.handleNameClick}>
          <div className="image">
            <img src={this.renderHogImg()} alt={this.props.hog.name} />
          </div>
          <div className="content" >
            <a className="header">{this.props.hog.name}</a>
          </div>
        </div>
        )
    }

}