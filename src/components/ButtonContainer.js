import React from 'react';

class ButtonContainer extends React.Component {

  state = {
    showGreased: false,
    sortByName: false,
    sortByWeight: false
  }

  initialHandleShowGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
    this.props.handleShowGreased()
  }

  initialHandleSortByName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
    this.props.handleSortByName()
  }

  initialHandleSortByWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
    this.props.handleSortByWeight()
  }

  render() {
    return (
      <div>
        <button onClick={this.initialHandleShowGreased}>{this.state.showGreased ? "BRING 'EM BACK OUT, BOYS" : "GREASED ONLY, MA'AM"}</button>
        <button onClick={this.initialHandleSortByName}>{this.state.sortByName ? "UNSORT THOSE PIGGIES" : "SORT 'EM BY NAME"}</button>
        <button onClick={this.initialHandleSortByWeight}>{this.state.sortByWeight ? "UNSORT THOSE PIGGIES" : "SORT 'EM BY WEIGHT"}</button>
      </div>
    )
  }

}

export default ButtonContainer;