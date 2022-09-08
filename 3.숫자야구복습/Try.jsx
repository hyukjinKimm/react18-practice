import React, { Component } from 'react'

const Try = (props) => {
  return (
    <React.Fragment>
    <li>
    <div>{props.tryInfo.value}</div>
    <div>{props.tryInfo.result}</div>
    </li>
   </React.Fragment>
  )
}


export default Try