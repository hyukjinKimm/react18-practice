import React, { PureComponent } from 'react'

class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: []
  }
  onClickScreen = (e) => {

  }
 
  renderAverage = () => {
    const { result } = this.state
    return (
        result.length ? <div>평균시간: {result.reduce((a,c) => a+c,0) / result.length}ms</div>: null
    )
  }
  render(){
    const { state, message } = this.state
    return(
      <React.Fragment>
        <div 
          id='screen' 
          className={state} 
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
    
 
      </React.Fragment>
    )
  }
}

export default ResponseCheck