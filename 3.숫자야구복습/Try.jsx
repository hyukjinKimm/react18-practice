import React, { memo, useState } from 'react'


const Try = memo((props) => {
  console.log('try렌더링')
  const [result, setResult] = useState(props.tryInfo);

  const onClick = (e) => {
    setResult({value:'바보', result: 'result'})
  }
  return (
    <React.Fragment>
    <li>
    <div onClick={onClick}>{result.value}</div>
    <div>{result.result}</div>
    </li>
   </React.Fragment>
  )
});
Try.displayName = 'Try'


/* import React, { PureComponent } from 'react'
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
 */
export default Try