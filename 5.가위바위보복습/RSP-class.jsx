import React, { PureComponent } from "react";

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
};
  
const scores = {
    가위 : 1,
    바위: 0,
    보: -1
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(e => e[1] === imgCoord)[0]
}
class RSP extends PureComponent{
  state = {
    imgCoord: '0',
    result: '',
    score: 0,
  }
  handChange = () => {
    const { imgCoord } = this.state 
    if (imgCoord === '0'){
      this.setState({
        imgCoord: '-142px'
      });
    }
    else if (imgCoord === '-142px'){
        this.setState({
            imgCoord: '-284px'
          });       
    }
    else {
        this.setState({
            imgCoord: '0'
          });      
    }
  }
  interval;
  componentDidMount() {
    this.interval = setInterval(this.handChange, 1000)
  }
  componentDidUpdate(){

  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  onClickBtn = (choice)=> () => {
    clearInterval(this.interval)
    const { imgCoord } = this.state
    const myScore = scores[choice];
    const cpuScore = scores[ computerChoice(imgCoord)];
    console.log('my: ', myScore, 'cpu :', cpuScore)
    if (myScore === cpuScore){ // 비김
      this.setState({
        result: '비겼습니다.',

      })
    } else if ([-1, 2].includes(myScore - cpuScore)){ // 내가 이김
        this.setState((preState) => {
          return {
            result: '이겼습니다.',
            score: preState.score + 1
          }
        });
    } else{ // 짐
        this.setState((preState) => {
            return {
              result: '졌습니다.',
              score: preState.score - 1
            }
          });
    }
  setTimeout(() => {
    this.interval = setInterval(this.handChange, 500)
  }, 2000);
  }
  
  render(){
    const { imgCoord, result, score } = this.state
    return(
      <React.Fragment>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </React.Fragment>
    )
  }
}
export default RSP