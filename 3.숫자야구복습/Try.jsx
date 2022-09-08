/* import React, { memo } from 'react'
 */

/* const Try = memo((props) => {
  console.log('try렌더링')
  return (
    <React.Fragment>
    <li>
    <div>{props.tryInfo.value}</div>
    <div>{props.tryInfo.result}</div>
    </li>
   </React.Fragment>
  )
});
Try.displayName = 'Try' */

import React, { PureComponent } from 'react'
class Try extends PureComponent {
  render(){
    console.log('try 렌더링')
    return(
      <React.Fragment>
        <li>
        <div>{this.props.tryInfo.value}</div>
        <div>{this.props.tryInfo.result}</div>
        </li>    
      </React.Fragment>
    )
  }
}

export default Try