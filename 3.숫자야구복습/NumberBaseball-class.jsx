import React, { Component } from 'react'
import Try from './Try'
function getNumbers() {
  const array = [];
  while(true) {
    const num = Math.floor(1+  Math.random()*9)
    if (array.length < 5 && !array.includes(num)) {
      array.push(num)
    }
    if(array.length == 4)
      break
  }
  return array
}
class NumberBaseball extends Component {
  state = {
    value: '',
    result: '',
    numbers: getNumbers(),
    tries: []
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.numbers.join("")){
      this.setState((preState) => {
        return {
          value: '',
          result: '4스트라이크 입니다. 게임을 다시 시작합니다.',
          numbers: getNumbers(),
          tries: [...preState.tries, { value: preState.value, result: '홈런!'}]
        }
      })
    } else{
        
        if (this.state.tries.length >9){
          this.setState({
            value: '',
            result: '10번 넘게 틀려서 실패~ 정답은 ' + this.state.numbers.join(''),
            numbers: getNumbers(),
            tries: []
          })
        } else {
          console.log('bye')
          let strike = 0
          let ball = 0
          for (var i = 0; i < 4; i++) {
            if (parseInt(this.state.value[i]) === this.state.numbers[i]){
              strike++
            } else if (this.state.numbers.includes(parseInt(this.state.value[i]))){
              ball ++
            }
          }
          this.setState((preState) => {
            return {
              value: '',
              result: '',
              tries: [...preState.tries, {value: preState.value, result:  strike + ' 스트라이크 ' + ball + ' 볼 입니다. '}],
            }
          })
        }

    }
    this.input.focus()
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
    this.input.focus()
  }

  input; 
  render() {
    return(
      <React.Fragment>

        <div>{this.state.result}</div>
        <form onSubmit={this.onSubmit}>
          <input maxLength={4} type="text" ref={(c)=>{this.input=c}} value={this.state.value} onChange={this.onChange}/>
          <button>등록</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <div><ul>{this.state.tries.map((v, i) => {
          return <Try key={`${i + 1} 차 시도`} tryInfo={v}/>
        })}</ul></div>
        
      </React.Fragment> 
    )
  }
}

export default NumberBaseball