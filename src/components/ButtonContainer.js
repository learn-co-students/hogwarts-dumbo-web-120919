import React from "react";

class ButtonContainer extends React.Component {

    render() {
       return (
           <div>
               <button>Sort 'em by Name</button>
               <button>Sort 'em by Weight</button>
               <button>Greased only, ma'am</button>
           </div>
        
       ) 
    }
}

export default ButtonContainer;