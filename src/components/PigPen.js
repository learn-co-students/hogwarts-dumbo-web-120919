import React from "react";
import PigCard from "./PigCard"

class PigPen extends React.Component {

createPigCards = () => {
  return this.props.hogs.map((hog, index) => {
    return <PigCard key={index} hog={hog}/>

  })

}

  render() {
    console.log(this.createPigCards())
    return (
      <div className='ui grid container'>
        {this.createPigCards()}
      </div>
    );
  }
}

export default PigPen;
