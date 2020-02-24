import React from "react";

class PigCard extends React.Component {

  state = {
    clicked: false
  }

  interpolatePigName = () => {
    return this.props.hog.name.split(" ").join("_").toLowerCase()
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {name, image, specialty, weight, greased} = this.props.hog
    const highestMedalAchieved = this.props.hog['highest medal achieved']
    return (
      <div
      className="pigTile"
      onClick={this.handleClick}
      >
      <h3>{name}</h3>
      <img
      alt={name}
      src={require(`../hog-imgs/${this.interpolatePigName()}.jpg`)}
      />
      {this.state.clicked ?
        <ul>
        <li>Specialty: {specialty}</li>
        <li>Weight: {weight}lb</li>
        <li>How Delicious: {greased ? "yep, he's greased" : "nawp, not greasy"}</li>
        <li>My Highest Medal: {highestMedalAchieved}</li>
        </ul> :
        null
       }
      </div>
    );
  }
}

export default PigCard;
