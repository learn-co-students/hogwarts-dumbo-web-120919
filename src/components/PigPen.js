import React from "react";
import PigCard from "./PigCard"

class PigPen extends React.Component {
  
  render() {
    
    let pigCards = this.props.allPigs.map( (pig, index) => {
      return <PigCard key={index} pig={pig} />
    })

    return (
      <div>
        <h1>Welcome to the Pig Pen!</h1>
        {pigCards}
      </div>
    );
  }
}

export default PigPen;
