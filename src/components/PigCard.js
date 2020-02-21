import React from 'react';

class PigCard extends React.Component {

  state = {
    showDetails: true
  }

  handleClick = () => {
    alert("this little piggie went to market")
  }

  render() {

    let pigName = this.props.pig.name.toLowerCase();
    let interpolatedPigName;
    if (pigName.includes(" ")) {
      interpolatedPigName = pigName.replace(/ /g, "_")
    } else {
      interpolatedPigName = pigName
    }

    return (
      <div className="pigTile" onClick={this.handleClick}>
        <h3>{this.props.pig.name}</h3>
        <img src={require(`../hog-imgs/${interpolatedPigName}.jpg`)} alt="this is a pig" />
        {this.state.showDetails ?
          <ul>
            <li>Specialty: {this.props.pig.specialty}</li>
            <li>Greased: {this.props.pig.greased}</li>
            <li>Weight: {this.props.pig.weight}</li>
            <li>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</li>
          </ul> : <ul></ul>
        }
      </div>
    )
  }

}

export default PigCard;