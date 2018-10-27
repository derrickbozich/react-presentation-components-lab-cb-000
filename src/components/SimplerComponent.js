// Code SimplerComponent Here
import React, { Component} from 'react';

const SimplerComponent = ({handleClick}) => {

  return <div onClick={handleClick()}>Yo</div>
}

export default SimplerComponent
