import React, { PureComponent } from 'react'
import Average from './Average';
class ResponseCheck extends PureComponent {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요!',
    result: []
  }
  timeout;
  startTime;
  endTime;
  onClickScreen = (e) => {
    const { state, message, result } = this.state
    if (state === 'waiting'){
        this.setState({
          state: 'ready',
          message: '초록색이 되면 클릭하세요'
        })
        this.timeout = setTimeout(() => {
          this.setState({
            state: 'now',
            message: '지금 클릭!'
          })
          this.startTime = new Date()
        }, Math.floor(Math.random() * 1000 + 2000));  

    } else if(state === 'ready'){  // 성급하게 클릭
        clearTimeout(this.timeout)
        this.setState({
            state: 'waiting',
            message: '너무 성급하시군요. 초록색이되면 클릭하세요. 다시 클릭해서 시작하세요!'
        }) 

    } else if (state == 'now'){ // 반응속도 체크
        this.endTime = new Date()
        this.setState((preveState) => {
            return {
                state: 'waiting',
                message: '클릭해서 시작하세요!',
                result: [...preveState.result, this.endTime - this.startTime]
            }
        })
    

    }
  }
 
  onReset = () => {
    clearTimeout(this.timeout)
    this.setState({
        state: 'waiting',
        message: '클릭해서 시작하세요!',
        result: []
    })
  }
/*   renderAverage = () => {
    const { result } = this.state
    return (
        result.length ? 
        <React.Fragment>
          <div>
            평균시간: {result.reduce((a,c) => a+c,0) / result.length}ms
          </div>
          <button onClick={this.onReset}>리셋</button>
        </React.Fragment>: null
    )
  } */
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
        <Average result={this.state.result}/>
      </React.Fragment>
    )
  }
}

export default ResponseCheck