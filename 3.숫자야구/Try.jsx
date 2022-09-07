import React, { Component } from 'react'

class Try extends Component {
  render() {
  return(
    <React.Fragment>
      <li>
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
    
      </li>
    </React.Fragment>
  )
  }
}

export default Try;