import React, { PureComponent } from "react";
class RSP extends PureComponent{
  state = {
    result: '',
    imgCoord: 0,
    score: 0,
  }
  // 클래스의 경우 -> constructor -> render -> ref렌더링 처리 -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> Rerender -> componentDidUpdate
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
  componentDidMount(){ // 첫 렌더링 시

  }
  componentDidUpdate(){ // 이후의 리 렌더링시

  }
  componentWillUnmount(){ // 부모에 의해서 내가 없어질때 

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