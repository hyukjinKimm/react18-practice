import React, {Component } from 'react'
import Try from './Try.jsx'

function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  }
class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: []
  }

  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join('')) {
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        }
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      this.inputRef.current.focus();
    } else { // 답 틀렸으면
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.input.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: '',
          };
        });
        this.input.focus();
      }
    }
  };
  onChange = (e) => {
    this.setState({value: e.target.value});

    this.input.focus()
  }
  input;
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input ref={(c)=>{this.input=c}} maxLength={4} type="text" value={this.state.value} onChange={this.onChange}/>
          <button>등록</button>
        </form>
        <ul>
          {this.state.tries.map((v, i) => {
            return(
              <Try key={`${i + 1} 차 시도`} tryInfo={v}/>
            )
          })}
        </ul>
        <div>시도: {this.state.tries.length}</div>
        
      </React.Fragment>
    )
  }
}

export default NumberBaseball