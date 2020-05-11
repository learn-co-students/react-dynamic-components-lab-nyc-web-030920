import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
   checkOpacity(opacity){
    if(opacity >= 0.2){
    return (<ColorBox opacity={opacity - .1}></ColorBox>)
    }else{
      return null
    }
  }
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {
          this.checkOpacity(this.props.opacity)
        }
      </div>
    )
  }

}

