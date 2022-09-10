import React, { PureComponent } from "react";
import Ball from './Ball-class'
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }
class Lotto extends PureComponent{
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false,
  }
  timeouts = []
  componentDidMount(){ 
    const {winNumbers} = this.state
    for(let i = 0; i < winNumbers.length - 1; i ++){
      console.log('hi')
      this.timeouts[i] = setTimeout(() => {
        this.setState((preState) => {
          return {
            winBalls: [...preState.winBalls, this.state.winNumbers[i]]
          }
        })
      }, (i + 1) *  1000);
    }
    this.timeouts[6] =setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true
      })
    }, 7000);
  }
  componentWillUnmount(){
    this.timeouts.forEach((v) => {
        clearTimeout(v)
    })
  }
  render(){
    const { winBalls, bonus, redo } = this.state;
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
export default Lotto;