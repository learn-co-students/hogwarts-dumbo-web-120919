import React from "react";

class ButtonContainer extends React.Component {

    render() {
       return (
           <div>
               <button onClick={this.props.sortByName}>Sort 'em by Name</button>
               <button onClick={this.props.sortByWeight}>Sort 'em by Weight</button>
               <button onClick={this.props.filterGreased}>Greased only, ma'am</button>
           </div>
        
       ) 
    }
}

export default ButtonContainer;