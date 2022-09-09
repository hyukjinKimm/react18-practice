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
class RSP extends PureComponent{
  state = {
    result: '',
    imgCoord: '0',
    score: 0,
  }
  // 클래스의 경우 -> constructor -> render -> ref렌더링 처리 -> componentDidMount
  // (setState/props 바뀔때) -> shouldComponentUpdate(true) -> Rerender -> componentDidUpdate
  // 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
  interval;
  componentDidMount(){ // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 해요

    this.interval = setInterval(() => {
      const { imgCoord } = this.state 
      console.log(imgCoord)
      if ( imgCoord === rspCoords.바위){
        this.setState({
          imgCoord: rspCoords.가위
        })
      } else if(imgCoord === rspCoords.가위){
        this.setState({
            imgCoord: rspCoords.보
          })     
      } else if(imgCoord === rspCoords.보){
        this.setState({
            imgCoord: rspCoords.바위
          });             
      }
    }, 1000);
  }
  componentDidUpdate(){ // 이후의 리 렌더링시

  }
  componentWillUnmount(){ // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 해요
    clearInterval(this.interval)
  }
  onClickBtn = (choice) => {

  }
  render(){
    const { result, score, imgCoord } = this.state
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
export default RSP;