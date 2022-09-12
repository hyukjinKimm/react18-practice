import React ,{ PureComponent } from "react";
import Ball from './Ball-class'
function getWinNumbers(){
  const result = []
  const candidates = Array(45).fill().map((v, i) => i+1);
  while (result.length <7 ){
    result.push(candidates.splice(Math.floor(Math.random()*candidates.length), 1)[0])
  }
  const bonus = result.splice(6, 1)[0]
  result.sort((p, c) => p - c )

  return [...result, bonus]
    
}
class Lotto extends PureComponent {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  }
  timeouts = [];
  runTimeOuts = () => {
    const { winNumbers } = this.state 
    for (let i = 0; i < winNumbers.length - 1 ; i ++ ){
      this.timeouts[i] = setTimeout(() => {
        this.setState((preState) => {
          return {
            winBalls: [...preState.winBalls, winNumbers[i]]
          }
        })   
      }, (i+1) * 1000);
    }
    this.timeouts[6] =  setTimeout(() => {
      this.setState({
      bonus: winNumbers[6],
      redo: true
      })
    }, 7000);
  }
  componentDidMount(){
    this.runTimeOuts()
  }
  componentDidUpdate(){
    const { winBalls } = this.state
    if ( winBalls.length === 0 ){
      this.runTimeOuts()
    }
  }
  componentWillUnmount(){
    const { winNumbers } = this.state
    for (let i = 0; i < winNumbers.length; i ++){
      clearTimeout(this.timeouts[i])
    }
  };

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    })
    this.timeouts = []
  }
  render(){
    const { winBalls, bonus, redo } = this.state 
    return(
      <React.Fragment>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </React.Fragment>
    )
  }
}
export default Lotto 
