import React, {PureComponent} from "react";
import AverageTime from './AverageTime-class';
class ResponseCheck extends PureComponent{
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요!',
    result: []
  }
  timeout;
  startTime;
  endTime;
  onClick = () => {
    const { state, message, result } = this.state

    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요!'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭하세요!'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000 + 2000));  
    } else if (state === 'ready'){
        clearTimeout(this.timeout)
        this.setState({
          state: 'waiting',
          message: '성급하시군요 ㅋ 초록색이 되면 클릭하세요!'
        })
    } else if (state === 'now'){
      this.endTime = new Date()
      this.setState({
        state: 'waiting',
        message: '클릭해서 시작하세요!',
        result: [...result, this.endTime - this.startTime]
      })
      
    }
  }
  render(){
    const { state, message, result } = this.state
    return(
      <React.Fragment>
        <div 
          id="screen" 
          className={state}
          onClick={this.onClick}
        >
          {message}
        </div>
        <div>
          <AverageTime result={result}/>
        </div>
      </React.Fragment>
    )
  }
}

export default ResponseCheck