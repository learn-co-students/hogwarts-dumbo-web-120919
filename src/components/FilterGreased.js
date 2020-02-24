import React from 'react';

const FilterGreased = (props) => {

  const initialHandleClick = () => {
    props.handleGreasedBtnClick()
  }

  return(
    <button onClick={initialHandleClick}>
      Slippery bois only
    </button>
  )

}
export default FilterGreased;
